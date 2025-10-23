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

  // Función para obtener una pizza específica por ID desde la API
  const fetchPizzaById = async (id) => {
    try {
      setLoading(true);
      setError(null);
      
      console.log(`🔍 Buscando pizza con ID: ${id}`);
      
      // Intentar obtener desde la API
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const pizzaData = await response.json();
      console.log('✅ Pizza obtenida desde API:', pizzaData);
      
      return pizzaData;
    } catch (error) {
      console.log('⚠️ Error al conectar con API, usando datos estáticos:', error.message);
      
      // Fallback a datos estáticos
      const staticPizza = staticPizzas.find(pizza => pizza.id === id);
      if (staticPizza) {
        console.log('✅ Pizza encontrada en datos estáticos:', staticPizza);
        return staticPizza;
      }
      
      setError('Pizza no encontrada');
      return null;
    } finally {
      setLoading(false);
    }
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
    fetchPizzaById,
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
