import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { Colis, ColisJson } from "../tools/types";

export const crudColis = createApi({
  reducerPath: "crud-colis",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1000/api/v1",
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["Colis", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
      fetchColis: builder.query<Colis[], number | void>({
        query: () => `/colisage/allColisage`,
      }),
      paginationColis: builder.query<Colis[], number | void>({
        query: (page) => `/colisage/allColisage?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneColis: builder.query<Colis, String>({
        query: (id) => `/articlees/${id}`,
      }),
      addColis: builder.mutation<Colis, Partial<Colis>>({
        query: (body) => ({
          url: "/colisage",
          method: "POST",
          body,
        }),
      }),
      editColis: builder.mutation<Colis, Partial<Colis> & Pick<Colis, "id">>({
        query: (body) => ({
          url: `/articlees/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteColis: builder.mutation<{ success: boolean; id: String }, number>({
        //@ts-ignore
        query(id: String) {
          //  if (confirm(`do you want delete Commande number ${id.id} ?`))
          return {
            //@ts-ignore
            url: `/colisage/${id.id}`,
            method: "DELETE",
          };
          // else return
        },
      }),
      archiveColis: builder.mutation<Colis, Partial<Colis> & Pick<Colis, "id">>(
        {
          query: (id) => ({
            url: `/articlees/${id}/archive`,
            method: "PUT",
          }),
        }
      ),
      restoreColis: builder.mutation<Colis, Partial<Colis> & Pick<Colis, "id">>(
        {
          query: (id) => ({
            url: `/articlees/${id}/restore`,
            method: "PUT",
          }),
        }
      ),
    };
  },
});

export const {
  /******Colis*************/
  /*******************/
  useFetchColisQuery,
  usePaginationColisQuery,
  useFetchOneColisQuery,
  useAddColisMutation,
  useEditColisMutation,
  useDeleteColisMutation,
  useArchiveColisMutation,
  useRestoreColisMutation,
} = crudColis;

export type OpenColisProp = {
  data: ColisJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};

export const openColis = (page: number): OpenColisProp => {
  const { data = [], refetch } = usePaginationColisQuery(page);
  // console.log(data)
  const [save] = useAddColisMutation();
  const [edit] = useEditColisMutation();
  //@ts-ignore
  const out: OpenColisProp = { data, refetch, save, edit };
  return out;
};
