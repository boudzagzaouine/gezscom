import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { AdressLiv, Article, ArticleCommande, BureauDouane, Client, Commande, PayementMode, RawMaterial, RegimeDouanier,Declarant, Incoterm,  UnitMeasure,
  Devise, Pays, Transporteur, Ville, Role, Type, Document, CommandeFournisseur, Fournisseur, LigneDeCommande, MatierePremiere 
} from "tools/types";

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
  /*****************************************************************************/
      /****************************PAYMENT MODE*************************************************/
      /*****************************************************************************/
      fetchPayementModes: builder.query<PayementMode[], number | void>({
        query() {
          return "/payementModes";
        },
         }),
      paginationPayementModes: builder.query<PayementMode[], number | void>({
        query(page: number) {
          return "payementModes?page=" + page + "&size=" + PAGE_SIZE;
        },
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
            //@ts-ignore
            url: `/payementModes/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
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
      /**********************MATERIAL*******************************************************/
      /*****************************************************************************/

      fetchRawMaterials: builder.query<RawMaterial[], number | void>({
        query() {
          return "/rawMaterials";
        },
     }),
      paginationRawMaterials: builder.query<RawMaterial[], number | void>({
        query(page: number) {
          return "rawMaterials?page=" + page + "&size=" + PAGE_SIZE;
        },
         }),
      fetchOneRawMaterial: builder.query<RawMaterial, String>({
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
      deleteRawMaterial: builder.mutation<
        { success: boolean; id: String },
        number
      >({
        //@ts-ignore
        query(id: String) {
          //  if (confirm(`do you want delete Commande number ${id.id} ?`))
          return {
            //@ts-ignore
            url: `/rawMaterials/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
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
      /****************************REGIME DOUANIER*************************************************/
      /*****************************************************************************/

      fetchRegimeDouaniers: builder.query<RegimeDouanier[], number | void>({
        query() {
          return "/regimeDouaniers";
        },
       }),
      paginationRegimeDouaniers: builder.query<RegimeDouanier[], number | void>({
        query(page: number) {
          return "regimeDouaniers?page=" + page + "&size=" + PAGE_SIZE;
        },
           }),
      fetchOneRegimeDouanier: builder.query<RegimeDouanier, String>({
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
      deleteRegimeDouanier: builder.mutation<
        { success: boolean; id: String },
        number
      >({
        //@ts-ignore
        query(id: String) {
          //  if (confirm(`do you want delete Commande number ${id.id} ?`))
          return {
            //@ts-ignore
            url: `/regimeDouaniers/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
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
      /************************UNITE MESURE*****************************************************/
      /*****************************************************************************/

      fetchUnitMeasures: builder.query<UnitMeasure[], number | void>({
        query() {
          return "/unitMeasures";
        },
         }),
      paginationUnitMeasures: builder.query<UnitMeasure[], number | void>({
        query(page: number) {
          return "unitMeasures?page=" + page + "&size=" + PAGE_SIZE;
        },
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
            //@ts-ignore
            url: `/unitMeasures/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
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
      /********************************DECLARANT*********************************************/
      /*****************************************************************************/

      fetchDeclarants: builder.query<Declarant[], number | void>({
        query() {
          return "/declarants";
        },
          }),
      paginationDeclarants: builder.query<Declarant[], number | void>({
        query(page: number) {
          return "declarants?page=" + page + "&size=" + PAGE_SIZE;
        },
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
            //@ts-ignore
            url: `/declarants/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
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
      /**********************************ICOTERM*******************************************/
      /*****************************************************************************/

      fetchIncoterms: builder.query<Incoterm[], number | void>({
        query() {
          return "/incoterms";
        },
         }),
      paginationIncoterms: builder.query<Incoterm[], number | void>({
        query(page: number) {
          return "incoterms?page=" + page + "&size=" + PAGE_SIZE;
        },
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
            //@ts-ignore
            url: `/incoterms/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
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

  /********************************************************************************************* */
      /********************************Transporteur************************************************************* */
      /********************************************************************************************* */
      fetchTransporteurs: builder.query<Transporteur[], void>({
        query: () => `/transporteurs`,
      }),
      paginationTransporteurs: builder.query<Transporteur[], number>({
        query: (page) => `/transporteurs?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneTransporteur: builder.query<Transporteur, string>({
        query: (id) => `/transporteurs/${id}`,
      }),
      addTransporteur: builder.mutation<Transporteur, Partial<Transporteur>>({
        query: (body) => ({
          url: "/transporteurs",
          method: "POST",
          body,
        }),
      }),
      editTransporteur: builder.mutation<

        Transporteur,
        //@ts-ignore
        Partial<Transporteur> & Pick<Transporteur, "id">
      >({
        query: (body) => ({
          url: `/transporteurs/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteTransporteur: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Transporteur number ${id.id} ?`))
          return {
            url: `/transporteurs/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "Transporteur", id },
          { type: "Transporteur", id: "LIST" },
        ],
      }),
      archiveTransporteur: builder.mutation<
        Transporteur,
        //@ts-ignore
        Partial<Transporteur> & Pick<Transporteur, "id">
      >({
        query: (id) => ({
          url: `/transporteurs/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreTransporteur: builder.mutation<
        Transporteur,
        //@ts-ignore
        Partial<Transporteur> & Pick<Transporteur, "id">
      >({
        query: (id) => ({
          url: `/transporteurs/${id}/restore`,
          method: "PUT",
        }),
      }),
      /****************************Document***************************************************************** */
      /********************************************************************************************* */
      fetchDocuments: builder.query<Document[], void>({
        query: () => `/documents`,
      }),
      paginationDocuments: builder.query<Document[], number>({
        query: (page) => `/documents?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneDocument: builder.query<Document, string>({
        query: (id) => `/documents/${id}`,
      }),
      addDocument: builder.mutation<Document, Partial<Document>>({
        query: (body) => ({
          url: "/documents",
          method: "POST",
          body,
        }),
       }),
      editDocument: builder.mutation<

        Document,
        //@ts-ignore
        Partial<Document> & Pick<Document, "id">
      >({
        query: (body) => ({
          url: `/documents/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteDocument: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Document number ${id.id} ?`))
          return {
            url: `/documents/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "Document", id },
          { type: "Document", id: "LIST" },
        ],
      }),
      archiveDocument: builder.mutation<
        Document,
        //@ts-ignore
        Partial<Document> & Pick<Document, "id">
      >({
        query: (id) => ({
          url: `/documents/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreDocument: builder.mutation<
        Document,
        //@ts-ignore
        Partial<Document> & Pick<Document, "id">
      >({
        query: (id) => ({
          url: `/documents/${id}/restore`,
          method: "PUT",
        }),
      }),
      /********************************************************************************************* */
      /***************************Devise****************************************************************** */
      /********************************************************************************************* */
      fetchDevises: builder.query<Devise[], void>({
        query: () => `/devises`,
      }),
      paginationDevises: builder.query<Devise[], number>({
        query: (page) => `/devises?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneDevise: builder.query<Devise, string>({
        query: (id) => `/devises/${id}`,
      }),
      addDevise: builder.mutation<Devise, Partial<Devise>>({
        query: (body) => ({
          url: "/devises",
          method: "POST",
          body,
        }),
        //@ts-ignore
        invalidatesTags: ["Devise"],
      }),
      editDevise: builder.mutation<

        Devise,
        //@ts-ignore
        Partial<Devise> & Pick<Devise, "id">
      >({
        query: (body) => ({
          url: `/devises/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteDevise: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Devise number ${id.id} ?`))
          return {
            url: `/devises/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
       }),
      archiveDevise: builder.mutation<
        Devise,
        //@ts-ignore
        Partial<Devise> & Pick<Devise, "id">
      >({
        query: (id) => ({
          url: `/devises/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreDevise: builder.mutation<
        Devise,
        //@ts-ignore
        Partial<Devise> & Pick<Devise, "id">
      >({
        query: (id) => ({
          url: `/devises/${id}/restore`,
          method: "PUT",
        }),
      }),
      /********************************************************************************************* */
      /********************************************Pays************************************************* */
      /********************************************************************************************* */
      fetchPays: builder.query<Pays[], void>({
        query: () => `/pays`,
      }),
      paginationPays: builder.query<Pays[], number>({
        query: (page) => `/pays?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOnePays: builder.query<Pays, string>({
        query: (id) => `/pays/${id}`,
      }),
      addPays: builder.mutation<Pays, Partial<Pays>>({
        query: (body) => ({
          url: "/pays",
          method: "POST",
          body,
        }),
      }),
      editPays: builder.mutation<
        Pays,
        Partial<Pays> & Pick<Pays, "id">
      >({
        query: (body) => ({
          url: `/pays/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deletePays: builder.mutation<{ succes: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Pays number ${id.id} ?`))
          return {
            url: `/pays/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
      }),
      archivePays: builder.mutation<
        Pays,
        Partial<Pays> & Pick<Pays, "id">
      >({
        query: (id) => ({
          url: `/pays/${id}/archive`,
          method: "PUT",
        }),
      }),
      restorePays: builder.mutation<
        Pays,
        Partial<Pays> & Pick<Pays, "id">
      >({
        query: (id) => ({
          url: `/pays/${id}/restore`,
          method: "PUT",
        }),
      }),
      /********************************************************************************************* */
      /***********************************Ville********************************************************** */
      /********************************************************************************************* */
      fetchVilles: builder.query<Ville[], void>({
        query: () => `/villes`,
      }),
      paginationVilles: builder.query<Ville[], number>({
        query: (page) => `/villes?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneVille: builder.query<Ville, string>({
        query: (id) => `/villes/${id}`,
      }),
      addVille: builder.mutation<Ville, Partial<Ville>>({
        query: (body) => ({
          url: "/villes",
          method: "POST",
          body,
        }),
        //@ts-ignore
        invalidatesTags: ["Ville"],
      }),
      editVille: builder.mutation<
        Ville,
        Partial<Ville> & Pick<Ville, "id">
      >({
        query: (body) => ({
          url: `/villes/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteVille: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Ville number ${id.id} ?`))
          return {
            url: `/villes/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "Ville", id },
          { type: "Ville", id: "LIST" },
        ],
      }),
      archiveVille: builder.mutation<
        Ville,
        Partial<Ville> & Pick<Ville, "id">
      >({
        query: (id) => ({
          url: `/villes/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreVille: builder.mutation<
        Ville,
        Partial<Ville> & Pick<Ville, "id">
      >({
        query: (id) => ({
          url: `/villes/${id}/restore`,
          method: "PUT",
        }),
      }),
      /********************************************************************************************* */
      /********************************Type************************************************************* */
      /********************************************************************************************* */
      fetchTypes: builder.query<Type[], void>({
        query: () => `/types`,
      }),
      paginationTypes: builder.query<Type[], number>({
        query: (page) => `/types?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneType: builder.query<Type, string>({
        query: (id) => `/types/${id}`,
      }),
      addType: builder.mutation<Type, Partial<Type>>({
        query: (body) => ({
          url: "/types",
          method: "POST",
          body,
        }),
        //@ts-ignore
        invalidatesTags: ["Type"],
      }),
      editType: builder.mutation<

        Type,
        //@ts-ignore
        Partial<Type> & Pick<Type, "id">
      >({
        query: (body) => ({
          url: `/types/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteType: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Type number ${id.id} ?`))
          return {
            url: `/types/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "Type", id },
          { type: "Type", id: "LIST" },
        ],
      }),
      archiveType: builder.mutation<
        Type,
        //@ts-ignore
        Partial<Type> & Pick<Type, "id">
      >({
        query: (id) => ({
          url: `/types/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreType: builder.mutation<
        Type,
        //@ts-ignore
        Partial<Type> & Pick<Type, "id">
      >({
        query: (id) => ({
          url: `/types/${id}/restore`,
          method: "PUT",
        }),
      }),
      /********************************************************************************************* */
      /*****************************Role**************************************************************** */
      /********************************************************************************************* */
      fetchRoles: builder.query<Role[], void>({
        query: () => `/roles`,
      }),
      paginationRoles: builder.query<Role[], number>({
        query: (page) => `/roles?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneRole: builder.query<Role, string>({
        query: (id) => `/roles/${id}`,
      }),
      addRole: builder.mutation<Role, Partial<Role>>({
        query: (body) => ({
          url: "/roles",
          method: "POST",
          body,
        }),
      }),
      editRole: builder.mutation<

        Role,
        //@ts-ignore
        Partial<Role> & Pick<Role, "id">
      >({
        query: (body) => ({
          url: `/roles/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteRole: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Role number ${id.id} ?`))
          return {
            url: `/roles/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "Role", id },
          { type: "Role", id: "LIST" },
        ],
      }),
      archiveRole: builder.mutation<
        Role,
        //@ts-ignore
        Partial<Role> & Pick<Role, "id">
      >({
        query: (id) => ({
          url: `/roles/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreRole: builder.mutation<
        Role,
        //@ts-ignore
        Partial<Role> & Pick<Role, "id">
      >({
        query: (id) => ({
          url: `/roles/${id}/restore`,
          method: "PUT",
        }),
      }),
      /*****************************************************************************/
      /*****************************************************************************/
      /********************************Fournisseur**********************************/
      fetchFournisseurs: builder.query<Fournisseur[], void>({
        query: () => "/fournisseurs",
      }),

      fetchOneFournisseur: builder.query<Fournisseur, string>({
        query: (id) => `/fournisseurs/${id}`,
      }),

      addFournisseur: builder.mutation<Fournisseur, Partial<Fournisseur>>({
        query: (body)=>({
          url: "/fournisseurs",
          method: "POST",
          body,
        }),
      }),

      editFournisseur: builder.mutation<Fournisseur, Partial<Fournisseur> & Pick<Fournisseur, "id">>({
        query:(body)=> ({
          url:`/fournisseurs/${body.id}`,
          method:"PUT",
          body,
        }),
      }),

      deleteFournisseur: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
        
          return {
            url: `/fournisseurs/${id.id}`,
            method: "DELETE",
          };        
        }}),

      archiveFournisseur: builder.mutation<Fournisseur, Partial<Fournisseur> & Pick<Fournisseur, "id">>({
        query: (id) => ({
          url: `/fournisseurs/${id}/archive`,
          method: "PUT",
        }),
      }),

      restoreFournisseur: builder.mutation<Fournisseur, Partial<Fournisseur> & Pick<Fournisseur, "id">>({
        query: (id) => ({
          url: `/fournisseurs/${id}/restore`,
          method: "PUT",
        }),
      }),

      paginationFournisseurs: builder.query<Fournisseur[], number>({
        query: (page) => `/fournisseurs?page=${page}&size=${PAGE_SIZE}`,
      }),
      /*******************************************************/
      /*******************************************************/
      /******************CommandeFournisseur******************/
      fetchCommandesFournisseur: builder.query<CommandeFournisseur[], void>({
        query:()=>"/commandeFournisseurs",
      }),

      paginationCommandesFournisseur: builder.query<CommandeFournisseur[], number >({
        query:(page) =>`/commandeFournisseurs?page=${page}&size=${PAGE_SIZE}`,
      }),

      fetchOneCommandeFournisseur: builder.query<CommandeFournisseur, string>({
        query: (id) => `/commandeFournisseurs/${id}`,
        //@ts-ignore
      }),

      fetchCommandesFournisseurByIdFournisseur:builder.query<CommandeFournisseur[],string>({
        query:(idFournisseur)=>`/commandeFournisseurs/idfournisseurs/${idFournisseur}`,
      }),

      addCommandeFournisseur: builder.mutation<CommandeFournisseur, Partial<CommandeFournisseur>>({
        query: (body) => ({
          url: "/commandeFournisseurs",
          method: "POST",
          body,
        }),
      }),

      editCommandeFournisseur: builder.mutation<
      CommandeFournisseur,
        Partial<CommandeFournisseur> & Pick<CommandeFournisseur, "id">
      >({
        query: (body) => ({
          url: `/commandeFournisseurs/${body.id}`,
          method: "PUT",
          body,
        }),
      }),

      deleteCommandeFournisseur: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          return {
            url: `/commandeFournisseurs/${id.id}`,
            method: "DELETE",
          };
        }}),

      archiveCommandeFournisseur: builder.mutation<
      CommandeFournisseur,
        Partial<CommandeFournisseur> & Pick<CommandeFournisseur, "id">
      >({
        query: (id) => ({
          url: `/commandeFournisseurs/${id}/archive`,
          method: "PUT",
        }),
      }),

      restoreCommandeFournisseur: builder.mutation<
      CommandeFournisseur,
        Partial<CommandeFournisseur> & Pick<CommandeFournisseur, "id">
      >({
        query: (id) => ({
          url: `/commandeFournisseurs/${id}/restore`,
          method: "PUT",
        }),
      }),
      /*******************************************************/
      /*******************************************************/
      /******************MatierePremiere******************/
      fetchMatierePremiere: builder.query<MatierePremiere[],void>({
        query:()=> "/matieresPremiere",
      }),

      paginationMatierePremiere: builder.query<MatierePremiere[], number >({
        query:(page)=> `/matieresPremiere?page=${page}&size=${PAGE_SIZE}`,
      }),

      fetchOneMatierePremiere: builder.query<MatierePremiere, string>({
        query: (id) => `/matieresPremiere/${id}`,
      }),

      fetchMatierePremiereByIdFournisseur:builder.query<MatierePremiere[],string>({
        query:(idFournisseur)=>`/matieresPremiere/idfournisseurs/${idFournisseur}`,
      }),

      addMatierePremiere: builder.mutation<MatierePremiere, Partial<MatierePremiere>>({
        query: (body) => ({
          url: "/matieresPremiere",
          method: "POST",
          body,
        }),
      }),

      editMatierePremiere: builder.mutation<
      MatierePremiere,
        Partial<MatierePremiere> & Pick<MatierePremiere, "id">
      >({
        query: (body) => ({
          url: `/matieresPremiere/${body.id}`,
          method: "PUT",
          body,
        }),
      }),

      deleteMatierePremiere: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          return {
            url: `/matieresPremiere/${id.id}`,
            method: "DELETE",
          };
        }}),

      archiveMatierePremiere: builder.mutation<
      MatierePremiere,
        Partial<MatierePremiere> & Pick<MatierePremiere, "id">
      >({
        query: (id) => ({
          url: `/matieresPremiere/${id}/archive`,
          method: "PUT",
        }),
      }),

      restoreMatierePremiere: builder.mutation<
      MatierePremiere,
        Partial<MatierePremiere> & Pick<MatierePremiere, "id">
      >({
        query: (id) => ({
          url: `/matieresPremiere/${id}/restore`,
          method: "PUT",
        }),
      }),
      /*******************************************************/
      /*******************************************************/
      /******************LigneDeCommande******************/
      fetchLigneDeCommande: builder.query<LigneDeCommande[],void>({
        query:()=> "/lignesDecommand",
      }),

      paginationLigneDeCommande: builder.query<LigneDeCommande[], number >({
        query:(page)=> `/lignesDecommand?page=${page}&size=${PAGE_SIZE}`,
      }),

      fetchOneLigneDeCommande: builder.query<LigneDeCommande, string>({
        query: (id) => `/lignesDecommand/${id}`,
      }),

      fetchLigneDeCommandeByIdCommandeFournisseur:builder.query<LigneDeCommande[],string>({
        query:(idCommandeFournisseur)=>`/lignesDecommand/idcommandefournisseur/${idCommandeFournisseur}`,
      }),

      fetchLigneDeCommandeByIdMatierePremiere:builder.query<LigneDeCommande[],string>({
        query:(idMatierePremiere)=>`/lignesDecommand/idmatierepremiere/${idMatierePremiere}`,
      }),

      addLigneDeCommande: builder.mutation<LigneDeCommande, Partial<LigneDeCommande>>({
        query: (body) => ({
          url: "/lignesDecommand",
          method: "POST",
          body,
        }),
      }),

      editLigneDeCommande: builder.mutation<
      LigneDeCommande,
        Partial<LigneDeCommande> & Pick<LigneDeCommande, "id">
      >({
        query: (body) => ({
          url: `/lignesDecommand/${body.id}`,
          method: "PUT",
          body,
        }),
      }),

      deleteLigneDeCommande: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          return {
            url: `/lignesDecommand/${id.id}`,
            method: "DELETE",
          };
        }}),

      archiveLigneDeCommande: builder.mutation<
      LigneDeCommande,
        Partial<LigneDeCommande> & Pick<LigneDeCommande, "id">
      >({
        query: (id) => ({
          url: `/lignesDecommand/${id}/archive`,
          method: "PUT",
        }),
      }),

      restoreLigneDeCommande: builder.mutation<
      LigneDeCommande,
        Partial<LigneDeCommande> & Pick<LigneDeCommande, "id">
      >({
        query: (id) => ({
          url: `/lignesDecommand/${id}/restore`,
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
  /*******************************************************/
  /*******************ARTICLE************************************/
  useFetchArticlesQuery,
  usePaginationArticlesQuery,
  useFetchOneArticleQuery,
  useAddArticleMutation,
  useEditArticleMutation,
  useDeleteArticleMutation,
  useArchiveArticleMutation,
  useRestoreArticleMutation,
  /********************BUREAUDOUANE***********************************/
  /*******************************************************/
  useFetchBureauDouanesQuery,
  usePaginationBureauDouanesQuery,
  useFetchOneBureauDouaneQuery,
  useAddBureauDouaneMutation,
  useEditBureauDouaneMutation,
  useDeleteBureauDouaneMutation,
  useArchiveBureauDouaneMutation,
  useRestoreBureauDouaneMutation,
  /*******************PAYAMENT MODE************************************/
  /*******************************************************/
  useFetchPayementModesQuery,
  usePaginationPayementModesQuery,
  useFetchOnePayementModeQuery,
  useAddPayementModeMutation,
  useEditPayementModeMutation,
  useDeletePayementModeMutation,
  useArchivePayementModeMutation,
  useRestorePayementModeMutation,
  /*******************DECLARANTS************************************/
  /*******************************************************/
  useFetchDeclarantsQuery,
  usePaginationDeclarantsQuery,
  useFetchOneDeclarantQuery,
  useAddDeclarantMutation,
  useEditDeclarantMutation,
  useDeleteDeclarantMutation,
  useArchiveDeclarantMutation,
  useRestoreDeclarantMutation,
  /*********************ICOTERM**********************************/
  /*******************************************************/
  useFetchIncotermsQuery,
  usePaginationIncotermsQuery,
  useFetchOneIncotermQuery,
  useAddIncotermMutation,
  useEditIncotermMutation,
  useDeleteIncotermMutation,
  useArchiveIncotermMutation,
  useRestoreIncotermMutation,
  /*****************MATERIAL**************************************/
  /*******************************************************/
  useFetchRawMaterialsQuery,
  usePaginationRawMaterialsQuery,
  useFetchOneRawMaterialQuery,
  useAddRawMaterialMutation,
  useEditRawMaterialMutation,
  useDeleteRawMaterialMutation,
  useArchiveRawMaterialMutation,
  useRestoreRawMaterialMutation,
  /*******************REGIME DOUANIER************************************/
  /*******************************************************/
  useFetchRegimeDouaniersQuery,
  usePaginationRegimeDouaniersQuery,
  useFetchOneRegimeDouanierQuery,
  useAddRegimeDouanierMutation,
  useEditRegimeDouanierMutation,
  useDeleteRegimeDouanierMutation,
  useArchiveRegimeDouanierMutation,
  useRestoreRegimeDouanierMutation,
  /****************UNITE MESURE***************************************/
  /*******************************************************/
  useFetchUnitMeasuresQuery,
  usePaginationUnitMeasuresQuery,
  useFetchOneUnitMeasureQuery,
  useAddUnitMeasureMutation,
  useEditUnitMeasureMutation,
  useDeleteUnitMeasureMutation,
  useArchiveUnitMeasureMutation,
  useRestoreUnitMeasureMutation,
  /***********Transporteur********************************************/
  useFetchTransporteursQuery,
  usePaginationTransporteursQuery,
  useFetchOneTransporteurQuery,
  useAddTransporteurMutation,
  useEditTransporteurMutation,
  useDeleteTransporteurMutation,
  useArchiveTransporteurMutation,
  useRestoreTransporteurMutation,
  /***********Document********************************************/
  useFetchDocumentsQuery,
  usePaginationDocumentsQuery,
  useFetchOneDocumentQuery,
  useAddDocumentMutation,
  useEditDocumentMutation,
  useDeleteDocumentMutation,
  useArchiveDocumentMutation,
  useRestoreDocumentMutation,
  /***********Devise********************************************/
  useFetchDevisesQuery,
  usePaginationDevisesQuery,
  useFetchOneDeviseQuery,
  useAddDeviseMutation,
  useEditDeviseMutation,
  useDeleteDeviseMutation,
  useArchiveDeviseMutation,
  useRestoreDeviseMutation,
  /***********Pays********************************************/
  useFetchPaysQuery,
  usePaginationPaysQuery,
  useFetchOnePaysQuery,
  useAddPaysMutation,
  useEditPaysMutation,
  useDeletePaysMutation,
  useArchivePaysMutation,
  useRestorePaysMutation,
  /***********Villes********************************************/
  useFetchVillesQuery,
  usePaginationVillesQuery,
  useFetchOneVilleQuery,
  useAddVilleMutation,
  useEditVilleMutation,
  useDeleteVilleMutation,
  useArchiveVilleMutation,
  useRestoreVilleMutation,
  /***********Types********************************************/
  useFetchTypesQuery,
  usePaginationTypesQuery,
  useFetchOneTypeQuery,
  useAddTypeMutation,
  useEditTypeMutation,
  useDeleteTypeMutation,
  useArchiveTypeMutation,
  useRestoreTypeMutation,
  /***********Roles********************************************/
  useFetchRolesQuery,
  usePaginationRolesQuery,
  useFetchOneRoleQuery,
  useAddRoleMutation,
  useEditRoleMutation,
  useDeleteRoleMutation,
  useArchiveRoleMutation,
  useRestoreRoleMutation,
    /*******************************************************/
  /*******************************************************/
  /******************Fournisseur**************************/
  useFetchFournisseursQuery,
  useFetchOneFournisseurQuery,
  useAddFournisseurMutation,
  useEditFournisseurMutation,
  useDeleteFournisseurMutation,
  useArchiveFournisseurMutation,
  useRestoreFournisseurMutation,
  usePaginationFournisseursQuery,
  /*******************************************************/
  /*******************************************************/
  /****************CommandeFournisseur********************/
  useFetchCommandesFournisseurQuery,
  useFetchOneCommandeFournisseurQuery,
  useFetchCommandesFournisseurByIdFournisseurQuery,
  useAddCommandeFournisseurMutation,
  useEditCommandeFournisseurMutation,
  useDeleteCommandeFournisseurMutation,
  useArchiveCommandeFournisseurMutation,
  useRestoreCommandeFournisseurMutation,
  usePaginationCommandesFournisseurQuery,
  /*******************************************************/
  /*******************************************************/
  /*****************MatiérePremiére***********************/
  useFetchMatierePremiereQuery,
  useFetchOneMatierePremiereQuery,
  useFetchMatierePremiereByIdFournisseurQuery,
  useAddMatierePremiereMutation,
  useEditMatierePremiereMutation,
  useDeleteMatierePremiereMutation,
  useArchiveMatierePremiereMutation,
  useRestoreMatierePremiereMutation,
  usePaginationMatierePremiereQuery,
  /*******************************************************/
  /*******************************************************/
  /*****************LigneDeCommande***********************/
  useFetchLigneDeCommandeQuery,
  useFetchOneLigneDeCommandeQuery,
  useFetchLigneDeCommandeByIdCommandeFournisseurQuery,
  useFetchLigneDeCommandeByIdMatierePremiereQuery,
  useAddLigneDeCommandeMutation,
  useEditLigneDeCommandeMutation,
  useDeleteLigneDeCommandeMutation,
  useArchiveLigneDeCommandeMutation,
  useRestoreLigneDeCommandeMutation,
  usePaginationLigneDeCommandeQuery,
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
