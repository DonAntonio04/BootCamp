import React, { useState } from 'react'

const CalculadoraBasica = () => {
  const [pantalla, setPantalla] = useState('0')

  const [numeroAnterior, setNumeroAnterior] = useState(null)

  const [operacion, setOperacion] = useState(null)

  const [esperandoOperando, setEsperandoOperando] = useState(false)

  const manejarNumeroClick = (numero) => {
    console.log('🔢 Número presionado:', numero)

    if (pantalla === '0' || esperandoOperando) {
      setPantalla(numero)
      setEsperandoOperando(false)
    } else {
      setPantalla(pantalla + numero)
    }
  }

  const manejarOperacionClick = (op) => {
    console.log('➕ Operador presionado:', op)

    setNumeroAnterior(parseFloat(pantalla))
    setOperacion(op)
    setEsperandoOperando(true)
  }

  const manejarClear = () => {
    console.log('🧹 Limpiar calculadora')
    setPantalla('0')
    setNumeroAnterior(null)
    setOperacion(null)
    setEsperandoOperando(false)
  }

  const manejarIgual = () => {
    console.log('🟰 Botón igual presionado')
    if (numeroAnterior === null || operacion === null) {
      console.log('⚠️ No hay operación pendiente')
      return
    }

    const numeroActual = parseFloat(pantalla)
    let resultado = 0

    switch (operacion) {
      case '+':
        resultado = numeroAnterior + numeroActual
        break
      case '-':
        resultado = numeroAnterior - numeroActual
        break
      case '*':
        resultado = numeroAnterior * numeroActual
        break
      case '/':
        if (numeroActual === 0) {
          console.log('🚫 División entre cero')
          setPantalla('Error')
          return
        }
        resultado = numeroAnterior / numeroActual
        break
      default:
        return
    }

    console.log('Resultado:', resultado)

    setPantalla(resultado.toString())
    setNumeroAnterior(null)
    setOperacion(null)
    setEsperandoOperando(false)
  }

  const renderizarBotonesNumeros = () => {
    const botones = []
    for (let i = 1; i <= 9; i++) {
      botones.push(
        <button key={i} onClick={() => manejarNumeroClick(i.toString())}>
          {i}
        </button>
      )
    }
    botones.push(
      <button key="0" onClick={() => manejarNumeroClick('0')}>
        0
      </button>
    )
    return botones
  }

  return (
    <div>
      <h2> Calculadora Básica</h2>
      
      <div>
        <h1>{pantalla}</h1>
      </div>

{}
      <div>
        {renderizarBotonesNumeros()}
      </div>

      
      <div>
        <button onClick={() => manejarOperacionClick('+')}>+</button>
        <button onClick={() => manejarOperacionClick('-')}>-</button>
        <button onClick={() => manejarOperacionClick('*')}>*</button>
        <button onClick={() => manejarOperacionClick('/')}>/</button>
      </div>

      <div>
        <button onClick={manejarIgual}>=</button>
        <button onClick={manejarClear}>C</button>
      </div>
    </div>
  )
}

export default CalculadoraBasica
