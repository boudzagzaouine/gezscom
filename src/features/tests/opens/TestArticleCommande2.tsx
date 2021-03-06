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
  ArticleCommande,
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
  OpenArticleCommandeByCommandeProp,
  OpenArticleCommandeProp,
  openArticleCommandesByCommande,
  getMontantProps,
} from "config/rtk/RtkArticleCommande";
const TestArticleCommande2 = () => {
  const idcom = "e6ac48fc-b2c1-4f9b-9a26-b811bca498a1";
  const artComOpen: OpenArticleCommandeByCommandeProp =
    openArticleCommandesByCommande(idcom);
  const artComs: ArticleCommande[] = artComOpen.data;
  const openmontant: getMontantProps = artComOpen.montant;
  const montant = openmontant.data;
  const refetch = artComOpen.refetchArtCom;
  /* const refetchMontant=openmontant.refetch
  const refetch=()=>{
    refetchArt()
    refetchMontant()
  }*/
  const save = artComOpen.save;
  //openArticleCommandesByCommande = (idcom:string): OpenArticleCommandeProp
  return (
    <Section>
      <ul>
        <li>command: {idcom}</li>
        <li>montant:{montant}</li>
      </ul>
      <table className="float-left w-full">
        <thead>
          <tr>
            <th>id</th>
            <th>design</th>
            <th>qte</th>
            <th>pu</th>
          </tr>
        </thead>
        <tbody>
          {artComs?.map((d: ArticleCommande) => (
            //     data?.map((d:AdressLiv)=>(
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.design}</td>
              <td>{d.qte}</td>
              <td>{d.pu}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Form defaultValues={adr0} onSubmit={save}>
        <Field label="id" name="id" />
        <Field label="design" name="design" />
        <Field label="qte" name="qte" />
        <Field label="pu" name="pu" />
        <Field label="idCommande" name="idCommande" />
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

export default TestArticleCommande2;
