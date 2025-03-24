import { baseApi } from "@/redux/api/baseApi";

const subjectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSubjects: builder.query({
      query: () => ({
        url: `/subjects`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllSubjectsQuery } = subjectApi;
