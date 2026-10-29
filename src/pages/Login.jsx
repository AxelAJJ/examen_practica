import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const user = login(email, password);
    if (!user) {
      setError('Credenciales incorrectas. Pruebe admin@universidad.edu / admin123');
      return;
    }
    navigate(user.role === 'admin' ? '/admin' : '/teacher');
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">U</div>
          <h1>Sistema de Asistencia</h1>
          <p className="login-sub">Universidad - Control de Asistencia</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            <span>Correo institucional</span>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="ejemplo@universidad.edu"
              required
            />
          </label>
          <label>
            <span>Contraseña</span>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </label>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="btn-login">Iniciar sesión</button>
        </form>
        <div className="login-footer">
          <p>Cuentas de prueba:</p>
          <code>admin@universidad.edu / admin123</code>
          <code>profesor@universidad.edu / prof123</code>
        </div>
      </div>
    </div>
  );
}
