import React, { useState } from "react";
import Table from "widgets/Table";
import { ListClientsProps } from "widgets/TypeWidgets";

const AdressLivraisons = ({ idClient }: ListClientsProps) => {
  const [adressLivs, setAdressLivs] = useState(idClient);
  return (
    <>
      {/* <Table
        className="tab-list float-left w-full mt-2"
        thead={
          <tr>
            <Table.th>N° Or</Table.th>
            <Table.th>Pays</Table.th>
            <Table.th>Ville</Table.th>
            <Table.th>Adresse</Table.th>
          </tr>
        }
      >
        {adressLivs?.map((commande) => (
          <tr key={commande.id}>
            <Table.td>{commande.id}</Table.td>
            <Table.td>{commande.country}</Table.td>
            <Table.td>{commande.city}</Table.td>
            <Table.td>{commande.adress}</Table.td>
          </tr>
        ))}
      </Table> */}
    </>
  );
};

export default AdressLivraisons;
