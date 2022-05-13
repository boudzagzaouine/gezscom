import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { Article, Client, Commande } from "../tools/types";

export const crudApi = createApi({
  reducerPath: "crud-api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1000/api/v1",
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["Client", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
      fetchClients: builder.query<Client[], number | void>({
        query() {
          return "/clients";
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "Client" as const,
                id,
              })),
              { type: "Client", id: "LIST" },
            ]
            : [{ type: "Client", id: "LIST" }],
      }),
      paginationClients: builder.query<Client[], number | void>({
        query(page: number) {
          return "/clients?page=" + page + "&size=" + PAGE_SIZE;
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "Client" as const,
                id,
              })),
              { type: "Client", id: "LIST" },
            ]
            : [{ type: "Client", id: "LIST" }],
      }),

      fetchOneClient: builder.query<Client, string>({
        query: (id) => `/clients/${id}`,
        providesTags: (result, error, id) => [{ type: "Client", id }],
      }),
      addClient: builder.mutation<Client, Partial<Client>>({
        query: (body) => ({
          url: "/clients",
          method: "POST",
          body,
        }),
        invalidatesTags: ["Client"],
      }),
      editClient: builder.mutation<
        Client,
        Partial<Client> & Pick<Client, "id">
      >({
        query: (body) => ({
          url: `/clients/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteClient: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Client number ${id.id} ?`))
          return {
            url: `/clients/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        invalidatesTags: (result, error, id) => [
          { type: "Client", id },
          { type: "Client", id: "LIST" },
        ],
      }),
      archiveClient: builder.mutation<
        Client,
        Partial<Client> & Pick<Client, "id">
      >({
        query: (id) => ({
          url: `/clients/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreClient: builder.mutation<
        Client,
        Partial<Client> & Pick<Client, "id">
      >({
        query: (id) => ({
          url: `/clients/${id}/restore`,
          method: "PUT",
        }),
      }),
      /*****************************************************************************/
      /*****************************************************************************/
      /*****************************************************************************/
      fetchCommandes: builder.query<Commande[], number | void>({
        query() {
          return "/commandes";
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "Commande" as const,
                id,
              })),
              { type: "Commande", id: "LIST" },
            ]
            : [{ type: "Commande", id: "LIST" }],
      }),
      paginationCommandes: builder.query<Commande[], number | void>({
        query(page: number) {
          return "/commandes?page=" + page + "&size=" + PAGE_SIZE;
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "Commande" as const,
                id,
              })),
              { type: "Commande", id: "LIST" },
            ]
            : [{ type: "Commande", id: "LIST" }],
      }),
      fetchOneCommande: builder.query<Commande, string>({
        query: (id) => `/commandes/${id}`,
        //@ts-ignore
        providesTags: (result, error, id) => [{ type: "Commande", id }],
      }),
      addCommande: builder.mutation<Commande, Partial<Commande>>({
        query: (body) => ({
          url: "/Commandes",
          method: "POST",
          body,
        }),
        //@ts-ignore
        invalidatesTags: ["Commande"],
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
          //  if (confirm(`do you want delete Commande number ${id.id} ?`))
          return {
            url: `/commandes/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "Commande", id },
          { type: "Commande", id: "LIST" },
        ],
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

      /*****************************************************************************/
      /*****************************************************************************/
      /*****************************************************************************/
      fetchArticles: builder.query<Article[], number | void>({
        query() {
          return "/articles";
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "Article" as const,
                id,
              })),
              { type: "Article", id: "LIST" },
            ]
            : [{ type: "Article", id: "LIST" }],
      }),
      paginationArticles: builder.query<Article[], number | void>({
        query(page: number) {
          return "/articles?page=" + page + "&size=" + PAGE_SIZE;
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "Article" as const,
                id,
              })),
              { type: "Article", id: "LIST" },
            ]
            : [{ type: "Article", id: "LIST" }],
      }),
      fetchOneArticle: builder.query<Article, String>({
        query: (id) => `/articles/${id}`,
        //@ts-ignore
        providesTags: (result, error, id) => [{ type: "Article", id }],
      }),
      addArticle: builder.mutation<Article, Partial<Article>>({
        query: (body) => ({
          url: "/articles",
          method: "POST",
          body,
        }),
        //@ts-ignore
        invalidatesTags: ["Article"],
      }),
      editArticle: builder.mutation<
        Article,
        Partial<Article> & Pick<Article, "id">
      >({
        query: (body) => ({
          url: `/articles/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteArticle: builder.mutation<
        { success: boolean; id: String },
        number
      >({
        //@ts-ignore
        query(id: String) {
          //  if (confirm(`do you want delete Commande number ${id.id} ?`))
          return {
            url: `/articles/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "Article", id },
          { type: "Article", id: "LIST" },
        ],
      }),
      archiveArticle: builder.mutation<
        Article,
        Partial<Article> & Pick<Article, "id">
      >({
        query: (id) => ({
          url: `/articles/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreArticle: builder.mutation<
        Article,
        Partial<Article> & Pick<Article, "id">
      >({
        query: (id) => ({
          url: `/articles/${id}/restore`,
          method: "PUT",
        }),
      }),

    };
  },
});

export const {
  useFetchClientsQuery,
  usePaginationClientsQuery,
  useFetchOneClientQuery,
  useAddClientMutation,
  useEditClientMutation,
  useDeleteClientMutation,
  useArchiveClientMutation,
  useRestoreClientMutation,
  /*******************************************************/
  /*******************************************************/
  useFetchCommandesQuery,
  usePaginationCommandesQuery,
  useFetchOneCommandeQuery,
  useAddCommandeMutation,
  useEditCommandeMutation,
  useDeleteCommandeMutation,
  useArchiveCommandeMutation,
  useRestoreCommandeMutation,
  /*******************************************************/
  /*******************************************************/
  useFetchArticlesQuery,
  usePaginationArticlesQuery,
  useFetchOneArticleQuery,
  useAddArticleMutation,
  useEditArticleMutation,
  useDeleteArticleMutation,
  useArchiveArticleMutation,
  useRestoreArticleMutation,
  /***********useMaMethodAfficjageQuery********************************************/
  /***********useMaMethodeOperationMutaion********************************************/
} = crudApi;
