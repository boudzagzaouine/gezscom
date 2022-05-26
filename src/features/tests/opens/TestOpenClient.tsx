import Section from "widgets/Section";
import React from "react";
import { OpenClientProp, openClients } from "config/rtk/RtkClient";
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
  OpenAdressLivProp,
  OpenAdressLivByIdClientProp,
  openAdressLivs,
  openAdressLivsByIdClient,
} from "config/rtk/RtkAdressLiv";
import Bcyan from "widgets/Bcyan";
import Pagin from "widgets/Pagin";
const TestOpenClient = () => {
  const clientsToOpen: OpenClientProp = openClients();
  const clientJson: ClientJson = clientsToOpen.data;
  const clients: Client[] = clientJson.content;
  const refetchClient: () => void = clientsToOpen.refetch;
  const saveClient = clientsToOpen.save;
  const editClient = clientsToOpen.edit;
  /***********************************************/
  const adressLivsToOpen: OpenAdressLivByIdClientProp =
    openAdressLivsByIdClient("24aada24-6ab5-461b-89e6-a9be5fa14c82");
  ///  const adressLivJson: AdressLivJson =adressLivsToOpen.data
  const adressLivs: AdressLiv[] = adressLivsToOpen.data;
  const refetchAdressLiv: () => void = adressLivsToOpen.refetch;
  const saveAdressLiv = adressLivsToOpen.save;
  const editAdressLiv = adressLivsToOpen.edit;
  return (
    <Section>
      <div className="float-left w-1/2 hidden">
        <table className="float-left w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>design</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {
              //@ts-ignore
              clients?.map((d: Client) => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.design}</td>
                  <td>{d.email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Form defaultValues={c0} onSubmit={editClient}>
          <Field label="id" name="id" />
          <Field label="design " name="design" />
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
      <div className="float-left w-1/2">
        <table className="float-left w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>adress</th>
            </tr>
          </thead>
          <tbody>
            {
              //@ts-ignore
              adressLivs?.map((d: AdressLiv) => (
                //     data?.map((d:AdressLiv)=>(
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.adress}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Form defaultValues={adr0} onSubmit={saveAdressLiv}>
          <Field label="id" name="id" />
          <Field label="adress" name="adress" />
          <Field label="client" name="idClient" />
          <Bsave
            onClick={() => {
              setTimeout(() => {
                refetchAdressLiv();
              }, 600);
            }}
          />
        </Form>
      </div>
    </Section>
  );
};

export default TestOpenClient;
