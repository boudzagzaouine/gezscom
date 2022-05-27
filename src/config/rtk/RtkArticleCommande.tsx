import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { ArticleCommande, ArticleCommandeJson } from "tools/types";
export const crudArticleCommande = createApi({
  reducerPath: "crud-article-commande",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["ArticleCommande", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
      /****************************************************************************/
      /*************************ArticleCommande*******************************************/
      /****************************************************************************/
      fetchArticleCommandes: builder.query<ArticleCommande[], void>({
        query: () => `/articlecommandes`,
      }),
      paginationArticleCommandes: builder.query<ArticleCommande[], number>({
        query: (page) => `/articlecommandes?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchArticleCommandesByIdCommande: builder.query<
        ArticleCommande[],
        string
      >({
        query: (idcom) => `/articlecommandes/idcom/${idcom}`,
      }),
      fetchOneArticleCommande: builder.query<ArticleCommande, string>({
        query: (id) => `/articlecommandes/${id}`,
      }),
      fetchMontantArticleCommande: builder.query<number, string>({
        query: (idcom) => `/articlecommandes/${idcom}/montant`,
      }),
      addArticleCommande: builder.mutation<
        ArticleCommande,
        Partial<ArticleCommande>
      >({
        query: (body) => ({
          url: `/articlecommandes/post`,
          method: "POST",
          body,
        }),
      }),
      editArticleCommande: builder.mutation<
        ArticleCommande,
        Partial<ArticleCommande> & Pick<ArticleCommande, "id">
      >({
        query: (body) => ({
          url: `/articlecommandes/${body.id}`,
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
          return {
            url: `/articlecommandes/${id.id}`,
            method: "DELETE",
          };
        },
      }),
      archiveArticleCommande: builder.mutation<
        ArticleCommande,
        Partial<ArticleCommande> & Pick<ArticleCommande, "id">
      >({
        query: (id) => ({
          url: `/articlecommandes/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreArticleCommande: builder.mutation<
        ArticleCommande,
        Partial<ArticleCommande> & Pick<ArticleCommande, "id">
      >({
        query: (id) => ({
          url: `/articlecommandes/${id}/restore`,
          method: "PUT",
        }),
      }),
    };
  },
});
export const {
  useFetchArticleCommandesQuery,
  usePaginationArticleCommandesQuery,
  useFetchArticleCommandesByIdCommandeQuery,
  useFetchOneArticleCommandeQuery,
  useFetchMontantArticleCommandeQuery,
  useAddArticleCommandeMutation,
  useEditArticleCommandeMutation,
  useDeleteArticleCommandeMutation,
  useArchiveArticleCommandeMutation,
  useRestoreArticleCommandeMutation,
} = crudArticleCommande;

export type getMontantProps = {
  data: number;
  refetch: () => void;
};
export const getMontant = (idcom: string): getMontantProps => {
  const { data = [], refetch } = useFetchMontantArticleCommandeQuery(idcom);
  //@ts-ignore
  const out: getMontantProps = { data, refetch };
  return out;
};
export type OpenArticleCommandeProp = {
  data: ArticleCommandeJson;
  montants: getMontantProps[];
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
export type OpenArticleCommandeByCommandeProp = {
  data: ArticleCommande[];
  montant: getMontantProps;
  refetchArtCom: () => void;
  save: () => void;
  edit: () => void;
};
export const openArticleCommandes = (): OpenArticleCommandeProp => {
  const { data = [], refetch } = useFetchArticleCommandesQuery();
  const [save] = useAddArticleCommandeMutation();
  const [edit] = useEditArticleCommandeMutation();

  //@ts-ignore
  const out: OpenArticleCommandeProp = { data, refetch, save, edit };
  return out;
};

export const openArticleCommandesByCommande = (
  idcom: string
): OpenArticleCommandeByCommandeProp => {
  const { data = [], refetch } =
    useFetchArticleCommandesByIdCommandeQuery(idcom);
  const [save] = useAddArticleCommandeMutation();
  const [edit] = useEditArticleCommandeMutation();
  const montant = getMontant(idcom);
  const refetchArtCom = () => {
    refetch();
    montant.refetch();
  };
  //@ts-ignore
  const out: OpenArticleCommandeByCommandeProp = {
    data,
    refetchArtCom,
    //@ts-ignore
    save,
    //@ts-ignore
    edit,
    montant,
  };
  return out;
};
