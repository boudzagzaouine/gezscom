import React, { useState } from "react";
import { useAddClientMutation, useEditClientMutation } from "config/rtk/RtkClient";
import {
  DEVISE,
  ICOTERM,
  PAYMENT_CHOICE,
  REQUEST_EDIT,
  REQUEST_SAVE,
} from "tools/consts";
import { STYLE_ICON } from "tools/constStyle";
import { Client, Devise ,Incoterm,PayementMode} from "tools/types";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import Section from "widgets/Section";
import { Field, Form } from "widgets";
import Avatar from "widgets/Avatar";
import {
  PencilAltIcon,
  SaveIcon,
  UserAddIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import ListCommandeClient from "./ListCommandeClient";
import Bsave from "widgets/Bsave";
import Bcancel from "widgets/Bcancel";
import Bupdate from "widgets/Bupdate";
import Xclose from "widgets/Xclose";
import { openDevises } from "config/rtk/rtkDevise";
import { openIncoterms } from "config/rtk/rtkIncoterm";
import { openPayementModes } from "config/rtk/rtkPayementMode";
import { OpenIncotermProp } from "features/reference/Incoterm/Methods/openIncoterms";
type FormClientManagerProp = {
  closed: () => void;
  client: Client;
  request: number;
  disable: boolean;
  refetch:()=>void
};//
const FormClientManager = ({
  closed,
  client,
  request,
  disable,
  refetch,
}: FormClientManagerProp) => {
  
  const [save] = useAddClientMutation();
  const [edit] = useEditClientMutation();
  const tabDevises:Devise[]=openDevises().data.content
  const devises:string[]=tabDevises?.map(d=>d.symbole)
 const tabIncoterms:Incoterm[]=openIncoterms().data.content 
 const tabPayementModes:PayementMode[]=openPayementModes().data.content 
 const incoterms=tabIncoterms?.map(d=>d.code)
 const payementModes=tabPayementModes?.map(d=>d.code)
  const onSubmit =
    request == REQUEST_SAVE ? save : request == REQUEST_EDIT ? edit : undefined;
  const [disabled, setDisabled] = useState(disable);
  return (
    <Section>
      <Xclose close={closed} />
      <div className="float-left w-full text-xs">
        <Form defaultValues={client} onSubmit={onSubmit}>
          <h1 className="mb-4">Nouveau client</h1>
          <div className="float-left w-5/6">
            <div className="float-left w-1/2">
              {request == REQUEST_EDIT && (
                <Field label="id du client" name="id" />
              )}
              <Field label="Raison social" name="design" disabled={disabled} />
              <Field label="contact" name="contact" disabled={disabled} />
              <Field label="email" name="email" disabled={disabled} />
              <Field label="tel" name="tel" disabled={disabled} />
              <Field
                label="device"
                name="device"
                options={devises}
                as="select"
                disabled={disabled}
              />
              <Field
                label="adresse de livraison"
                name="adrLiv"
                as="textarea"
                disabled={disabled}
              />
            </div>
            <div className="float-left w-1/2">
              <Field
                label="Mode de payment"
                name="paymentChoice"
                options={payementModes}
                as="select"
                disabled={disabled}
              />
              <Field
                label="incoterm"
                name="incoterm"
                options={incoterms}
                as="select"
                disabled={disabled}
              />
              <Field
                label="adresse de facturation"
                name="adrFact"
                as="textarea"
                disabled={disabled}
              />
              <Field label="bank" name="bank" disabled={disabled} />
              <Field label="rib" name="rib" disabled={disabled} />
              <Field label="swift" name="swift" disabled={disabled} />
            </div>
          </div>
          <div className="float-left w-1/6">
            <Avatar />
          </div>
          <div className="float-left w-full mt-1">
            {!disabled && (
              <Bsave
                className="float-right b-ajust-r"
                onClick={() => {
                  setTimeout(() => {
                    closed();
                  }, 500);
                }}
              />
               
            )}
            {/* !disabled && request == REQUEST_SAVE && (
              <Bcyan className="float-left" type="submit">
                <SaveIcon
                  className="h-8 w-8 text-[#fff] group-hover:text-gray-500  float-left"
                  aria-hidden="true"
                />{" "}
                <span className="px-2 float-left">&&</span>
                <UserAddIcon
                  className="h-8 w-8 text-[#fff] group-hover:text-gray-500 float-left"
                  aria-hidden="true"
                />
              </Bcyan>
            ) */}
          </div>
        </Form>
        {!disabled && <Bcancel
          className={'float-right b-ajust '+(request ==REQUEST_SAVE && 'b-ajustf')}
          onClick={() => {
            setDisabled(true);
          }}
        />}
        
        {disabled && (
          <Bupdate
            className="float-right"
            onClick={() => {
              setDisabled(false);
            }}
          />
           )}
      </div>
      {client.id!="" && <ListCommandeClient client={client} refetch={refetch} />}
    </Section>
  );
};

export default FormClientManager;
