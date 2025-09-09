import { useState } from 'react'

const LoginForm = ({ onClose }) => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [msg, setMsg] = useState({ type: '', text: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) return setMsg({ type: 'danger', text: 'Todos los campos son obligatorios' })
    if (form.password.length < 6) return setMsg({ type: 'warning', text: 'La contraseña debe tener al menos 6 caracteres' })
    setMsg({ type: 'success', text: 'Inicio de sesión exitoso ✅' })
  }

  return (
    <div className="card p-4 shadow-sm mb-3">
      <h3>Login</h3>
      {msg.text && <div className={`alert alert-${msg.type}`}>{msg.text}</div>}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} className="form-control mb-2"/>
        <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={onChange} className="form-control mb-2"/>
        <button type="submit" className="btn btn-success me-2">Ingresar</button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
      </form>
    </div>
  )
}

export default LoginForm
