import {
  useAddTransporteurMutation,
  useEditTransporteurMutation,
} from "config/rtk/rtkTransporteur";
import React, { useEffect, useRef, useState } from "react";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { Field, Form } from "widgets";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import Section from "widgets/Section";
import { Transporteur, transporteur0 } from "tools/types";
import Bcancel from "widgets/Bcancel";
import BsavEndNew from "widgets/BsavEndNew";
import Bsave from "widgets/Bsave";

type FormTransporteurManagerProp = {
  closed: () => void;
  Transporteur: Transporteur;
  request: number;
  disable: boolean;
};
const FormTransporteurManager = ({
  closed,
  Transporteur,
  request,
  disable,
}: FormTransporteurManagerProp) => {
  const [save] = useAddTransporteurMutation();
  const [edit] = useEditTransporteurMutation();
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
    <Form defaultValues={transporteur0} onSubmit={onSubmit}>
       {request == REQUEST_SAVE ? (
         <h1 className="mb-2">{text} Transporteur </h1>
       ) : (
         <h1 className="mb-2">{text1} Transporteur </h1>
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
       {transporteur0.id=="" &&<BsavEndNew
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

export default FormTransporteurManager;
