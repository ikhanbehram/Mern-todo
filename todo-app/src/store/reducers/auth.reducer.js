import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  username: "",
  token: "",
  error: "",
  user: {},
};

export const signup = createAsyncThunk("user/signup", async (formData) => {
  const response = await axios.post(
    "http://localhost:8080/users/signup",
    formData
  );
  localStorage.setItem("token", response.data.token);
  return response.data;
});

export const login = createAsyncThunk("user/login", async (formData) => {
  const response = await axios.post(
    "http://localhost:8080/users/login",
    formData
  );
  console.log(response.data.token);
  localStorage.setItem("token", response.data.token);
  return response.data;
});

export const counterSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [signup.pending]: (state) => {
      state.isLoading = true;
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.token = localStorage.getItem("token");
      state.user = payload.token;
    },
    [signup.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.token = localStorage.getItem("token");
      state.user = payload.user;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// export const {} = counterSlice.actions;
export default counterSlice.reducer;
