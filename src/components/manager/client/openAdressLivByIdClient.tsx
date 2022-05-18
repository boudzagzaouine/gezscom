import { useFetchAdressLivsByIdClientQuery } from "config/rtk";
import { AdressLivJson } from "tools/types";
export type openAdressLivByIdClientProps={
  data:AdressLivJson
  refetch:()=>void
  save:()=>void
  edit:()=>void
}
export const openAdressLivByIdClient =(idClient:string):openAdressLivByIdClientProps =>{
  const { data = [], refetch } = useFetchAdressLivsByIdClientQuery(idClient);
  //@ts-ignore
  const out:openAdressLivByIdClientProps={data,refetch}
  return out;
}
