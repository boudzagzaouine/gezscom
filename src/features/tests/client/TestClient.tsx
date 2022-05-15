
import { useFetchClientsQuery,
    usePaginationClientsQuery,
    useFetchOneClientQuery,
    useAddClientMutation,
    useEditClientMutation,
    useDeleteClientMutation,
    useArchiveClientMutation,
    useRestoreClientMutation,
    /*******************************************************/
    /*******************************************************/
    useFetchCommandesQuery,
    usePaginationCommandesQuery,
    useFetchcommandesByIdClientQuery,
    useFetchOneCommandeQuery,
    useAddCommandeMutation,
    useEditCommandeMutation,
    useDeleteCommandeMutation,
    useArchiveCommandeMutation,
    useRestoreCommandeMutation,
    /***********useMaMethodAfficjageQuery********************************************/
    /***********useMaMethodeOperationMutaion********************************************/
    useFetchArticleCommandesQuery,
    useFetchArticleCommandesByIdCommandeQuery,
    usePaginationArticleCommandesQuery,
    useFetchOneArticleCommandeQuery,
    useAddArticleCommandeMutation,
    useEditArticleCommandeMutation,
    useDeleteArticleCommandeMutation,
    useArchiveArticleCommandeMutation,
    useRestoreArticleCommandeMutation } from "config/rtk";
  import ListTest from "features/manager/client/ListTest";
  import { useRef, useState } from "react";
  import { Client } from "tools/types";
  import Section from "widgets/Section";
  import { Field, Form } from "widgets";
  import { c0 } from "tools/types";
  import Bsave from "widgets/Bsave";
  import { dematerialize } from "rxjs";
  export default function TestClient() {
    const go:boolean=true
    const close:boolean=false
    //@ts-ignore
    const c1:Client={"id":"228a0c7a-bf96-4bb1-8263-a43b0d043a58","image":"","design":"Mohamed","concat":"Mohamed","email":"Mohamed@gmail.com","tel":"","device":"MAD","adrLiv":"","incoterm":"","paymentChoice":"","adrFact":"","bank":"","rib":"","swift":""}
    const { data = [], isFetching, refetch } =  usePaginationClientsQuery(0);
    //@ts-ignore
    const [cls,setCls]=useState<Client[]>(data.content)
    const reload=()=>{
  refetch()
  setTimeout(() => {
    //@ts-ignore
  setCls(data.content)
  }, 200);
  }
    const [save]=useAddClientMutation();
    const [edit]=useEditClientMutation();
    console.log(data)
    return (
      <>
      {
        go &&   <Section>
        <table className="float-left w-full">
          <thead>
            <tr><th>id</th><th>design</th><th>email</th></tr>
          </thead>
          <tbody>
            {
            //@ts-ignore
            data.content?.map((d:Client)=>(
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.design}</td>
                <td>{d.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Form defaultValues={c1} onSubmit={edit}>
                  <Field label="id" name="id"  />
                  <Field label="design " name="design"  />
                   <Field label="email" name="email"  />
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
  