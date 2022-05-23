import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpenDeviseProp } from "components/reference2/OpenDevise";
import { PAGE_SIZE } from "tools/consts";
import { Devise } from "tools/types";

export const crudDevise = createApi({
    reducerPath: "crud-Devise",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL,
        prepareHeaders(headers) {
            return headers;
        },
    }),
    tagTypes: ["Devise", "UNAUTHORIZED", "UNKNOWN_ERROR"],
    endpoints(builder) {
        return {
            /********************************************************************************************* */
            /********************************Devise************************************************************* */
            /********************************************************************************************* */
            fetchDevises: builder.query<Devise[], void>({
                query: () => `/devises`,
            }),
            paginationDevises: builder.query<Devise[], number>({
                query: (page) => `/devises?page=${page}&size=${PAGE_SIZE}`,
            }),
            fetchOneDevise: builder.query<Devise, string>({
                query: (id) => `/devises/${id}`,
            }),
            addDevise: builder.mutation<Devise, Partial<Devise>>({
                query: (body) => ({
                    url: "/devises",
                    method: "POST",
                    body,
                }),
            }),
            editDevise: builder.mutation<

                Devise,
                //@ts-ignore
                Partial<Devise> & Pick<Devise, "id">
            >({
                query: (body) => ({
                    url: `/devises/${body.id}`,
                    method: "PUT",
                    body,
                }),
            }),
            deleteDevise: builder.mutation<{ success: boolean; id: number }, number>({
                //@ts-ignore
                query(id: Num) {
                    //  if (confirm(`do you want delete Devise number ${id.id} ?`))
                    return {
                        url: `/devises/${id.id}`,
                        method: "DELETE",
                    };
                    // else return
                },
                //@ts-ignore
                invalidatesTags: (result, error, id) => [
                    { type: "Devise", id },
                    { type: "Devise", id: "LIST" },
                ],
            }),
            archiveDevise: builder.mutation<
                Devise,
                //@ts-ignore
                Partial<Devise> & Pick<Devise, "id">
            >({
                query: (id) => ({
                    url: `/devises/${id}/archive`,
                    method: "PATCH",
                }),
            }),
            restoreDevise: builder.mutation<
                Devise,
                //@ts-ignore
                Partial<Devise> & Pick<Devise, "id">
            >({
                query: (id) => ({
                    url: `/devises/${id}/restore`,
                    method: "PUT",
                }),
            }),

        };
    },
});
/***********useMaMethodAfficjageQuery********************************************/
/***********useMaMethodeOperationMutaion*****************************************/
export const {
    /******************Devise********************************/
    /*******************************************************/
    useFetchDevisesQuery,
    usePaginationDevisesQuery,
    useFetchOneDeviseQuery,
    useAddDeviseMutation,
    useEditDeviseMutation,
    useDeleteDeviseMutation,
    useArchiveDeviseMutation,
    useRestoreDeviseMutation,

} = crudDevise;
export const openDevises = (): OpenDeviseProp => {
    const { data = [], refetch } = useFetchDevisesQuery();
    const [save] = useAddDeviseMutation();
    const [edit] = useEditDeviseMutation();
    //@ts-ignore
    const out: OpenDeviseProp = { data, refetch, save, edit }
    return out;
}