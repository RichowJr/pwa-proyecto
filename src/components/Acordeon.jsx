import React, { useState } from 'react'

export default function Acordeon({ titulo, children, defaultExpanded = false }) {
  const [expandido, setExpandido] = useState(defaultExpanded)

  return (
    <div className="acordeon">
      <button className="acordeon-boton" type="button" onClick={() => setExpandido((v) => !v)}>
        <span className="acordeon-icon">{expandido ? '▼' : '▶'}</span>
        <span>{titulo}</span>
      </button>
      {expandido && <div className="acordeon-contenido">{children}</div>}
    </div>
  )
}

