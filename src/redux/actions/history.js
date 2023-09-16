import { createAsyncThunk } from "@reduxjs/toolkit";
import { historyRequest } from "../../api";

export const historyAction = createAsyncThunk(
  "history",
  async (data, { rejectWithValue }) => {
    try {
      const response = await historyRequest(data);
      return response.data;
    } catch (err) {
      if (err.response && err.response.data)
        return rejectWithValue(err.response.data);
      return rejectWithValue(err.message);
    }
  }
);
