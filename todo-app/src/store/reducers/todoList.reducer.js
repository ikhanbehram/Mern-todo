import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  token: localStorage.getItem("token"),
  error: "",
  todos: [],
  completedTodos: [],
};

export const addTodo = createAsyncThunk("todo/addTodo", async (todoData) => {
  console.log("here at line 12");
  const response = await axios.post(
    "http://localhost:8080/todos/add",
    todoData,
    { headers: { Authorization: `Bearer ${initialState.token}` } }
  );
  return response.data.task;
});
export const CompleteTodo = createAsyncThunk(
  "todo/CompleteTodo",
  async (taskId) => {
    const response = await axios.patch(
      `http://localhost:8080/todos/tasks/${taskId}`,
      null,
      { headers: { Authorization: `Bearer ${initialState.token}` } }
    );
    console.log(response);
    return response;
  }
);
export const getTodo = createAsyncThunk("todo/getTodo", async () => {
  const response = await axios.get("http://localhost:8080/todos/tasks", {
    headers: { Authorization: `Bearer ${initialState.token}` },
  });
  console.log("Here with", response.data.tasks);
  return response;
});
export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (taskId) => {
    const response = await axios.delete(
      `http://localhost:8080/todos/remove/${taskId}`,
      { headers: { Authorization: `Bearer ${initialState.token}` } }
    );
    return response;
  }
);
export const getCompleted = createAsyncThunk("todo/getCompleted", async () => {
  console.log("here at reducer");
  const response = await axios.get(
    `http://localhost:8080/todos/completedTasks`,
    {
      headers: { Authorization: `Bearer ${initialState.token}` },
    }
  );
  return response;
});
export const counterSlice = createSlice({
  name: "todoReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [addTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [addTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.todos.push(payload);
    },
    [addTodo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [getTodo.fulfilled]: (state, { payload }) => {
      state.todos = payload.data.tasks;
    },
    [getTodo.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [CompleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [CompleteTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const index = state.todos.findIndex(
        (todo) => todo.id === +payload.data.taskId
      );
      if (index >= 0) {
        state.todos.splice(index, 1);
      }
    },
    [CompleteTodo.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload.data.taskId);
      const index = state.todos.findIndex(
        (todo) => todo.id === +payload.data.taskId
      );
      console.log(index);
      if (index >= 0) {
        state.todos.splice(index, 1);
      }
    },
    [deleteTodo.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [getCompleted.pending]: (state) => {
      state.isLoading = true;
    },
    [getCompleted.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload.data.completed);
      state.completedTodos = payload.data.completed;
    },
    [getCompleted.rejected]: (state, { payload }) => {
      state.error = payload;
      console.log(payload);
    },
  },
});

// export const {} = counterSlice.actions;
export default counterSlice.reducer;
