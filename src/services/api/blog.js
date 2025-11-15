import apiInstance from "./index";

export const blogDetail = async (id) => {
  const response = await apiInstance.get(`/posts/${id}`);
  return response;
};

//get blog
export const getBlogs = async () => {
  const response = await apiInstance.get("/api/posts");
  return response;
};

export const createblog = async (blogData) => {
  const response = await apiInstance.post("api/posts", blogData);
  return response;
};
