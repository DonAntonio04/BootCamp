import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Panel de administrador: {user.email}</h2>
      <button onClick={() => { logout(); navigate('/'); }}>Cerrar sesión</button>
    </div>
  );
};

export default AdminPanel;
    