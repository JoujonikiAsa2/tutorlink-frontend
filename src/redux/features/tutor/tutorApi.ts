import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam, TResponseRedux } from "@/types/global";
import { TTutor } from "@/types/tutor";

const tutorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTutors: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/tutors`,
          methods: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TTutor[] | undefined>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getTutorDetails: builder.query({
      query: (tutorId: string) => {
        return {
          url: `/tutors/${tutorId}`,
          methods: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllTutorsQuery, useGetTutorDetailsQuery } = tutorApi;
