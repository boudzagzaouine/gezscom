import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpenRegimeDouanierProp } from "features/reference/RegimeDouanier/Methods/openRegimeDouaniers";
import { PAGE_SIZE } from "tools/consts";
import { RegimeDouanier } from "tools/types";

export const crudRegimeDouanier = createApi({
  reducerPath: "crud-regimeDouanier",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["RegimeDouanier", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
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
      addRegimeDouanier: builder.mutation<
        RegimeDouanier,
        Partial<RegimeDouanier>
      >({
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
        { success: boolean; id: number },
        number
      >({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Client number ${id.id} ?`))
          return {
            url: `/regimeDouaniers/${id.id}`,
            method: "DELETE",
          };
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
    };
  },
});

export const {
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
} = crudRegimeDouanier;

export const openRegimeDouaniers = (): OpenRegimeDouanierProp => {
  const { data = [], refetch } = useFetchRegimeDouaniersQuery();
  const [save] = useAddRegimeDouanierMutation();
  const [edit] = useEditRegimeDouanierMutation();
  //@ts-ignore
  const out: OpenRegimeDouanierProp = { data, refetch, save, edit };
  return out;
};
