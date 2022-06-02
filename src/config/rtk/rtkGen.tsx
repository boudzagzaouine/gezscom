import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IdsObject, IdsObjectJson } from 'tools/types';

export const crudGeneric = createApi({
  reducerPath: "crud-generic",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["IdsObject", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
      /****************************************************************************/
      /*************************IdsObject*******************************************/
      /****************************************************************************/
      fetch: builder.query<IdsObject[], string>({
        query: (path) => `/${path}`,
      }),
     
      add: builder.mutation<IdsObject,Partial<IdsObject> & Pick<IdsObject,"path">>({
        query: (body) => ({
          url: `/${body.path}`,
          method: "POST",
          body,
        }),
      }),
      edit: builder.mutation<IdsObject,Partial<IdsObject> & Pick<IdsObject,"path"> & Pick<IdsObject, "id"> >({
        query: (body) => ({
          url: `/${body.path}/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      delete: builder.mutation<
        { success: boolean; id: number },
        number
      >({
        //@ts-ignore
        query(id: Num) {
          return {
            url: `/IdsObjects/${id.id}`,
            method: "DELETE",
          };
        },
      }),
      archiveIdsObject: builder.mutation<
        IdsObject,
        Partial<IdsObject> & Pick<IdsObject, "id">
      >({
        query: (id) => ({
          url: `/IdsObjects/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreIdsObject: builder.mutation<
        IdsObject,
        Partial<IdsObject> & Pick<IdsObject, "id">
      >({
        query: (id) => ({
          url: `/IdsObjects/${id}/restore`,
          method: "PUT",
        }),
      }),
    };
  },
});
export const {
  useFetchQuery,
  useAddMutation,
  useEditMutation
} = crudGeneric;

export type OpenIdsObjectProp<E extends IdsObjectJson> = {
  data: E;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
export type OpenIdsObjectByIdClientProp<E extends IdsObject> = {
  data: E[];
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
//@ts-ignore
export const openIdsObjects = (path:string): OpenIdsObjectProp<> => {
  const { data = [], refetch } = useFetchQuery(path);
  const [save] = useAddMutation();
  const [edit] = useEditMutation();
  //@ts-ignore
  const out: OpenIdsObjectProp = { data, refetch, save, edit };
  return out;
};
