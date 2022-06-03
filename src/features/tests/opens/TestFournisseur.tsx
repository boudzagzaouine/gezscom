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
  Fournisseur,
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
import {
  OpenFournisseurProp,
  openFournisseurs,
  openPaginationFournisseurs,
} from "config/rtk/rtkFournisseur";
const TestFournisseur = () => {
  const idcom = "e6ac48fc-b2c1-4f9b-9a26-b811bca498a1";
  const fournOpen: OpenFournisseurProp = openPaginationFournisseurs(0);
  const fourns: Fournisseur[] = fournOpen.data.content;
  const refetch = fournOpen.refetch;
  const save = fournOpen.save;
  //openFournisseursByCommande = (idcom:string): OpenFournisseurProp
  return (
    <Section>
      <table className="float-left w-full">
        <thead>
          <tr>
            <th>id</th>
            <th>raisonSociale</th>
          </tr>
        </thead>
        <tbody>
          {fourns?.map((d: Fournisseur) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.raisonSociale}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Form defaultValues={adr0} onSubmit={save}>
        <Field label="id" name="id" />
        <Field label="raisonSociale" name="raisonSociale" />
        <Bsave
          onClick={() => {
            setTimeout(() => {
              refetch();
            }, 600);
          }}
        />
      </Form>
    </Section>
  );
};

export default TestFournisseur;
