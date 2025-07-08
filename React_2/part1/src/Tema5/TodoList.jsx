import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ tareas, toggleTarea, eliminarTarea }) {
  return (
    <ul>
      {tareas.map(tarea => (
        <TodoItem 
          key={tarea.id} 
          tarea={tarea} 
          toggleTarea={toggleTarea} 
          eliminarTarea={eliminarTarea} 
        />
      ))}
    </ul>
  )
}

export default TodoList
