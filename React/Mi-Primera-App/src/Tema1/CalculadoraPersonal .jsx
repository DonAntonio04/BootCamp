import { useState, useEffect } from "react";

const fechaNacimiento = new Date(1998, 5, 15); 
const añosExperiencia = 3;
const cafesPorDia = 2;
const horasSueñoPorDia = 7;
const librosLeidosAño = 12;
const horasEjercicioPorSemana = 4;

const CalculadoraPersonal =() =>{
  const ahora = new Date();
  const msVividos = ahora - fechaNacimiento;

  const diasVividos = Math.floor(msVividos / (1000 * 60 * 60 * 24));
  const horasVividas = diasVividos * 24;
  const minutosVividos = horasVividas * 60;

  const lineasCodigo = añosExperiencia * 365 * 50; // promedio 50 líneas/día
  const cafesTomados = diasVividos * cafesPorDia;
  const horasDormidas = diasVividos * horasSueñoPorDia;
  const librosLeidos = Math.floor((librosLeidosAño / 12) * (diasVividos / 30));
  const horasEjercicio = Math.floor((horasEjercicioPorSemana / 7) * diasVividos);

  return (
    <div className="card">
      <h2>📊 Estadísticas Personales</h2>
      <p>Edad en días: <strong>{diasVividos.toLocaleString()}</strong></p>
      <p>Edad en horas: <strong>{horasVividas.toLocaleString()}</strong></p>
      <p>Edad en minutos: <strong>{minutosVividos.toLocaleString()}</strong></p>
      <p>💻 Líneas de código escritas (aprox): <strong>{lineasCodigo.toLocaleString()}</strong></p>
      <p>☕ Cafés tomados en tu vida (aprox): <strong>{cafesTomados.toLocaleString()}</strong></p>
      <p>🛌 Horas dormidas: <strong>{horasDormidas.toLocaleString()}</strong></p>
      <p>📚 Libros leídos en tu vida (estimado): <strong>{librosLeidos.toLocaleString()}</strong></p>
      <p>💪 Horas de ejercicio realizadas: <strong>{horasEjercicio.toLocaleString()}</strong></p>
    </div>
  );
}

export default CalculadoraPersonal;