import React, { useState, useEffect } from 'react'

const formatoTiempo = (segundos) => {
  const minutos = Math.floor(segundos / 60)
  const segundosRestantes = segundos % 60
  return `${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`
}

export default function TemporizadorPomodoro() {
  const [segundos, setSegundos] = useState(1500)
  const [activo, setActivo] = useState(false)
  const [finalizado, setFinalizado] = useState(false)

  useEffect(() => {
    if (!activo || segundos <= 0) return

    const intervalId = window.setInterval(() => {
      setSegundos((prev) => {
        if (prev <= 1) {
          setActivo(false)
          setFinalizado(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [activo, segundos])

  const reiniciar = () => {
    setActivo(false)
    setFinalizado(false)
    setSegundos(1500)
  }

  return (
    <div className="component-card">
      <h3>Pomodoro</h3>
      <div className="temporizador-display">{formatoTiempo(segundos)}</div>
      <div className="component-actions">
        <button className="boton-accion boton-primario" onClick={() => setActivo(true)} disabled={activo || segundos <= 0}>
          Iniciar
        </button>
        <button className="boton-accion boton-secundario" onClick={() => setActivo(false)} disabled={!activo}>
          Pausar
        </button>
        <button className="boton-accion boton-peligro" onClick={reiniciar}>
          Reiniciar
        </button>
      </div>
      {finalizado && <p className="temporizador-alert">El tiempo ha terminado.</p>}
    </div>
  )
}
