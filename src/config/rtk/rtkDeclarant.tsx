import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpenDeclarantProp } from "features/reference/Declarant/Methods/openDeclarants";
import { PAGE_SIZE } from "tools/consts";
import { Declarant } from "tools/types";

export const crudDeclarant = createApi({
  reducerPath: "crud-declarant",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["Declarant", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
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
      deleteDeclarant: builder.mutation<
        { success: boolean; id: number },
        number
      >({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Client number ${id.id} ?`))
          return {
            url: `/declarants/${id.id}`,
            method: "DELETE",
          };
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
    };
  },
});

export const {
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
} = crudDeclarant;

export const openDeclarants = (): OpenDeclarantProp => {
  const { data = [], refetch } = useFetchDeclarantsQuery();
  const [save] = useAddDeclarantMutation();
  const [edit] = useEditDeclarantMutation();
  //@ts-ignore
  const out: OpenDeclarantProp = { data, refetch, save, edit };
  return out;
};
