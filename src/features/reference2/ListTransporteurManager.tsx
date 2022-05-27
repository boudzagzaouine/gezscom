import { TrashIcon } from "@heroicons/react/outline";
import {
  ArchiveIcon,
  ClipboardListIcon,
  PencilAltIcon,
  ReplyIcon,
} from "@heroicons/react/solid";
import ArchiveTransporteur from "components/reference2/ArchiveTransporteur";
import DeleteTransporteur from "components/reference2/DeleteTransporteur";
import { OpenTransporteurProp } from "components/reference2/OpenTransporteur";
import RestoreTransporteur from "components/reference2/RestoreTransporteur";

import {
  openTransporteurs,
  usePaginationTransporteursQuery,
} from "config/rtk/rtkTransporteur";
import React, { useRef, useState } from "react";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { t0, Transporteur, TransporteurJson } from "tools/types";
import Bcyan from "widgets/Bcyan";
import { Button } from "widgets/Button";
import Icon from "widgets/Icon";
import Mitems from "widgets/Mitems";
import Mitems0 from "widgets/Mitems0";
import Pagin from "widgets/Pagin";
import Section from "widgets/Section";
import Table from "widgets/Table";
import { MenuItems } from "widgets/TypeWidgets";
import FormTransporteurManager from "./FormTransporteurManager";
function ListTransporteurManager() {
  const transporteursToOpen: OpenTransporteurProp = openTransporteurs();
  const transporteurJson: TransporteurJson = transporteursToOpen.data;
  const transporteurs: Transporteur[] = transporteurJson.content;
  const refetchTransporteur: () => void = transporteursToOpen.refetch;
  const saveTransporteur = transporteursToOpen.save;
  const editTransporteur = transporteursToOpen.edit;
  const search = (key: string, obj: Transporteur[]): Transporteur[] => {
    const transporteursearch: Transporteur[] = obj.filter((o: Transporteur) => {
      return o.id.match(key) != null || o.designation.match(key) != null;
    });
    return transporteursearch;
  };
  const [form, setForm] = useState(false);
  const [Transporteur0, setTransporteur0] = useState(t0);
  const [request0, setRequest0] = useState(REQUEST_SAVE);
  const [page, setPage] = useState(0);
  const {
    data = [],
    isFetching,
    refetch,
  } = usePaginationTransporteursQuery(page);
  const [button, setButton] = useState("");
  const loadPage = (p: number) => {
    setPage(p);
    refetch();
  };
  const [disabled, setDisabled] = useState(true);
  const del = useRef(null);
  const archive = useRef(null);
  const restore = useRef(null);

  const showFormulaire = (Transporteur: Transporteur) => {
    setTransporteur0(Transporteur);
    setForm(true);
    setRequest0(REQUEST_EDIT);
  };
  const FormAsAdd = () => {
    setDisabled(false);
    setTransporteur0(t0);
    setForm(true);
    setRequest0(REQUEST_SAVE);
  };
  const FormAsEdit = (Transporteur: Transporteur) => {
    setDisabled(true);
    showFormulaire(Transporteur);
  };
  const FormAsUpdate = (Transporteur: Transporteur) => {
    setDisabled(false);
    showFormulaire(Transporteur);
  };
  const menu = (Transporteur: Transporteur): MenuItems[] => {
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
          FormAsEdit(Transporteur);
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
          FormAsUpdate(Transporteur);
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
          del.current(Transporteur.id);
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
          archive.current(Transporteur.id);
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
          restore.current(Transporteur.id);
        },
      },
    ];
  };

  return (
    <>
      {form && (
        <FormTransporteurManager
          request={request0}
          Transporteur={Transporteur0}
          closed={() => {
            setForm(false);
            setRequest0(REQUEST_SAVE);
            refetch();
          }}
          disable={disabled}
        />
      )}
      {!form && (
        <Section>
          <DeleteTransporteur refetch={refetch} id={""} ref={del} />
          <ArchiveTransporteur id={""} ref={archive} />
          <RestoreTransporteur id={""} ref={restore} />
          <div className="float-left w-full">
            <Bcyan
              className="float-left"
              onClick={() => {
                //setTransporteur0(c0);
                //setForm(true);
                FormAsAdd();
              }}
            >
              ajouter transorteur
            </Bcyan>

            <div className="float-right">
              <Button className="bg-white float-left border border-[#ddd] border-r-0 p-3 rounded-l-lg">
                <Icon i="search" cl="" />
              </Button>
              <input
                type="text"
                className="py-3 border outline-[#ddd] border-[#ddd] float-left border-l-0 rounded-r-lg w-96"
              />
            </div>
          </div>
          <Table
            className="tab-list float-left w-full mt-8"
            thead={
              <tr>
                <Table.th>id</Table.th>
                <Table.th>designation</Table.th>
                <Table.th></Table.th>
              </tr>
            }
          >
            {
              //@ts-ignore
              transporteurs?.map((Transporteur) => (
                //   data?.map((transporteur) => (
                <tr key={Transporteur.id}>
                  <Table.td>{Transporteur.id}</Table.td>
                  <Table.td>
                    <span>{Transporteur.designation}</span>
                  </Table.td>

                  <Table.td>
                    <Mitems0 menu={menu(Transporteur)} />
                  </Table.td>
                </tr>
              ))
            }
          </Table>

          <Pagin load={loadPage} visible={transporteurs?.length > 0} />
        </Section>
      )}
    </>
  );
}

export default ListTransporteurManager;
