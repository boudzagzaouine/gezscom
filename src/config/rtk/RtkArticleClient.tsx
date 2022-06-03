import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { ArticleClient, ArticleClientJson } from "tools/types";
export const crudArticleClient = createApi({
  reducerPath: "crud-article-commande",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["ArticleClient", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
      /****************************************************************************/
      /*************************ArticleClient*******************************************/
      /****************************************************************************/
      fetchArticleClients: builder.query<ArticleClient[], void>({
        query: () => `/articleclients`,
      }),
      paginationArticleClients: builder.query<ArticleClient[], number>({
        query: (page) => `/articleclients?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchArticleClientsByIdClient: builder.query<ArticleClient[], string>({
        query: (idclient) => `/articleclients/idclient/${idclient}`,
      }),
      fetchOneArticleClient: builder.query<ArticleClient, string>({
        query: (id) => `/articleclients/${id}`,
      }),
      fetchMontantArticleClient: builder.query<number, string>({
        query: (idclient) => `/articleclients/${idclient}/montant`,
      }),
      addArticleClient: builder.mutation<ArticleClient, Partial<ArticleClient>>(
        {
          query: (body) => ({
            url: `/articleclients`,
            method: "POST",
            body,
          }),
        }
      ),
      editArticleClient: builder.mutation<
        ArticleClient,
        Partial<ArticleClient> & Pick<ArticleClient, "id">
      >({
        query: (body) => ({
          url: `/articleclients/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteArticleClient: builder.mutation<
        { success: boolean; id: number },
        number
      >({
        //@ts-ignore
        query(id: Num) {
          return {
            url: `/articleclients/${id.id}`,
            method: "DELETE",
          };
        },
      }),
      archiveArticleClient: builder.mutation<
        ArticleClient,
        Partial<ArticleClient> & Pick<ArticleClient, "id">
      >({
        query: (id) => ({
          url: `/articleclients/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreArticleClient: builder.mutation<
        ArticleClient,
        Partial<ArticleClient> & Pick<ArticleClient, "id">
      >({
        query: (id) => ({
          url: `/articleclients/${id}/restore`,
          method: "PUT",
        }),
      }),
    };
  },
});
export const {
  useFetchArticleClientsQuery,
  usePaginationArticleClientsQuery,
  useFetchArticleClientsByIdClientQuery,
  useFetchOneArticleClientQuery,
  useFetchMontantArticleClientQuery,
  useAddArticleClientMutation,
  useEditArticleClientMutation,
  useDeleteArticleClientMutation,
  useArchiveArticleClientMutation,
  useRestoreArticleClientMutation,
} = crudArticleClient;

export type getMontantProps = {
  data: number;
  refetch: () => void;
};
export const getMontant = (idclient: string): getMontantProps => {
  const { data = [], refetch } = useFetchMontantArticleClientQuery(idclient);
  //@ts-ignore
  const out: getMontantProps = { data, refetch };
  return out;
};
export type OpenArticleClientProp = {
  data: ArticleClientJson;
  montants: getMontantProps[];
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
export type OpenArticleClientByClientProp = {
  data: ArticleClient[];
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
export const openArticleClients = (): OpenArticleClientProp => {
  const { data = [], refetch } = useFetchArticleClientsQuery();
  const [save] = useAddArticleClientMutation();
  const [edit] = useEditArticleClientMutation();

  //@ts-ignore
  const out: OpenArticleClientProp = { data, refetch, save, edit };
  return out;
};

export const openArticleClientsByClient = (
  idclient: string
): OpenArticleClientByClientProp => {
  const { data = [], refetch } =
    useFetchArticleClientsByIdClientQuery(idclient);
  const [save] = useAddArticleClientMutation();
  const [edit] = useEditArticleClientMutation();
  //@ts-ignore
  const out: OpenArticleClientByClientProp = {
    data,
    refetch,
    //@ts-ignore
    save,
    //@ts-ignore
    edit,
  };
  return out;
};
