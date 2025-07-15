import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const linkStyle = ({ isActive }) => ({
    padding: '10px',
    display: 'block',
    textDecoration: 'none',
    color: isActive ? 'white' : 'black',
    backgroundColor: isActive ? 'blue' : 'transparent'
  });

  return (
    <aside style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '10px' }}>
      <nav>
        <NavLink to="/dashboard" style={linkStyle}>Estadísticas</NavLink>
        <NavLink to="/dashboard/users" style={linkStyle}>Usuarios</NavLink>
        <NavLink to="/dashboard/products" style={linkStyle}>Productos</NavLink>
        <NavLink to="/dashboard/settings" style={linkStyle}>Configuración</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
