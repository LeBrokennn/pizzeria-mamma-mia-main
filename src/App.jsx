import { useState } from "react";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";

// 👇 importa tus componentes de pizzas
import CardPizza from "./components/CardPizza.jsx";
import PizzaList from "./components/PizzaList.jsx";

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

      {/* CONTENIDO PRINCIPAL */}
      <main className="container mb-5">
        <section>
          <h2>Menú destacado</h2>

          {/* Usa PizzaList si tienes lista de pizzas */}
          <PizzaList />

          {/* O usa varias CardPizza si lo manejas individual */}
          {/* 
          <div className="row">
            <div className="col-md-4"><CardPizza /></div>
            <div className="col-md-4"><CardPizza /></div>
            <div className="col-md-4"><CardPizza /></div>
          </div>
          */}
        </section>

        <section className="mt-4">
          <h2>Sobre nosotros</h2>
          <p>Somos la mejor pizzería de la ciudad...</p>
        </section>
      </main>

      {/* MODALES */}
      {showLogin && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="btn-close" onClick={() => setShowLogin(false)}>✖</button>
            <LoginForm onClose={() => setShowLogin(false)} />
          </div>
        </div>
      )}

      {showRegister && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="btn-close" onClick={() => setShowRegister(false)}>✖</button>
            <RegisterForm onClose={() => setShowRegister(false)} />
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; 2025 Pizzería Mamma Mía
      </footer>

      {/* ESTILOS MODALES */}
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex; justify-content: center; align-items: center;
            z-index: 9999;
          }
          .modal-content {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            width: 90%;
            max-width: 500px;
            position: relative;
          }
          .btn-close {
            position: absolute;
            top: 10px; right: 10px;
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}

export default App;
