import React, { useState } from 'react'

export default function Acordeon({ titulo, children }) {
  const [expandido, setExpandido] = useState(false)

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, marginBottom: 12 }}>
      <button
        onClick={() => setExpandido((v) => !v)}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '10px 12px',
          background: 'transparent',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          fontSize: 16
        }}
      >
        <span style={{ width: 20 }}>{expandido ? '▼' : '▶'}</span>
        <span style={{ fontWeight: 600 }}>{titulo}</span>
      </button>

      {expandido && <div style={{ padding: 12, borderTop: '1px solid #eee' }}>{children}</div>}
    </div>
  )
}
