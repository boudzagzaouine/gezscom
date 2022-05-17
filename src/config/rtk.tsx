import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { Article, BureauDouane, Client, Commande, Declarant, Incoterm, PayementMode, RawMaterial, RegimeDouanier, UnitMeasure } from "../tools/types";

export const crudApi = createApi({
  reducerPath: "crud-api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1000/api/v1",
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["RawMaterial", "Client", "UNAUTHORIZED", "UNKNOWN_ERROR"],
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


      /*****************************************************************************/
      /*********************************Article**************************************/
      /*****************************************************************************/
      fetchArticles: builder.query<Article[], void>({
        query: () => `/articles`,
      }),
      paginationArticles: builder.query<Article[], number>({
        query: (page) => `/articles?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneArticle: builder.query<Article, string>({
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
      deleteArticle: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Client number ${id.id} ?`))
          return {
            url: `/articles/${id.id}`,
            method: "DELETE",
          };
        }
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
      /*********************************BureauDouane**************************************/
      /*****************************************************************************/
      fetchBureauDouanes: builder.query<BureauDouane[], void>({
        query: () => `/bureauDouanes`,
      }),
      paginationBureauDouanes: builder.query<BureauDouane[], number>({
        query: (page) => `/bureauDouanes?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneBureauDouane: builder.query<BureauDouane, string>({
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
      deleteBureauDouane: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Client number ${id.id} ?`))
          return {
            url: `/bureauDouanes/${id.id}`,
            method: "DELETE",
          };
        }
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


      /*****************************************************************************/
      /*********************************Declarant**************************************/
      /*****************************************************************************/
      fetchDeclarants: builder.query<Declarant[], void>({
        query: () => `/declarants`,
      }),
      paginationDeclarants: builder.query<Declarant[], number>({
        query: (page) => `/declarants?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneDeclarant: builder.query<Declarant, string>({
        query: (id) => `/declarants/${id}`,
      }),
      addDeclarant: builder.mutation<Declarant, Partial<Declarant>>({
        query: (body) => ({
          url: "/declarants",
          method: "POST",
          body,
        }),
      }),
      editDeclarant: builder.mutation<
        Declarant,
        Partial<Declarant> & Pick<Declarant, "id">
      >({
        query: (body) => ({
          url: `/declarants/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteDeclarant: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Client number ${id.id} ?`))
          return {
            url: `/declarants/${id.id}`,
            method: "DELETE",
          };
        }
      }),
      archiveDeclarant: builder.mutation<
        Declarant,
        Partial<Declarant> & Pick<Declarant, "id">
      >({
        query: (id) => ({
          url: `/declarants/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreDeclarant: builder.mutation<
        Declarant,
        Partial<Declarant> & Pick<Declarant, "id">
      >({
        query: (id) => ({
          url: `/declarants/${id}/restore`,
          method: "PUT",
        }),
      }),


      /*****************************************************************************/
      /*********************************Incoterm**************************************/
      /*****************************************************************************/
      fetchIncoterms: builder.query<Incoterm[], void>({
        query: () => `/incoterms`,
      }),
      paginationIncoterms: builder.query<Incoterm[], number>({
        query: (page) => `/incoterms?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneIncoterm: builder.query<Incoterm, string>({
        query: (id) => `/incoterms/${id}`,
      }),
      addIncoterm: builder.mutation<Incoterm, Partial<Incoterm>>({
        query: (body) => ({
          url: "/incoterms",
          method: "POST",
          body,
        }),
      }),
      editIncoterm: builder.mutation<
        Incoterm,
        Partial<Incoterm> & Pick<Incoterm, "id">
      >({
        query: (body) => ({
          url: `/incoterms/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteIncoterm: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Client number ${id.id} ?`))
          return {
            url: `/incoterms/${id.id}`,
            method: "DELETE",
          };
        }
      }),
      archiveIncoterm: builder.mutation<
        Incoterm,
        Partial<Incoterm> & Pick<Incoterm, "id">
      >({
        query: (id) => ({
          url: `/incoterms/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreIncoterm: builder.mutation<
        Incoterm,
        Partial<Incoterm> & Pick<Incoterm, "id">
      >({
        query: (id) => ({
          url: `/incoterms/${id}/restore`,
          method: "PUT",
        }),
      }),


      /*****************************************************************************/
      /*********************************PayementMode**************************************/
      /*****************************************************************************/
      fetchPayementModes: builder.query<PayementMode[], void>({
        query: () => `/payementModes`,
      }),
      paginationPayementModes: builder.query<PayementMode[], number>({
        query: (page) => `/payementModes?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOnePayementMode: builder.query<PayementMode, string>({
        query: (id) => `/payementModes/${id}`,
      }),
      addPayementMode: builder.mutation<PayementMode, Partial<PayementMode>>({
        query: (body) => ({
          url: "/payementModes",
          method: "POST",
          body,
        }),
      }),
      editPayementMode: builder.mutation<
        PayementMode,
        Partial<PayementMode> & Pick<PayementMode, "id">
      >({
        query: (body) => ({
          url: `/payementModes/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deletePayementMode: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Client number ${id.id} ?`))
          return {
            url: `/payementModes/${id.id}`,
            method: "DELETE",
          };
        }
      }),
      archivePayementMode: builder.mutation<
        PayementMode,
        Partial<PayementMode> & Pick<PayementMode, "id">
      >({
        query: (id) => ({
          url: `/payementModes/${id}/archive`,
          method: "PUT",
        }),
      }),
      restorePayementMode: builder.mutation<
        PayementMode,
        Partial<PayementMode> & Pick<PayementMode, "id">
      >({
        query: (id) => ({
          url: `/payementModes/${id}/restore`,
          method: "PUT",
        }),
      }),


      /*****************************************************************************/
      /*********************************RawMaterial**************************************/
      /*****************************************************************************/
      fetchRawMaterials: builder.query<RawMaterial[], void>({
        query: () => `/rawMaterials`,
      }),
      paginationRawMaterials: builder.query<RawMaterial[], number>({
        query: (page) => `/rawMaterials?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneRawMaterial: builder.query<RawMaterial, string>({
        query: (id) => `/rawMaterials/${id}`,
      }),
      addRawMaterial: builder.mutation<RawMaterial, Partial<RawMaterial>>({
        query: (body) => ({
          url: "/rawMaterials",
          method: "POST",
          body,
        }),
      }),
      editRawMaterial: builder.mutation<
        RawMaterial,
        Partial<RawMaterial> & Pick<RawMaterial, "id">
      >({
        query: (body) => ({
          url: `/rawMaterials/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteRawMaterial: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Client number ${id.id} ?`))
          return {
            url: `/rawMaterials/${id.id}`,
            method: "DELETE",
          };
        }
      }),
      archiveRawMaterial: builder.mutation<
        RawMaterial,
        Partial<RawMaterial> & Pick<RawMaterial, "id">
      >({
        query: (id) => ({
          url: `/rawMaterials/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreRawMaterial: builder.mutation<
        RawMaterial,
        Partial<RawMaterial> & Pick<RawMaterial, "id">
      >({
        query: (id) => ({
          url: `/rawMaterials/${id}/restore`,
          method: "PUT",
        }),
      }),


      /*****************************************************************************/
      /*********************************RegimeDouanier**************************************/
      /*****************************************************************************/
      fetchRegimeDouaniers: builder.query<RegimeDouanier[], void>({
        query: () => `/regimeDouaniers`,
      }),
      paginationRegimeDouaniers: builder.query<RegimeDouanier[], number>({
        query: (page) => `/regimeDouaniers?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneRegimeDouanier: builder.query<RegimeDouanier, string>({
        query: (id) => `/regimeDouaniers/${id}`,
      }),
      addRegimeDouanier: builder.mutation<RegimeDouanier, Partial<RegimeDouanier>>({
        query: (body) => ({
          url: "/regimeDouaniers",
          method: "POST",
          body,
        }),
      }),
      editRegimeDouanier: builder.mutation<
        RegimeDouanier,
        Partial<RegimeDouanier> & Pick<RegimeDouanier, "id">
      >({
        query: (body) => ({
          url: `/regimeDouaniers/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteRegimeDouanier: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Client number ${id.id} ?`))
          return {
            url: `/regimeDouaniers/${id.id}`,
            method: "DELETE",
          };
        }
      }),
      archiveRegimeDouanier: builder.mutation<
        RegimeDouanier,
        Partial<RegimeDouanier> & Pick<RegimeDouanier, "id">
      >({
        query: (id) => ({
          url: `/regimeDouaniers/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreRegimeDouanier: builder.mutation<
        RegimeDouanier,
        Partial<RegimeDouanier> & Pick<RegimeDouanier, "id">
      >({
        query: (id) => ({
          url: `/regimeDouaniers/${id}/restore`,
          method: "PUT",
        }),
      }),



      /*****************************************************************************/
      /*********************************UnitMeasure**************************************/
      /*****************************************************************************/
      fetchUnitMeasures: builder.query<UnitMeasure[], void>({
        query: () => `/unitMeasures`,
      }),
      paginationUnitMeasures: builder.query<UnitMeasure[], number>({
        query: (page) => `/unitMeasures?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneUnitMeasure: builder.query<UnitMeasure, string>({
        query: (id) => `/unitMeasures/${id}`,
      }),
      addUnitMeasure: builder.mutation<UnitMeasure, Partial<UnitMeasure>>({
        query: (body) => ({
          url: "/unitMeasures",
          method: "POST",
          body,
        }),
      }),
      editUnitMeasure: builder.mutation<
        UnitMeasure,
        Partial<UnitMeasure> & Pick<UnitMeasure, "id">
      >({
        query: (body) => ({
          url: `/unitMeasures/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteUnitMeasure: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Client number ${id.id} ?`))
          return {
            url: `/unitMeasures/${id.id}`,
            method: "DELETE",
          };
        }
      }),
      archiveUnitMeasure: builder.mutation<
        UnitMeasure,
        Partial<UnitMeasure> & Pick<UnitMeasure, "id">
      >({
        query: (id) => ({
          url: `/unitMeasures/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreUnitMeasure: builder.mutation<
        UnitMeasure,
        Partial<UnitMeasure> & Pick<UnitMeasure, "id">
      >({
        query: (id) => ({
          url: `/unitMeasures/${id}/restore`,
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
  /*******************************************************/
  /*******************************************************/
  useFetchBureauDouanesQuery,
  usePaginationBureauDouanesQuery,
  useFetchOneBureauDouaneQuery,
  useAddBureauDouaneMutation,
  useEditBureauDouaneMutation,
  useDeleteBureauDouaneMutation,
  useArchiveBureauDouaneMutation,
  useRestoreBureauDouaneMutation,
  /*******************************************************/
  /*******************************************************/
  useFetchPayementModesQuery,
  usePaginationPayementModesQuery,
  useFetchOnePayementModeQuery,
  useAddPayementModeMutation,
  useEditPayementModeMutation,
  useDeletePayementModeMutation,
  useArchivePayementModeMutation,
  useRestorePayementModeMutation,
  /*******************************************************/
  /*******************************************************/
  useFetchDeclarantsQuery,
  usePaginationDeclarantsQuery,
  useFetchOneDeclarantQuery,
  useAddDeclarantMutation,
  useEditDeclarantMutation,
  useDeleteDeclarantMutation,
  useArchiveDeclarantMutation,
  useRestoreDeclarantMutation,
  /*******************************************************/
  /*******************************************************/
  useFetchIncotermsQuery,
  usePaginationIncotermsQuery,
  useFetchOneIncotermQuery,
  useAddIncotermMutation,
  useEditIncotermMutation,
  useDeleteIncotermMutation,
  useArchiveIncotermMutation,
  useRestoreIncotermMutation,
  /*******************************************************/
  /*******************************************************/
  useFetchRawMaterialsQuery,
  usePaginationRawMaterialsQuery,
  useFetchOneRawMaterialQuery,
  useAddRawMaterialMutation,
  useEditRawMaterialMutation,
  useDeleteRawMaterialMutation,
  useArchiveRawMaterialMutation,
  useRestoreRawMaterialMutation,
  /*******************************************************/
  /*******************************************************/
  useFetchRegimeDouaniersQuery,
  usePaginationRegimeDouaniersQuery,
  useFetchOneRegimeDouanierQuery,
  useAddRegimeDouanierMutation,
  useEditRegimeDouanierMutation,
  useDeleteRegimeDouanierMutation,
  useArchiveRegimeDouanierMutation,
  useRestoreRegimeDouanierMutation,
  /*******************************************************/
  /*******************************************************/
  useFetchUnitMeasuresQuery,
  usePaginationUnitMeasuresQuery,
  useFetchOneUnitMeasureQuery,
  useAddUnitMeasureMutation,
  useEditUnitMeasureMutation,
  useDeleteUnitMeasureMutation,
  useArchiveUnitMeasureMutation,
  useRestoreUnitMeasureMutation,

  /***********useMaMethodAfficjageQuery********************************************/
  /***********useMaMethodeOperationMutaion********************************************/
} = crudApi;
