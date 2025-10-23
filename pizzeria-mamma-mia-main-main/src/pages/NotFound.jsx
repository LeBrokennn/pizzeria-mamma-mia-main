import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 text-center">
          <div className="mb-4">
            <h1 className="display-1 text-primary">404</h1>
            <h2 className="h3 mb-3">¡Oops! Página no encontrada</h2>
            <p className="lead text-muted mb-4">
              Parece que la página que buscas no existe o ha sido movida.
            </p>
          </div>

          <div className="mb-4">
            <div className="bg-light rounded p-4 mb-4">
              <h4 className="text-primary mb-3">¿Qué puedes hacer?</h4>
              <ul className="list-unstyled text-start">
                <li className="mb-2">🍕 <strong>Ver nuestro menú</strong> - Descubre nuestras deliciosas pizzas</li>
                <li className="mb-2">🛒 <strong>Revisar tu carrito</strong> - Continúa con tu pedido</li>
                <li className="mb-2">👤 <strong>Acceder a tu perfil</strong> - Gestiona tu cuenta</li>
                <li className="mb-2">📞 <strong>Contactarnos</strong> - Si necesitas ayuda</li>
              </ul>
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Link 
              to="/" 
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              🏠 Volver al Inicio
            </Link>
            <Link 
              to="/cart" 
              className="btn btn-outline-secondary btn-lg px-4"
            >
              🛒 Ver Carrito
            </Link>
          </div>

          <div className="mt-5">
            <div className="bg-warning bg-opacity-10 rounded p-3">
              <h5 className="text-warning mb-2">💡 Consejo</h5>
              <p className="mb-0 small text-muted">
                Si llegaste aquí por error, verifica que la URL esté escrita correctamente 
                o usa el menú de navegación para encontrar lo que buscas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
