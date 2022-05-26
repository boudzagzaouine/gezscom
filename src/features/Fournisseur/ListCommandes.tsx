import { DocumentAddIcon } from "@heroicons/react/solid";
import { useFetchCommandesFournisseurByIdFournisseurQuery } from "config/rtk";
import { useRef, useState } from "react";
import { CommandeFournisseur, getCf0 } from "tools/types";
import Bcyan from "widgets/Bcyan";
import Table from "widgets/Table";
import { ListFournisseursProps } from "widgets/TypeWidgets";
import FormCommandes from "./FormCommandes";

const ListCommandes = ({ fournisseur }: ListFournisseursProps) => {
  const [commandes, setCommandes] = useState(fournisseur.commandes);
  const { data = [], refetch } =
    useFetchCommandesFournisseurByIdFournisseurQuery(fournisseur.id);
  const refCom = useRef(null);
  return (
    <>
      <Bcyan
        className="float-left mt-2"
        onClick={() => {
          //@ts-ignore
          refCom.current(getCf0(fournisseur));
        }}
      >
        Nouvelle Commande
      </Bcyan>
      <FormCommandes command={getCf0(fournisseur)} ref={refCom} />
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
          </tr>
        }
      >
        {data?.map((commande: CommandeFournisseur) => (
          <tr key={commande.id}>
            <Table.td>{commande.id}</Table.td>
            <Table.td>{fournisseur.raisonSociale}</Table.td>
            <Table.td>{commande.dateCommande}</Table.td>
            <Table.td>{commande.dateLivraison}</Table.td>
            <Table.td>-</Table.td>
            <Table.td>Montant</Table.td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default ListCommandes;
