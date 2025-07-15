import { Link } from 'react-router-dom';
import employees from '../data/employees';

const EmployeeList = () => {
  return (
    <div>
      <h2>Directorio de Empleados</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            <Link to={`/employee/${emp.id}`}>
              {emp.name} - {emp.position}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
