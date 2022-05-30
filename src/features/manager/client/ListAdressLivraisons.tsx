import {
  useAddAdressLivMutation,
  useEditAdressLivMutation,
  useFetchAdressLivsByIdClientQuery,
} from "config/rtk/RtkAdressLiv";
import React, { useState } from "react";
import { style_add_line } from "tools/constStyle";
import { AdressLiv, adr0 } from "tools/types";
import Bedit from "widgets/Bedit";
import Table from "widgets/Table";
import FormAdressLivraisons from "./FormAdressLivraisons";
type ListAdressLivraisonsProps = {
  idClient: string;
  refetchParent: () => void;
};
const ListAdressLivraisons = ({
  idClient,
  refetchParent,
}: ListAdressLivraisonsProps) => {
  const [formArt, setFormArt] = useState(false);
  const [selectedIdCommande, setSelectedIdCommande] = useState("new");
  const { data = [], refetch } = useFetchAdressLivsByIdClientQuery(idClient);
  const [save] = useAddAdressLivMutation();
  const [edit] = useEditAdressLivMutation();
  const close = () => {
    setFormArt(false);
    setSelectedIdCommande("new");
  };
  const open = (id: string) => {
    setFormArt(true);
    setSelectedIdCommande(id);
  };
  const refetchAll = () => {
    refetch();
    refetchParent();
  };
  const adr1: AdressLiv = adr0;
  adr1.idClient = idClient;
  return (
    <>
      <Table
        className="tab-list float-left w-full mt-2"
        thead={
          <tr>
            <Table.th>N° Or</Table.th>
            <Table.th>Pays</Table.th>
            <Table.th>Ville</Table.th>
            <Table.th>Adresse</Table.th>
            <Table.th></Table.th>
          </tr>
        }
      >
        {data?.map((adressLiv) => (
          <>
            <tr key={adressLiv.id}>
              <Table.td>{adressLiv.id}</Table.td>
              <Table.td>{adressLiv.country}</Table.td>
              <Table.td>{adressLiv.city}</Table.td>
              <Table.td>{adressLiv.adress}</Table.td>
              <Table.td>
                <Bedit
                  onClick={() => {
                    open(adressLiv.id);
                  }}
                />
              </Table.td>
            </tr>
            {selectedIdCommande == adressLiv.id && formArt && (
              <FormAdressLivraisons
                adressLiv={adressLiv}
                close={close}
                saveAdressLiv={edit}
                refetch={refetchAll}
              />
            )}
          </>
        ))}
        {selectedIdCommande == "new" && formArt && (
          <FormAdressLivraisons
            adressLiv={adr1}
            close={close}
            saveAdressLiv={save}
            refetch={refetchAll}
          />
        )}
        {!formArt && (
          <tr
            onClick={() => {
              open("new");
            }}
          >
            <Table.td className={style_add_line}>ajouter une ligne</Table.td>
            <Table.td className={style_add_line}></Table.td>
            <Table.td className={style_add_line}></Table.td>
            <Table.td className={style_add_line}></Table.td>
            <Table.td className={style_add_line}></Table.td>
          </tr>
        )}
      </Table>
    </>
  );
};

export default ListAdressLivraisons;
