import React from 'react'
import Alerta from '../components/Alerta'
import Acordeon from '../components/Acordeon'
import BotonAccion from '../components/BotonAccion'
import Modal from '../components/Modal'
import Contador from '../components/Contador'
import ListaContactos from '../components/ListaContactos'
import FormularioEvento from '../components/FormularioEvento'
import ModalDemo from './ModalDemo'

export default function Laboratorio3() {
  return (
    <div className="laboratorio">
      <h1>Laboratorio 3 - Componentes reutilizables</h1>

      <Acordeon titulo="Ejercicio 1 — Alertas" defaultExpanded={true}>
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
      </Acordeon>

      <Acordeon titulo="Ejercicio 1 — Acordeones">
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
      </Acordeon>

      <Acordeon titulo="Ejercicio 2 — Modal, BotonAccion y Contador">
        <div style={{ marginBottom: 12 }}>
          <BotonAccion texto="Abrir modal" onClick={() => window.dispatchEvent(new CustomEvent('abrir-modal-demo'))} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <Contador />
        </div>
        <ModalDemo />
      </Acordeon>

      <Acordeon titulo="Ejercicio 3 — Lista de contactos">
        <ListaContactos />
      </Acordeon>

      <Acordeon titulo="Ejercicio 4 — Formulario de evento">
        <FormularioEvento />
      </Acordeon>
    </div>
  )
}
