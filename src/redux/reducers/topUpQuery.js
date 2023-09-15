import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../api";

export const topUpQuery = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "topUpQuery",
  tagTypes: ["TopUp"],
  endpoints: (builder) => ({
    topUp: builder.mutation({
      query: ({ data, token }) => ({
        url: "/top-up",
        method: "POST",
        data,
        token,
      }),
      invalidatesTags: ["Balance"],
    }),
  }),
});

export const { useTopUpMutation } = topUpQuery;
