import {
  OpenCommandeByClientProp,
  openCommandesByClient,
  useFetchcommandesByIdClientQuery,
} from "config/rtk/RtkCommande";
import React, { useRef, useState } from "react";
import { DateFormat } from "tools/Methodes";
import { Client, cm0, Commande } from "tools/types";
import Bcyan from "widgets/Bcyan";
import Bedit from "widgets/Bedit";
import Table from "widgets/Table";
import List from "widgets/List";
import FormCommande from "./FormCommande";
type ListCommandesProp = {
  client: Client;
  refetchParent: () => void;
};
const ListCommandes = ({ client, refetchParent }: ListCommandesProp) => {
  const commandesOpen: OpenCommandeByClientProp = openCommandesByClient(
    client.id
  );
  const commandes: Commande[] = commandesOpen.data;
  const save = commandesOpen.save;
  const edit = commandesOpen.edit;
  const refetch = commandesOpen.refetch;
  const cm1: Commande = cm0;
  cm1.idClient = client.id;
  const refCom = useRef(null);
  const refetchAll = () => {
    refetch();
    refetchParent();
  };
  return (
    <>
      <List
        head={["N° BC", "Client", "Date", "Saison", "Montant"]}
        body={[
          "id#attr",
          "idClient#join#" + client.design,
          "date#date",
          "season#attr",
          "amount#attr",
        ]}
        list={commandes}
      />
    </>
  );
};
/*    <tr>
            <Table.th>N° BC</Table.th>
            <Table.th>Client</Table.th>
            <Table.th>Date</Table.th>
            <Table.th>Saison</Table.th>
            <Table.th>Montant</Table.th>
            <Table.th></Table.th>
          </tr>
        }
      >
        {commandes?.map((commande) => (
          <tr key={commande.id}>
            <Table.td>{commande.id}</Table.td>
            <Table.td>{client.design}</Table.td>
            <Table.td>{DateFormat(commande.date)}</Table.td>
            <Table.td>{commande.season}</Table.td>
            <Table.td>{commande.amount}</Table.td>
            <Table.td>*/
export default ListCommandes;
