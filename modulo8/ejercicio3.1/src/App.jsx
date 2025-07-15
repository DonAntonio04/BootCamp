import { Routes, Route } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import EmployeeDetail from './pages/EmployeeDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/employee/:id" element={<EmployeeDetail />} />
      <Route path="*" element={<h2>Página no encontrada</h2>} />
    </Routes>
  );
};

export default App;
