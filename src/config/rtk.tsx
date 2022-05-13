import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { ArticleCommande, Client, Commande } from "../tools/types";

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
          url: "/commandes/post",
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
      /**************************************************************************************************************/
      /**************************************************************************************************************/
      /**************************************************************************************************************/
      fetchArticleCommandes: builder.query<ArticleCommande[], number | void>({
        query() {
          return "/articlecommandes";
        },
        providesTags: (result) =>
          result
            ? [
                //@ts-ignore
                ...result.content.map(({ id }) => ({
                  //      ...result.map(({ id }) => ({
                  type: "ArticleCommande" as const,
                  id,
                })),
                { type: "ArticleCommande", id: "LIST" },
              ]
            : [{ type: "ArticleCommande", id: "LIST" }],
      }),
      fetchArticleCommandesByIdCommande: builder.query<ArticleCommande[], string | void>({
        query(id) {
          return `/articlecommandes/idcom/${id}`;
        },
        providesTags: (result) =>
          result
            ? [
                //@ts-ignore
                ...result.content?.map(({ id }) => ({
                  //      ...result.map(({ id }) => ({
                  type: "ArticleCommande" as const,
                  id,
                })),
                { type: "ArticleCommande", id: "LIST" },
              ]
            : [{ type: "ArticleCommande", id: "LIST" }],
      }),
      paginationArticleCommandes: builder.query<
        ArticleCommande[],
        number | void
      >({
        query(page: number) {
          return "/articlecommandes?page=" + page + "&size=" + PAGE_SIZE;
        },
        providesTags: (result) =>
          result
            ? [
                //@ts-ignore
                ...result.content.map(({ id }) => ({
                  //      ...result.map(({ id }) => ({
                  type: "ArticleCommande" as const,
                  id,
                })),
                { type: "ArticleCommande", id: "LIST" },
              ]
            : [{ type: "ArticleCommande", id: "LIST" }],
      }),
      fetchOneArticleCommande: builder.query<ArticleCommande, string>({
        query: (id) => `/articleCommandes/${id}`,
       }),
      addArticleCommande: builder.mutation<
        ArticleCommande,
        Partial<ArticleCommande>
      >({
        query: (body) => ({
          url: "/articlecommandes/post",
          method: "POST",
          body,
        }),
      }),
      editArticleCommande: builder.mutation<
        ArticleCommande,
        Partial<ArticleCommande> & Pick<ArticleCommande, "id">
      >({
        query: (body) => ({
          url: `/articleCommandes/${body.id}`,
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
          //  if (confirm(`do you want delete ArticleCommande number ${id.id} ?`))
          return {
            url: `/articleCommandes/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
      }),
      archiveArticleCommande: builder.mutation<
        ArticleCommande,
        Partial<ArticleCommande> & Pick<ArticleCommande, "id">
      >({
        query: (id) => ({
          url: `/articleCommandes/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreArticleCommande: builder.mutation<
        ArticleCommande,
        Partial<ArticleCommande> & Pick<ArticleCommande, "id">
      >({
        query: (id) => ({
          url: `/articleCommandes/${id}/restore`,
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
  /***********useMaMethodAfficjageQuery********************************************/
  /***********useMaMethodeOperationMutaion********************************************/
  useFetchArticleCommandesQuery,
  useFetchArticleCommandesByIdCommandeQuery,
  usePaginationArticleCommandesQuery,
  useFetchOneArticleCommandeQuery,
  useAddArticleCommandeMutation,
  useEditArticleCommandeMutation,
  useDeleteArticleCommandeMutation,
  useArchiveArticleCommandeMutation,
  useRestoreArticleCommandeMutation,
} = crudApi;
