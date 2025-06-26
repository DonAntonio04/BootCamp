function tareaA() {
  return new Promise (resolve => {
    setTimeout(() => resolve("Resultado de la Tarea A (1s)") )
  }, 1000)
}

function tareaB() {
  return new Promise (resolve => {
    setTimeout(() => resolve("Resultado de la Tarea B (2s)") )
  }, 2000)
}
function tareaC() {
  return new Promise (resolve => {
    setTimeout(() => resolve("Resultado de la Tarea C (3s)") )
  }, 3000)
}



