import React from 'react'
import BotonAccion from './BotonAccion'

export default function Modal({ titulo, abierto, children }) {
  if (!abierto) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
    >
      <div style={{ background: '#fff', padding: 20, borderRadius: 8, width: '90%', maxWidth: 600 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h3 style={{ margin: 0 }}>{titulo}</h3>
        </div>
        <div style={{ marginBottom: 12 }}>{children}</div>
      </div>
    </div>
  )
}
