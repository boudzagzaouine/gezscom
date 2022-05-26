import {
  ArchiveIcon,
  ClipboardListIcon,
  DocumentAddIcon,
  PencilAltIcon,
  ReplyIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { usePaginationCommandesFournisseurQuery } from "config/rtk";
import React, { useRef, useState } from "react";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { f0, cf0, getCf0, Fournisseur, CommandeFournisseur } from "tools/types";
import { Button } from "widgets";
import Bcyan from "widgets/Bcyan";
import Icon from "widgets/Icon";
import Mitems from "widgets/Mitems";
import Pagin from "widgets/Pagin";
import Section from "widgets/Section";
import Table from "widgets/Table";
import { MenuItems } from "widgets/TypeWidgets";
import FormCommandes from "./FormCommandes";

const ListAllCommandes = () => {
  const [page, setPage] = useState(0);
  const loadPage = (p: number) => {
    setPage(p);
    refetch();
  };
  const {
    data = [],
    isFetching,
    refetch,
  } = usePaginationCommandesFournisseurQuery(page);
  //@ts-ignore
  const [length, setLength] = useState<number>(data.content?.length);
  const refCom = useRef(null);
  const [form, setForm] = useState(false);
  const [commandFournisseur0, setcommandFournisseur0] = useState(cf0);
  const [disabled, setDisabled] = useState(true);
  const [request0, setRequest0] = useState(REQUEST_SAVE);
  const showFormulaire = (commande: CommandeFournisseur) => {
    setcommandFournisseur0(commande);
    setForm(true);
    setRequest0(REQUEST_EDIT);
  };
  const FormAsEdit = (commande: CommandeFournisseur) => {
    setDisabled(true);
    showFormulaire(commande);
  };
  const FormAsUpdate = (commande: CommandeFournisseur) => {
    setDisabled(false);
    showFormulaire(commande);
  };
  const menu = (commande: CommandeFournisseur): MenuItems[] => {
    return [
      {
        icon: (
          <ClipboardListIcon
            className="mr-3 h-8 w-8 text-green-300 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Détail",
        action: () => {
          FormAsEdit(commande);
        },
      },
      {
        icon: (
          <PencilAltIcon
            className="mr-3 h-8 w-8 text-green-900 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Modifier",
        action: () => {
          FormAsUpdate(commande);
        },
      },
      {
        icon: (
          <TrashIcon
            className="mr-3 h-8 w-8 text-rose-900 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Supprimer",
        action: () => {
          //@ts-ignore
          del.current(commande.id);
        },
      },
      {
        icon: (
          <ArchiveIcon
            className="mr-3 h-8 w-8 text-gray-800 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Archiver",
        action: () => {
          //@ts-ignore
          archive.current(commande.id);
        },
      },
      {
        icon: (
          <ReplyIcon
            className="mr-3 h-8 w-8 text-green-900 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Restorer",
        action: () => {
          //@ts-ignore
          restore.current(commande.id);
        },
      },
    ];
  };
  return (
    <>
      {/*form && (
      <FormCommandes 
      request={request0} 
      commande={commandFournisseur0} 
      closed={() => {
        setForm(false);
        setRequest0(REQUEST_SAVE);
        refetch();
      }}
      disable={disabled}
      />
    )}
    {!form && (*/}
      <Section>
        <div className="float-left w-full">
          <Bcyan
            className="float-left mt-2"
            onClick={() => {
              //@ts-ignore
              refCom.current(getCf0(f0));
            }}
          >
            Nouvelle Commande
          </Bcyan>
          <div className="float-right">
            <input
              type="text"
              className="py-3 border outline-[#ddd] border-[#ddd] float-right border-l-0 rounded-r-lg w-96"
              placeholder="Recherche"
            />
            <Button className="bg-white float-right border border-[#ddd] border-r-0 p-3 rounded-l-lg">
              <Icon i="search" cl="" />
            </Button>
          </div>
        </div>
        <FormCommandes command={getCf0(f0)} ref={refCom} />
        <Table
          className="tab-list float-left w-full mt-2"
          thead={
            <tr>
              <Table.th>N° Commande</Table.th>
              <Table.th>Fournisseur</Table.th>
              <Table.th>Date de Commande</Table.th>
              <Table.th>Date Livraison</Table.th>
              <Table.th>Origine</Table.th>
              <Table.th>Montant</Table.th>
              <Table.th></Table.th>
            </tr>
          }
        >
          {
            //@ts-ignore
            data.content?.map((commande) => (
              <tr key={commande.id}>
                <Table.td>{commande.id}</Table.td>
                <Table.td>fournisseur</Table.td>
                <Table.td>{commande.dateCommande}</Table.td>
                <Table.td>{commande.dateLivraison}</Table.td>
                <Table.td>-</Table.td>
                <Table.td>Montant</Table.td>
                <Table.td>
                  <Mitems menu={menu(commande)} />
                </Table.td>
              </tr>
            ))
          }
        </Table>
        <Pagin load={loadPage} visible={false} />
      </Section>
    </>
  );
};

export default ListAllCommandes;
