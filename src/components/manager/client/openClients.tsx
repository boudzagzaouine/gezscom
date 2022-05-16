import { useFetchClientsQuery } from "config/rtk";
import { Client } from "tools/types";
export const openClients =():Client[] =>{
  const { data = [], refetch } = useFetchClientsQuery();
  refetch()
  //@ts-ignore
  return data.content;
}
