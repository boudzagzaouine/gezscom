import Section from "widgets/Section";
import React, { ChangeEvent } from "react";
import {
  OpenClientProp,
  openClients,
} from "components/manager/client/openClients";
import {
  Client,
  ClientJson,
  c0,
  AdressLivJson,
  AdressLiv,
  cm0,
  adr0,
} from "tools/types";
import { Field, Form } from "widgets";
import Bsave from "widgets/Bsave";
import {
  openAdressLivProps,
  openAdressLivs,
} from "components/manager/client/openAdressLivs";
import Bcyan from "widgets/Bcyan";
const TestSelect = () => {
  const clientsToOpen: OpenClientProp = openClients();
  const clientJson: ClientJson = clientsToOpen.data;
  const clients: Client[] = clientJson.content;
  const refetchClient: () => void = clientsToOpen.refetch;
  const saveClient = clientsToOpen.save;
  const editClient = clientsToOpen.edit;
  /***********************************************/
  const adressLivsToOpen: openAdressLivProps = openAdressLivs();
  const adressLivJson: AdressLivJson = adressLivsToOpen.data;
  const adressLivs: AdressLiv[] = adressLivJson.content;
  const refetchAdressLiv: () => void = adressLivsToOpen.refetch;
  const saveAdressLiv = adressLivsToOpen.save;
  const editAdressLiv = adressLivsToOpen.edit;
  return (
    <Section>
      <div className="float-left w-full">
        <Form defaultValues={c0} onSubmit={editClient}>
          <Field label="id" name="id" />
          <Field label="design " name="design" />
          <Field
            label="Client"
            name="cococo"
            as="select"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              let c: Client = JSON.parse(e.target.value);
            }}
          >
            {[c0, ...(clients || [])]?.map((c: Client) => (
              <option value={JSON.stringify(c)}>{c.design}</option>
            ))}
          </Field>
          <Field label="email" name="email" />
          <Bsave
            onClick={() => {
              setTimeout(() => {
                refetchClient();
              }, 600);
            }}
          />
        </Form>
        <Bcyan
          onClick={() => {
            refetchClient();
          }}
        >
          reload
        </Bcyan>
      </div>
    </Section>
  );
};

export default TestSelect;
