import apiInstance from "./index";

export const createblog = async (blogData) => {
  const response = await apiInstance.post("api/posts", blogData);
  return response;
};
