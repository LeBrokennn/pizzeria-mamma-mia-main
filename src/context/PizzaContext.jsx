// src/context/PizzaContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { pizzas as staticPizzas } from "../data/pizzas.js";

const PizzaContext = createContext(null);

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPizzas = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Crear un AbortController para timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
      // Intentar conectar al backend primero
      const response = await fetch('http://localhost:5000/api/pizzas', {
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error('Backend no disponible');
      }
      
      const data = await response.json();
      setPizzas(data);
    } catch (err) {
      // Si el backend no está disponible, usar datos estáticos
      console.warn('Backend no disponible, usando datos estáticos:', err.message);
      setPizzas(staticPizzas);
      setError(null); // No mostrar error si tenemos datos estáticos
    } finally {
      setLoading(false);
    }
  };

  const getPizzaById = (id) => {
    return pizzas.find(pizza => pizza.id === id);
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  const value = {
    pizzas,
    loading,
    error,
    fetchPizzas,
    getPizzaById
  };

  return (
    <PizzaContext.Provider value={value}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => {
  const context = useContext(PizzaContext);
  if (!context) {
    throw new Error("usePizza debe usarse dentro de <PizzaProvider>");
  }
  return context;
};
