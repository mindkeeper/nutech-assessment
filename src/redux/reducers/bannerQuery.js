import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../api";

export const bannerQuery = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Banner"],
  reducerPath: "bannerQuery",
  endpoints: (builder) => ({
    getBanner: builder.query({
      query: ({ token }) => ({
        url: "/banner",
        method: "GET",
        token,
      }),
      providesTags: ["Banner"],
    }),
  }),
});

export const { useGetBannerQuery } = bannerQuery;
