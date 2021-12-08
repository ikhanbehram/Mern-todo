import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  username: "",
  token: "",
};

export const signup = createAsyncThunk(
  "user/signup",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/signup",
        formData
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const counterSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [signup.pending]: (state) => {
      state.isLoading = true;
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.token;
    },
    [signup.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// export const {} = counterSlice.actions;
export default counterSlice.reducer;
