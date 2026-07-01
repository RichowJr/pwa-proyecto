import React, { useState, useEffect } from 'react'

export default function VisorDocumento() {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    const title = `Contador: ${contador} - Mi App`
    document.title = title
    return () => {
      document.title = 'Mi App'
    }
  }, [contador])

  return (
    <div className="component-card">
      <div className="component-header">
        <h3>Contador sincronizado con document.title</h3>
      </div>
      <p>Valor actual: {contador}</p>
      <div className="component-actions">
        <button className="boton-accion boton-secundario" onClick={() => setContador((v) => v - 1)} disabled={contador <= 0}>
          Decrementar
        </button>
        <button className="boton-accion boton-primario" onClick={() => setContador((v) => v + 1)}>
          Incrementar
        </button>
      </div>
    </div>
  )
}
