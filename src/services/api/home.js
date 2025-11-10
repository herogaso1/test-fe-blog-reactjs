// src/services/api/home.js
import apiInstance from "./index";

export const searchPosts = async (params = {}) => {
  const { title = "", page = 1, limit = 10 } = params;
  const queryParams = new URLSearchParams();

  if (title) {
    queryParams.append("title", title);
  }
  queryParams.append("page", page);
  queryParams.append("limit", limit);

  const response = await apiInstance.get(
    `/api/posts?${queryParams.toString()}`
  );
  return response;
};
