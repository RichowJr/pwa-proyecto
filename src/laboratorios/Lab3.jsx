import React from 'react'
import Alerta from '../components/Alerta'
import Acordeon from '../components/Acordeon'

export default function Laboratorio3() {
  return (
    <div className="laboratorio">
      <h1>Laboratorio 3 - Componentes reutilizables</h1>

      <section>
        <h2>Ejercicio 1 — Alerta (ejemplos)</h2>
        <Alerta tipo="exito" titulo="Operación exitosa">
          <p>Los datos se guardaron correctamente.</p>
        </Alerta>

        <Alerta tipo="advertencia" titulo="Atención">
          <p>Estás acercándote al límite de uso.</p>
        </Alerta>

        <Alerta tipo="error" titulo="Error">
          <p>Ocurrió un problema al procesar la solicitud.</p>
        </Alerta>

        <Alerta tipo="info" titulo="Información">
          <p>Esta es una alerta informativa con datos adicionales.</p>
        </Alerta>
      </section>

      <section>
        <h2>Ejercicio 1 — Acordeones (ejemplos)</h2>

        <Acordeon titulo="Sección 1: Introducción">
          <p>Contenido de la primera sección. Cada acordeón mantiene su propio estado.</p>
        </Acordeon>

        <Acordeon titulo="Sección 2: Detalles">
          <p>Más detalles con información adicional y ejemplos.</p>
        </Acordeon>

        <Acordeon titulo="Sección 3: Recursos">
          <ul>
            <li>Recurso A</li>
            <li>Recurso B</li>
            <li>Recurso C</li>
          </ul>
        </Acordeon>
      </section>
    </div>
  )
}
