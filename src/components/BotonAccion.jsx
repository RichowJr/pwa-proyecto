import React from 'react'

export default function BotonAccion({ texto, variante = 'primario', disabled = false, onClick }) {
  const base = {
    padding: '8px 12px',
    borderRadius: 6,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: 600,
    marginRight: 8
  }

  const variantes = {
    primario: { background: '#3b82f6', color: '#fff' },
    secundario: { background: '#e5e7eb', color: '#111' },
    peligro: { background: '#ef4444', color: '#fff' }
  }

  const style = { ...base, ...(variantes[variante] || variantes.primario), opacity: disabled ? 0.6 : 1 }

  return (
    <button onClick={onClick} disabled={disabled} style={style}>
      {texto}
    </button>
  )
}
