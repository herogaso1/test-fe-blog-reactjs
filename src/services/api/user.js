// src/services/api/endpoints.js
import apiInstance from "./index";

// POST: Tương tự
export const login = async (userData) => {
  const response = await apiInstance.post("/auth/login", userData);
  return response;
};
export const SignUpUser = async (userData) => {
  const response = await apiInstance.post("/auth/register", userData);
  return response;
};

export const getUserProfile = async (userId) => {
  const response = await apiInstance.get(`/auth/me`);
  return response;
};
export const logout = async () => {
  const response = await apiInstance.post("/auth/logout");
  return response;
};
