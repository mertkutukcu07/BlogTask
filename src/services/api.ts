// api.js
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getAllBlogs = () => axios.get(`${BASE_URL}/blogs`);
export const getBlogById = (id) => axios.get(`${BASE_URL}/blogs/${id}`);
export const addBlog = (blogData) => axios.post(`${BASE_URL}/blogs`, blogData);
export const deleteBlog = (id) => axios.delete(`${BASE_URL}/blogs/${id}`);
