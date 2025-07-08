import React, { useState } from 'react'

function AddTodo({ agregarTarea }) {
  const [texto, setTexto] = useState('')

  const manejarEnvio = (e) => {
    e.preventDefault()
    if (texto.trim() !== '') {
      agregarTarea(texto)
      setTexto('')
    }
  }

  return (
    <form onSubmit={manejarEnvio}>
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default AddTodo
