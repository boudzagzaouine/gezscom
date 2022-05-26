import {
  useAddRawMaterialMutation,
  useEditRawMaterialMutation,
} from "config/rtk";
import { useFetchRawMaterialsByIdFournisseurQuery } from "config/rtk/rtkRawMaterial";
import FormRawMaterial from "features/references/RawMaterial/FormRawMaterial";
import React, { useState } from "react";
import { style_add_line } from "tools/constStyle";
import { RawMaterial, rawMaterial0 } from "tools/types";
import Bedit from "widgets/Bedit";
import Table from "widgets/Table";
import FormMatierePremiere from "./FormMatierePremiere";

type ListMatierePremiereProps = {
  idFournisseur: string;
  refetchParent: () => void;
};
const ListMatierePremiere = ({
  idFournisseur,
  refetchParent,
}: ListMatierePremiereProps) => {
  const [formArt, setFormArt] = useState(false);
  const [selectedIdFournisseur, setSelectedIdFournisseur] = useState("new");
  const { data = [], refetch } =
    useFetchRawMaterialsByIdFournisseurQuery(idFournisseur);
  const [save] = useAddRawMaterialMutation();
  const [edit] = useEditRawMaterialMutation();
  const close = () => {
    setFormArt(false);
    setSelectedIdFournisseur("new");
  };
  const open = (id: string) => {
    setFormArt(true);
    setSelectedIdFournisseur(id);
  };
  const refetchAll = () => {
    refetch();
    refetchParent();
  };
  const raw1: RawMaterial = rawMaterial0;
  raw1.idFournisseur = idFournisseur;
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
        {data?.map((rawMaterial) => (
          <>
            <tr key={rawMaterial.id}>
              <Table.td>{rawMaterial.id}</Table.td>
              <Table.td>{rawMaterial.design}</Table.td>
              <Table.td>{rawMaterial.nomenclature}</Table.td>
              <Table.td>{rawMaterial.tauxPertes}</Table.td>
              <Table.td>
                <Bedit
                  onClick={() => {
                    open(rawMaterial.id);
                  }}
                />
              </Table.td>
            </tr>
            {selectedIdFournisseur == rawMaterial.id && formArt && (
              <FormMatierePremiere
                rawMaterial={rawMaterial}
                close={close}
                saveAdressLiv={edit}
                refetch={refetchAll}
              />
            )}
          </>
        ))}
        {selectedIdFournisseur == "new" && formArt && (
          <FormMatierePremiere
            rawMaterial={raw1}
            close={close}
            saveAdressLiv={edit}
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

export default ListMatierePremiere;
