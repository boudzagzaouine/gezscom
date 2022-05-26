import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpenUnitMeasureProp } from "features/reference/UnitMeasure/Methods/openUnitMeasures";
import { PAGE_SIZE } from "tools/consts";
import { UnitMeasure } from "tools/types";

export const crudUnitMeasure = createApi({
  reducerPath: "crud-unitMeasure",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["UnitMeasure", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
      /*****************************************************************************/
      /*********************************UnitMeasure**************************************/
      /*****************************************************************************/
      fetchUnitMeasures: builder.query<UnitMeasure[], void>({
        query: () => `/unitMeasures`,
      }),
      paginationUnitMeasures: builder.query<UnitMeasure[], number>({
        query: (page) => `/unitMeasures?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneUnitMeasure: builder.query<UnitMeasure, string>({
        query: (id) => `/unitMeasures/${id}`,
      }),
      addUnitMeasure: builder.mutation<UnitMeasure, Partial<UnitMeasure>>({
        query: (body) => ({
          url: "/unitMeasures",
          method: "POST",
          body,
        }),
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
        { success: boolean; id: number },
        number
      >({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Client number ${id.id} ?`))
          return {
            url: `/unitMeasures/${id.id}`,
            method: "DELETE",
          };
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
    };
  },
});

export const {
  useFetchUnitMeasuresQuery,
  usePaginationUnitMeasuresQuery,
  useFetchOneUnitMeasureQuery,
  useAddUnitMeasureMutation,
  useEditUnitMeasureMutation,
  useDeleteUnitMeasureMutation,
  useArchiveUnitMeasureMutation,
  useRestoreUnitMeasureMutation,
  /*******************************************************/
  /*******************************************************/
} = crudUnitMeasure;

export const openUnitMeasures = (): OpenUnitMeasureProp => {
  const { data = [], refetch } = useFetchUnitMeasuresQuery();
  const [save] = useAddUnitMeasureMutation();
  const [edit] = useEditUnitMeasureMutation();
  //@ts-ignore
  const out: OpenClientProp = { data, refetch, save, edit };
  return out;
};
