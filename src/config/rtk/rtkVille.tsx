import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { Ville, VilleJson } from "tools/types";

export const crudVille = createApi({
  reducerPath: "crud-Ville",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["Ville", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
      /********************************************************************************************* */
      /********************************Ville************************************************************* */
      /********************************************************************************************* */
      fetchVilles: builder.query<Ville[], void>({
        query: () => `/villes`,
      }),
      paginationVilles: builder.query<Ville[], number>({
        query: (page) => `/villes?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneVille: builder.query<Ville, string>({
        query: (id) => `/villes/${id}`,
      }),
      addVille: builder.mutation<Ville, Partial<Ville>>({
        query: (body) => ({
          url: "/villes",
          method: "POST",
          body,
        }),
      }),
      editVille: builder.mutation<
        Ville,
        //@ts-ignore
        Partial<Ville> & Pick<Ville, "id">
      >({
        query: (body) => ({
          url: `/villes/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteVille: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete Ville number ${id.id} ?`))
          return {
            url: `/villes/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
        //@ts-ignore
        invalidatesTags: (result, error, id) => [
          { type: "Ville", id },
          { type: "Ville", id: "LIST" },
        ],
      }),
      archiveVille: builder.mutation<
        Ville,
        //@ts-ignore
        Partial<Ville> & Pick<Ville, "id">
      >({
        query: (id) => ({
          url: `/villes/${id}/archive`,
          method: "PATCH",
        }),
      }),
      restoreVille: builder.mutation<
        Ville,
        //@ts-ignore
        Partial<Ville> & Pick<Ville, "id">
      >({
        query: (id) => ({
          url: `/villes/${id}/restore`,
          method: "PUT",
        }),
      }),
    };
  },
});
/***********useMaMethodAfficjageQuery********************************************/
/***********useMaMethodeOperationMutaion*****************************************/
export const {
  /******************Ville********************************/
  /*******************************************************/
  useFetchVillesQuery,
  usePaginationVillesQuery,
  useFetchOneVilleQuery,
  useAddVilleMutation,
  useEditVilleMutation,
  useDeleteVilleMutation,
  useArchiveVilleMutation,
  useRestoreVilleMutation,
} = crudVille;

export type OpenVilleProp = {
  data: VilleJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
export const openVilles = (page: number): OpenVilleProp => {
  const { data = [], refetch } = usePaginationVillesQuery(page);
  const [save] = useAddVilleMutation();
  const [edit] = useEditVilleMutation();
  //@ts-ignore
  const out: OpenVilleProp = { data, refetch, save, edit };
  return out;
};
export const openVilleD = (): OpenVilleProp => {
  const { data = [], refetch } = usePaginationVillesQuery(0);
  const [save] = useAddVilleMutation();
  const [edit] = useEditVilleMutation();
  //@ts-ignore
  const out: OpenVilleProp = { data, refetch, save, edit };
  return out;
};
