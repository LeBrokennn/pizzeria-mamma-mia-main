// src/context/PizzaContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { pizzas as staticPizzas } from "../data/pizzas.js";

const PizzaContext = createContext(null);

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState(staticPizzas);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función que NO hace peticiones al backend
  const fetchPizzas = async () => {
    console.log('✅ Usando datos estáticos - No se requiere backend');
    // No hacer ninguna petición HTTP
    return;
  };

  const getPizzaById = (id) => {
    return pizzas.find(pizza => pizza.id === id);
  };

  useEffect(() => {
    // Solo inicializar con datos estáticos
    console.log('🍕 Inicializando con datos estáticos de pizzas');
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
