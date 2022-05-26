import React from "react";
import { Field, Form } from "widgets";
import Bcyan from "widgets/Bcyan";
import { DumMat } from "tools/types";
import Table from "widgets/Table";
import Bcancel from "widgets/Bcancel";
import Bsave from "widgets/Bsave";
type FormDumMatProp = {
  dumMat: DumMat;
  saveDumMatiere: (dumMatiere: DumMat) => void;
  close: () => void;
  refetch: () => void;
};
const FormDumMat = ({
  dumMat,
  saveDumMatiere,
  close,
  refetch,
}: FormDumMatProp) => {
  return (
    <>
      <tr className="relative">
        <div className="absolute left-0 top-0 bg-[#ccc]">
          <Form defaultValues={dumMat} onSubmit={saveDumMatiere}>
            <Table.td>
              <Field
                name="matierePremiere"
                placeholder="Famille Matiere Premiere"
              />
            </Table.td>
            <Table.td>
              <Field name="quantite" placeholder="quantite" />
            </Table.td>
            <Table.td>
              <Field name="unitMeasure" placeholder="Unité de Mesure" />
            </Table.td>
            <Table.td>
              <Field name="poids" placeholder="Poids" />
            </Table.td>
            <Table.td>
              <Field name="valeur" placeholder="Valeur" />
            </Table.td>
            <Table.td>
              <div className="float-right w-full">
                <Bcyan
                  type="submit"
                  onClick={() => {
                    setTimeout(() => {
                      refetch();
                    }, 500);
                  }}
                >
                  Add
                </Bcyan>
              </div>
            </Table.td>
          </Form>
          <div className="float-right w-full">
            <Bcancel
              className="absolute right-0"
              onClick={() => {
                close();
              }}
            />
          </div>
        </div>
      </tr>
    </>
  );
};

export default FormDumMat;
