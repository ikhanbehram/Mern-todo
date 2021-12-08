import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const counterSlice = createSlice({
  name: "todoReducer",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const { add, remove, complete } = counterSlice.actions;

export default counterSlice.reducer;
