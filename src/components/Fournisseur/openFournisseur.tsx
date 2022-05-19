import { useFetchFournisseursQuery } from "config/rtk";
import { Fournisseur } from "tools/types";
export const openFournisseurs =():Fournisseur[] =>{
  const { data = [], refetch } = useFetchFournisseursQuery();
  refetch()
  //@ts-ignore
  return data.content;
}