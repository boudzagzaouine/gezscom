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