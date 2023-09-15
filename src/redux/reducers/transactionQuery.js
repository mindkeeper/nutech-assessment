import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../api";

export const transactionQuery = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "transactionQuery",
  tagTypes: ["Transaction"],
  endpoints: (builder) => ({
    createTransaction: builder.mutation({
      query: ({ data, token }) => ({
        url: "/transaction",
        method: "POST",
        data,
        token,
      }),
    }),
  }),
});

export const { useCreateTransactionMutation } = transactionQuery;
