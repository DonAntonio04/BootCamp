import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProgressBar from '../components/ProgressBar';

const Step2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const name = location.state?.name;

  useEffect(() => {
    if (!name) navigate('/step1');
  }, []);

  const handleNext = () => {
    if (!email.includes('@')) return alert('Email inválido');
    navigate('/step3', { state: { name, email } });
  };

  return (
    <div>
      <h2>Paso 2: Contacto</h2>
      <ProgressBar step={2} />
      <p>Nombre: {name}</p>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <button onClick={() => navigate('/step1', { state: { name } })}>Anterior</button>
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default Step2;
