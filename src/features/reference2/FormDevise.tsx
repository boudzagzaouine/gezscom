import {
  useAddDeviseMutation,
  useEditDeviseMutation,
} from "config/rtk/rtkDevise";
import React, { useEffect, useRef, useState } from "react";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { Devise, v0 } from "tools/types";
import { Field, Form } from "widgets";
import Bcancel from "widgets/Bcancel";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import Bsave from "widgets/Bsave";
import BsavEndNew from "widgets/BsavEndNew";
import Section from "widgets/Section";

type FormDeviseManagerProp = {
  closed: () => void;
  Devise: Devise;
  request: number;
  disable: boolean;
  imputFocus: any;
};
const FormDeviseManager = ({
  closed,
  Devise,
  request,
  disable,
}: FormDeviseManagerProp) => {
  const [save] = useAddDeviseMutation();
  const [edit] = useEditDeviseMutation();
  const onSubmit =
    request == REQUEST_SAVE ? save : request == REQUEST_EDIT ? edit : undefined;
  const [disabled, setDisabled] = useState(disable);
  const text = "Nouveau";
  const text1 = "Modifier";
  const imputFocus = useRef(null);
  useEffect(() => {
    /*  @ts-ignore*/
    imputFocus.current.focus();
  }, []);
  return (
    <Section>
       <Form defaultValues={v0} onSubmit={onSubmit}>
          {request == REQUEST_SAVE ? (
            <h1 className="mb-2">{text} Devise </h1>
          ) : (
            <h1 className="mb-2">{text1} Devise </h1>
          )}

          <div className="float-left w-full">
             {request == REQUEST_EDIT && <Field type="hidden" name="id" />}
              <Field
                ref={imputFocus}
                label="Désignation *"
                name="designation"
                disabled={disabled}
              />
              <Field label="Code ISO *" name="code_iso" disabled={disabled} />
              <Field label="Symbole *" name="symbole" disabled={disabled} />
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
          {v0.id=="" &&<BsavEndNew
                  className="float-right mr-2"
                />}
               
              </div>
        
          </Form>
               <Bcancel
               className="float-right mt-5 b-ajust"
               onClick={() => {
                 closed()
               }}
             />
       </Section>
  );
};

export default FormDeviseManager;
