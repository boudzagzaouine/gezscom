import React from 'react'
import { Field, Form} from "widgets";
import Bcyan from "widgets/Bcyan";
import { arc0, Commande ,ArticleCommande} from "tools/types";
import Table from "widgets/Table";
type FormArticleCommandeProp={
    articleCommande:ArticleCommande
    saveArticle:(art:ArticleCommande)=>void
    close:()=>void
}
const FormArticleCommande = ({articleCommande,saveArticle,close}:FormArticleCommandeProp) => {
    
  return (
    <>
    <tr className="relative">
<div className="absolute left-0 top-0 bg-[#ccc]">
<Form defaultValues={articleCommande} onSubmit={saveArticle}>
            <Table.td>
              <Field name="design" placeholder="design" />
            </Table.td>
            <Table.td>
              <Field name="qte" placeholder="qte" />
            </Table.td>
            <Table.td>
              <Field name="portion" placeholder="portion" />
            </Table.td>
            <Table.td>
              <Field name="pu" placeholder="pu" />
             </Table.td>
            <Table.td>
            <div className="float-left w-full">
                 <Bcyan>
                {articleCommande.id==""?"ajouter":"modifier"}
              </Bcyan></div>
            </Table.td>
          </Form>
          <div className="float-right w-full">
                 <Bcyan className="absolute right-0" onClick={() => {
            close()
          }}>
               fermer
              </Bcyan></div>
             
</div>
        </tr>
    </>
  )
}

export default FormArticleCommande