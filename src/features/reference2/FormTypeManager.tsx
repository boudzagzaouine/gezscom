import { PencilAltIcon } from "@heroicons/react/solid";
import { useAddTypeMutation, useEditTypeMutation } from "config/rtk/rtkType";
import React, { useEffect, useRef, useState } from "react";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { STYLE_ICON } from "tools/constStyle";
import { Field, Form } from "widgets";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import Section from "widgets/Section";
import { Type, type0 } from "tools/types";
import Bcancel from "widgets/Bcancel";
import BsavEndNew from "widgets/BsavEndNew";
import Bsave from "widgets/Bsave";

type FormTypeManagerProp = {
  closed: () => void;
  Type: Type;
  request: number;
  disable: boolean;
};
const FormTypeManager = ({
  closed,
  Type,
  request,
  disable,
}: FormTypeManagerProp) => {
  const [save] = useAddTypeMutation();
  const [edit] = useEditTypeMutation();
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
       <Form defaultValues={type0} onSubmit={onSubmit}>
          {request == REQUEST_SAVE ? (
            <h1 className="mb-2">{text} Type </h1>
          ) : (
            <h1 className="mb-2">{text1} Type </h1>
          )}
    {request == REQUEST_EDIT && <Field type="hidden" name="id" />}         
          <div className="float-left w-full">
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
          {type0.id=="" &&<BsavEndNew
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

export default FormTypeManager;
