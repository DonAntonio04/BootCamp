const PersonInfo = (props) => {
    const calcularEdad = () => {
        const hoy = new Date();
        let edad = hoy.getFullYear() - props.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - props.fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < props.fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    };

    const calcularSalarioAnual = () => props.salarioMensual * 12;

  
    const generarSaludo = () => {
        const edad = calcularEdad();
        if (edad < 18) {
            return `Hola ${props.nombre}, eres menor de edad.`;
        } else if (edad < 65) {
            return `Hola ${props.nombre}, eres adulto.`;
        } else {
            return `Hola ${props.nombre}, eres mayor de edad.`;
        }
    };

    const adivinarAnioNacimiento = () => {
        const hoy = new Date();
        return hoy.getFullYear() - calcularEdad();
    };

    const edad = calcularEdad();
    const salarioAnual = calcularSalarioAnual();
    const saludo = generarSaludo();

    return (
        <div>
            <h2>Información Personal</h2>
            <p>Nombre: {props.nombre}</p>
            <p>Edad: {edad} años</p>
            <p>{saludo}</p>
            <p>Salario anual: ${salarioAnual}</p>
            <p>Salario mensual: ${props.salarioMensual}</p>
            <p>Probablemente naciste en {adivinarAnioNacimiento()}</p>
        </div>
    );
};

export default PersonInfo;