import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../api";

export const profileQuery = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "profileQuery",
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: ({ token }) => ({
        url: "/profile",
        token,
      }),
      providesTags: ["Profile"],
    }),
    updateProfile: builder.mutation({
      query: ({ data, token }) => ({
        url: "/profile/update",
        method: "PUT",
        data,
        token,
      }),
      invalidatesTags: ["Profile"],
    }),

    updateImage: builder.mutation({
      query: ({ data, token, formData }) => ({
        url: "/profile/image",
        method: "PUT",
        data,
        token,
        formData,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdateImageMutation,
} = profileQuery;
