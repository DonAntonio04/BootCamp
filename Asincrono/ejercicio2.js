function verificarNum(num) {
    return new Promise((resolve,reject)=> {

        if(num % 2 === 0){
            console.log("Es par")
        }
        else {
            console.log("Es Impar")
        }
    });
}

 verificarNum(10).then((mensaje) => {
        console.log("Resultado:", mensaje)
    });

   async function ejecutar(num){
    try {
        const Resultado = await verificarNum(num);
        console.log("Exito: ", Resultado);
    }
    catch(error) {
        console.error("Error:", error);
    }
  };

  ejecutar(4);
  ejecutar(5);