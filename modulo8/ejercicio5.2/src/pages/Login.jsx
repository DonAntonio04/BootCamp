import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = e => {
    e.preventDefault();
    if (login(email, password)) {
      if (from === '/login' || from === '/') {
        // Redirige por rol
        navigate(email === 'admin@test.com' ? '/admin' : '/dashboard');
      } else {
        navigate(from);
      }
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
        /><br />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
