import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetToken } from "config/GetToken";
import { useSession } from "next-auth/react";
import { PAGE_SIZE } from "tools/consts";
import { User } from "tools/types";

export const crudUser = createApi({
  reducerPath: "crud-User",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4002/admin/realms/gescom",
    prepareHeaders(headers) {
      headers.set("Content-Type", "application/x-www-form-urlencoded");
      headers.set(
        "Authorization",
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJWZmFhYldKcjJXb0hTY3JMbDBQUU5laGo1d2JSQTVRbDZfTnY3WTBXOS1zIn0.eyJleHAiOjE2NTM4MTkyNzcsImlhdCI6MTY1MzM4NzI3NywiYXV0aF90aW1lIjoxNjUzMzg3Mjc3LCJqdGkiOiI5NTc1ZmY2NS1hYTVmLTRkYTMtYmQ3MS1kYWJmZTA2NGFhMGMiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQwMDIvcmVhbG1zL2dlc2NvbSIsImF1ZCI6WyJyZWFsbS1tYW5hZ2VtZW50IiwiYnJva2VyIiwiYWNjb3VudCJdLCJzdWIiOiJlZGQxZjJmMS04MzBiLTQxOWQtODUzOC03NjJkNjI4OTc3MjciLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiMTA4NGM2ODYtZTViMC00OGEzLTk3MDEtYmUwOTRmYjc3NzYzIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWxlYXJuIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJ2aWV3LXJlYWxtIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJyZWFsbS1hZG1pbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYnJva2VyIjp7InJvbGVzIjpbInJlYWQtdG9rZW4iXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJ2aWV3LWFwcGxpY2F0aW9ucyIsInZpZXctY29uc2VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwiZGVsZXRlLWFjY291bnQiLCJtYW5hZ2UtY29uc2VudCIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiIxMDg0YzY4Ni1lNWIwLTQ4YTMtOTcwMS1iZTA5NGZiNzc3NjMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJheW91YiBib3VyYWQiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhQHkiLCJnaXZlbl9uYW1lIjoiYXlvdWIiLCJmYW1pbHlfbmFtZSI6ImJvdXJhZCIsImVtYWlsIjoiYUB5In0.KiLZ0DcLU-HqibtGy16XdPp6XCGxVBIMDdflHmZx0wYZy1KWbMK9PNgeeaoXmngkaKvh643ETLK3JOUd6kNP9LTYA43o8JhJBOjcCxt6luuA5D1V0fc95eBkzqDZdD8JSmjdYUBZbzzoa-kB9gpeM-sU_MVGfvlH4SrsouInGzEn6tocxeUKSYoKJAMj-Wplczn6PXNjVSd0fUbP8K9WPqop98Aq1D6r7d9BURXvyYgc2q9cSUIIVk19rYJ8JPgADltG0bND2PHOtks93VqqfZA88erVmksrB6djnakZwD60ksq9BFWMo_2NvClD0lpxsplxhRQv4oSwHErvfHFhMg"
      );
      headers.set("Access-Control-Allow-Origin", "*");
      // const { data: token, status } = useSession()
      /*  const jwtProm=GetToken()
     jwtProm.then((jwt:string)=>{
      if (jwt) {
        headers.set('authorization', `Bearer ${jwt}`)
      }
     },
     (error)=>{
console.log("errrr ="+error)
     }) */
      //  console.log("jwt2 = "+token?.accessToken)
      return headers;
    },
    /*  prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState<any,any,any>).auth?.token
  
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
  
      return headers
    }, */
  }),
  tagTypes: ["User", "UNAUTHORIZED", "UNKNOWN_ERROR"],

  endpoints(builder) {
    return {
      /*****************************************************************************/
      /*********************************User**************************************/
      /*****************************************************************************/
      fetchUsers: builder.query<User[], void>({
        query: () => ({
          url: `/users`,
          responseHandler: (response) => response.text(), // This is the same as passing 'text'
        }),
      }),
      paginationUsers: builder.query<User[], number>({
        query: (page) => `/Users?page=${page}&size=${PAGE_SIZE}`,
      }),
      fetchOneUser: builder.query<User, string>({
        query: (id) => `/Users/${id}`,
      }),
      addUser: builder.mutation<User, Partial<User>>({
        query: (body) => ({
          url: "/Users",
          method: "POST",
          body,
        }),
      }),
      editUser: builder.mutation<User, Partial<User> & Pick<User, "id">>({
        query: (body) => ({
          url: `/Users/${body.id}`,
          method: "PUT",
          body,
        }),
      }),
      deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
        //@ts-ignore
        query(id: Num) {
          //  if (confirm(`do you want delete User number ${id.id} ?`))
          return {
            url: `/Users/${id.id}`,
            method: "DELETE",
          };
        },
      }),
      archiveUser: builder.mutation<User, Partial<User> & Pick<User, "id">>({
        query: (id) => ({
          url: `/Users/${id}/archive`,
          method: "PUT",
        }),
      }),
      restoreUser: builder.mutation<User, Partial<User> & Pick<User, "id">>({
        query: (id) => ({
          url: `/Users/${id}/restore`,
          method: "PUT",
        }),
      }),
    };
  },
});
/***********useMaMethodAfficjageQuery********************************************/
/***********useMaMethodeOperationMutaion*****************************************/
export const {
  /******************User********************************/
  /*******************************************************/
  useFetchUsersQuery,
  usePaginationUsersQuery,
  useFetchOneUserQuery,
  useAddUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
  useArchiveUserMutation,
  useRestoreUserMutation,
} = crudUser;
export type OpenUserProp = {
  data: User[];
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
export const openUsers = (): OpenUserProp => {
  const { data: token, status } = useSession();

  console.log("jwt3 = " + token);
  const { data = [], refetch } = useFetchUsersQuery();
  const [save] = useAddUserMutation();
  const [edit] = useEditUserMutation();
  //@ts-ignore
  const out: OpenUserProp = { data, refetch, save, edit };
  return out;
};
