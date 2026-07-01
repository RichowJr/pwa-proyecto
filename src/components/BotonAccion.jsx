import React from 'react'

export default function BotonAccion({ texto, variante = 'primario', disabled = false, onClick, type = 'button' }) {
  const className = `boton-accion boton-${variante}`

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {texto}
    </button>
  )
}
