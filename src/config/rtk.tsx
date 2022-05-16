import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { AdressLiv, ArticleCommande, Client, Commande } from "../tools/types";

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
      /*****************************************************************************/
      /*********************************CLIENT**************************************/
      /*****************************************************************************/
      fetchClients: builder.query<Client[], void>({
        query: () => `/clients`,
      }),
      paginationClients: builder.query<Client[], number>({
        query: (page) => `/clients?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneClient: builder.query<Client, string>({
        query: (id) => `/clients/${id}`,
     }),
      addClient: builder.mutation<Client, Partial<Client>>({
        query: (body) => ({
          url: "/clients",
          method: "POST",
          body,
        }),
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
       }}),
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
      /*********************************AdressLiv***********************************/
     /*****************************************************************************/
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
          url: "/adressLivs/post",
          method: "POST",
          body,
        }),
       }),
      editAdressLiv: builder.mutation<
        AdressLiv,
        Partial<AdressLiv> & Pick<AdressLiv, "id">
      >({
        query: (body) => ({
          url: `/adressLivs/put/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteAdressLiv: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete AdressLiv number ${id.id} ?`))
          return {
            url: `/adressLivs/${id.id}`,
            method: "DELETE",
          };
       }}),
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
        })}),
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
        /**************************************************************************************************************/
       /*******************************************ARTICLE COMMANDE***************************************************/
      /**************************************************************************************************************/
      fetchArticleCommandes: builder.query<ArticleCommande[], void>({
        query:()=>`/articlecommandes`
        }),
      fetchArticleCommandesByIdCommande: builder.query<ArticleCommande[], string>({
        query: (idcom) => `/articlecommandes/idcom/${idcom}`,
      }),
      paginationArticleCommandes: builder.query<ArticleCommande[],number>({
        query:(page)=>`/articlecommandes?page=${page}&size=${PAGE_SIZE}`,
        }),
      fetchOneArticleCommande: builder.query<ArticleCommande, string>({
        query: (id) => `/articleCommandes/${id}`,
       }),
      addArticleCommande: builder.mutation<
        ArticleCommande,
        Partial<ArticleCommande>
      >({
        query: (body) => ({
          url: `/articlecommandes`,
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
 /***********useMaMethodAfficjageQuery********************************************/
/***********useMaMethodeOperationMutaion*****************************************/
export const {
  /******************CLIENT********************************/
  /*******************************************************/
  useFetchClientsQuery,
  usePaginationClientsQuery,
  useFetchOneClientQuery,
  useAddClientMutation,
  useEditClientMutation,
  useDeleteClientMutation,
  useArchiveClientMutation,
  useRestoreClientMutation,
   /******************AdressLiv****************************/
  /*******************************************************/
  useFetchAdressLivsQuery,
  usePaginationAdressLivsQuery,
  useFetchAdressLivsByIdClientQuery,
  useFetchOneAdressLivQuery,
  useAddAdressLivMutation,
  useEditAdressLivMutation,
  useDeleteAdressLivMutation,
  useArchiveAdressLivMutation,
  useRestoreAdressLivMutation,
  /******************COMMANDE******************************/
  /*******************************************************/
  useFetchCommandesQuery,
  usePaginationCommandesQuery,
  useFetchcommandesByIdClientQuery,
  useFetchOneCommandeQuery,
  useAddCommandeMutation,
  useEditCommandeMutation,
  useDeleteCommandeMutation,
  useArchiveCommandeMutation,
  useRestoreCommandeMutation,
  /************ARTICLECOMMANDE*****************************/
  /*******************************************************/
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
