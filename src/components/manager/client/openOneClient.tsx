import { useFetchOneClientQuery } from "config/rtk";
import { Client } from "tools/types";
export const openOneClient =(id:string):Client =>{
  const { data = [], refetch } = useFetchOneClientQuery(id);
  refetch()
  //@ts-ignore
  return data;
}
