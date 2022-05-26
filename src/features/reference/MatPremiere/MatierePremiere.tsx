import { openRawMaterials } from "config/rtk/rtkRawMaterial";
import { OpenRawMaterialProp } from "features/references/RawMaterial/Methods/openRawMaterials";
import React, { useState } from "react";
import { RawMaterial, rawMaterial0, RawMaterialJson } from "tools/types";
import { Field, Form } from "widgets";
import Bcyan from "widgets/Bcyan";
import Table from "widgets/Table";
/*
type Props = {
    matieres?: any;
    setMatiers?: any;
}
*/
const ListeMatiers = () => {
  //----------------MATIERE-----------------
  const rawMaterialsToOpen: OpenRawMaterialProp = openRawMaterials();
  const RawMaterialJson: RawMaterialJson = rawMaterialsToOpen.data;
  const RawMaterials: RawMaterial[] = RawMaterialJson.content;
  //---------------------------------------------------------

  const startFields: any = {
    code: "",
    designation: "Ajouter ligne",
    uniteDeMesure: "",
    quantite: "",
    prixUnitaire: "",
    action: "",
  };

  const [addMat, setAddMat] = useState<any>(startFields);
  const [matieres, setMatieres] = useState<RawMaterial[]>([]);

  const ajtMat = (data: any) => {
    // const matCopy = matieres;
    // matCopy.push(data);
    //@ts-ignore
    let matAdded: RawMaterial = RawMaterials.filter(
      (m) => m.id === data.designation
    );
    setMatieres(
      matieres.concat({
        //@ts-ignore
        matiere: matAdded,
        quantite: data.quantite,
      })
    );
    console.log(matieres);
    setAddMat(startFields);
  };

  const addMatiere = () => {
    if (addMat.code === startFields.code) {
      setAddMat({
        // code: <Field className="sm:grid-cols-1 sm:gap-1" name="code" disabled={false} />,
        designation: (
          <Field
            className="sm:grid-cols-1 sm:gap-1"
            as="select"
            optionKeyName="id"
            optionLabelName="designation"
            options={["", ...RawMaterials]}
            name="designation"
            disabled={false}
          />
        ),
        // uniteDeMesure: <Field className="sm:grid-cols-1 sm:gap-1" name="uniteDeMesure" disabled={false} />,
        quantite: (
          <Field
            className="sm:grid-cols-1 sm:gap-1"
            name="quantite"
            disabled={false}
          />
        ),
        // prixUnitaire: <Field className="sm:grid-cols-1 sm:gap-1" name="prixUnitaire" disabled={false} />,
        action: (
          <Bcyan className="px-4 w-32" type="submit">
            Ajouter
          </Bcyan>
        ),
      });
    }
  };

  return (
    <Form onSubmit={ajtMat}>
      <Table
        className="tab-list float-left w-full"
        thead={
          <tr>
            <Table.th>Désignation</Table.th>
            <Table.th>Quantité</Table.th>
            <Table.th>Code</Table.th>
            <Table.th>Unité de mesure</Table.th>
            <Table.th>Prix Unitaire</Table.th>
            <Table.th></Table.th>
          </tr>
        }
      >
        {matieres.map((m: any) => {
          if (m !== rawMaterial0)
            return (
              <tr key={Math.random()}>
                <Table.td>{m.matiere.designation}</Table.td>
                <Table.td>{m.quantite}</Table.td>
                <Table.td>{m.codeMat}</Table.td>
                <Table.td>{m.unitMesure}</Table.td>
                <Table.td>{m.prixUnit}</Table.td>
                {/*@ts-ignore*/}
                <Table.td>
                  <Bcyan
                    className="px-4 w-32"
                    onClick={() => {
                      setMatiers(
                        matieres.filter((e) => e.designation != m.designation)
                      );
                    }}
                  >
                    Supprimer
                  </Bcyan>
                </Table.td>
              </tr>
            );
        })}

        <tr key={Math.random()}>
          <Table.td className="w-1/6">
            <p className="text-gray-700 cursor-pointer" onClick={addMatiere}>
              {addMat.designation}
            </p>
          </Table.td>
          <Table.td className="w-1/6">{addMat.quantite}</Table.td>
          <Table.td className="w-1/6">{addMat.code}</Table.td>
          <Table.td className="w-1/6">{addMat.uniteDeMesure}</Table.td>
          <Table.td className="w-1/6">{addMat.prixUnitaire}</Table.td>
          <Table.td className="w-1/6">{addMat.action}</Table.td>
        </tr>
      </Table>
    </Form>
  );
};

export default ListeMatiers;
