async function ValidarEdad(edad) {
    try {
        const resultado = await new Promise((resolve, reject) => {
            if(edad > 18) {
                console.log("Eres Mayor de Edad");
            }
            else {
                console.log("Eres Menor");
            }
        });
        console.log(resultado);
    } catch(error) {
        console.log(error);
    }
   
}

  ValidarEdad(20);
  ValidarEdad(15);