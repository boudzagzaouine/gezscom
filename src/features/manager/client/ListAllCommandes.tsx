import { DocumentAddIcon } from "@heroicons/react/solid";
import { OpenClientProp, openClients } from "components/manager/client/openClients";
import {
  useFetchCommandesQuery,
  usePaginationCommandesQuery,
} from "config/rtk/RtkCommande";
import React, { useRef, useState } from "react";
import { getClient } from "tools/Methodes";
import { c0, Client, ClientJson, cm0, Commande } from "tools/types";
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
  
  const clientsToOpen: OpenClientProp = openClients();
    const clientJson: ClientJson = clientsToOpen.data
    const clients: Client[] = clientJson.content
    const refetchClient:()=>void=clientsToOpen.refetch
  const [client,setClient]=useState<Client>(c0)
  const refCom = useRef(null);
  const cm1:Commande=cm0 
  cm1.idClient=""
  return (
    <Section>
     {clients?.length!=0 &&  <Bcyan
        className="float-left mt-2"
        onClick={() => {
          //@ts-ignore
          refCom.current(cm1);
        }}
      >
        Nouvelle commande
      </Bcyan>}
      <FormCommande command={cm1} client={client}  clients={clients||[]} refetchList={refetch} ref={refCom} />
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
