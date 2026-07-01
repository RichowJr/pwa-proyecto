import React from 'react'

const typeMap = {
  exito: { icon: '✓', bg: '#d1fae5', border: '#10b981' },
  advertencia: { icon: '⚠', bg: '#fff7ed', border: '#f59e0b' },
  error: { icon: '✖', bg: '#fee2e2', border: '#ef4444' },
  info: { icon: 'ℹ', bg: '#eef2ff', border: '#6366f1' }
}

export default function Alerta({ tipo = 'info', titulo, children }) {
  const t = typeMap[tipo] || typeMap.info

  return (
    <div
      role="alert"
      style={{
        background: t.bg,
        border: `1px solid ${t.border}`,
        padding: 12,
        borderRadius: 8,
        marginBottom: 12
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}
        >
          {t.icon}
        </div>
        <div style={{ fontWeight: 600 }}>{titulo}</div>
      </div>
      <div style={{ marginLeft: 36 }}>{children}</div>
    </div>
  )
}
