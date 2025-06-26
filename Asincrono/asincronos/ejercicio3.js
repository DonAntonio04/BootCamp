async function secuencia() {
    try {
        const secuencia1 = await new Promise ((resolve => 
            setTimeout(() => resolve("Primera llamada completada"), 1000)));
           console.log(secuencia1);
        
        const secuencia2 = await new Promise((resolve => 
            setTimeout(() => resolve("Segunda llamada completada"), 1500)
        ));
        console.log(secuencia2)
         
        const secuencia3 = await new Promise((resolve =>
            setTimeout(() => resolve("Tercera llamada completada"), 500)
        ));

    } catch(error) {
        console.error("Error en la llamada")
    }
}

secuencia()