import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpenIncotermProp } from "config/rtk/openIncoterms";
import { PAGE_SIZE } from "tools/consts";
import { Incoterm } from "tools/types";

export const crudIncoterm = createApi({
  reducerPath: "crud-incoterm",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["Incoterm", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
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
      deleteIncoterm: builder.mutation<
        { success: boolean; id: number },
        number
      >({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Client number ${id.id} ?`))
          return {
            url: `/incoterms/${id.id}`,
            method: "DELETE",
          };
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
    };
  },
});

export const {
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
} = crudIncoterm;

export const openIncoterms = (): OpenIncotermProp => {
  const { data = [], refetch } = usePaginationIncotermsQuery(0);
  const [save] = useAddIncotermMutation();
  const [edit] = useEditIncotermMutation();
  //@ts-ignore
  const out: OpenIncotermProp = { data, refetch, save, edit };
  return out;
};
