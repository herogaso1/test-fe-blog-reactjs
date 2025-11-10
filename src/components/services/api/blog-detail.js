import apiInstance from "./index";

export const blogDetail = async (id) => {
  const response = await apiInstance.get(`/posts/${id}`);
  return response;
};
