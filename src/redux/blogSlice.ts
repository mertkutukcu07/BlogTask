import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../services/api";
import Toast from "react-native-toast-message";
export const fetchAllBlogs = createAsyncThunk("blogs/fetchAll", async () => {
  try {
    const response = await api.getAllBlogs();
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const singleBlogs = createAsyncThunk(
  "blogs/fetchSingle",
  async (blogId) => {
    try {
      const response = await api.getBlogById(blogId);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const addBlogs = createAsyncThunk("blogs/addBlog", async (blogData) => {
  try {
    const response = await api.addBlog(blogData);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const deleteBlogs = createAsyncThunk(
  "blogs/deleteBlog",
  async (blogId) => {
    try {
      await api.deleteBlog(blogId);
      return blogId;
    } catch (error) {
      throw error;
    }
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(singleBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(singleBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
        Toast.show({
          type: "success",
          text1: "Başarılı",
          text2: "Blog yazınız başarıyla eklendi.",
        });
      })
      .addCase(addBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((blog) => blog.id !== action.payload);
        Toast.show({
          type: "success",
          text1: "Başarılı",
          text2: "Blog yazınız başarıyla silindi.",
        });
      })
      .addCase(deleteBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {} = blogsSlice.actions;
export default blogsSlice.reducer;
