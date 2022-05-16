import { useFetchAdressLivsQuery } from "config/rtk";
import { AdressLiv } from "tools/types";

export const openAdressLivs =():AdressLiv[] =>{
  const { data = [], refetch } = useFetchAdressLivsQuery();
  refetch()
  //@ts-ignore
  return data.content;
}
