import React from "react";

export default function WeatherSystem() {
  // Simulamos variables de clima y estado
  const hour = new Date().getHours(); // de 0 a 23
  const isRaining = true;
  const isSunny = false;
  const forecast = []; // pronóstico puede estar vacío
  const alert = null;  // puede ser null o un string

  // Frases por hora
  const getTimeMessage = (hour) => {
    return hour < 6
      ? "🌙 Es de madrugada"
      : hour < 12
      ? "☀️ Buenos días"
      : hour < 18
      ? "🌤️ Buenas tardes"
      : "🌇 Buenas noches";
  };

  return (
    <>
      <h1>Sistema de Clima 🌦️</h1>

      {/* 🕒 Mensaje por hora (ternario anidado) */}
      <p>{getTimeMessage(hour)}</p>

      {/* ☁️ Renderizado condicional múltiple con && y ternario */}
      {isRaining && <p>🌧️ Está lloviendo, lleva paraguas.</p>}
      {isSunny ? <p>😎 Hace sol, no olvides tus gafas.</p> : !isRaining && <p>🌥️ Está nublado.</p>}

      {/* ⚠️ Mostrar alerta si existe */}
      {alert && <p style={{ color: "red" }}>⚠️ Alerta: {alert}</p>}

      {/* 📅 Pronóstico (manejo de arrays vacíos) */}
      <h3>Pronóstico de la semana:</h3>
      {forecast.length === 0 ? (
        <p>No hay datos disponibles.</p>
      ) : (
        <ul>
          {forecast.map((day, i) => (
            <li key={i}>{day}</li>
          ))}
        </ul>
      )}

      {/* Ejemplo de null y undefined */}
      {null}
      {undefined}
      <p>✔️ Componentes null o undefined no rompen el renderizado.</p>
    </>
  );
}
