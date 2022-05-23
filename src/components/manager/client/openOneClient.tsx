import { useAddClientMutation, useEditClientMutation, useFetchOneClientQuery } from "config/rtk";
import { Client} from "tools/types";
export type OpenOneClientProp={
  data:Client
  refetch:()=>void
  save:()=>void
  edit:()=>void
}
export const openOneClient =(id:string):OpenOneClientProp =>{
  const { data = [], refetch } = useFetchOneClientQuery(id);
  const [save]=useAddClientMutation();
  const [edit]=useEditClientMutation();
  //@ts-ignore
  const out:OpenOneClientProp={data,refetch,save,edit}
  return out;
}
