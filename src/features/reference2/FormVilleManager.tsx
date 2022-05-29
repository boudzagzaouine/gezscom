import { useAddVilleMutation, useEditVilleMutation } from "config/rtk/rtkVille";
import React, { useEffect, useRef, useState } from "react";
import { PAYS_CHOICE, REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { Field, Form } from "widgets";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import Section from "widgets/Section";
import { Ville, ville0 } from "tools/types";
import Bsave from "widgets/Bsave";
import BsavEndNew from "widgets/BsavEndNew";
import Bcancel from "widgets/Bcancel";

type FormVilleManagerProp = {
  closed: () => void;
  Ville: Ville;
  request: number;
  disable: boolean;
};
const FormVilleManager = ({
  closed,
  Ville,
  request,
  disable,
}: FormVilleManagerProp) => {
  const [save] = useAddVilleMutation();
  const [edit] = useEditVilleMutation();
  const onSubmit =
    request == REQUEST_SAVE ? save : request == REQUEST_EDIT ? edit : undefined;
  const [disabled, setDisabled] = useState(disable);
  const text = "Nouvelle";
  const text1 = "Modifier";
  const imputFocus = useRef(null);
  useEffect(() => {
    /*  @ts-ignore*/
    imputFocus.current.focus();
  }, []);
  return (
    <Section>
       <Form defaultValues={ville0} onSubmit={onSubmit}>
          {request == REQUEST_SAVE ? (
            <h1 className="mb-2">{text} ville </h1>
          ) : (
            <h1 className="mb-2">{text1} ville </h1>
          )}

          <div className="float-left w-full">
             {request == REQUEST_EDIT && <Field type="hidden" name="id" />}
            <div className="float-left w-1/2">
               <Field
                ref={imputFocus}
                label="Désignation *"
                name="concat"
                disabled={disabled}
              />
			  </div>
			  <div className="float-left w-1/2">
              <Field
                label="Pays *"
                name="paymentChoice"
                options={PAYS_CHOICE}
                as="select"
                disabled={disabled}
              />
            </div>
          </div>
                      <div className="float-right mt-5 b-ajust-r">
                     <Bsave
            className="float-right"
            onClick={() => {
              setTimeout(() => {
                     closed();
              }, 600);
            }}
          />
          <BsavEndNew
                  className="float-right mr-2"
                />
               
              </div>
        
          </Form>
               <Bcancel
               className="float-right mt-5 b-ajust"
               onClick={() => {
                 closed();
               }}
             />
    </Section>
     );
};

export default FormVilleManager;
