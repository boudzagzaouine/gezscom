import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { AdressLiv, AdressLivJson } from "tools/types";
export const crudAdressLiv = createApi({
  reducerPath: "crud-adressliv",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["AdressLiv", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
      /****************************************************************************/
      /*************************AdressLiv*******************************************/
      /****************************************************************************/
      fetchAdressLivs: builder.query<AdressLiv[], void>({
        query: () => `/adressLivs`,
      }),
      paginationAdressLivs: builder.query<AdressLiv[], number>({
        query: (page) => `/adressLivs?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchAdressLivsByIdClient: builder.query<AdressLiv[], string>({
        query: (idClient) => `/adressLivs/idclient/${idClient}`,
      }),
      fetchOneAdressLiv: builder.query<AdressLiv, string>({
        query: (id) => `/adressLivs/${id}`,
      }),
      addAdressLiv: builder.mutation<AdressLiv, Partial<AdressLiv>>({
        query: (body) => ({
          url: `/adressLivs`,
          method: "POST",
          body,
        }),
      }),
      editAdressLiv: builder.mutation<
        AdressLiv,
        Partial<AdressLiv> & Pick<AdressLiv, "id">
      >({
        query: (body) => ({
          url: `/adressLivs/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteAdressLiv: builder.mutation<
        { success: boolean; id: number },
        number
      >({
        //@ts-ignore
        query(id: Num) {
          return {
            url: `/adressLivs/${id.id}`,
            method: "DELETE",
          };
        },
      }),
      archiveAdressLiv: builder.mutation<
        AdressLiv,
        Partial<AdressLiv> & Pick<AdressLiv, "id">
      >({
        query: (id) => ({
          url: `/adressLivs/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreAdressLiv: builder.mutation<
        AdressLiv,
        Partial<AdressLiv> & Pick<AdressLiv, "id">
      >({
        query: (id) => ({
          url: `/adressLivs/${id}/restore`,
          method: "PUT",
        }),
      }),
    };
  },
});
export const {
  useFetchAdressLivsQuery,
  usePaginationAdressLivsQuery,
  useFetchAdressLivsByIdClientQuery,
  useFetchOneAdressLivQuery,
  useAddAdressLivMutation,
  useEditAdressLivMutation,
  useDeleteAdressLivMutation,
  useArchiveAdressLivMutation,
  useRestoreAdressLivMutation,
} = crudAdressLiv;

export type OpenAdressLivProp = {
  data: AdressLivJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
export type OpenAdressLivByIdClientProp = {
  data: AdressLiv[];
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
export const openAdressLivs = (): OpenAdressLivProp => {
  const { data = [], refetch } = useFetchAdressLivsQuery();
  const [save] = useAddAdressLivMutation();
  const [edit] = useEditAdressLivMutation();
  //@ts-ignore
  const out: OpenAdressLivProp = { data, refetch, save, edit };
  return out;
};
export const openAdressLivsByIdClient = (
  idClient: string
): OpenAdressLivByIdClientProp => {
  const { data = [], refetch } = useFetchAdressLivsByIdClientQuery(idClient);
  const [save] = useAddAdressLivMutation();
  const [edit] = useEditAdressLivMutation();
  //@ts-ignore
  const out: OpenAdressLivByIdClientProp = { data, refetch, save, edit };
  return out;
};
