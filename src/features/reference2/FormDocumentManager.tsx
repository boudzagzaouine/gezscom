import {
  useAddDocumentMutation,
  useEditDocumentMutation,
} from "config/rtk/rtkDocument";
import React, { useEffect, useRef, useState } from "react";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { Document, document0 } from "tools/types";
import { Field, Form } from "widgets";
import Bcancel from "widgets/Bcancel";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import Bsave from "widgets/Bsave";
import BsavEndNew from "widgets/BsavEndNew";
import Section from "widgets/Section";

type FormDocumentManagerProp = {
  closed: () => void;
  Document: Document;
  request: number;
  disable: boolean;
};
const FormDocumentManager = ({
  closed,
  Document,
  request,
  disable,
}: FormDocumentManagerProp) => {
  const [save] = useAddDocumentMutation();
  const [edit] = useEditDocumentMutation();
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
       <Form defaultValues={document0} onSubmit={onSubmit}>
          {request == REQUEST_SAVE ? (
            <h1 className="mb-2">{text} Document </h1>
          ) : (
            <h1 className="mb-2">{text1} Document </h1>
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
                 setDisabled(true);
                  setShow(false);
               }}
             />
   </Section>
  );
};

export default FormDocumentManager;
