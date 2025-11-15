import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "@/contexts/authContext";

export const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, hasRole } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
};
