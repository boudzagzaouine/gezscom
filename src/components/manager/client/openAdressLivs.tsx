import {
  useAddAdressLivMutation,
  useEditAdressLivMutation,
  useFetchAdressLivsQuery,
} from "config/rtk/RtkAdressLiv";
import { AdressLivJson } from "tools/types";
export type openAdressLivProps = {
  data: AdressLivJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
export const openAdressLivs = (): openAdressLivProps => {
  const { data = [], refetch } = useFetchAdressLivsQuery();
  const [save] = useAddAdressLivMutation();
  const [edit] = useEditAdressLivMutation();
  //@ts-ignore
  const out: openAdressLivProps = { data, refetch, save, edit };
  return out;
};
