import React from 'react'

export default function Modal({ titulo, abierto, children }) {
  if (!abierto) return null

  return (
    <div className="modal-overlay">
      <div className="modal-contenedor">
        <div className="modal-header">
          <h3>{titulo}</h3>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}
