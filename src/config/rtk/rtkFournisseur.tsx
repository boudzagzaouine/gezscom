import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";

import {
  CommandeFournisseur,
  Fournisseur,
  LigneDeCommande,
  MatierePremiere,
} from "tools/types";

export const crudFournisseur = createApi({
  reducerPath: "crud-fournisseur",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["Fournisseur", "UNAUTHORIZED", "UNKNOWN_ERROR"],
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
} = crudFournisseur;
export interface FournisseurJson{
  content:Fournisseur[]
  }
  export type OpenFournisseurProp = {
    data: FournisseurJson;
    refetch: () => void;
    save: () => void;
    edit: () => void;
  };
  //const fournisseursOpen:OpenFournisseurProp=openFournisseurs()
  export const openFournisseurs = (): OpenFournisseurProp => {
    const { data = [], refetch } = useFetchFournisseursQuery();
    const [save] = useAddFournisseurMutation();
    const [edit] = useEditFournisseurMutation();
    //@ts-ignore
    const out: OpenFournisseurProp = { data, refetch, save, edit };
    return out;
  };
  export const openPaginationFournisseurs = (page:number): OpenFournisseurProp => {
    const { data = [], refetch } = usePaginationFournisseursQuery(page);
    const [save] = useAddFournisseurMutation();
    const [edit] = useEditFournisseurMutation();
    //@ts-ignore
    const out: OpenFournisseurProp = { data, refetch, save, edit };
    return out;
  };
  /********************************************/
  
  export interface CommandesFournisseurJson{
  content:CommandeFournisseur[]
  }
  export type OpenCommandesFournisseurProp = {
    data: CommandesFournisseurJson;
    refetch: () => void;
    save: () => void;
    edit: () => void;
  };
  export type OpenCommandesFournisseurJoinProp = {
    data: CommandeFournisseur[];
    refetch: () => void;
    save: () => void;
    edit: () => void;
  };
  export const openCommandesFournisseurs = (): OpenCommandesFournisseurProp => {
    const { data = [], refetch } = useFetchCommandesFournisseurQuery();
    const [save] = useAddCommandeFournisseurMutation();
    const [edit] = useEditCommandeFournisseurMutation();
    //@ts-ignore
    const out: OpenCommandesFournisseurProp = { data, refetch, save, edit };
    return out;
  };
  /********************************************/
  export const openPaginationCommandesFournisseurs = (page:number): OpenCommandesFournisseurProp => {
    const { data = [], refetch } = usePaginationCommandesFournisseurQuery(page);
    const [save] = useAddCommandeFournisseurMutation();
    const [edit] = useEditCommandeFournisseurMutation();
    //@ts-ignore
    const out: OpenCommandesFournisseurProp = { data, refetch, save, edit };
    return out;
  };
  /********************************************/
  /*
const commandesFournisseursByFounisseurOpen: OpenCommandesFournisseurJoinProp =openCommandesFournisseursByFounisseur(...)
const commandesFournisseurs:CommandeFournisseur[]=commandesFournisseursByFounisseurOpen.data
cosnt refetch=commandesFournisseursByFounisseurOpen.refetch
const add=commandesFournisseursByFounisseurOpen.save
const edit=commandesFournisseursByFounisseurOpen.edit
  */
  export const openCommandesFournisseursByFounisseur = (idFournisseur:string): OpenCommandesFournisseurJoinProp => {
    const { data = [], refetch } = useFetchCommandesFournisseurByIdFournisseurQuery(idFournisseur)
    const [save] = useAddCommandeFournisseurMutation();
    const [edit] = useEditCommandeFournisseurMutation();
    //@ts-ignore
    const out: OpenCommandesFournisseurJoinProp  = { data, refetch, save, edit };
    return out;
  };
  /********************************************/
  
  export interface MatierePremiereJson{
  content:MatierePremiere[]
  }
  export type OpenMatierePremiereProp = {
    data: MatierePremiereJson;
    refetch: () => void;
    save: () => void;
    edit: () => void;
  };
  export type OpenMatierePremiereJoinProp = {
    data: MatierePremiere[];
    refetch: () => void;
    save: () => void;
    edit: () => void;
  };
  /*
  const matierePremieresOpen:OpenMatierePremiereProp=openMatierePremieres()
  */
  export const openMatierePremieres = (): OpenMatierePremiereProp => {
    const { data = [], refetch } = useFetchMatierePremiereQuery();
    const [save] = useAddMatierePremiereMutation();
    const [edit] = useEditMatierePremiereMutation();
    //@ts-ignore
    const out: OpenMatierePremiereProp = { data, refetch, save, edit };
    return out;
  };
  /********************************************/
   /*
  const matierePremieresOpen:OpenMatierePremiereProp=openMatierePremieresPagination(page)
  */
  export const openMatierePremieresPagination = (page:number): OpenMatierePremiereProp => {
    const { data = [], refetch } = usePaginationMatierePremiereQuery(page);
    const [save] = useAddMatierePremiereMutation();
    const [edit] = useEditMatierePremiereMutation();
    //@ts-ignore
    const out: OpenMatierePremiereProp = { data, refetch, save, edit };
    return out;
  };
  /********************************************/
  /*
  const matierePremiereByFournisseurOpen: OpenMatierePremiereJoinProp=openMatierePremiereByFournisseur(idfournisseur)
  const matierePremieres:MatierePremiere[]= matierePremiereByFournisseurOpen.data
  */
  export const openMatierePremiereByFournisseur = (idfournisseur:string):  OpenMatierePremiereJoinProp => {
    const { data = [], refetch } = useFetchMatierePremiereByIdFournisseurQuery(idfournisseur)
    const [save] = useAddMatierePremiereMutation();
    const [edit] = useEditMatierePremiereMutation();
    //@ts-ignore
    const out:  OpenMatierePremiereJoinProp = { data, refetch, save, edit };
    return out;
  };
  /********************************************/
  
  export interface LigneDeCommandeJson{
  content:LigneDeCommande[]
  }
  export type OpenLigneDeCommandeProp = {
    data: LigneDeCommandeJson;
    refetch: () => void;
    save: () => void;
    edit: () => void;
  };
  export type OpenLigneDeCommandeByJoinProp = {
    data: LigneDeCommande[];
    refetch: () => void;
    save: () => void;
    edit: () => void;
  };
  export const openLigneDeCommandes = (): OpenLigneDeCommandeProp => {
    const { data = [], refetch } = useFetchLigneDeCommandeQuery();
    const [save] = useAddLigneDeCommandeMutation();
    const [edit] = useEditLigneDeCommandeMutation();
    //@ts-ignore
    const out: OpenLigneDeCommandeProp = { data, refetch, save, edit };
    return out;
  };
  //const ligneDeCommandesOpen:OpenLigneDeCommandeByJoinProp=openLigneDeCommandesByFournisseur()
  //const ligneDeCommandes:LigneDeCommande[]=ligneDeCommandesOpen.data
  //const refetch=ligneDeCommandesOpen.refetch
  //const add=ligneDeCommandesOpen.save
  //const edit=ligneDeCommandesOpen.edit
  export const openLigneDeCommandesByFournisseur = (idCommandeFournisseur:string): OpenLigneDeCommandeByJoinProp => {
    const { data = [], refetch } = useFetchLigneDeCommandeByIdCommandeFournisseurQuery(idCommandeFournisseur)
    const [save] = useAddLigneDeCommandeMutation();
    const [edit] = useEditLigneDeCommandeMutation();
    //@ts-ignore
    const out: OpenLigneDeCommandeByJoinProp = { data, refetch, save, edit };
    return out;
  };
  export const openLigneDeCommandesByMatierePremiere = (idMatierePremiere:string): OpenLigneDeCommandeByJoinProp => {
    const { data = [], refetch } = useFetchLigneDeCommandeByIdMatierePremiereQuery(idMatierePremiere)
    const [save] = useAddLigneDeCommandeMutation();
    const [edit] = useEditLigneDeCommandeMutation();
    //@ts-ignore
    const out: OpenLigneDeCommandeByJoinProp = { data, refetch, save, edit };
    return out;
  };
  /********************************************/
  
  