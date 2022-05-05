import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Client } from '../tools/types'

export const crudApi = createApi({
    reducerPath: 'crud-api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1000/api/v1',
        prepareHeaders(headers) {
            return headers
        },
    }),
    tagTypes: ['Client', 'UNAUTHORIZED', 'UNKNOWN_ERROR'],
    endpoints(builder) {
        return {
            fetchClients: builder.query<Client[], number | void>({
                query() {
                    return '/clients'
                },
                providesTags: (result) =>
                    result
                        ? [
                              //@ts-ignore
                              ...result.content.map(({ id }) => ({
                                  type: 'Client' as const,
                                  id,
                              })),
                              { type: 'Client', id: 'LIST' },
                          ]
                        : [{ type: 'Client', id: 'LIST' }],
            }),

            fetchOneClient: builder.query<Client, number>({
                query: (id) => `/clients/${id}`,
                providesTags: (result, error, id) => [{ type: 'Client', id }],
            }),
            addClient: builder.mutation<Client, Partial<Client>>({
                query: (body) => ({
                    url: '/clients',
                    method: 'POST',
                    body,
                }),
                invalidatesTags: ['Client'],
            }),
            editClient: builder.mutation<
                Client,
                Partial<Client> & Pick<Client, 'id'>
            >({
                query: (body) => ({
                    url: `/clients/${body.id}`,
                    method: 'PUT',
                    body,
                }),
            }),
            deleteClient: builder.mutation<
                { success: boolean; id: number },
                number
            >({
                //@ts-ignore
                query(id: Num) {
                    if (confirm(`do you want delete Client number ${id.id} ?`))
                        return {
                            url: `/clients/${id.id}`,
                            method: 'DELETE',
                        }
                    else return
                },
                invalidatesTags: (result, error, id) => [
                    { type: 'Client', id },
                    { type: 'Client', id: 'LIST' },
                ],
            }),
            /*****************************************************************************/
            /*****************************************************************************/
            /*****************************************************************************/
        }
    },
})

export const {
    useFetchClientsQuery,
    useFetchOneClientQuery,
    useAddClientMutation,
    useEditClientMutation,
    useDeleteClientMutation,
    /*******************************************************/
    /*******************************************************/
    /*******************************************************/
} = crudApi
