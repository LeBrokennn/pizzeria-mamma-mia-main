// src/App.jsx
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Barra de navegación */}
      <Navbar />

      {/* Encabezado principal */}
      <Header />

      {/* Sección de registro */}
      <section style={{ padding: "2rem 0", background: "#f9f9f9" }}>
        <Register />
      </section>

      {/* Sección de login */}
      <section style={{ padding: "2rem 0" }}>
        <Login />
      </section>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
