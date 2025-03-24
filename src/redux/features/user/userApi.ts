import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
    }),
    getUserByEmail: builder.query({
      query: (email:string) => ({
        url: `/users/${email}`,
        method: "GET",
      }),
    }),
  }),
});

export const {useGetAllUsersQuery, useGetUserByEmailQuery} = userApi
