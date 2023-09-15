import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../api";

export const serviceQuery = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Services"],
  reducerPath: "serviceQuery",
  endpoints: (builder) => ({
    getServices: builder.query({
      query: ({ token }) => ({
        url: "/services",
        method: "GET",
        token,
      }),
      providesTags: ["Services"],
    }),
  }),
});

export const { useGetServicesQuery } = serviceQuery;
