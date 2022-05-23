import { useAddAdressLivMutation, useEditAdressLivMutation, useFetchAdressLivsByIdClientQuery } from "config/rtk";
import { AdressLiv, AdressLivJson ,Client} from "tools/types";
export type openAdressLivByIdClientProps={
  data:AdressLiv[]
  refetch:()=>void
  save:()=>void
  edit:()=>void
}
export const openAdressLivByIdClient =(idClient:string):openAdressLivByIdClientProps =>{
  const { data = [], refetch } = useFetchAdressLivsByIdClientQuery(idClient);
  const [save]=useAddAdressLivMutation();
  const [edit]=useEditAdressLivMutation();
  
  //@ts-ignore
  const out:openAdressLivByIdClientProps={data,refetch,save,edit}
  return out;
}
    