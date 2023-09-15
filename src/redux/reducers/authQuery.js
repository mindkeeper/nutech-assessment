import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../api";

export const authQuery = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "authQuery",
  tagTypes: ["Auth"],

  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ ...data }) => ({
        url: "/registration",
        method: "POST",
        data,
      }),
      invalidatesTags: ["Auth"],
    }),
    login: builder.mutation({
      query: ({ ...data }) => ({
        url: "/login",
        method: "POST",
        data,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authQuery;
