
import { 
  useFetchArticleCommandesQuery,
  useFetchArticleCommandesByIdCommandeQuery,
  usePaginationArticleCommandesQuery,
  useFetchOneArticleCommandeQuery,
  useAddArticleCommandeMutation,
  useEditArticleCommandeMutation,
  useDeleteArticleCommandeMutation,
  useArchiveArticleCommandeMutation,
  useRestoreArticleCommandeMutation
    } from "config/rtk";
  import ListTest from "features/manager/client/ListTest";
  import { useRef, useState } from "react";
  import { ArticleCommande,arc0 } from "tools/types";
  import Section from "widgets/Section";
  import { Field, Form } from "widgets";
  import Bsave from "widgets/Bsave";
  import { dematerialize } from "rxjs";
  export default function TestArticleCommande() {
   //@ts-ignore
  // const { data = [], isFetching, refetch } =  useFetchArticleCommandesQuery();
    const { data = [], isFetching, refetch } =  useFetchArticleCommandesByIdCommandeQuery("9cdc7135-8bda-4513-ba66-43b000a22f4b");
    //@ts-ignore
    const [cls,setCls]=useState<Client[]>(data.content)
    const reload=()=>{
  refetch()
  setTimeout(() => {
    //@ts-ignore
  setCls(data.content)
  }, 200);
  }
    const [save]=useAddArticleCommandeMutation();
    const [edit]=useEditArticleCommandeMutation();
    console.log(data)
    return (
      <>
       <Section>
        <table className="float-left w-full">
          <thead>
            <tr><th>id</th><th>id commande</th><th>saison</th></tr>
          </thead>
          <tbody>
            {
            //@ts-ignore
            data?.map((d:ArticleCommande)=>(
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.idCommande}</td>
                <td>{d.design}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Form defaultValues={arc0} onSubmit={save}>
                  <Field label="id" name="id"  />
                  <Field label="idCommande" name="idCommande"  />
                   <Field label="design" name="design"  />
                   <Bsave onClick={()=>{
                     setTimeout(() => {
                       refetch()
                     }, 600);
                   }} />
     
             </Form>
            
           </Section>   
      
      </>
    );
  }
  