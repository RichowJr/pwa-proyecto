import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useNotas } from '../context/NotasContext'

export default function Layout() {
  const { notas, notificacion, cerrar } = useNotas()
  const totalNotas = notas.length

  return (
    <div className="layout-shell">
      <header className="layout-header">
        <div>
          <h1>MisNotas</h1>
          <p className="layout-tagline">Organiza tus ideas, tareas y recordatorios en un solo lugar.</p>
        </div>
        <nav className="layout-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'layout-link active' : 'layout-link')} end>
            Inicio
          </NavLink>
          <NavLink to="/notas" className={({ isActive }) => (isActive ? 'layout-link active' : 'layout-link')}>
            Notas
          </NavLink>
          <NavLink to="/notas/nueva" className={({ isActive }) => (isActive ? 'layout-link active' : 'layout-link')}>
            Nueva nota
          </NavLink>
        </nav>
        <div className="layout-indicator">Total de notas: {totalNotas}</div>
      </header>

      {notificacion && (
        <div className={`toast toast-${notificacion.tipo}`}>
          <span>{notificacion.mensaje}</span>
          <button onClick={cerrar} className="toast-close">
            ×
          </button>
        </div>
      )}

      <main className="layout-main">
        <Outlet />
      </main>

      <footer className="layout-footer">© 2026 MisNotas</footer>
    </div>
  )
}
