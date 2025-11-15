import React, { createContext, useState, useEffect } from "react";
import { SignUpUser, login } from "@/services/api/user";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Kiểm tra token khi app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const signUpUser = async (userData) => {
    try {
      setLoading(true);
      const response = await SignUpUser(userData);

      if (response.data) {
        toast.success("Sign up successful! Please login.");
        navigate("/login");
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "Sign up failed";
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (credentials) => {
    try {
      setLoading(true);
      const response = await login(credentials);

      if (response.data) {
        const userData = {
          ...response.data.user,
          role: response.data.user.role || "user", // Lấy role từ API
        };

        setUser(userData);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(userData));
        toast.success("Login successful!");
        navigate("/");
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "Login failed";
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  // Helper function để check role
  const hasRole = (roles) => {
    if (!user) return false;
    if (Array.isArray(roles)) {
      return roles.includes(user.role);
    }
    return user.role === roles;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signUpUser,
        loginUser,
        logout,
        hasRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
