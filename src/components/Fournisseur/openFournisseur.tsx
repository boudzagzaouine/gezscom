import { useFetchFournisseursQuery } from "config/rtk";
import { Fournisseur, getFournisseur } from "tools/types";
export const openFournisseurs =():Fournisseur[] =>{
  const { data = [], isFetching, refetch } = useFetchFournisseursQuery();
  refetch()
  //@ts-ignore
  return data.content;
}