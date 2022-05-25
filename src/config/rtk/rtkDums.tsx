import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpenDumProp } from "features/reference/Dums/Methods/openDum";
import { PAGE_SIZE } from "tools/consts";
import { Dum } from "tools/types";

export const crudDum = createApi({
    reducerPath: "crud-dum",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1000/api/v1",
        prepareHeaders(headers) {
            return headers;
        },
    }),
    tagTypes: ["Dum", "UNAUTHORIZED", "UNKNOWN_ERROR"],
    endpoints(builder) {
        return {
            /*****************************************************************************/
            /*********************************Dum**************************************/
            /*****************************************************************************/
            fetchDums: builder.query<Dum[], void>({
                query: () => `/dums`,
            }),
            paginationDums: builder.query<Dum[], number>({
                query: (page) => `/dums?page=${page}&size=${PAGE_SIZE}`,
            }),
            fetchOneDum: builder.query<Dum, string>({
                query: (id) => `/dums/${id}`,
            }),
            addDum: builder.mutation<Dum, Partial<Dum>>({
                query: (body) => ({
                    url: "/dums",
                    method: "POST",
                    body,
                }),
            }),
            editDum: builder.mutation<
                Dum,
                Partial<Dum> & Pick<Dum, "id">
            >({
                query: (body) => ({
                    url: `/dums/${body.id}`,
                    method: "PUT",
                    body,
                }),
            }),
            deleteDum: builder.mutation<{ success: boolean; id: number }, number>({
                //@ts-ignore
                query(id: Num) {
                    //  if (confirm(`do you want delete Client number ${id.id} ?`))
                    return {
                        url: `/dums/${id.id}`,
                        method: "DELETE",
                    };
                }
            }),
            archiveDum: builder.mutation<
                Dum,
                Partial<Dum> & Pick<Dum, "id">
            >({
                query: (id) => ({
                    url: `/dums/${id}/archive`,
                    method: "PUT",
                }),
            }),
            restoreDum: builder.mutation<
                Dum,
                Partial<Dum> & Pick<Dum, "id">
            >({
                query: (id) => ({
                    url: `/dums/${id}/restore`,
                    method: "PUT",
                }),
            }),

        };
    },
});


export const {

    useFetchDumsQuery,
    usePaginationDumsQuery,
    useFetchOneDumQuery,
    useAddDumMutation,
    useEditDumMutation,
    useDeleteDumMutation,
    useArchiveDumMutation,
    useRestoreDumMutation,
    /*******************************************************/
    /*******************************************************/

} = crudDum;


export const opendums = (): OpenDumProp => {
    const { data = [], refetch } = useFetchDumsQuery();
    const [save] = useAddDumMutation();
    const [edit] = useEditDumMutation();
    //@ts-ignore
    const out: OpenDumProp = { data, refetch, save, edit }
    return out;
}

