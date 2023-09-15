import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    saveToken: (state, { payload }) => {
      state.accessToken = payload;
    },
  },
});

export const { logout, saveToken } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
