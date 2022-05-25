
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { AdressLiv, AdressLivJson } from "tools/types";
export const crudAdressLiv = createApi({
    reducerPath: "crud-api",
    baseQuery: fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_URL,
      prepareHeaders(headers) {
        return headers;
      },
    }),
    tagTypes: ["RawMaterial", "Client", "UNAUTHORIZED", "UNKNOWN_ERROR"],
    endpoints(builder) {
      return {

        /****************************************************************************/
      /*************************AdressLiv*******************************************/
      /****************************************************************************/
      fetchAdressLivs: builder.query<AdressLiv[], void>({
        query: () => `/AdressLivs`,
      }),
      paginationAdressLivs: builder.query<AdressLiv[], number>({
        query: (page) => `/AdressLivs?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchAdressLivsByIdClient: builder.query<AdressLiv[], string>({
        query: (idClient) => `/AdressLivs/idclient/${idClient}`,
      }),
      fetchOneAdressLiv: builder.query<AdressLiv, string>({
        query: (id) => `/AdressLivs/${id}`,
      }),
      addAdressLiv: builder.mutation<AdressLiv, Partial<AdressLiv>>({
        query: (body) => ({
          url: `/AdressLivs`,
          method: "POST",
          body,
        })
      }),
      editAdressLiv: builder.mutation<
        AdressLiv,
        Partial<AdressLiv> & Pick<AdressLiv, "id">
      >({
        query: (body) => ({
          url: `/AdressLivs/${body.id}`,
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
            url: `/AdressLivs/${id.id}`,
            method: "DELETE",
          }
        },
      }),
      archiveAdressLiv: builder.mutation<
        AdressLiv,
        Partial<AdressLiv> & Pick<AdressLiv, "id">
      >({
        query: (id) => ({
          url: `/AdressLivs/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreAdressLiv: builder.mutation<
        AdressLiv,
        Partial<AdressLiv> & Pick<AdressLiv, "id">
      >({
        query: (id) => ({
          url: `/AdressLivs/${id}/restore`,
          method: "PUT",
        }),
      }),

      }}})
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
      }=crudAdressLiv

      export type OpenAdressLivProp={
        data:AdressLivJson
        refetch:()=>void
        save:()=>void
        edit:()=>void
      }
      export const openAdressLivs =():OpenAdressLivProp =>{
        const { data = [], refetch } = useFetchAdressLivsQuery();
        const [save]=useAddAdressLivMutation();
        const [edit]=useEditAdressLivMutation();
        //@ts-ignore
        const out:OpenAdressLivProp={data,refetch,save,edit}
        return out;
      }