import { RefreshIcon } from "@heroicons/react/solid";
import axios from "axios";
import {
  useFetchArticleCommandesByIdCommandeQuery,
  useFetchArticleCommandesQuery,
  usePaginationArticleCommandesQuery,
  useAddArticleCommandeMutation
} from "config/rtk";
import React, { useState } from "react";
import { arc0, Commande ,ArticleCommande} from "tools/types";
import { Field, Form } from "widgets";
import Bcyan from "widgets/Bcyan";
import Mitems from "widgets/Mitems";
import Pagin from "widgets/Pagin";
import Table from "widgets/Table";
const style_add_line = "bg-[#dfdfdf] cursor-pointer";
type ArticlesCommandeProps={
  commande:Commande
}
const ArticlesCommande = ({commande}:ArticlesCommandeProps) => {
 /*  const [page, setPage] = useState(0);
  const loadPage = (p: number) => {
    setPage(p);
    refetch();
  }; */
  //@ts-ignore
  const { data = [], isFetching, refetch } = usePaginationArticleCommandesQuery(0);
  const [formArt,setFormArt]=useState(false)
  const articles:ArticleCommande[]=commande.articleCommandes
 // const [saveArticle] = useAddArticleCommandeMutation()
    const saveArticle=(art:ArticleCommande)=>{
    art.idCommande=commande.id
     axios.post('http://localhost:1000/api/v1/articlecommandes/post',art).then(()=>{
      refetch()
     })
   } 
  return (
    <div>
      <Table
        className="tab-list float-left w-full mt-8"
        thead={
          <tr>
            <Table.th>code</Table.th>
            <Table.th>commande</Table.th>
            <Table.th>designation</Table.th>
            <Table.th>quantité</Table.th>
            <Table.th>portion</Table.th>
            <Table.th>p.u</Table.th>
            <Table.th></Table.th>
          </tr>
        }
      >
        {
          //@ts-ignore
          data.content?.map((article) => (
         // articles?.map((article) => (
          article.idCommande==commande.id && <tr key={article.id}>
              <Table.td>{article.id}</Table.td>
              <Table.td>{article.idCommande} </Table.td>
              <Table.td>{article.design} </Table.td>
              <Table.td>{article.qte}</Table.td>
              <Table.td>{article.portion}</Table.td>
              <Table.td>{article.pu}</Table.td>
              <Table.td></Table.td>
            </tr>
          ))
        }
       { formArt &&  <tr className="relative">
<div className="absolute left-0 top-0">
<Form defaultValues={arc0} onSubmit={saveArticle}>
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
                ajouter
              </Bcyan></div>
            </Table.td>
          </Form>
          <Table.td>
          <div className="float-right w-full">
                 <Bcyan className="absolute right-0" onClick={() => {
            setFormArt(false)
          }}>
               fermer
              </Bcyan></div>
              </Table.td>
</div>
        </tr>}
        {
          !formArt && <tr
          onClick={() => {
            setFormArt(true)
          }}
        >
          <Table.td className={style_add_line}>ajouter une ligne</Table.td>
          <Table.td className={style_add_line}></Table.td>
          <Table.td className={style_add_line}></Table.td>
          <Table.td className={style_add_line}></Table.td>
          <Table.td className={style_add_line}></Table.td>
          <Table.td className={style_add_line}></Table.td>
          <Table.td className={style_add_line}></Table.td>
        </tr>
        }
      </Table>
    </div>
  );
};

export default ArticlesCommande;
