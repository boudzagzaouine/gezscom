import { useFetchClientsQuery } from "config/rtk";
export const refetchClient =():void =>{
  const { refetch } = useFetchClientsQuery();
 refetch();
}
