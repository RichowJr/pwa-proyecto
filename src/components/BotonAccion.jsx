import React from 'react'

export default function BotonAccion({ texto, variante = 'primario', disabled = false, onClick }) {
  const className = `boton-accion boton-${variante}`

  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {texto}
    </button>
  )
}
