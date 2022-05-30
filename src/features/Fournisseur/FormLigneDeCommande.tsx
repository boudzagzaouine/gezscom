import { useAddLigneDeCommandeMutation, useEditLigneDeCommandeMutation, useFetchLigneDeCommandeByIdCommandeFournisseurQuery, useFetchLigneDeCommandeByIdMatierePremiereQuery } from "config/rtk";
import { OpenLigneDeCommandeByJoinProp, openLigneDeCommandesByFournisseur } from "config/rtk/rtkFournisseur";
import { useState } from "react";
import { lc0, LigneDeCommande } from "tools/types";
import Bedit from "widgets/Bedit";
import Table from "widgets/Table";
import FormulaireLigneDeCommande from "./FormulaireLigneDeCommande";
const style_add_line = "bg-[#dfdfdf] cursor-pointer";
type LigneDeCommandeProps={
  idCommandeFournisseur:string,
}
const FormLigneDeCommande = ({idCommandeFournisseur}:LigneDeCommandeProps) => {
 //const { data = [], isFetching, refetch } = useFetchLigneDeCommandeByIdCommandeFournisseurQuery(idCommandeFournisseur);
 const ligneDeCommandesOpen:OpenLigneDeCommandeByJoinProp=openLigneDeCommandesByFournisseur(idCommandeFournisseur)
 const ligneDeCommandes:LigneDeCommande[]=ligneDeCommandesOpen.data
 const refetch=ligneDeCommandesOpen.refetch
 const save=ligneDeCommandesOpen.save
 const edit=ligneDeCommandesOpen.edit
  const [selectedIdCommande,setSelectedIdCommande]=useState("new")
  const [formArt,setFormArt]=useState(false)
  const close=()=>{
    setFormArt(false)
    setSelectedIdCommande("new")
  }
  const open=(id:string)=>{
    setFormArt(true)
    setSelectedIdCommande(id)
  }
 return (
    <div>
      <Table className="tab-list float-left w-full mt-8"
        thead={
          <tr>
            <Table.th>Désignation</Table.th>
            <Table.th>Quantité</Table.th>
            <Table.th>Prix unitaire</Table.th>
            <Table.th></Table.th>
          </tr>
        }
      >
        {
          ligneDeCommandes?.map((article) => (
           <>
          <tr key={article.id}>
              <Table.td>{article.designation} </Table.td>
              <Table.td>{article.quantite}</Table.td>
              <Table.td>{article.prix}</Table.td>
              <Table.td>
                <Bedit onClick={()=>{
                  open(article.id)
                }} />
              </Table.td>
            </tr>
            {selectedIdCommande==article.id && formArt && <FormulaireLigneDeCommande ligneCommande={article} close={close} saveArticle={edit}/>}
          </>
          ))
        }
        {selectedIdCommande=="new" && formArt && <FormulaireLigneDeCommande ligneCommande={lc0} close={close} saveArticle={save}/>}
        {
          !formArt && <tr
          onClick={() => {
            open("new")
          }}
        >
          <Table.td className={style_add_line}>ajouter une ligne</Table.td>
          <Table.td className={style_add_line}></Table.td>
          <Table.td className={style_add_line}></Table.td>
          <Table.td className={style_add_line}></Table.td>
        </tr>
        }
      </Table>
    </div>
  );
}
export default FormLigneDeCommande