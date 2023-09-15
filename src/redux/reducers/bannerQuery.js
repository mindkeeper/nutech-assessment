import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../api";

export const bannerQuery = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Banner"],
  reducerPath: "bannerQuery",
  endpoints: (builder) => ({
    getBanner: builder.query({
      query: () => ({
        url: "/banner",
        method: "GET",
      }),
      providesTags: ["Banner"],
    }),
  }),
});

export const { useGetBannerQuery } = bannerQuery;
