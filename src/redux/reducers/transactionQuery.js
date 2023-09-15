import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../api";
import { balanceQuery } from "./balanceQuery";
import { historyQuery } from "./historyQuery";
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
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(balanceQuery.util.invalidateTags(["Balance"]));
        dispatch(historyQuery.util.invalidateTags(["History"]));
      },
    }),
  }),
});

export const { useCreateTransactionMutation } = transactionQuery;
