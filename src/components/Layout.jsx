import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useNotas } from '../context/NotasContext'

export default function Layout() {
  const { notificacion, cerrar } = useNotas()

  return (
    <div className="layout-shell">
      <header className="layout-header">
        <div>
          <h1>Laboratorios React</h1>
          <p className="layout-tagline">Explora ejercicios y componentes creados en este proyecto.</p>
        </div>
        <nav className="layout-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'layout-link active' : 'layout-link')} end>
            Inicio
          </NavLink>
          <NavLink to="/notas" className={({ isActive }) => (isActive ? 'layout-link active' : 'layout-link')}>
            Notas
          </NavLink>
          <NavLink to="/lab2" className={({ isActive }) => (isActive ? 'layout-link active' : 'layout-link')}>
            Laboratorio 2
          </NavLink>
          <NavLink to="/lab3" className={({ isActive }) => (isActive ? 'layout-link active' : 'layout-link')}>
            Laboratorio 3
          </NavLink>
          <NavLink to="/lab4" className={({ isActive }) => (isActive ? 'layout-link active' : 'layout-link')}>
            Laboratorio 4
          </NavLink>
        </nav>
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

      <footer className="layout-footer">© 2026 pwa-proyecto</footer>
    </div>
  )
}
