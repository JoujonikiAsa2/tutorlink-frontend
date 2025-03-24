import { baseApi } from "@/redux/api/baseApi";
import {  TQueryParam, TResponseRedux } from "@/types/global";
import { TTutor } from "@/types/tutor";

const tutorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTutors: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/tutors`,
          method: "GET",
          params,
        };
      },
      transformResponse: (response: TResponseRedux<TTutor[] | undefined>) => ({
        data: response?.data ?? [], // ✅ Default to empty array
        meta: response?.meta ?? { totalDoc: 0, limit: 10, page: 1 }, // ✅ Default meta
      }),
      providesTags: [{ type: "Tutors", id: "LIST" }],
    }),
    getTutorDetails: builder.query({
      query: (tutorId: string) => ({
        url: `/tutors/${tutorId}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Tutors", id }], // ✅ Assign specific ID
    }),
  }),
});

export const { useGetAllTutorsQuery, useGetTutorDetailsQuery } = tutorApi;
