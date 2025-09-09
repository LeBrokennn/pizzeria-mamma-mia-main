import { useState } from "react";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Pizzería Mamma Mía</a>
          <div>
            <button
              className="btn btn-success me-2"
              onClick={() => { setShowLogin(true); setShowRegister(false); }}
            >
              Login
            </button>
            <button
              className="btn btn-primary"
              onClick={() => { setShowRegister(true); setShowLogin(false); }}
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <header className="bg-light text-center py-5 mb-4">
        <h1>Bienvenido a Pizzería Mamma Mía 🍕</h1>
        <p>Disfruta de nuestras deliciosas pizzas</p>
      </header>

      {/* SECCIONES DE LA PÁGINA */}
      <main className="container mb-5">
        {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
        {showRegister && <RegisterForm onClose={() => setShowRegister(false)} />}

        <section>
          <h2>Menú destacado</h2>
          {/* Aquí puedes agregar tarjetas, imágenes, etc */}
        </section>

        <section className="mt-4">
          <h2>Sobre nosotros</h2>
          <p>Somos la mejor pizzería de la ciudad...</p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; 2025 Pizzería Mamma Mía
      </footer>
    </>
  );
}

export default App;
