// src/pages/Cart.jsx
import { useState } from "react";
import { clp } from "../utils/format";
import { useCart } from "../context/CartContext.jsx";
import { useUser } from "../context/UserContext.jsx";
import { pizzas } from "../data/pizzas.js";

const API_BASE_URL = "http://localhost:5000";

const Cart = () => {
  const { cart, inc, dec, add, clear, total } = useCart();
  const { token } = useUser();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const isEmpty = cart.length === 0;

  const handleCheckout = async () => {
    if (isEmpty || !token) {
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    try {
      // Preparar los datos del checkout
      const checkoutData = {
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.qty
        })),
        total: total
      };

      const response = await fetch(`${API_BASE_URL}/api/checkouts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(checkoutData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Error al procesar la compra");
      }

      const data = await response.json();
      
      // Mostrar mensaje de éxito
      setSuccessMessage("¡Compra realizada exitosamente! 🎉");
      
      // Limpiar el carrito después de un breve delay
      setTimeout(() => {
        clear();
        setSuccessMessage("");
      }, 2000);

    } catch (error) {
      console.error("Error en checkout:", error);
      setSuccessMessage(`Error: ${error.message}`);
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container py-4">
      <h2 className="mb-4">Tu Carrito 🧺</h2>

      {isEmpty ? (
        <>
          <div className="alert alert-info">No tienes productos en el carrito.</div>
          {/* Catálogo cuando está vacío */}
          <h5 className="mt-3">Sigue comprando 🍕</h5>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {pizzas.map((p) => (
              <div className="col" key={p.id}>
                <div className="card h-100 shadow-sm">
                  <img src={p.img} className="card-img-top" alt={p.name} />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title">{p.name}</h6>
                    <p className="fw-bold mb-3">${clp(p.price)}</p>
                    <button className="btn btn-primary mt-auto" onClick={() => add(p.id)}>
                      Añadir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {successMessage && (
            <div className={`alert ${successMessage.includes("Error") ? "alert-danger" : "alert-success"} alert-dismissible fade show`} role="alert">
              {successMessage}
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setSuccessMessage("")}
                aria-label="Close"
              ></button>
            </div>
          )}
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <ul className="list-group">
              {cart.map((it) => (
                <li key={it.id} className="list-group-item py-3">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={it.img}
                      alt={it.name}
                      width={80}
                      height={80}
                      className="rounded object-fit-cover"
                    />
                    <div className="me-auto">
                      <h6 className="mb-1">{it.name}</h6>
                      <small className="text-muted">Precio unitario: ${clp(it.price)}</small>
                    </div>

                    <div className="btn-group" role="group" aria-label="qty">
                      <button className="btn btn-outline-secondary" onClick={() => dec(it.id)}>−</button>
                      <span className="btn btn-light disabled">{it.qty}</span>
                      <button className="btn btn-outline-secondary" onClick={() => inc(it.id)}>+</button>
                    </div>

                    <div className="ms-3 text-end" style={{ minWidth: 120 }}>
                      <div className="fw-bold">${clp(it.price * it.qty)}</div>
                      <small className="text-muted">Subtotal</small>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Resumen</h5>
                <div className="d-flex justify-content-between my-2">
                  <span>Total</span>
                  <strong>${clp(total)}</strong>
                </div>
                <button 
                  className="btn btn-success w-100 mt-2" 
                  disabled={isEmpty || !token || loading}
                  onClick={handleCheckout}
                >
                  {loading ? "Procesando..." : (!token ? 'Inicia sesión para pagar' : 'Pagar')}
                </button>
                <small className="d-block text-muted mt-2">
                  {!token ? 'Debes iniciar sesión para realizar el pago.' : 'Realiza tu pedido y te lo entregaremos pronto.'}
                </small>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;
