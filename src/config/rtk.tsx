import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";

import {
  AdressLiv,
  Article,
  ArticleCommande,
  BureauDouane,
  Client,
  Commande,
  PayementMode,
  RawMaterial,
  RegimeDouanier,
  Declarant,
  Incoterm,
  UnitMeasure,
  Devise,
  Pays,
  Transporteur,
  Ville,
  Role,
  Type,
  Document,
  CommandeFournisseur,
  Fournisseur,
  LigneDeCommande,
  MatierePremiere,
} from "tools/types";

export const crudApi = createApi({
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
      /*****************************************************************************/

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
        query: (body) => ({
          url: "/fournisseurs",
          method: "POST",
          body,
        }),
      }),

      editFournisseur: builder.mutation<
        Fournisseur,
        Partial<Fournisseur> & Pick<Fournisseur, "id">
      >({
        query: (body) => ({
          url: `/fournisseurs/${body.id}`,
          method: "PUT",
          body,
        }),
      }),

      deleteFournisseur: builder.mutation<
        { success: boolean; id: number },
        number
      >({
        //@ts-ignore
        query(id: Num) {
          return {
            url: `/fournisseurs/${id.id}`,
            method: "DELETE",
          };
        },
      }),

      archiveFournisseur: builder.mutation<
        Fournisseur,
        Partial<Fournisseur> & Pick<Fournisseur, "id">
      >({
        query: (id) => ({
          url: `/fournisseurs/${id}/archive`,
          method: "PUT",
        }),
      }),

      restoreFournisseur: builder.mutation<
        Fournisseur,
        Partial<Fournisseur> & Pick<Fournisseur, "id">
      >({
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
        query: () => "/commandeFournisseurs",
      }),

      paginationCommandesFournisseur: builder.query<
        CommandeFournisseur[],
        number
      >({
        query: (page) => `/commandeFournisseurs?page=${page}&size=${PAGE_SIZE}`,
      }),

      fetchOneCommandeFournisseur: builder.query<CommandeFournisseur, string>({
        query: (id) => `/commandeFournisseurs/${id}`,
        //@ts-ignore
      }),

      fetchCommandesFournisseurByIdFournisseur: builder.query<
        CommandeFournisseur[],
        string
      >({
        query: (idFournisseur) =>
          `/commandeFournisseurs/idfournisseurs/${idFournisseur}`,
      }),

      addCommandeFournisseur: builder.mutation<
        CommandeFournisseur,
        Partial<CommandeFournisseur>
      >({
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

      deleteCommandeFournisseur: builder.mutation<
        { success: boolean; id: number },
        number
      >({
        //@ts-ignore
        query(id: Num) {
          return {
            url: `/commandeFournisseurs/${id.id}`,
            method: "DELETE",
          };
        },
      }),

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
      fetchMatierePremiere: builder.query<MatierePremiere[], void>({
        query: () => "/matieresPremiere",
      }),

      paginationMatierePremiere: builder.query<MatierePremiere[], number>({
        query: (page) => `/matieresPremiere?page=${page}&size=${PAGE_SIZE}`,
      }),

      fetchOneMatierePremiere: builder.query<MatierePremiere, string>({
        query: (id) => `/matieresPremiere/${id}`,
      }),

      fetchMatierePremiereByIdFournisseur: builder.query<
        MatierePremiere[],
        string
      >({
        query: (idFournisseur) =>
          `/matieresPremiere/idfournisseurs/${idFournisseur}`,
      }),

      addMatierePremiere: builder.mutation<
        MatierePremiere,
        Partial<MatierePremiere>
      >({
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

      deleteMatierePremiere: builder.mutation<
        { success: boolean; id: number },
        number
      >({
        //@ts-ignore
        query(id: Num) {
          return {
            url: `/matieresPremiere/${id.id}`,
            method: "DELETE",
          };
        },
      }),

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
      fetchLigneDeCommande: builder.query<LigneDeCommande[], void>({
        query: () => "/lignesDecommand",
      }),

      paginationLigneDeCommande: builder.query<LigneDeCommande[], number>({
        query: (page) => `/lignesDecommand?page=${page}&size=${PAGE_SIZE}`,
      }),

      fetchOneLigneDeCommande: builder.query<LigneDeCommande, string>({
        query: (id) => `/lignesDecommand/${id}`,
      }),

      fetchLigneDeCommandeByIdCommandeFournisseur: builder.query<
        LigneDeCommande[],
        string
      >({
        query: (idCommandeFournisseur) =>
          `/lignesDecommand/idcommandefournisseur/${idCommandeFournisseur}`,
      }),

      fetchLigneDeCommandeByIdMatierePremiere: builder.query<
        LigneDeCommande[],
        string
      >({
        query: (idMatierePremiere) =>
          `/lignesDecommand/idmatierepremiere/${idMatierePremiere}`,
      }),

      addLigneDeCommande: builder.mutation<
        LigneDeCommande,
        Partial<LigneDeCommande>
      >({
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

      deleteLigneDeCommande: builder.mutation<
        { success: boolean; id: number },
        number
      >({
        //@ts-ignore
        query(id: Num) {
          return {
            url: `/lignesDecommand/${id.id}`,
            method: "DELETE",
          };
        },
      }),

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
    };
  },
});
/***********useMaMethodAfficjageQuery********************************************/
/***********useMaMethodeOperationMutaion*****************************************/
export const {
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
} = crudApi;
