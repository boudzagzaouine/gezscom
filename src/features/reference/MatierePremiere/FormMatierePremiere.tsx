import React, { useEffect } from "react";
import { Field, Form } from "widgets";
import { AdressLiv, RawMaterial } from "tools/types";
import Table from "widgets/Table";
import Bcancel from "widgets/Bcancel";
import Bsave from "widgets/Bsave";
import { refetchAdressLivs } from "components/manager/client/refetchAdressLivs";
import { refetchClient } from "components/manager/client/refetchClient";

type FormMatierePremiereProp = {
  rawMaterial: RawMaterial;
  save: (raw: RawMaterial) => void;
  close: () => void;
  refetch: () => void;
};
const FormMatierePremiere = ({
  rawMaterial,
  save,
  close,
  refetch,
}: FormMatierePremiereProp) => {
  return (
    <>
      <tr className="relative">
        <div className="absolute left-0 top-0 bg-[#ccc] pr-2">
          <Form defaultValues={rawMaterial} onSubmit={save}>
            {/* <Table.td>cf45d616-39c6-4317-96dd-da3b82ee13d8</Table.td> */}
            <Table.td>
              <span className="block float-left py-2.5">
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </span>{" "}
            </Table.td>
            <Table.td>
              <Field name="country" placeholder="country" />
            </Table.td>
            <Table.td>
              <Field name="city" placeholder="city" />
            </Table.td>
            <Table.td>
              <Field name="adress" placeholder="adress" />
            </Table.td>
            <Table.td>
              <div className="float-right w-full">
                <Bsave
                  onClick={() => {
                    setTimeout(() => {
                      refetch();
                    }, 500);
                  }}
                />
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

export default FormMatierePremiere;
