import React from 'react'
import { Link } from 'react-router-dom'

export default function NoEncontrada() {
  return (
    <div className="page-card">
      <h2>404 - Página no encontrada</h2>
      <p>La ruta que intentas visitar no existe.</p>
      <Link className="boton-accion boton-primario" to="/">
        Volver al inicio
      </Link>
    </div>
  )
}
