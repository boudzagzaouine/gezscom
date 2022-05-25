import { useFetchAdressLivsQuery } from "config/rtk/RtkAdressLiv";
import { AdressLiv } from "tools/types";

export const refetchAdressLivs =():void =>{
  const { refetch } = useFetchAdressLivsQuery();
  refetch();
}
