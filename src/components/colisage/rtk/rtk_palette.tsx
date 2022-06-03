import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "tools/consts";
import { Palette, PaletteJson, OpenPaletteProp } from "../tools/types";

export const crudPalette = createApi({
  reducerPath: "crud-palette",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1000/api/v1",
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["Palette", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints(builder) {
    return {
      fetchPalette: builder.query<Palette[], number | void>({
        query: () => `/articlees`,
      }),
      paginationPalette: builder.query<Palette[], number | void>({
        query: (page) => `/articlees?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOnePalette: builder.query<Palette, String>({
        query: (id) => `/articlees/${id}`,
      }),
      addPalette: builder.mutation<Palette, Partial<Palette>>({
        query: (body) => ({
          url: "/articlees",
          method: "POST",
          body,
        }),
      }),
      editPalette: builder.mutation<
        Palette,
        Partial<Palette> & Pick<Palette, "id">
      >({
        query: (body) => ({
          url: `/articlees/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deletePalette: builder.mutation<{ success: boolean; id: String }, number>(
        {
          //@ts-ignore
          query(id: String) {
            //  if (confirm(`do you want delete Commande number ${id.id} ?`))
            return {
              //@ts-ignore
              url: `/articlees/${id.id}`,
              method: "DELETE",
            };
            // else return
          },
        }
      ),
      archivePalette: builder.mutation<
        Palette,
        Partial<Palette> & Pick<Palette, "id">
      >({
        query: (id) => ({
          url: `/articlees/${id}/archive`,
          method: "PUT",
        }),
      }),
      restorePalette: builder.mutation<
        Palette,
        Partial<Palette> & Pick<Palette, "id">
      >({
        query: (id) => ({
          url: `/articlees/${id}/restore`,
          method: "PUT",
        }),
      }),
    };
  },
});

export const {
  /******Palette*************/
  /*******************/
  useFetchPaletteQuery,
  usePaginationPaletteQuery,
  useFetchOnePaletteQuery,
  useAddPaletteMutation,
  useEditPaletteMutation,
  useDeletePaletteMutation,
  useArchivePaletteMutation,
  useRestorePaletteMutation,
} = crudPalette;

export const openColis = (page: number): OpenPaletteProp => {
  const { data = [], refetch } = usePaginationPaletteQuery(page);
  const [save] = useAddPaletteMutation();
  const [edit] = useEditPaletteMutation();
  //@ts-ignore
  const out: OpenPaletteProp = { data, refetch, save, edit };
  return out;
};
