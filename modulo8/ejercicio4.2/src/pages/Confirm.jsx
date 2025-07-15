import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ProgressBar from '../components/ProgressBar';

const Confirm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email, preference } = location.state || {};

  useEffect(() => {
    if (!name || !email || !preference) navigate('/step1');
  }, []);

  return (
    <div>
      <h2>Paso 4: Confirmación</h2>
      <ProgressBar step={4} />
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Preferencia:</strong> {preference}</p>

      <button onClick={() => navigate('/step3', { state: { name, email } })}>
        Cambiar preferencia
      </button>
      <button onClick={() => navigate('/step1')}>Reiniciar</button>
    </div>
  );
};

export default Confirm;
