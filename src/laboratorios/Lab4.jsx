import React, { useState } from 'react'
import VisorDocumento from '../components/VisorDocumento'
import TemporizadorPomodoro from '../components/TemporizadorPomodoro'
import ConfiguracionUsuario from '../components/ConfiguracionUsuario'
import Acordeon from '../components/Acordeon'

export default function Laboratorio4() {
  const [mostrarVisor, setMostrarVisor] = useState(true)

  return (
    <div className="laboratorio">
      <h1>Laboratorio 4 - Efectos y hooks personalizados</h1>

      <Acordeon titulo="Ejercicio 1 — Visor de documento" defaultExpanded={true}>
        <button className="boton-accion boton-secundario" onClick={() => setMostrarVisor((v) => !v)}>
          {mostrarVisor ? 'Simular desmontaje' : 'Montar visor'}
        </button>
        {mostrarVisor ? <VisorDocumento /> : <p>El componente VisorDocumento está desmontado.</p>}
      </Acordeon>

      <Acordeon titulo="Ejercicio 2 — Temporizador Pomodoro">
        <TemporizadorPomodoro />
      </Acordeon>

      <Acordeon titulo="Ejercicio 3 — Configuración de usuario">
        <ConfiguracionUsuario />
      </Acordeon>
    </div>
  )
}
