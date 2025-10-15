// src/context/PizzaContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { pizzas as staticPizzas } from "../data/pizzas.js";

const PizzaContext = createContext(null);

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState(staticPizzas); // Usar datos estáticos por defecto
  const [loading, setLoading] = useState(false); // No mostrar loading por defecto
  const [error, setError] = useState(null);

  const fetchPizzas = async () => {
    // NO intentar conectar al backend - usar solo datos estáticos
    console.log('Usando datos estáticos de demostración');
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
