import React, { useState, useRef, ChangeEvent } from "react";
import {
  useAddClientMutation,
  useEditClientMutation,
} from "config/rtk/RtkClient";
import {
  DEVISE,
  ICOTERM,
  PAYMENT_CHOICE,
  REQUEST_EDIT,
  REQUEST_SAVE,
} from "tools/consts";
import { STYLE_ICON } from "tools/constStyle";
import {
  Client,
  Devise,
  Incoterm,
  PayementMode,
  payementMode0,
  incoterm0,
  devise0,
} from "tools/types";
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
import Required from "widgets/Required";
import { openDevises } from "config/rtk/rtkDevise";
import { openIncoterms } from "config/rtk/rtkIncoterm";
import { openPayementModes } from "config/rtk/rtkPayementMode";
import { OpenIncotermProp } from "config/rtk/rtkIncoterm";
import Title from "widgets/Title";
import ShowCheckedsField from "widgets/ShowCheckedsField";
//14:28
type FormClientManagerProp = {
  closed: () => void;
  client: Client;
  request: number;
  disable: boolean;
  refetch: () => void;
}; //
const FormClientManager = ({
  closed,
  client,
  request,
  disable,
  refetch,
}: FormClientManagerProp) => {
  const [save] = useAddClientMutation();
  const [edit] = useEditClientMutation();
  const tabDevises: Devise[] = openDevises(0).data.content;
  const devises: string[] = tabDevises?.map((d) => d.symbole);
  const tabIncoterms: Incoterm[] = openIncoterms().data.content;
  const tabPayementModes: PayementMode[] = openPayementModes().data.content;
  const incoterms = tabIncoterms?.map((d) => d.code);
  const payementModes = tabPayementModes?.map((d) => d.code);
  const onSubmit =
    request == REQUEST_SAVE ? save : request == REQUEST_EDIT ? edit : undefined;
  const [disabled, setDisabled] = useState(disable);
  return (
    <Section>
      <Xclose close={closed} />
      <div className="float-left w-full text-xs">
        <Form defaultValues={client} onSubmit={onSubmit}>
          <Title msg="client" id={client.id} edit={disabled} />
          <div className="float-left w-5/6">
            <div className="float-left w-1/2">
              {request == REQUEST_EDIT && <Field type="hidden" name="id" />}
              <Field
                label={<Required msg="raison social" />}
                name="design"
                disabled={disabled}
              />
              <Field label="contact" name="contact" disabled={disabled} />
              <Field label="email" name="email" disabled={disabled} />
              <Field label="tel" name="tel" disabled={disabled} />
              <Field
                label={<Required msg="devise" />}
                name="device"
                options={[devise0, ...(devises || [])]}
                as="select"
                disabled={disabled}
              />
              <Field
                label="Adresse de  livraison par défaut"
                name="adrLiv"
                as="textarea"
                disabled={disabled}
              />
            </div>
            <div className="float-left w-1/2">
              <Field
                label={<Required msg="mode de règlement" />}
                name="paymentChoice"
                options={[payementMode0, ...(payementModes || [])]}
                as="select"
                disabled={disabled}
                optionKeyName="code"
                optionLabelName="code"
              />
              <Field
                label={<Required msg="incoterm" />}
                name="incoterm"
                options={[incoterm0, ...(incoterms || [])]}
                as="select"
                disabled={disabled}
                optionKeyName="code"
                optionLabelName="code"
              />
              <Field
                label={<Required msg="adresse de facturation" />}
                name="adrFact"
                as="textarea"
                disabled={disabled}
              />
              <ShowCheckedsField
                msg="les coordonnées bancaires du client"
                isAdd={client.id == ""}
              >
                <Field label="bank" name="bank" disabled={disabled} />
                <Field label="rib" name="rib" disabled={disabled} />
                <Field label="swift" name="swift" disabled={disabled} />
              </ShowCheckedsField>
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
          </div>
        </Form>
        {!disabled && (
          <Bcancel
            className={
              "float-right b-ajust " + (request == REQUEST_SAVE && "b-ajustf")
            }
            onClick={() => {
              if (client.id != "") setDisabled(true);
              else closed();
            }}
          />
        )}

        {disabled && (
          <Bupdate
            className="float-right"
            onClick={() => {
              setDisabled(false);
            }}
          />
        )}
      </div>
      {client.id != "" && (
        <ListCommandeClient client={client} refetch={refetch} />
      )}
    </Section>
  );
};

export default FormClientManager;
