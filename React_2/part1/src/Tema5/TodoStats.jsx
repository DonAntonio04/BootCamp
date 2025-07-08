import React from 'react'

function TodoStats({ tareas }) {
  const total = tareas.length
  const completadas = tareas.filter(t => t.completada).length
  const pendientes = total - completadas

  return (
    <div>
      <p>Total: {total}</p>
      <p>Completadas: {completadas}</p>
      <p>Pendientes: {pendientes}</p>
    </div>
  )
}

export default TodoStats
