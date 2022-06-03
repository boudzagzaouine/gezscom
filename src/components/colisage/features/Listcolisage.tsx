import React, { useEffect, useState } from "react";
import Section from "widgets/Section";
import { ArchiveIcon, ReplyIcon, SearchIcon } from "@heroicons/react/solid";
import Table from "widgets/Table";
import {
  ClipboardListIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import Mitems from "widgets/Mitems";
import { MenuItems } from "widgets/TypeWidgets";
import Pagin from "widgets/Pagin";
import Bcyan from "widgets/Bcyan";
import { ClientJson, Colis, ColisJson } from "../tools/types";
import { openColis } from "../rtk/rtk_colisage";
import axios from "axios";
// import { useDeleteClientMutation } from 'config/rtk';

type ListUtilisateurProps = {
  setEstAjt: (b: boolean) => void;
  setShowColis: (b: boolean) => void;
  setModifier: (b: boolean) => void;
  setColis: (c: Colis) => void;
  ClientJson: ClientJson;
};

function ListColisage({
  setEstAjt,
  setShowColis,
  setModifier,
  setColis,
  ClientJson,
}: ListUtilisateurProps) {
  const ColisToOpen: any = openColis();
  const colisJson: ColisJson = ColisToOpen.data;
  const refetchColis = ColisToOpen.refetch;
  const [page, setPage] = useState(0);
  const loadPage = (p: number) => {
    setPage(p);
    refetchColis();
  };
  const getName = (colis: Colis): String => {
    const tab = ClientJson.filter((val) => val.id === colis.idClient);
    // console.log(tab.map(val => val.design))
    return tab.map((val) => val.design)[0];
  };
  useEffect(() => {
    refetchColis();
  });

  // ClientJson.filter( val => val.idClient === colisJson.id)
  // const [listColis,setListColis] = useState([{
  //   id:5,
  //   client:"Client 1",
  //   date:"2000-07-07",
  //   pois:100,
  //   nbPlat:4
  // }])
  // const [page, setPage] = useState(0);

  const FromDetails = (c0: Colis) => {
    setColis(c0);
    setShowColis(true);
  };

  const FormAsUpdate = (colis: any) => {
    console.log(colis);
    setShowColis(true);
    setModifier(true);
  };
  const deleteProduct = (colis: Colis) => {
    axios.delete(
      "http://localhost:1000/api/v1/colisage/deleteColis/" + colis.id
    );
    refetchColis();
  };

  //sdfsdf
  const menu = (colis: any): MenuItems[] => {
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
          // console.log(user)
          FromDetails(colis);
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
          FormAsUpdate(colis);
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
          deleteProduct(colis);
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
          archive.current(Ville.id);
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
          restore.current(Ville.id);
        },
      },
    ];
  };
  return (
    <Section>
      <div className="">
        <div className="grid grid-cols-6 justify-start">
          <div className="col-span-4">
            <Bcyan
              className="float-left"
              onClick={() => {
                setEstAjt(true);
              }}
            >
              Nouvelle Fiche
            </Bcyan>
          </div>
          <div className="relative text-zinc-400 flex items-center col-span-2">
            <SearchIcon className="w-7 h-7 absolute ml-1 " />
            <input
              type="text"
              placeholder="Recherche"
              className="pl-8 w-full"
            />
          </div>
        </div>
        <h1 className="text-gray-400 mt-5 mb-0 text-2xl">
          La Liste des fiches de colisage
        </h1>

        <Table
          className="tab-list mt-8 tab-list float-left w-full"
          thead={
            <Table.tr>
              <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                Nº
              </Table.th>
              <Table.th className=" top-0 z-10    py-5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                Client
              </Table.th>
              <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                Date
              </Table.th>
              <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                Pois brut
              </Table.th>
              <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                NB Palettes
              </Table.th>
              <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 "></Table.th>
            </Table.tr>
          }
        >
          {colisJson.map((p: Colis) => {
            console.log(p);
            return (
              <Table.tr className="cursor-pointer h-20 text-xl">
                <Table.td onDoubleClick={() => FromDetails(p)}>{p.id}</Table.td>
                <Table.td onDoubleClick={() => FromDetails(p)}>
                  {getName(p)}
                </Table.td>
                <Table.td onDoubleClick={() => FromDetails(p)}>
                  {p.date_colisage}
                </Table.td>
                <Table.td onDoubleClick={() => FromDetails(p)}>
                  {p.pois_brut}
                </Table.td>
                <Table.td onDoubleClick={() => FromDetails(p)}>
                  {p.nombre_palettes}
                </Table.td>
                <Table.td className="cursor-pointer">
                  <Mitems menu={menu(p)} />
                </Table.td>
              </Table.tr>
            );
          })}
        </Table>
        <Pagin load={loadPage} visible={colisJson?.length ? true : false} />
      </div>
    </Section>
  );
}

export default ListColisage;
