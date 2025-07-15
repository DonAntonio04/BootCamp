import { useParams, useNavigate } from 'react-router-dom';
import employees from '../data/employees';

const EmployeeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const employee = employees.find(emp => emp.id === id);

  if (!employee) {
    return <h2>Empleado no encontrado</h2>;
  }

  return (
    <div>
      <h2>Perfil de {employee.name}</h2>
      <p><strong>Puesto:</strong> {employee.position}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Teléfono:</strong> {employee.phone}</p>
      <p><strong>Departamento:</strong> {employee.department}</p>

      <button onClick={() => navigate('/')}>Volver a la lista</button>
    </div>
  );
};

export default EmployeeDetail;
