import { DocumentAddIcon } from "@heroicons/react/solid";
import { openClients } from "components/manager/client/OpenClient";
import {
  useFetchCommandesQuery,
  usePaginationCommandesQuery,
} from "config/rtk";
import React, { useRef, useState } from "react";
import { c0, Client, cm0, getCm, getCm0, getCm2 } from "tools/types";
import Bcyan from "widgets/Bcyan";
import Bedit from "widgets/Bedit";
import Pagin from "widgets/Pagin";
import Section from "widgets/Section";
import Table from "widgets/Table";
import { ListClientsProps } from "widgets/TypeWidgets";
import FormCommande from "./FormCommande";

const ListAllCommandes = () => {
  const [page, setPage] = useState(0);
  const loadPage = (p: number) => {
    setPage(p);
    refetch();
  };
  const { data = [], isFetching, refetch } = usePaginationCommandesQuery(page);
  const refCom = useRef(null);
  return (
    <Section>
      <Bcyan
        className="float-left mt-2"
        onClick={() => {
          //@ts-ignore
          refCom.current(getCm0(c0));
        }}
      >
        Nouvelle commande
      </Bcyan>
      <FormCommande command={getCm0(c0)} ref={refCom} />
      <Table
        className="tab-list float-left w-full mt-2"
        thead={
          <tr>
            <Table.th>N° BC</Table.th>
            <Table.th>Client</Table.th>
            <Table.th>Date</Table.th>
            <Table.th>Saison</Table.th>
            <Table.th>Montant</Table.th>
            <Table.th>
            
            </Table.th>
          </tr>
        }
      >
        {
          //@ts-ignore
          data.content?.map((commande) => (
            <tr key={commande.id}>
              <Table.td>{commande.id}</Table.td>
              <Table.td>{commande.idClient}</Table.td>
              <Table.td>{commande.date}</Table.td>
              <Table.td>{commande.season}</Table.td>
              <Table.td>{commande.amount}</Table.td>
              <Table.td>
              <Bedit   className="float-left mt-2"
        onClick={() => {
          //@ts-ignore
          refCom.current(getCm2(commande));
        }}/>
              </Table.td>
            </tr>
          ))
        }
      </Table>
      <Pagin load={loadPage} />
    </Section>
  );
};

export default ListAllCommandes;
