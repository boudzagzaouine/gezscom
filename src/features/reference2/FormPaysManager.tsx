import { PencilAltIcon } from "@heroicons/react/solid";
import { useAddPaysMutation, useEditPaysMutation } from "config/rtk/rtkPays";
import React, { useEffect, useRef, useState } from "react";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { STYLE_ICON } from "tools/constStyle";
import { Field, Form } from "widgets";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import Section from "widgets/Section";
import { Pays, pays0 } from "tools/types";
import Bsave from "widgets/Bsave";
import BsavEndNew from "widgets/BsavEndNew";
import Bcancel from "widgets/Bcancel";

type FormPaysManagerProp = {
  closed: () => void;
  Pays: Pays;
  request: number;
  disable: boolean;
};
const FormPaysManager = ({
  closed,
  Pays,
  request,
  disable,
}: FormPaysManagerProp) => {
  const [save] = useAddPaysMutation();
  const [edit] = useEditPaysMutation();
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
       <Form defaultValues={pays0} onSubmit={onSubmit}>
          {request == REQUEST_SAVE ? (
            <h1 className="mb-2">{text} Pays </h1>
          ) : (
            <h1 className="mb-2">{text1} Pays </h1>
          )}

          <div className="float-left w-full">
             {request == REQUEST_EDIT && <Field type="hidden" name="id" />}
              <Field
                ref={imputFocus}
                label="Désignation *"
                name="designation"
                disabled={disabled}
              />
            </div>
                      <div className="float-right mt-5 b-ajust-r">
                     <Bsave
            className="float-right"
            onClick={() => {
              setTimeout(() => {
                     closed();
              }, 400);
            }}
          />
          {pays0.id=="" &&<BsavEndNew
                  className="float-right mr-2"
                />}
               
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

export default FormPaysManager;
