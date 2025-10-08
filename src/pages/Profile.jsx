import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userEmail] = useState("usuario@ejemplo.com"); // Simulamos un usuario logueado
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí se implementaría la lógica de cerrar sesión
    // Por ahora solo redirigimos al home
    alert("Sesión cerrada exitosamente");
    navigate("/");
  };

  return (
    <main className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <span className="text-white fs-1">👤</span>
                </div>
                <h2 className="card-title">Mi Perfil</h2>
                <p className="text-muted">Gestiona tu información personal</p>
              </div>

              <div className="mb-4">
                <label className="form-label fw-bold">Email:</label>
                <div className="input-group">
                  <span className="input-group-text">📧</span>
                  <input
                    type="email"
                    className="form-control"
                    value={userEmail}
                    readOnly
                    style={{ backgroundColor: '#f8f9fa' }}
                  />
                </div>
                <small className="text-muted">Este es tu email de usuario registrado</small>
              </div>

              <div className="mb-4">
                <label className="form-label fw-bold">Estado de la cuenta:</label>
                <div className="d-flex align-items-center">
                  <span className="badge bg-success me-2">Activa</span>
                  <small className="text-muted">Tu cuenta está activa y funcionando</small>
                </div>
              </div>

              <div className="d-grid gap-2">
                <button 
                  className="btn btn-outline-primary"
                  onClick={() => navigate('/')}
                >
                  🏠 Volver al Inicio
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={handleLogout}
                >
                  🚪 Cerrar Sesión
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-muted small">
              ¿Necesitas ayuda? Contacta con nuestro soporte técnico.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
