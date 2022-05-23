import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpenDocumentProp } from "components/reference2/OpenDocument";
import { PAGE_SIZE } from "tools/consts";
import { Document } from "tools/types";

export const crudDocument = createApi({
    reducerPath: "crud-Document",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL,
        prepareHeaders(headers) {
            return headers;
        },
    }),
    tagTypes: ["Document", "UNAUTHORIZED", "UNKNOWN_ERROR"],
    endpoints(builder) {
        return {
            /********************************************************************************************* */
            /********************************Document************************************************************* */
            /********************************************************************************************* */
            fetchDocuments: builder.query<Document[], void>({
                query: () => `/documents`,
            }),
            paginationDocuments: builder.query<Document[], number>({
                query: (page) => `/documents?page=${page}&size=${PAGE_SIZE}`,
            }),
            fetchOneDocument: builder.query<Document, string>({
                query: (id) => `/documents/${id}`,
            }),
            addDocument: builder.mutation<Document, Partial<Document>>({
                query: (body) => ({
                    url: "/documents",
                    method: "POST",
                    body,
                }),
            }),
            editDocument: builder.mutation<

                Document,
                //@ts-ignore
                Partial<Document> & Pick<Document, "id">
            >({
                query: (body) => ({
                    url: `/documents/${body.id}`,
                    method: "PUT",
                    body,
                }),
            }),
            deleteDocument: builder.mutation<{ success: boolean; id: number }, number>({
                //@ts-ignore
                query(id: Num) {
                    //  if (confirm(`do you want delete Document number ${id.id} ?`))
                    return {
                        url: `/documents/${id.id}`,
                        method: "DELETE",
                    };
                    // else return
                },
                //@ts-ignore
                invalidatesTags: (result, error, id) => [
                    { type: "Document", id },
                    { type: "Document", id: "LIST" },
                ],
            }),
            archiveDocument: builder.mutation<
                Document,
                //@ts-ignore
                Partial<Document> & Pick<Document, "id">
            >({
                query: (id) => ({
                    url: `/documents/${id}/archive`,
                    method: "PATCH",
                }),
            }),
            restoreDocument: builder.mutation<
                Document,
                //@ts-ignore
                Partial<Document> & Pick<Document, "id">
            >({
                query: (id) => ({
                    url: `/documents/${id}/restore`,
                    method: "PUT",
                }),
            }),

        };
    },
});
/***********useMaMethodAfficjageQuery********************************************/
/***********useMaMethodeOperationMutaion*****************************************/
export const {
    /******************Document********************************/
    /*******************************************************/
    useFetchDocumentsQuery,
    usePaginationDocumentsQuery,
    useFetchOneDocumentQuery,
    useAddDocumentMutation,
    useEditDocumentMutation,
    useDeleteDocumentMutation,
    useArchiveDocumentMutation,
    useRestoreDocumentMutation,

} = crudDocument;
export const openDocuments = (): OpenDocumentProp => {
    const { data = [], refetch } = useFetchDocumentsQuery();
    const [save] = useAddDocumentMutation();
    const [edit] = useEditDocumentMutation();
    //@ts-ignore
    const out: OpenDocumentProp = { data, refetch, save, edit }
    return out;
}