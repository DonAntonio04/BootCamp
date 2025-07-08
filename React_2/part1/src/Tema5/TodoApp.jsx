import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoStats from './TodoStats'

function TodoApp() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Aprender React", completada: false },
    { id: 2, texto: "Hacer ejercicios", completada: true }
  ])

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto,
      completada: false
    }
    setTareas([...tareas, nuevaTarea])
  }

  const toggleTarea = (id) => {
    const nuevasTareas = tareas.map(t => 
      t.id === id ? { ...t, completada: !t.completada } : t
    )
    setTareas(nuevasTareas)
  }

  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter(t => t.id !== id)
    setTareas(nuevasTareas)
  }

  return (
    <div>
      <h2>📋 Lista de Tareas</h2>
      <AddTodo agregarTarea={agregarTarea} />
      <TodoList 
        tareas={tareas} 
        toggleTarea={toggleTarea} 
        eliminarTarea={eliminarTarea} 
      />
      <TodoStats tareas={tareas} />
    </div>
  )
}

export default TodoApp
