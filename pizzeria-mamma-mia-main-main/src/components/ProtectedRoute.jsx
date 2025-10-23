// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

const ProtectedRoute = ({ children, requireAuth = true }) => {
  const { token } = useUser();

  // Si requiere autenticación y no está logueado, redirigir a login
  if (requireAuth && !token) {
    return <Navigate to="/login" replace />;
  }

  // Si no requiere autenticación y está logueado, redirigir a home
  if (!requireAuth && token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
