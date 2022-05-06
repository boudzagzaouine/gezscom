import React, { useState } from "react";
import { useAddClientMutation, useEditClientMutation } from "config/rtk";
import {
  DEVISE,
  ICOTERM,
  PAYMENT_CHOICE,
  REQUEST_EDIT,
  REQUEST_SAVE,
} from "../../../tools/consts";
import { Client } from "../../../tools/types";
import Bcyan from "../../../widgets/Bcyan";
import Bred from "../../../widgets/Bred";
import Icon from "../../../widgets/Icon";
import Section from "../../../widgets/Section";
import { Field, Form } from "widgets";
import Avatar from "widgets/Avatar";
import { PencilAltIcon, SaveIcon, XCircleIcon } from "@heroicons/react/solid";

type FormClientManagerProp = {
  closed: () => void;
  client: Client;
  request: number;
  disable: boolean;
};
const FormClientManager = ({
  closed,
  client,
  request,
  disable,
}: FormClientManagerProp) => {
  const [save] = useAddClientMutation();
  const [edit] = useEditClientMutation();
  const onSubmit =
    request == REQUEST_SAVE ? save : request == REQUEST_EDIT ? edit : undefined;
  const [disabled, setDisabled] = useState(disable);

  return (
    <Section>
      <div className="float-left w-full text-xs">
        <Form defaultValues={client} onSubmit={onSubmit}>
          <h1>Nom & Prénom du client request={request}</h1>
          <div className="float-left w-5/6">
            <div className="float-left w-1/2">
              {request == REQUEST_EDIT && <Field type="hidden" name="id" />}
              <Field label="Nom du client" name="design" disabled={disabled} />
              <Field label="concat" name="concat" disabled={disabled} />
              <Field label="email" name="email" disabled={disabled} />
              <Field label="tel" name="tel" disabled={disabled} />
              <Field
                label="device"
                name="device"
                options={DEVISE}
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
                options={PAYMENT_CHOICE}
                as="select"
                disabled={disabled}
              />
              <Field
                label="incoterm"
                name="incoterm"
                options={ICOTERM}
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
          <div className="float-left w-full mt-5">
            <Bcyan
              className="float-left"
              onClick={() => {
                setTimeout(() => {
                  closed();
                }, 500);
              }}
            >
              <SaveIcon
                className="h-8 w-8 text-[#fff] group-hover:text-gray-500"
                aria-hidden="true"
              />
            </Bcyan>
            {request == REQUEST_SAVE && (
              <Bcyan className="float-left" type="submit">
                <Icon i="save" cl="float-left" />{" "}
                <span className="px-2 float-left">&&</span>
                <Icon i="user-add" cl="float-left" />
              </Bcyan>
            )}
          </div>
        </Form>
        <Bred
          className="float-right"
          onClick={() => {
            closed();
          }}
        >
          <XCircleIcon
            className="h-8 w-8 text-[#fff] group-hover:text-gray-500"
            aria-hidden="true"
          />
        </Bred>
        {disabled && (
          <Bcyan
            className="float-right"
            onClick={() => {
              setDisabled(false);
            }}
          >
            <PencilAltIcon
              className="h-8 w-8 text-[#fff] group-hover:text-gray-500"
              aria-hidden="true"
            />
          </Bcyan>
        )}
      </div>
    </Section>
  );
};

export default FormClientManager;
