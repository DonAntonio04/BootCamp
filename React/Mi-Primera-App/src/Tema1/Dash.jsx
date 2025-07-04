import { useEffect, useState } from "react";

export default function Dashboard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // 🕓 Hora actual
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  // 🎂 Próximo cumpleaños
  const nextBirthday = new Date(time.getFullYear(), 11, 4); // cambia el mes (0 = enero) y el día
  if (time > nextBirthday) nextBirthday.setFullYear(time.getFullYear() + 1);
  const diffMs = nextBirthday - time;
  const daysToBirthday = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  // 📅 Día de la semana
  const weekdays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const today = weekdays[time.getDay()];
  const messages = {
    Lunes: "¡Nuevo comienzo, nuevas oportunidades!",
    Martes: "¡Sigue adelante, ya estás en ritmo!",
    Miércoles: "¡Mitad de semana, ánimo!",
    Jueves: "¡Ya casi es viernes!",
    Viernes: "¡Lo lograste, es viernes!",
    Sábado: "¡Disfruta tu fin de semana!",
    Domingo: "¡Prepárate para una nueva semana!",
  };

  // 📈 Progreso del año
  const startYear = new Date(time.getFullYear(), 0, 1);
  const endYear = new Date(time.getFullYear() + 1, 0, 1);
  const progress = ((time - startYear) / (endYear - startYear)) * 100;

  // ✨ Frase motivacional
  const motivationalPhrases = [
    "¡Buenos días! Hoy es un gran día para comenzar algo nuevo.",
    "¡Sigue adelante! La tarde es perfecta para avanzar.",
    "¡Ya casi terminas! La noche también es una oportunidad.",
  ];
  let phrase = "";
  if (time.getHours() < 12) phrase = motivationalPhrases[0];
  else if (time.getHours() < 18) phrase = motivationalPhrases[1];
  else phrase = motivationalPhrases[2];

  return (
    <div>
      <h1>Dashboard</h1>
      <p><strong>Hora actual:</strong> {hours}:{minutes}:{seconds}</p>
      <p><strong>Días para tu cumpleaños:</strong> {daysToBirthday} días</p>
      <p><strong>Hoy es:</strong> {today} - {messages[today]}</p>
      <p><strong>Progreso del año:</strong> {progress.toFixed(2)}%</p>
      <p><strong>Frase motivacional:</strong> "{phrase}"</p>
    </div>
  );
}
