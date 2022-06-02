import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PAGE_SIZE } from 'tools/consts';
import { IdsObject, PayementModeJson } from 'tools/types';

type Crud={
  crud:any
}
export const  crudGeneral=(path:string)=>
 {crud: createApi({
    reducerPath: "crud-general",
    baseQuery: fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_URL,
      prepareHeaders(headers) {
        
        return headers;
      },
    }),
    tagTypes: ["PayementMode", "UNAUTHORIZED", "UNKNOWN_ERROR"],
    
    endpoints(builder) {
      return {
       
        /*****************************************************************************/
        /*********************************PayementMode**************************************/
        /*****************************************************************************/
       fetchPayementModes: builder.query<IdsObject[], void>({
          query() {
            return `/${path}`
          },
        }),
        paginationPayementModes: builder.query<IdsObject[], void>({
          query(){
             return `/${path}?page=0&size=${PAGE_SIZE}`},
        }),
        fetchOnePayementMode: builder.query<IdsObject, string>({
          query: (id) => `/${path}/${id}`,
        }),
        addPayementMode: builder.mutation<IdsObject, Partial<IdsObject>>({
          query: (body) => ({
            url: `/${path}`,
            method: "POST",
            body,
          }),
        }),
        editPayementMode: builder.mutation<
        IdsObject,
          Partial<IdsObject> & Pick<IdsObject, "id">
        >({
          query: (body) => ({
            url: `/${path}/${body.id}`,
            method: "PUT",
            body,
          }),
        }),
        deletePayementMode: builder.mutation<
          { success: boolean; id: number },
          number
        >({
          //@ts-ignore
          query(id: Num) {
            //  if (confirm(`do you want delete Client number ${id.id} ?`))
            return {
              url: `/payementModes/${id.id}`,
              method: "DELETE",
            };
          },
        }),
        archivePayementMode: builder.mutation<
        IdsObject,
          Partial<IdsObject> & Pick<IdsObject, "id">
        >({
          query: (id) => ({
            url: `/payementModes/${id}/archive`,
            method: "PUT",
          }),
        }),
        restorePayementMode: builder.mutation<
        IdsObject,
          Partial<IdsObject> & Pick<IdsObject, "id">
        >({
          query: (id) => ({
            url: `/payementModes/${id}/restore`,
            method: "PUT",
          }),
        }),
      };
    },
  });}
  

const {
  useFetchPayementModesQuery,
  usePaginationPayementModesQuery,
  useFetchOnePayementModeQuery,
  useAddPayementModeMutation,
  useEditPayementModeMutation,
  useDeletePayementModeMutation,
  useArchivePayementModeMutation,
  useRestorePayementModeMutation,
 } = crud;
 return {
  useFetchPayementModesQuery,
  usePaginationPayementModesQuery,
  useFetchOnePayementModeQuery,
  useAddPayementModeMutation,
  useEditPayementModeMutation,
  useDeletePayementModeMutation,
  useArchivePayementModeMutation,
  useRestorePayementModeMutation,
 } 

export type OpenCrudProp = {
  data: PayementModeJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
//const open: OpenCrudProp=openCrud ()
export const openCrud = (path:string): OpenCrudProp => {
  const { data = [], refetch } = usePaginationPayementModesQuery(path);
  const [save] = useAddPayementModeMutation();
  const [edit] = useEditPayementModeMutation();
  //@ts-ignore
  const out: OpenCrudProp = { data, refetch, save, edit };
  return out;
};
