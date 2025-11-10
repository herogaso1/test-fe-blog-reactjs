import apiInstance from "./index";

export const blogDetail = async (id) => {
  const response = await apiInstance.get(`/posts/${id}`);
  return response;
};

// export const createblog = async (blogData) => {
//   const response = await apiInstance.post("api/posts", blogData);
//   return response;
// };

