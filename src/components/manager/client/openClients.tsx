import { useAddClientMutation, useEditClientMutation, useFetchClientsQuery,usePaginationClientsQuery } from "config/rtk/RtkClient";
import { ClientJson } from "tools/types";
export type OpenClientProp={
  data:ClientJson
  refetch:()=>void
  save:()=>void
  edit:()=>void
}
export const openClients =():OpenClientProp =>{
  const { data = [], refetch } = useFetchClientsQuery();
  const [save]=useAddClientMutation();
  const [edit]=useEditClientMutation();
  //@ts-ignore
  const out:OpenClientProp={data,refetch,save,edit}
  return out;
}
