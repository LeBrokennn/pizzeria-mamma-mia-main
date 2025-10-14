import Header from "../components/Header.jsx";
import CardPizza from "../components/CardPizza.jsx";
import { usePizza } from "../context/PizzaContext.jsx";

// src/pages/Home.jsx

const Home = () => {
  const { pizzas, loading, error } = usePizza();

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
          <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">Información</h4>
            <p>Usando datos de demostración. Para datos en tiempo real, conecta el backend.</p>
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
