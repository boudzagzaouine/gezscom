import { DocumentAddIcon } from "@heroicons/react/solid";
import { openClients } from "components/manager/client/openClients";
import { useFetchcommandesByIdClientQuery } from "config/rtk";
import React, { useRef, useState } from "react";
import {  cm0 } from "tools/types";
import Bcyan from "widgets/Bcyan";
import Bedit from "widgets/Bedit";
import Table from "widgets/Table";
import { ListClientsProps } from "widgets/TypeWidgets";
import FormCommande from "./FormCommande";

const ListCommandes = ({ idClient }: ListClientsProps) => {
  const { data = [], refetch } =  useFetchcommandesByIdClientQuery(idClient)
  
 const refCom = useRef(null);
  return (
    <>
      <Bcyan
        className="float-left mt-2"
        onClick={() => {
          //@ts-ignore
          refCom.current(cm0);
        }}
      >
        Nouvelle commande
      </Bcyan>
      <FormCommande command={cm0} ref={refCom} />
      <Table
        className="tab-list float-left w-full mt-2"
        thead={
          <tr>
            <Table.th>N° BC</Table.th>
            <Table.th>Client</Table.th>
            <Table.th>Date</Table.th>
            <Table.th>Saison</Table.th>
            <Table.th>Montant</Table.th>
            <Table.th></Table.th>

          </tr>
        }
      >
        {data?.map((commande) => (
          <tr key={commande.id}>
            <Table.td>{commande.id}</Table.td>
            <Table.td>{commande.idClient}</Table.td>
            <Table.td>{commande.date}</Table.td>
            <Table.td>{commande.season}</Table.td>
            <Table.td>{commande.amount}</Table.td>
            <Table.td>
           {/*  <Bcyan
        className="float-left mt-2"
        onClick={() => {
          //@ts-ignore
          refCom.current(getCm(client,commande));
        }}
      >
       ...
      </Bcyan> */}
      <Bedit   className="float-left mt-2"
        onClick={() => {
          //@ts-ignore
          refCom.current(commande);
        }}/>
            </Table.td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default ListCommandes;
