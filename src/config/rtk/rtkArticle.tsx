import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpenArticleProp } from "config/rtk/openArticles";
import { PAGE_SIZE } from "tools/consts";
import { Article } from "tools/types";

export const crudArticle = createApi({
  reducerPath: "crud-article",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["Article", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
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
      deleteArticle: builder.mutation<{ success: boolean; id: number }, number>(
        {
          //@ts-ignore
          query(id: Num) {
            //  if (confirm(`do you want delete Client number ${id.id} ?`))
            return {
              url: `/articles/${id.id}`,
              method: "DELETE",
            };
          },
        }
      ),
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
    };
  },
});

export const {
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
} = crudArticle;
//const familleArticleOpen:OpenArticleProp=openArticles()
export const openArticles = (): OpenArticleProp => {
  const { data = [], refetch } = useFetchArticlesQuery();
  const [save] = useAddArticleMutation();
  const [edit] = useEditArticleMutation();
  //@ts-ignore
  const out: OpenArticleProp = { data, refetch, save, edit };
  return out;
};
