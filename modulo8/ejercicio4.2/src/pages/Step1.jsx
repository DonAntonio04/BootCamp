import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from '../components/ProgressBar';

const Step1 = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleNext = () => {
    if (name.trim() === '') return alert('Ingresa tu nombre');
    navigate('/step2', { state: { name } });
  };

  return (
    <div>
      <h2>Paso 1: Datos personales</h2>
      <ProgressBar step={1} />
      <input
        type="text"
        placeholder="Nombre completo"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default Step1;
