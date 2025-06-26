const saludoPromesa = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("Hola Mundo!");

    },2000)
});

saludoPromesa.then((mensaje) => {
    console.log(mensaje);
});