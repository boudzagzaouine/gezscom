import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpenPayementModeProp } from "features/reference/PayementMode/Methods/openPayementModes";
import { PAGE_SIZE } from "tools/consts";
import { PayementMode } from "tools/types";

export const crudPayementMode = createApi({
    reducerPath: "crud-payementMode",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1000/api/v1",
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
            fetchPayementModes: builder.query<PayementMode[], void>({
                query: () => `/payementModes`,
            }),
            paginationPayementModes: builder.query<PayementMode[], number>({
                query: (page) => `/payementModes?page=${page}&size=${PAGE_SIZE}`,
            }),
            fetchOnePayementMode: builder.query<PayementMode, string>({
                query: (id) => `/payementModes/${id}`,
            }),
            addPayementMode: builder.mutation<PayementMode, Partial<PayementMode>>({
                query: (body) => ({
                    url: "/payementModes",
                    method: "POST",
                    body,
                }),
            }),
            editPayementMode: builder.mutation<
                PayementMode,
                Partial<PayementMode> & Pick<PayementMode, "id">
            >({
                query: (body) => ({
                    url: `/payementModes/${body.id}`,
                    method: "PUT",
                    body,
                }),
            }),
            deletePayementMode: builder.mutation<{ success: boolean; id: number }, number>({
                //@ts-ignore
                query(id: Num) {
                    //  if (confirm(`do you want delete Client number ${id.id} ?`))
                    return {
                        url: `/payementModes/${id.id}`,
                        method: "DELETE",
                    };
                }
            }),
            archivePayementMode: builder.mutation<
                PayementMode,
                Partial<PayementMode> & Pick<PayementMode, "id">
            >({
                query: (id) => ({
                    url: `/payementModes/${id}/archive`,
                    method: "PUT",
                }),
            }),
            restorePayementMode: builder.mutation<
                PayementMode,
                Partial<PayementMode> & Pick<PayementMode, "id">
            >({
                query: (id) => ({
                    url: `/payementModes/${id}/restore`,
                    method: "PUT",
                }),
            }),
        };
    },
});


export const {

    useFetchPayementModesQuery,
    usePaginationPayementModesQuery,
    useFetchOnePayementModeQuery,
    useAddPayementModeMutation,
    useEditPayementModeMutation,
    useDeletePayementModeMutation,
    useArchivePayementModeMutation,
    useRestorePayementModeMutation,
    /*******************************************************/
    /*******************************************************/

} = crudPayementMode;


export const openPayementModes = (): OpenPayementModeProp => {
    const { data = [], refetch } = usePaginationPayementModesQuery(0);
    const [save] = useAddPayementModeMutation();
    const [edit] = useEditPayementModeMutation();
    //@ts-ignore
    const out: OpenPayementModeProp = { data, refetch, save, edit }
    return out;
}
