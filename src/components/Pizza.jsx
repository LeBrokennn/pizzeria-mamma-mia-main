import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { usePizza } from "../context/PizzaContext.jsx";

const Pizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { add } = useCart();
  const { pizzas, loading, error, getPizzaById } = usePizza();

  const pizza = getPizzaById(id);

  if (loading) {
    return (
      <main className="container py-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2">Cargando pizza...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container py-4">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>{error}</p>
          <hr />
          <p className="mb-0">Asegúrate de que el backend esté ejecutándose en el puerto 5000.</p>
        </div>
      </main>
    );
  }

  if (!loading && !pizza) {
    return (
      <main className="container py-4">
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">Pizza no encontrada</h4>
          <p>La pizza que buscas no existe.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container py-4">
      <div className="row">
        <div className="col-lg-6">
          <img 
            src={pizza.img} 
            alt={pizza.name}
            className="img-fluid rounded shadow"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-lg-6">
          <div className="p-4">
            <h1 className="display-4 text-capitalize mb-3">{pizza.name}</h1>
            
            <div className="mb-4">
              <h3 className="text-primary">${pizza.price.toLocaleString('es-CL')}</h3>
            </div>

            <div className="mb-4">
              <h4>Ingredientes:</h4>
              <div className="d-flex flex-wrap gap-2">
                {pizza.ingredients.map((ingredient, index) => (
                  <span 
                    key={index}
                    className="badge bg-secondary fs-6 px-3 py-2"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4>Descripción:</h4>
              <p className="lead">{pizza.desc}</p>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button 
                className="btn btn-primary btn-lg px-4 me-md-2"
                onClick={() => add(pizza.id)}
              >
                Agregar al Carrito
              </button>
              <button 
                className="btn btn-outline-secondary btn-lg px-4"
                onClick={() => navigate('/')}
              >
                Volver al Menú
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pizza;
