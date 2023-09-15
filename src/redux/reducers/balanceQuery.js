import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../api";

export const balanceQuery = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "balanceQuery",
  tagTypes: ["Balance"],
  endpoints: (builder) => ({
    getBalance: builder.query({
      query: ({ token }) => ({
        url: "/balance",
        method: "GET",
        token,
      }),
      providesTags: ["Balance"],
    }),
  }),
});

export const { useGetBalanceQuery } = balanceQuery;
