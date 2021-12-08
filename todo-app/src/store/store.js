import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";
import todoListReducer from "./reducers/todoList.reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoListReducer,
  },
});
