import { createSlice } from "@reduxjs/toolkit";
import { historyAction } from "../actions";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  isSuccess: false,
  offset: 0,
  records: [],
  hasNextData: false,
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    resetState() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(historyAction.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          isSuccess: false,
          isError: false,
          error: null,
        };
      })
      .addCase(historyAction.rejected, (state, { payload }) => {
        return { ...state, isError: true, isSuccess: false, error: payload };
      })
      .addCase(historyAction.fulfilled, (state, { payload }) => {
        const newData = payload.data.records;
        const currentOffset = Number(payload.data.offset);
        const newRecords =
          currentOffset === 0 ? [newData] : [...state.records, newData];
        const checkNextData = newRecords.length === 5;
        return {
          isLoading: false,
          isSuccess: true,
          records: newRecords,
          offset: currentOffset,
          hasNextData: checkNextData,
        };
      });
  },
});

export const { resetState } = historySlice.actions;
export const historySliceReducer = historySlice.reducer;
