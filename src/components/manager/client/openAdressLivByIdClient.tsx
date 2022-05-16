import { useFetchAdressLivsByIdClientQuery } from "config/rtk";
import { AdressLiv } from "tools/types";

export const openAdressLivByIdClient =(idClient:string):AdressLiv[] =>{
  const { data = [], refetch } = useFetchAdressLivsByIdClientQuery(idClient);
  refetch()
  //@ts-ignore
  return data;
}
