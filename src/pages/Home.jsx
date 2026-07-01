import React from 'react'

export default function Home({ onSelect }) {
  return (
    <div className="home" style={{ padding: 20 }}>
      <h1>Bienvenido a pwa-proyecto</h1>
      <p>Selecciona un laboratorio para ver sus ejercicios:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '8px 0' }}>
          <button onClick={() => onSelect('lab2')} style={{ padding: '8px 12px' }}>
            Laboratorio 2 — Expresiones, Condicionales y Listas
          </button>
        </li>
        <li style={{ margin: '8px 0' }}>
          <button onClick={() => onSelect('lab3')} style={{ padding: '8px 12px' }}>
            Laboratorio 3 — Componentes reutilizables (pendiente)
          </button>
        </li>
        <li style={{ margin: '8px 0' }}>
          <button onClick={() => onSelect('lab4')} style={{ padding: '8px 12px' }}>
            Laboratorio 4 — Composición y Formularios (pendiente)
          </button>
        </li>
        <li style={{ margin: '8px 0' }}>
          <button onClick={() => onSelect('lab5')} style={{ padding: '8px 12px' }}>
            Laboratorio 5 — Integración final (pendiente)
          </button>
        </li>
      </ul>
      <p style={{ marginTop: 20, color: '#666' }}>
        Consejo: usa el botón "Volver" dentro de cada laboratorio para regresar al menú.
      </p>
    </div>
  )
}
