import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="container mt-4">
      <h1>Pizzería Mamma Mía</h1>
      <button onClick={() => { setShowLogin(true); setShowRegister(false); }}>Login</button>
      <button onClick={() => { setShowRegister(true); setShowLogin(false); }}>Register</button>

      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterForm onClose={() => setShowRegister(false)} />}
    </div>
  );
}

export default App;
