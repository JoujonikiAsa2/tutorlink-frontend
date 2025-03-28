import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register/student",
        method: "POST",
        body: credentials,
      }),
    }),
    registerTutor: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register/tutor",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {useLoginMutation, useRegisterUserMutation, useRegisterTutorMutation} = authApi
