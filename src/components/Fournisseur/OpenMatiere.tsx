import { useFetchMatierePremiereQuery } from "config/rtk";
import { MatierePremiere } from "tools/types";
export const OpenMatiere = (): MatierePremiere[] => {
  const { data = [], isFetching, refetch } = useFetchMatierePremiereQuery();
  refetch();
  //@ts-ignore
  return data.content;
};
