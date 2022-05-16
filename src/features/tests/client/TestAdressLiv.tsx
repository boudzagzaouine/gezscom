
import { 
  useFetchAdressLivsQuery,
  usePaginationAdressLivsQuery,
  useFetchAdressLivsByIdClientQuery,
  useFetchOneAdressLivQuery,
  useAddAdressLivMutation,
  useEditAdressLivMutation,
  useDeleteAdressLivMutation,
  useArchiveAdressLivMutation,
  useRestoreAdressLivMutation,
    } from "config/rtk";
  import ListTest from "features/manager/client/ListTest";
  import { useRef, useState } from "react";
  import { AdressLiv,cm0 } from "tools/types";
  import Section from "widgets/Section";
  import { Field, Form } from "widgets";
  import Bsave from "widgets/Bsave";
  import { dematerialize } from "rxjs";
  export default function TestAdressLiv() {
    const go:boolean=true
    const close:boolean=false
    //@ts-ignore
   const { data = [], isFetching, refetch } =  usePaginationAdressLivsQuery(0);
   // const { data = [], refetch } =  useFetchAdressLivsByIdClientQuery("a5bec75c-753b-4dce-9e93-d3b4a08de6f3");
    //@ts-ignore
    const [cls,setCls]=useState<Client[]>(data.content)
    const reload=()=>{
  refetch()
  setTimeout(() => {
    //@ts-ignore
  setCls(data.content)
  }, 200);
  }
    const [save]=useAddAdressLivMutation();
    const [edit]=useEditAdressLivMutation();
    console.log(data)
    return (
      <>
      {
        go &&   <Section>
        <table className="float-left w-full">
          <thead>
            <tr><th>id</th><th>id client</th><th>adress</th></tr>
          </thead>
          <tbody>
            {
            //@ts-ignore
            data.content?.map((d:AdressLiv)=>(
       //     data?.map((d:AdressLiv)=>(
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.idClient}</td>
                <td>{d.adress}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Form defaultValues={cm0} onSubmit={save}>
                  <Field label="id" name="id"  />
                  <Field label="idClient" name="idClient"  />
                   <Field label="adress" name="adress"  />
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
  