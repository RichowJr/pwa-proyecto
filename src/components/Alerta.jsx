import React from 'react'

const typeMap = {
  exito: { icon: '✓', className: 'alerta-exito' },
  advertencia: { icon: '⚠', className: 'alerta-advertencia' },
  error: { icon: '✖', className: 'alerta-error' },
  info: { icon: 'ℹ', className: 'alerta-info' }
}

export default function Alerta({ tipo = 'info', titulo, children }) {
  const t = typeMap[tipo] || typeMap.info

  return (
    <div role="alert" className={`alerta ${t.className}`}>
      <div className="alerta-header">
        <div className="alerta-icon">{t.icon}</div>
        <div className="alerta-titulo">{titulo}</div>
      </div>
      <div className="alerta-contenido">{children}</div>
    </div>
  )
}
