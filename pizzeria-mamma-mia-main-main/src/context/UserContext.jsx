// src/context/UserContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

const API_BASE_URL = "http://localhost:5000";

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    // Intentar recuperar el token del localStorage al iniciar
    return localStorage.getItem("token") || null;
  });
  const [email, setEmail] = useState(() => {
    // Intentar recuperar el email del localStorage al iniciar
    return localStorage.getItem("email") || null;
  });

  // Guardar token y email en localStorage cuando cambien
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    if (email) {
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("email");
    }
  }, [email]);

  // Método para hacer login
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Error al iniciar sesión");
      }

      const data = await response.json();
      
      // Almacenar token y email
      setToken(data.token);
      setEmail(data.email);
      
      return { success: true, data };
    } catch (error) {
      console.error("Error en login:", error);
      return { success: false, error: error.message };
    }
  };

  // Método para hacer register
  const register = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Error al registrar usuario");
      }

      const data = await response.json();
      
      // Almacenar token y email
      setToken(data.token);
      setEmail(data.email);
      
      return { success: true, data };
    } catch (error) {
      console.error("Error en register:", error);
      return { success: false, error: error.message };
    }
  };

  // Método para hacer logout
  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    console.log('👋 Usuario deslogueado');
  };

  // Método para obtener el perfil del usuario
  const getProfile = async () => {
    try {
      if (!token) {
        throw new Error("No hay token de autenticación");
      }

      const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Error al obtener el perfil");
      }

      const data = await response.json();
      
      // Actualizar el email si viene en la respuesta
      if (data.email) {
        setEmail(data.email);
      }
      
      return { success: true, data };
    } catch (error) {
      console.error("Error al obtener perfil:", error);
      return { success: false, error: error.message };
    }
  };

  const value = {
    token,
    email,
    logout,
    login,
    register,
    getProfile
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de <UserProvider>");
  }
  return context;
};
