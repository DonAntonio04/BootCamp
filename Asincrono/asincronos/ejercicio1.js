async function esperarSaludo() {
  const saludo = await new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hiciste Async");
    }, 2000);
  });
      console.log(saludo);

}
esperarSaludo();