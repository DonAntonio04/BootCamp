const EmpleosCard = ({ nombre, puesto, edad, salarioMensual }) => {
  const salarioAnual = salarioMensual * 12;

  return (
    <div>
      <h3>{nombre}</h3>
      <p><strong>Puesto:</strong> {puesto}</p>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Salario mensual:</strong> ${salarioMensual}</p>
      <p><strong>Salario anual:</strong> ${salarioAnual}</p>
      <hr />
    </div>
  );
}

const EmpleosList = () => {
  const empleados = [
    { nombre: "Ana Martínez", puesto: "Desarrolladora Frontend", edad: 28, salarioMensual: 3200 },
    { nombre: "Carlos López", puesto: "Diseñador UX/UI", edad: 32, salarioMensual: 2800 },
    { nombre: "María García", puesto: "Project Manager", edad: 35, salarioMensual: 3800 },
    { nombre: "David Rodríguez", puesto: "Desarrollador Backend", edad: 29, salarioMensual: 3400 },
    { nombre: "Laura Sánchez", puesto: "QA Tester", edad: 26, salarioMensual: 2600 }
  ];

  return (
    <div>
      <h2>👥 Empleados</h2>
      {empleados.map((empleado, index) => (
        <EmpleosCard
          key={index}
          nombre={empleado.nombre}
          puesto={empleado.puesto}
          edad={empleado.edad}
          salarioMensual={empleado.salarioMensual}
        />
      ))}
    </div>
  );
}

export default EmpleosList;