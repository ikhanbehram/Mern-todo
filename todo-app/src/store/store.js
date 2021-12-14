import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";
import todoListReducer from "./reducers/todoList.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const reducers = combineReducers({
  auth: authReducer,
  todo: todoListReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// export default () => {
//   let store = createStore(persistedReducer);
//   console.log(store);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

export let persistor = persistStore(store);
