import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../api";
import { balanceQuery } from "./balanceQuery";
import { historyQuery } from "./historyQuery";

export const topUpQuery = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "topUpQuery",
  tagTypes: ["TopUp"],
  endpoints: (builder) => ({
    topUp: builder.mutation({
      query: ({ data, token }) => ({
        url: "/topup",
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

export const { useTopUpMutation } = topUpQuery;
