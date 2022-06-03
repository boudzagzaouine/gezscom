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
  openArticleCommandes,
} from "config/rtk/RtkArticleCommande";
const TestArticleCommande3 = () => {
  const idcom = "9cdc7135-8bda-4513-ba66-43b000a22f4b";
  const artComOpen: OpenArticleCommandeByCommandeProp =
    openArticleCommandesByCommande(idcom);
  const artComs: ArticleCommande[] = artComOpen.data;
  // const openmontant: getMontantProps[] = artComOpen.montants;
  //const montant=openmontant.data
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
      <table className="float-left w-full">
        <thead>
          <tr>
            <th>id</th>
            <th>design</th>
            <th>qte</th>
            <th>pu</th>
            <th>comande</th>
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
              <td>{d.idCommande}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Form defaultValues={adr0} onSubmit={save}>
        <Field label="id" name="id" />
        <Field label="design" name="design" />
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

export default TestArticleCommande3;
