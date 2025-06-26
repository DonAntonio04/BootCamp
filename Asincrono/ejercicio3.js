function paso1() {
    return new Promise((resolve) =>{
     console.log("Paso 1:");
     resolve("Listo el paso 1");
    });
}

function paso2(mensaje) {
    return new Promise((resolve) => {
        console.log("Listo el Paso 2", mensaje);
        setTimeout(() => resolve(console.log("Listo el paso 2")), 1000)

    });
}

function paso3() {
    return new Promise((resolve)=>{
        console.log("Paso 3");
        resolve("Listo el paso 3")
    })
}

paso1()
.then((res1) => paso2(res1))
.then((res2)=> paso3(res2))
.then((final)=> console.log("Final", final))