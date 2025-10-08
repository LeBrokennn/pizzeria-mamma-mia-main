import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import CardPizza from "../components/CardPizza.jsx";

// src/pages/Home.jsx

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        setLoading(true);
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

    fetchPizzas();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <main className="container py-4">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-2">Cargando pizzas...</p>
          </div>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <main className="container py-4">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Error!</h4>
            <p>{error}</p>
            <hr />
            <p className="mb-0">Asegúrate de que el backend esté ejecutándose en el puerto 5000.</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
    
    <main className="container py-4">
      <h2 className="mb-4">Nuestro Menú 🍕</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {pizzas.map((p) => (
          <CardPizza
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            ingredients={p.ingredients}
            img={p.img}
          />
        ))}
      </div>
    </main>
    </>
  );
};

export default Home;
