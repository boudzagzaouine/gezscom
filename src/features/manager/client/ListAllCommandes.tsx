import { DocumentAddIcon } from "@heroicons/react/solid";
import { openClients } from "components/manager/client/openClients";
import {
  useFetchCommandesQuery,
  usePaginationCommandesQuery,
} from "config/rtk";
import React, { useRef, useState } from "react";
import { getClient } from "tools/Methodes";
import { c0, Client, cm0 } from "tools/types";
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
  const clients:Client[]=openClients();
  const [client,setClient]=useState<Client>(c0)
  const refCom = useRef(null);
  return (
    <Section>
      <Bcyan
        className="float-left mt-2"
        onClick={() => {
          //@ts-ignore
          refCom.current(cm0);
        }}
      >
        Nouvelle commande
      </Bcyan>
      <FormCommande command={cm0} client={client}  clients={clients||[]} refetch={refetch} ref={refCom} />
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
              <Table.td>{getClient(commande.idClient,clients).design}</Table.td>
              <Table.td>{commande.date}</Table.td>
              <Table.td>{commande.season}</Table.td>
              <Table.td>{commande.amount}</Table.td>
              <Table.td>
              <Bedit   className="float-left mt-2"
        onClick={() => {
         // 
          //@ts-ignore
          refCom.current(commande,getClient(commande.idClient,clients));
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
