import React, { useState, useEffect, useRef } from 'react'

const formatearTiempo = (segundosTotales) => {
  const minutos = Math.floor(segundosTotales / 60)
  const segundos = segundosTotales % 60

  const minutosFormateados = minutos.toString().padStart(2, '0')
  const segundosFormateados = segundos.toString().padStart(2, '0')

  return `${minutosFormateados}:${segundosFormateados}`
}

const CronometroInteractivo = () => {
  const [segundos, setSegundos] = useState(0)

  const [estaActivo, setEstaActivo] = useState(false)

  const idIntervalo = useRef(null)

  useEffect(() => {
    console.log('useEffect ejecutado. ¿Está activo?', estaActivo)

    if (estaActivo) {
      console.log(' Iniciando cronómetro...')
      // Si está activo, iniciamos el setInterval
      idIntervalo.current = setInterval(() => {
        setSegundos((valorAnterior) => {
          const nuevoValor = valorAnterior + 1
          console.log(' Segundo actualizado:', nuevoValor)
          return nuevoValor
        })
      }, 1000) // cada 1 segundo
    }

    return () => {
      if (idIntervalo.current !== null) {
        console.log(' Deteniendo cronómetro (limpieza)...')
        clearInterval(idIntervalo.current)
        idIntervalo.current = null
      }
    }
  }, [estaActivo]) 
 
  const manejarInicio = () => {
    console.log('▶️ Botón "Iniciar" presionado')
    setEstaActivo(true)
  }


  const manejarPausa = () => {
    console.log('⏸ Botón "Pausar" presionado')
    setEstaActivo(false)
  }

  const manejarReset = () => {
    console.log('Botón "Resetear" presionado')
    setEstaActivo(false)
    setSegundos(0)
  }

  return (
    <div>
      <h2>Cronómetro</h2>

      <h1>{formatearTiempo(segundos)}</h1>

      <button onClick={manejarInicio}>Iniciar</button>
      <button onClick={manejarPausa}>Pausar</button>
      <button onClick={manejarReset}>Resetear</button>
    </div>
  )
}

export default CronometroInteractivo
