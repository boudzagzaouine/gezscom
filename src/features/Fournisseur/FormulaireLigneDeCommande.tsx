


import React, { ChangeEvent, useState } from 'react'
import { Field, Form} from "widgets";
import {  LigneDeCommande, MatierePremiere, mp0} from "tools/types";
import Table from "widgets/Table";
import Bcancel from 'widgets/Bcancel';
import Bsave from 'widgets/Bsave';
import { OpenMatierePremiereProp, openMatierePremieres } from 'config/rtk/rtkFournisseur';
import Bcyan from 'widgets/Bcyan';
type FormLignedeCommandeProp={
    ligneCommande:LigneDeCommande
    idfournisseur:string
    saveArticle:(art:LigneDeCommande)=>void
    refetch:()=>void
    close:()=>void
}
const FormulaireLigneDeCommande = ({ligneCommande,saveArticle,close,refetch}:FormLignedeCommandeProp) => {
  const matierePremieresOpen:OpenMatierePremiereProp=openMatierePremieres()
  const matiere:MatierePremiere[]=matierePremieresOpen.data.content
  const [ligneCommande0,setLigneCommande0]=useState(ligneCommande)
  return (
    <>
    <tr className="relative">
<div className="absolute left-0 top-0 bg-[#ccc]">
  <Bcyan onClick={()=>{
   // alert(JSON.stringify())
  }} >test</Bcyan>
<Form defaultValues={ligneCommande0} onSubmit={saveArticle}>
            <Table.td>
              <Field name="idMatierePremiere" placeholder="Désignation" as="select" optionKeyName="id" options={[mp0,...(matiere||[])]} optionLabelName="designation" />
              {/* <Field
                placeholder="Matiere Prmiere" 
                name="idMatierePremiere"
                as="select"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  let c: Client = JSON.parse(e.target.value);
                  setClient0(c);
                }}
              >
                {[c0, ...(clients0 || [])]?.map((c: Client) => (
                  <option value={JSON.stringify(c)}>{c.design}</option>
                ))}
              </Field> */}
            </Table.td>
            <Table.td>
              <Field name="quantite" placeholder="Quantité"/>
            </Table.td>
            <Table.td>
              <Field name="prix" placeholder="Prix" />
            </Table.td>
            <Table.td>
              <div className="float-right w-full">
                <Bsave
                  onClick={() => {
                    setTimeout(() => {
                      refetch();
                    }, 500);
                  }}
                />
              </div>
            </Table.td>
          </Form>
          <div className="float-right w-full">
            <Bcancel
              className="absolute right-0"
              onClick={() => {
                close();
              }}
            />
          </div>
        </div>
      </tr>
    </>
  )
}

export default FormulaireLigneDeCommande