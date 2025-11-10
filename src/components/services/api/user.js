// src/services/api/endpoints.js
import apiInstance from "./index";

// POST: Tương tự
export const loginUser = async (userData) => {
  const response = await apiInstance.post("/auth/login", userData);
  return response;
};
export const SignUpUser = async (userData) => {
  const response = await apiInstance.post("/auth/register", userData);
  return response;
};
