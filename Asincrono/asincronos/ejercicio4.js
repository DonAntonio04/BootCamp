async function obteneRespuesta() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if(!respuesta.ok) {
            console.log(`Error HTTP: ${respuesta.status}`)
        }

        const post = await respuesta.json();
        console.log("Titulo de: ", post.title)

        return post();
    }catch(error) {
        console.error("Error")
    }
}

obteneRespuesta();