import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../api";

export const historyQuery = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: ["History"],
  reducerPath: "historyQuery",
  endpoints: (builder) => ({
    getHistory: builder.query({
      query: ({ token, offset = 0 }) => ({
        url: "/transaction/history",
        method: "GET",
        params: {
          offset,
          limit: 5,
        },
        token,
      }),
      transformErrorResponse: (res) => ({ data: res.records }),
      serializeQueryArgs: ({ queryArgs }) => {
        console.log(queryArgs);
        return queryArgs;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
    }),
  }),
});

export const { useGetHistoryQuery } = historyQuery;
