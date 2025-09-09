import { useState } from "react";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState({ type: "", text: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      return showMsg("danger", "Todos los campos son obligatorios.");
    }

    if (!emailRegex.test(email)) {
      return showMsg("danger", "El email no es válido.");
    }

    if (password.length < 6) {
      return showMsg(
        "warning",
        "La contraseña debe tener al menos 6 caracteres."
      );
    }

    showMsg("success", "Inicio de sesión exitoso ✅");
  };

  // Función para mostrar mensaje y que desaparezca automáticamente
  const showMsg = (type, text) => {
    setMsg({ type, text });
    setTimeout(() => setMsg({ type: "", text: "" }), 5000);
  };

  return (
    <section className="container my-4">
      <div className="hero mb-4" style={{ minHeight: 160 }}>
        <div className="hero__center">
          <div className="hero__card">
            <h2 className="mb-1">Iniciar sesión</h2>
            <p className="mb-0">Ingresa con tu email y contraseña</p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body p-4">
              <h5 className="card-title mb-3">Acceso</h5>

              {msg.text && (
                <div
                  className={`alert alert-${msg.type} mb-3`}
                  role="alert"
                >
                  {msg.text}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <div className="input-group">
                    <span className="input-group-text">📧</span>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="ejemplo@correo.com"
                      value={form.email}
                      onChange={onChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Contraseña</label>
                  <div className="input-group">
                    <span className="input-group-text">🔒</span>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Mínimo 6 caracteres"
                      value={form.password}
                      onChange={onChange}
                      required
                      minLength={6}
                      autoComplete="current-password"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Ingresar
                </button>
              </form>
            </div>
          </div>

          <p className="text-center text-muted small mt-3">
            ¿No tienes cuenta? Regístrate desde el menú.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

