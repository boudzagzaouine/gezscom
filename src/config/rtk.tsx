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

      /*****************************************************************************/
      /*****************************************************************************/
      /*****************************************************************************/

      fetchBureauDouanes: builder.query<BureauDouane[], number | void>({
        query() {
          return "/bureauDouanes";
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "BureauDouane" as const,
                id,
              })),
              { type: "BureauDouane", id: "LIST" },
            ]
            : [{ type: "BureauDouane", id: "LIST" }],
      }),
      paginationBureauDouanes: builder.query<BureauDouane[], number | void>({
        query(page: number) {
          return "bureauDouanes?page=" + page + "&size=" + PAGE_SIZE;
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "BureauDouane" as const,
                id,
              })),
              { type: "BureauDouane", id: "LIST" },
            ]
            : [{ type: "BureauDouane", id: "LIST" }],
      }),
      fetchOneBureauDouane: builder.query<BureauDouane, String>({
        query: (id) => `/bureauDouanes/${id}`,
        //@ts-ignore
        providesTags: (result, error, id) => [{ type: "BureauDouane", id }],
      }),
      addBureauDouane: builder.mutation<BureauDouane, Partial<BureauDouane>>({
        query: (body) => ({
          url: "/bureauDouanes",
          method: "POST",
          body,
        }),
        //@ts-ignore
        invalidatesTags: ["BureauDouane"],
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
          //  if (confirm(`do you want delete Commande number ${id.id} ?`))
          return {
            url: `/bureauDouanes/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "BureauDouane", id },
          { type: "BureauDouane", id: "LIST" },
        ],
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
      /*****************************************************************************/
      /*****************************************************************************/

      fetchPayementModes: builder.query<PayementMode[], number | void>({
        query() {
          return "/payementModes";
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "PayementMode" as const,
                id,
              })),
              { type: "PayementMode", id: "LIST" },
            ]
            : [{ type: "PayementMode", id: "LIST" }],
      }),
      paginationPayementModes: builder.query<PayementMode[], number | void>({
        query(page: number) {
          return "payementModes?page=" + page + "&size=" + PAGE_SIZE;
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "PayementMode" as const,
                id,
              })),
              { type: "PayementMode", id: "LIST" },
            ]
            : [{ type: "PayementMode", id: "LIST" }],
      }),
      fetchOnePayementMode: builder.query<PayementMode, String>({
        query: (id) => `/payementModes/${id}`,
        //@ts-ignore
        providesTags: (result, error, id) => [{ type: "PayementMode", id }],
      }),
      addPayementMode: builder.mutation<PayementMode, Partial<PayementMode>>({
        query: (body) => ({
          url: "/payementModes",
          method: "POST",
          body,
        }),
        //@ts-ignore
        invalidatesTags: ["PayementMode"],
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
      deletePayementMode: builder.mutation<
        { success: boolean; id: String },
        number
      >({
        //@ts-ignore
        query(id: String) {
          //  if (confirm(`do you want delete Commande number ${id.id} ?`))
          return {
            url: `/payementModes/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "PayementMode", id },
          { type: "PayementMode", id: "LIST" },
        ],
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
      /*****************************************************************************/
      /*****************************************************************************/

      fetchRawMaterials: builder.query<RawMaterial[], number | void>({
        query() {
          return "/rawMaterials";
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "RawMaterial" as const,
                id,
              })),
              { type: "RawMaterial", id: "LIST" },
            ]
            : [{ type: "RawMaterial", id: "LIST" }],
      }),
      paginationRawMaterials: builder.query<RawMaterial[], number | void>({
        query(page: number) {
          return "rawMaterials?page=" + page + "&size=" + PAGE_SIZE;
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "RawMaterial" as const,
                id,
              })),
              { type: "RawMaterial", id: "LIST" },
            ]
            : [{ type: "RawMaterial", id: "LIST" }],
      }),
      fetchOneRawMaterial: builder.query<RawMaterial, String>({
        query: (id) => `/rawMaterials/${id}`,
        //@ts-ignore
        providesTags: (result, error, id) => [{ type: "RawMaterial", id }],
      }),
      addRawMaterial: builder.mutation<RawMaterial, Partial<RawMaterial>>({
        query: (body) => ({
          url: "/rawMaterials",
          method: "POST",
          body,
        }),
        //@ts-ignore
        invalidatesTags: ["RawMaterial"],
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
      deleteRawMaterial: builder.mutation<
        { success: boolean; id: String },
        number
      >({
        //@ts-ignore
        query(id: String) {
          //  if (confirm(`do you want delete Commande number ${id.id} ?`))
          return {
            url: `/rawMaterials/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "RawMaterial", id },
          { type: "RawMaterial", id: "LIST" },
        ],
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
      /*****************************************************************************/
      /*****************************************************************************/

      fetchRegimeDouaniers: builder.query<RegimeDouanier[], number | void>({
        query() {
          return "/regimeDouaniers";
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "RegimeDouanier" as const,
                id,
              })),
              { type: "RegimeDouanier", id: "LIST" },
            ]
            : [{ type: "RegimeDouanier", id: "LIST" }],
      }),
      paginationRegimeDouaniers: builder.query<RegimeDouanier[], number | void>({
        query(page: number) {
          return "regimeDouaniers?page=" + page + "&size=" + PAGE_SIZE;
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "RegimeDouanier" as const,
                id,
              })),
              { type: "RegimeDouanier", id: "LIST" },
            ]
            : [{ type: "RegimeDouanier", id: "LIST" }],
      }),
      fetchOneRegimeDouanier: builder.query<RegimeDouanier, String>({
        query: (id) => `/regimeDouaniers/${id}`,
        //@ts-ignore
        providesTags: (result, error, id) => [{ type: "RegimeDouanier", id }],
      }),
      addRegimeDouanier: builder.mutation<RegimeDouanier, Partial<RegimeDouanier>>({
        query: (body) => ({
          url: "/regimeDouaniers",
          method: "POST",
          body,
        }),
        //@ts-ignore
        invalidatesTags: ["RegimeDouanier"],
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
      deleteRegimeDouanier: builder.mutation<
        { success: boolean; id: String },
        number
      >({
        //@ts-ignore
        query(id: String) {
          //  if (confirm(`do you want delete Commande number ${id.id} ?`))
          return {
            url: `/regimeDouaniers/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "RegimeDouanier", id },
          { type: "RegimeDouanier", id: "LIST" },
        ],
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
      /*****************************************************************************/
      /*****************************************************************************/

      fetchUnitMeasures: builder.query<UnitMeasure[], number | void>({
        query() {
          return "/unitMeasures";
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "UnitMeasure" as const,
                id,
              })),
              { type: "UnitMeasure", id: "LIST" },
            ]
            : [{ type: "UnitMeasure", id: "LIST" }],
      }),
      paginationUnitMeasures: builder.query<UnitMeasure[], number | void>({
        query(page: number) {
          return "unitMeasures?page=" + page + "&size=" + PAGE_SIZE;
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "UnitMeasure" as const,
                id,
              })),
              { type: "UnitMeasure", id: "LIST" },
            ]
            : [{ type: "UnitMeasure", id: "LIST" }],
      }),
      fetchOneUnitMeasure: builder.query<UnitMeasure, String>({
        query: (id) => `/unitMeasures/${id}`,
        //@ts-ignore
        providesTags: (result, error, id) => [{ type: "UnitMeasure", id }],
      }),
      addUnitMeasure: builder.mutation<UnitMeasure, Partial<UnitMeasure>>({
        query: (body) => ({
          url: "/unitMeasures",
          method: "POST",
          body,
        }),
        //@ts-ignore
        invalidatesTags: ["UnitMeasure"],
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
      deleteUnitMeasure: builder.mutation<
        { success: boolean; id: String },
        number
      >({
        //@ts-ignore
        query(id: String) {
          //  if (confirm(`do you want delete Commande number ${id.id} ?`))
          return {
            url: `/unitMeasures/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "UnitMeasure", id },
          { type: "UnitMeasure", id: "LIST" },
        ],
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


      /*****************************************************************************/
      /*****************************************************************************/
      /*****************************************************************************/

      fetchDeclarants: builder.query<Declarant[], number | void>({
        query() {
          return "/declarants";
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "Declarant" as const,
                id,
              })),
              { type: "Declarant", id: "LIST" },
            ]
            : [{ type: "Declarant", id: "LIST" }],
      }),
      paginationDeclarants: builder.query<Declarant[], number | void>({
        query(page: number) {
          return "declarants?page=" + page + "&size=" + PAGE_SIZE;
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "Declarant" as const,
                id,
              })),
              { type: "Declarant", id: "LIST" },
            ]
            : [{ type: "Declarant", id: "LIST" }],
      }),
      fetchOneDeclarant: builder.query<Declarant, String>({
        query: (id) => `/declarants/${id}`,
        //@ts-ignore
        providesTags: (result, error, id) => [{ type: "Declarant", id }],
      }),
      addDeclarant: builder.mutation<Declarant, Partial<Declarant>>({
        query: (body) => ({
          url: "/declarants",
          method: "POST",
          body,
        }),
        //@ts-ignore
        invalidatesTags: ["Declarant"],
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
      deleteDeclarant: builder.mutation<
        { success: boolean; id: String },
        number
      >({
        //@ts-ignore
        query(id: String) {
          //  if (confirm(`do you want delete Commande number ${id.id} ?`))
          return {
            url: `/declarants/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "Declarant", id },
          { type: "Declarant", id: "LIST" },
        ],
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
      /*****************************************************************************/
      /*****************************************************************************/

      fetchIncoterms: builder.query<Incoterm[], number | void>({
        query() {
          return "/incoterms";
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "Incoterm" as const,
                id,
              })),
              { type: "Incoterm", id: "LIST" },
            ]
            : [{ type: "Incoterm", id: "LIST" }],
      }),
      paginationIncoterms: builder.query<Incoterm[], number | void>({
        query(page: number) {
          return "incoterms?page=" + page + "&size=" + PAGE_SIZE;
        },
        providesTags: (result) =>
          result
            ? [
              //@ts-ignore
              ...result.content.map(({ id }) => ({
                //      ...result.map(({ id }) => ({
                type: "Incoterm" as const,
                id,
              })),
              { type: "Incoterm", id: "LIST" },
            ]
            : [{ type: "Incoterm", id: "LIST" }],
      }),
      fetchOneIncoterm: builder.query<Incoterm, String>({
        query: (id) => `/incoterms/${id}`,
        //@ts-ignore
        providesTags: (result, error, id) => [{ type: "Incoterm", id }],
      }),
      addIncoterm: builder.mutation<Incoterm, Partial<Incoterm>>({
        query: (body) => ({
          url: "/incoterms",
          method: "POST",
          body,
        }),
        //@ts-ignore
        invalidatesTags: ["Incoterm"],
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
      deleteIncoterm: builder.mutation<
        { success: boolean; id: String },
        number
      >({
        //@ts-ignore
        query(id: String) {
          //  if (confirm(`do you want delete Commande number ${id.id} ?`))
          return {
            url: `/incoterms/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "Incoterm", id },
          { type: "Incoterm", id: "LIST" },
        ],
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
