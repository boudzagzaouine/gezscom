
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { ArticleCommande, ArticleCommandeJson } from "tools/types";
export const crudArticleCommande = createApi({
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
      /*************************ArticleCommande*******************************************/
      /****************************************************************************/
      fetchArticleCommandes: builder.query<ArticleCommande[], void>({
        query: () => `/ArticleCommandes`,
      }),
      paginationArticleCommandes: builder.query<ArticleCommande[], number>({
        query: (page) => `/ArticleCommandes?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchArticleCommandesByIdCommande: builder.query<ArticleCommande[], string>({
        query: (idClient) => `/ArticleCommandes/idclient/${idClient}`,
      }),
      fetchOneArticleCommande: builder.query<ArticleCommande, string>({
        query: (id) => `/ArticleCommandes/${id}`,
      }),
      addArticleCommande: builder.mutation<ArticleCommande, Partial<ArticleCommande>>({
        query: (body) => ({
          url: `/ArticleCommandes`,
          method: "POST",
          body,
        })
      }),
      editArticleCommande: builder.mutation<
        ArticleCommande,
        Partial<ArticleCommande> & Pick<ArticleCommande, "id">
      >({
        query: (body) => ({
          url: `/ArticleCommandes/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteArticleCommande: builder.mutation<
        { success: boolean; id: number },
        number
      >({
        //@ts-ignore
        query(id: Num) {
          return {
            url: `/ArticleCommandes/${id.id}`,
            method: "DELETE",
          }
        },
      }),
      archiveArticleCommande: builder.mutation<
        ArticleCommande,
        Partial<ArticleCommande> & Pick<ArticleCommande, "id">
      >({
        query: (id) => ({
          url: `/ArticleCommandes/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreArticleCommande: builder.mutation<
        ArticleCommande,
        Partial<ArticleCommande> & Pick<ArticleCommande, "id">
      >({
        query: (id) => ({
          url: `/ArticleCommandes/${id}/restore`,
          method: "PUT",
        }),
      }),

      }}})
      export const {
        useFetchArticleCommandesQuery,
        usePaginationArticleCommandesQuery,
        useFetchArticleCommandesByIdCommandeQuery,
        useFetchOneArticleCommandeQuery,
        useAddArticleCommandeMutation,
        useEditArticleCommandeMutation,
        useDeleteArticleCommandeMutation,
        useArchiveArticleCommandeMutation,
        useRestoreArticleCommandeMutation,
      }=crudArticleCommande

      export type OpenArticleCommandeProp={
        data:ArticleCommandeJson
        refetch:()=>void
        save:()=>void
        edit:()=>void
      }
      export const openArticleCommandes =():OpenArticleCommandeProp =>{
        const { data = [], refetch } = useFetchArticleCommandesQuery();
        const [save]=useAddArticleCommandeMutation();
        const [edit]=useEditArticleCommandeMutation();
        //@ts-ignore
        const out:OpenArticleCommandeProp={data,refetch,save,edit}
        return out;
      }