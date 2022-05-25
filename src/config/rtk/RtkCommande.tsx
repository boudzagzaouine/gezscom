
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { Commande, CommandeJson } from "tools/types";
export const crudCommande = createApi({
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
      /*************************COMMANDE*******************************************/
      /****************************************************************************/
      fetchCommandes: builder.query<Commande[], void>({
        query: () => `/commandes`,
      }),
      paginationCommandes: builder.query<Commande[], number>({
        query: (page) => `/commandes?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchcommandesByIdClient: builder.query<Commande[], string>({
        query: (idClient) => `/commandes/idclient/${idClient}`,
      }),
      fetchOneCommande: builder.query<Commande, string>({
        query: (id) => `/commandes/${id}`,
      }),
      addCommande: builder.mutation<Commande, Partial<Commande>>({
        query: (body) => ({
          url: `/commandes`,
          method: "POST",
          body,
        })
      }),
      editCommande: builder.mutation<
        Commande,
        Partial<Commande> & Pick<Commande, "id">
      >({
        query: (body) => ({
          url: `/commandes/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteCommande: builder.mutation<
        { success: boolean; id: number },
        number
      >({
        //@ts-ignore
        query(id: Num) {
          return {
            url: `/commandes/${id.id}`,
            method: "DELETE",
          }
        },
      }),
      archiveCommande: builder.mutation<
        Commande,
        Partial<Commande> & Pick<Commande, "id">
      >({
        query: (id) => ({
          url: `/commandes/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreCommande: builder.mutation<
        Commande,
        Partial<Commande> & Pick<Commande, "id">
      >({
        query: (id) => ({
          url: `/commandes/${id}/restore`,
          method: "PUT",
        }),
      }),

      }}})
      export const {
        useFetchCommandesQuery,
        usePaginationCommandesQuery,
        useFetchcommandesByIdClientQuery,
        useFetchOneCommandeQuery,
        useAddCommandeMutation,
        useEditCommandeMutation,
        useDeleteCommandeMutation,
        useArchiveCommandeMutation,
        useRestoreCommandeMutation,
      }=crudCommande

      export type OpenCommandeProp={
        data:CommandeJson
        refetch:()=>void
        save:()=>void
        edit:()=>void
      }
      export const openCommandes =():OpenCommandeProp =>{
        const { data = [], refetch } = useFetchCommandesQuery();
        const [save]=useAddCommandeMutation();
        const [edit]=useEditCommandeMutation();
        //@ts-ignore
        const out:OpenCommandeProp={data,refetch,save,edit}
        return out;
      }
      export const openCommandesPagination =(page:number):OpenCommandeProp =>{
        const { data = [], refetch } = usePaginationCommandesQuery(page);
        const [save]=useAddCommandeMutation();
        const [edit]=useEditCommandeMutation();
        //@ts-ignore
        const out:OpenCommandeProp={data,refetch,save,edit}
        return out;
      }