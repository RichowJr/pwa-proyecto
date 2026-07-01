import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <h1>Bienvenido a pwa-proyecto</h1>
      <p>Selecciona un laboratorio para ver sus ejercicios:</p>
      <ul className="home-list">
        <li>
          <Link className="home-link" to="/notas">
            MisNotas — Aplicación de notas con Context, filtros y rutas
          </Link>
        </li>
        <li>
          <Link className="home-link" to="/lab2">
            Laboratorio 2 — Expresiones, Condicionales y Listas
          </Link>
        </li>
        <li>
          <Link className="home-link" to="/lab3">
            Laboratorio 3 — Componentes reutilizables
          </Link>
        </li>
        <li>
          <Link className="home-link" to="/lab4">
            Laboratorio 4 — Efectos y hooks personalizados
          </Link>
        </li>
      </ul>
      <p className="home-note">
        Usa la navegación para abrir cada laboratorio. Puedes volver al inicio desde el encabezado.
      </p>
    </div>
  )
}
