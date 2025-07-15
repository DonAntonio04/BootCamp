import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProgressBar from '../components/ProgressBar';

const Step3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email } = location.state || {};
  const [preference, setPreference] = useState('');

  useEffect(() => {
    if (!name || !email) navigate('/step1');
  }, []);

  const handleNext = () => {
    if (preference === '') return alert('Selecciona una preferencia');
    navigate('/confirm', { state: { name, email, preference } });
  };

  return (
    <div>
      <h2>Paso 3: Preferencias</h2>
      <ProgressBar step={3} />
      <p>Email: {email}</p>
      <select onChange={e => setPreference(e.target.value)} value={preference}>
        <option value="">Selecciona una opción</option>
        <option value="email">Email</option>
        <option value="sms">SMS</option>
      </select>
      <br />
      <button onClick={() => navigate('/step2', { state: { name, email } })}>Anterior</button>
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default Step3;
