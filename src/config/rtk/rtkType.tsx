import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { Type, TypeJson } from "tools/types";

export const crudType = createApi({
  reducerPath: "crud-Type",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["Type", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
      /********************************************************************************************* */
      /********************************Type************************************************************* */
      /********************************************************************************************* */
      fetchTypes: builder.query<Type[], void>({
        query: () => `/types`,
      }),
      paginationTypes: builder.query<Type[], number>({
        query: (page) => `/types?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneType: builder.query<Type, string>({
        query: (id) => `/types/${id}`,
      }),
      addType: builder.mutation<Type, Partial<Type>>({
        query: (body) => ({
          url: "/types",
          method: "POST",
          body,
        }),
      }),
      editType: builder.mutation<
        Type,
        //@ts-ignore
        Partial<Type> & Pick<Type, "id">
      >({
        query: (body) => ({
          url: `/types/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteType: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Type number ${id.id} ?`))
          return {
            url: `/types/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "Type", id },
          { type: "Type", id: "LIST" },
        ],
      }),
      archiveType: builder.mutation<
        Type,
        //@ts-ignore
        Partial<Type> & Pick<Type, "id">
      >({
        query: (id) => ({
          url: `/types/${id}/archive`,
          method: "PATCH",
        }),
      }),
      restoreType: builder.mutation<
        Type,
        //@ts-ignore
        Partial<Type> & Pick<Type, "id">
      >({
        query: (id) => ({
          url: `/types/${id}/restore`,
          method: "PUT",
        }),
      }),
    };
  },
});
/***********useMaMethodAfficjageQuery********************************************/
/***********useMaMethodeOperationMutaion*****************************************/
export const {
  /******************Type********************************/
  /*******************************************************/
  useFetchTypesQuery,
  usePaginationTypesQuery,
  useFetchOneTypeQuery,
  useAddTypeMutation,
  useEditTypeMutation,
  useDeleteTypeMutation,
  useArchiveTypeMutation,
  useRestoreTypeMutation,
} = crudType;
export type OpenTypeProp = {
  data: TypeJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
export const openTypes = (page:number): OpenTypeProp => {
  const { data = [], refetch } = usePaginationTypesQuery(page);
  const [save] = useAddTypeMutation();
  const [edit] = useEditTypeMutation();
  //@ts-ignore
  const out: OpenTypeProp = { data, refetch, save, edit };
  return out;
};
