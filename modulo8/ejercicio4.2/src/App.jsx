import { Routes, Route, Navigate } from 'react-router-dom';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Confirm from './pages/Confirm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/step1" />} />
      <Route path="/step1" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/step3" element={<Step3 />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="*" element={<h2>Página no encontrada</h2>} />
    </Routes>
  );
};

export default App;
