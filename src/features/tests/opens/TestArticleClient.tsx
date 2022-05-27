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
  ArticleClient,
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
  OpenArticleClientByClientProp,
  OpenArticleClientProp,
  openArticleClientsByClient,
  getMontantProps,
  openArticleClients,
} from "config/rtk/RtkArticleClient";
const TestArticleClient = () => {
  const idcom = "24aada24-6ab5-461b-89e6-a9be5fa14c82";
  const artComOpen: OpenArticleClientByClientProp = openArticleClientsByClient(idcom);
  const artComs: ArticleClient[] = artComOpen.data;
  //const montant=openmontant.data
  const refetch = artComOpen.refetch;
  /* const refetchMontant=openmontant.refetch
  const refetch=()=>{
    refetchArt()
    refetchMontant()
  }*/
  const save = artComOpen.save;
  //openArticleClientsByClient = (idcom:string): OpenArticleClientProp
  return (
    <Section>
      <table className="float-left w-full">
        <thead>
          <tr>
            <th>id</th>
            <th>design</th>
            <th>famille art</th>
            <th>fourn</th>
            <th>client</th>
          </tr>
        </thead>
        <tbody>
          {artComs?.map((d: ArticleClient) => (
            //     data?.map((d:AdressLiv)=>(
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.design}</td>
              <td>{d.idFamilleArticle}</td>
              <td>{d.idFournisseur}</td>
              <td>{d.idClient}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Form defaultValues={adr0} onSubmit={save}>
        <Field label="id" name="id" />
        <Field label="design" name="design" />
       <Field label="idFamilleArticle" name="idFamilleArticle" />
       <Field label="idFournisseur" name="idFournisseur" />
       <Field label="idClient" name="idClient" />
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

export default TestArticleClient;
