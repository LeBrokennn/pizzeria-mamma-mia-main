// src/context/PizzaContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { pizzas as staticPizzas } from "../data/pizzas.js";

const PizzaContext = createContext(null);

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState(staticPizzas); // Usar datos estáticos por defecto
  const [loading, setLoading] = useState(false); // No mostrar loading por defecto
  const [error, setError] = useState(null);

  const fetchPizzas = async () => {
    // Intentar obtener datos del backend en segundo plano
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      
      const response = await fetch('http://localhost:5000/api/pizzas', {
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        const data = await response.json();
        setPizzas(data);
        console.log('Datos del backend cargados exitosamente');
      }
    } catch (err) {
      // Silenciosamente usar datos estáticos si el backend no está disponible
      console.log('Usando datos estáticos (backend no disponible)');
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
