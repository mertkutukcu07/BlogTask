import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./blogSlice";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});

export default store;
