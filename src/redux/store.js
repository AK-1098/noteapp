import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import notesReducer from "./slices/notesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    notes: notesReducer
  }
});

export default store;
