import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../api";
import { saveToken } from "./authSlice";

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
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(saveToken(data?.token));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authQuery;
