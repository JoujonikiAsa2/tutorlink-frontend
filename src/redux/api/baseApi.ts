/* eslint-disable @typescript-eslint/no-explicit-any */

import { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === "HYDRATE"
}

const baseQuery = fetchBaseQuery({
  baseUrl: "https://tutorlink-backend-xi.vercel.app/api",
  // credentials: "include",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath]
    }
  },
  endpoints: () => ({}),
  tagTypes: ["Tutors"],
});
