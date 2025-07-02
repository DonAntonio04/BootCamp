import { useEffect } from "react";

const motivacion = () => [
{start: 5, end: 12, text: "¡Hola, hoy es un buen día!"},
{start: 12, end: 18,text: "Sigue adelante, cada paso cuenta mucho"},
{start: 19, end: 22, text: "No te detengas, sigue adelante" },
{start: 23, end: 4, text: "¡Tú puedes lograrlo todo!" },
];

const Semana = [
    "Domingo",
    "Lunes",    
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
];

export const TomarFrase = (horas) => {
 for (const frase of motivacion()) {
    if (frase.start <= horas && horas < frase.end) {
     if(horas >= frase.start && horas <= frase.end ) {
        return frase.text;
     }else {
        if (horas >= frase.start || horas <= frase.end) {
          return frase.text;
        }
     }
     return "Sigue adelante"
    }
    function TomarSiguienteBirthday (hoy, FechaMes = 12, dia = 4) {
        let year = hoy.getFullYear();
        let SiguienteBirthday = new Date(year, FechaMes - 1, dia);
        if (
            hoy.getMonth() > FechaMes - 1 ||
            (hoy.getMonth() === FechaMes - 1 && hoy.getDate() > dia)
        ) {
            SiguienteBirthday.setFullYear(year + 1, FechaMes - 1, dia);
        }
        const diff = SiguienteBirthday - hoy;
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
     function YearProgreso(hoy) {
        const start = new Date(hoy.getFullYear(),0,1);
        const end = new Date(hoy.getFullYear() + 1, 0, 1);

        const progreso = ((hoy - start) / (end - start)) * 100;
        return progreso.toFixed(2);
     }
     const Dashboard = () => {
        const [now, setNow] = useState(new Date());

        useEffect() {
            const timer = setInterval(() => setNow(new Date()), 1000);
            
        }
     }
  } 
  
};

