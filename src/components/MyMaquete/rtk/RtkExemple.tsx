import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { Exemple, ExempleJson } from "components/MyMaquete/tools/types";

export const crudExemple = createApi({
  reducerPath: "crud-Exemple",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["Exemple", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
      /*****************************************************************************/
      /*********************************Exemple**************************************/
      /*****************************************************************************/
      fetchExemples: builder.query<Exemple[], void>({
        query: () => `/exemples`,
      }),
      paginationExemples: builder.query<Exemple[], number>({
        query: (page) => `/exemples?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneExemple: builder.query<Exemple, string>({
        query: (id) => `/exemples/${id}`,
      }),
      addExemple: builder.mutation<Exemple, Partial<Exemple>>({
        query: (body) => ({
          url: "/exemples",
          method: "POST",
          body,
        }),
      }),
      editExemple: builder.mutation<
        Exemple,
        Partial<Exemple> & Pick<Exemple, "id">
      >({
        query: (body) => ({
          url: `/exemples/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteExemple: builder.mutation<{ success: boolean; id: number }, number>(
        {
          //@ts-ignore
          query(id: Num) {
            //  if (confirm(`do you want delete Exemple number ${id.id} ?`))
            return {
              url: `/exemples/${id.id}`,
              method: "DELETE",
            };
          },
        }
      ),
      archiveExemple: builder.mutation<
        Exemple,
        Partial<Exemple> & Pick<Exemple, "id">
      >({
        query: (id) => ({
          url: `/exemples/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreExemple: builder.mutation<
        Exemple,
        Partial<Exemple> & Pick<Exemple, "id">
      >({
        query: (id) => ({
          url: `/exemples/${id}/restore`,
          method: "PUT",
        }),
      }),
    };
  },
});
/***********useMaMethodAfficjageQuery********************************************/
/***********useMaMethodeOperationMutaion*****************************************/
export const {
  /******************Exemple********************************/
  /*******************************************************/
  useFetchExemplesQuery,
  usePaginationExemplesQuery,
  useFetchOneExempleQuery,
  useAddExempleMutation,
  useEditExempleMutation,
  useDeleteExempleMutation,
  useArchiveExempleMutation,
  useRestoreExempleMutation,
} = crudExemple;
export type OpenExempleProp = {
  data: ExempleJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
export const openExemples = (): OpenExempleProp => {
  const { data = [], refetch } = useFetchExemplesQuery();
  const [save] = useAddExempleMutation();
  const [edit] = useEditExempleMutation();
  //@ts-ignore
  const out: OpenExempleProp = { data, refetch, save, edit };
  return out;
};
export const openPaginationExemples = (page: number): OpenExempleProp => {
  const { data = [], refetch } = usePaginationExemplesQuery(page);
  const [save] = useAddExempleMutation();
  const [edit] = useEditExempleMutation();
  //@ts-ignore
  const out: OpenExempleProp = { data, refetch, save, edit };
  return out;
};
export const openOneExemple = (id: string): OpenExempleProp => {
  const { data = [], refetch } = useFetchOneExempleQuery(id);
  const [save] = useAddExempleMutation();
  const [edit] = useEditExempleMutation();
  //@ts-ignore
  const out: OpenExempleProp = { data, refetch, save, edit };
  return out;
};
export const operationExemple = (): OpenExempleProp => {
  const { refetch } = useFetchExemplesQuery();
  const [save] = useAddExempleMutation();
  const [edit] = useEditExempleMutation();
  //@ts-ignore
  const out: OpenExempleProp = { refetch, save, edit };
  return out;
};
