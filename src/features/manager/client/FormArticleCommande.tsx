import React from 'react'
import { Field, Form} from "widgets";
import Bcyan from "widgets/Bcyan";
import { arc0, Commande ,ArticleCommande} from "tools/types";
import Table from "widgets/Table";
import Bcancel from 'widgets/Bcancel';
import Bsave from 'widgets/Bsave';
type FormArticleCommandeProp={
    articleCommande:ArticleCommande
    saveArticle:(art:ArticleCommande)=>void
    close:()=>void
    refetch:()=>void
}
const FormArticleCommande = ({articleCommande,saveArticle,close,refetch}:FormArticleCommandeProp) => {
    
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
            <div className="float-right w-full">
                 <Bsave onClick={()=>{
                   setTimeout(() => {
                    refetch()
                   }, 500);
                 }} />
               </div>
            </Table.td>
          </Form>
          <div className="float-right w-full">
                 <Bcancel className="absolute right-0" onClick={() => {
            close()
          }} />
               </div>
             
</div>
        </tr>
    </>
  )
}

export default FormArticleCommande