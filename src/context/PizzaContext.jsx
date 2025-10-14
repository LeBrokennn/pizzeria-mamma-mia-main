// src/context/PizzaContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const PizzaContext = createContext(null);

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPizzas = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('http://localhost:5000/api/pizzas');
      
      if (!response.ok) {
        throw new Error('Error al cargar las pizzas');
      }
      
      const data = await response.json();
      setPizzas(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching pizzas:', err);
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
