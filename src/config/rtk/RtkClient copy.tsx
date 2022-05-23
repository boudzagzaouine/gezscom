import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpenClientProp } from "components/manager/client/openClients";
import { PAGE_SIZE } from "tools/consts";
import { AdressLiv, Article, ArticleCommande, BureauDouane, Client, Commande, PayementMode, RawMaterial, RegimeDouanier,Declarant, Incoterm,  UnitMeasure,
  Devise, Pays, Transporteur, Ville, Role, Type, Document, CommandeFournisseur, Fournisseur, LigneDeCommande, MatierePremiere 
} from "tools/types";

export const crudClient = createApi({
  reducerPath: "crud-client",
  baseQuery: fetchBaseQuery({
    baseUrl:process.env.NEXT_PUBLIC_URL,
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
       /*****************************************************************************/
      /*******************************ARTICLE***************************************/
      /*****************************************************************************/
      fetchArticles: builder.query<Article[], number | void>({
        query() {
          return "/articles";
        }  }),
      paginationArticles: builder.query<Article[], number | void>({
        query(page: number) {
          return "/articles?page=" + page + "&size=" + PAGE_SIZE;
        },
         }),
      fetchOneArticle: builder.query<Article, String>({
        query: (id) => `/articles/${id}`,
      }),
      addArticle: builder.mutation<Article, Partial<Article>>({
        query: (body) => ({
          url: "/articles",
          method: "POST",
          body,
        }),
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
          return {
            //@ts-ignore
            url: `/articles/${id.id}`,
            method: "DELETE",
          };
        },
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
  /*****************************************************************************/
 /*********************BUREAU DOUANE*******************************************/
/*****************************************************************************/

      fetchBureauDouanes: builder.query<BureauDouane[], number | void>({
        query() {
          return "/bureauDouanes";
        },
          }),
      paginationBureauDouanes: builder.query<BureauDouane[], number | void>({
        query(page: number) {
          return "bureauDouanes?page=" + page + "&size=" + PAGE_SIZE;
        },
          }),
      fetchOneBureauDouane: builder.query<BureauDouane, String>({
        query: (id) => `/bureauDouanes/${id}`,
      }),
      addBureauDouane: builder.mutation<BureauDouane, Partial<BureauDouane>>({
        query: (body) => ({
          url: "/bureauDouanes",
          method: "POST",
          body,
        }),
      }),
      editBureauDouane: builder.mutation<
        BureauDouane,
        Partial<BureauDouane> & Pick<BureauDouane, "id">
      >({
        query: (body) => ({
          url: `/bureauDouanes/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteBureauDouane: builder.mutation<
        { success: boolean; id: String },
        number
      >({
        //@ts-ignore
        query(id: String) {
         return {
           //@ts-ignore
            url: `/bureauDouanes/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        }),
      archiveBureauDouane: builder.mutation<
        BureauDouane,
        Partial<BureauDouane> & Pick<BureauDouane, "id">
      >({
        query: (id) => ({
          url: `/bureauDouanes/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreBureauDouane: builder.mutation<
        BureauDouane,
        Partial<BureauDouane> & Pick<BureauDouane, "id">
      >({
        query: (id) => ({
          url: `/bureauDouanes/${id}/restore`,
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
  
} = crudClient;
export const openClients =():OpenClientProp =>{
  const { data = [], refetch } = useFetchClientsQuery();
  const [save]=useAddClientMutation();
  const [edit]=useEditClientMutation();
  //@ts-ignore
  const out:OpenClientProp={data,refetch,save,edit}
  return out;
}