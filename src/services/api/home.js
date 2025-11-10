// src/services/api/endpoints.js
import apiInstance from "./index";

export const searchPosts = async (userData) => {
  const response = await apiInstance.post("/auth/search", userData);
  return response;
};