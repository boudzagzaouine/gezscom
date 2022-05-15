
import { 
   useFetchCommandesQuery,
    usePaginationCommandesQuery,
    useFetchcommandesByIdClientQuery,
    useFetchOneCommandeQuery,
    useAddCommandeMutation,
    useEditCommandeMutation,
    useDeleteCommandeMutation,
    useArchiveCommandeMutation,
    useRestoreCommandeMutation,
    } from "config/rtk";
  import ListTest from "features/manager/client/ListTest";
  import { useRef, useState } from "react";
  import { Commande,cm0 } from "tools/types";
  import Section from "widgets/Section";
  import { Field, Form } from "widgets";
  import Bsave from "widgets/Bsave";
  import { dematerialize } from "rxjs";
  export default function TestCommande() {
    const go:boolean=true
    const close:boolean=false
    //@ts-ignore
    const cm1:Commande={"id":"43cc3483-1e96-4f00-acce-c2091ba498e3","date":"2022-05-14T17:10:19.091+00:00","season":"saison 5215","amount":10430.0,"idClient":"bae9ef60-b3ea-4934-81e8-2c6dd3498fb3","adrLiv":""};
    //const { data = [], isFetching, refetch } =  usePaginationCommandesQuery(0);
    const { data = [], refetch } =  useFetchcommandesByIdClientQuery("42e8d8ec-ac63-455e-badc-08ec7feb3b3b");
    //@ts-ignore
    const [cls,setCls]=useState<Client[]>(data.content)
    const reload=()=>{
  refetch()
  setTimeout(() => {
    //@ts-ignore
  setCls(data.content)
  }, 200);
  }
    const [save]=useAddCommandeMutation();
    const [edit]=useEditCommandeMutation();
    console.log(data)
    return (
      <>
      {
        go &&   <Section>
        <table className="float-left w-full">
          <thead>
            <tr><th>id</th><th>id client</th><th>saison</th></tr>
          </thead>
          <tbody>
            {
            //@ts-ignore
            data?.map((d:Commande)=>(
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.idClient}</td>
                <td>{d.season}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Form defaultValues={cm0} onSubmit={edit}>
                  <Field label="id" name="id"  />
                  <Field label="idClient" name="idClient"  />
                   <Field label="season" name="season"  />
                   <Bsave onClick={()=>{
                     setTimeout(() => {
                       refetch()
                     }, 600);
                   }} />
     
             </Form>
            
           </Section>   
      }
      </>
    );
  }
  