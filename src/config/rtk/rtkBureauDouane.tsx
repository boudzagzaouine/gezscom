import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpenBureauDouaneProp } from "features/reference/BureauDouane/Methods/openBureauDouanes";
import { PAGE_SIZE } from "tools/consts";
import { BureauDouane } from "tools/types";

export const crudBureauDouane = createApi({
  reducerPath: "crud-bureauDouane",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["BureauDouane", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
      /*****************************************************************************/
      /*********************************BureauDouane**************************************/
      /*****************************************************************************/
      fetchBureauDouanes: builder.query<BureauDouane[], void>({
        query: () => `/bureauDouanes`,
      }),
      paginationBureauDouanes: builder.query<BureauDouane[], number>({
        query: (page) => `/bureauDouanes?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneBureauDouane: builder.query<BureauDouane, string>({
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
        { success: boolean; id: number },
        number
      >({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Client number ${id.id} ?`))
          return {
            url: `/bureauDouanes/${id.id}`,
            method: "DELETE",
          };
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
    };
  },
});

export const {
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
} = crudBureauDouane;

export const openBureauDouanes = (): OpenBureauDouaneProp => {
  const { data = [], refetch } = useFetchBureauDouanesQuery();
  const [save] = useAddBureauDouaneMutation();
  const [edit] = useEditBureauDouaneMutation();
  //@ts-ignore
  const out: OpenBureauDouaneProp = { data, refetch, save, edit };
  return out;
};
