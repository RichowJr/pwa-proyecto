import React, { useState } from 'react'
import BotonAccion from './BotonAccion'
import Alerta from './Alerta'

export default function Contador() {
  const [valor, setValor] = useState(0)

  const decrementar = () => setValor((v) => Math.max(0, v - 1))
  const incrementar = () => setValor((v) => v + 1)
  const incrementar5 = () => setValor((v) => v + 5)
  const reiniciar = () => setValor(() => 0)

  return (
    <div className="component-card">
      <h3>Contador</h3>
      <p className="contador-valor">{valor}</p>
      <div className="component-actions">
        <BotonAccion texto="Decrementar" variante="secundario" disabled={valor === 0} onClick={decrementar} />
        <BotonAccion texto="Incrementar" variante="primario" onClick={incrementar} />
        <BotonAccion texto="Incrementar +5" variante="primario" onClick={incrementar5} />
        <BotonAccion texto="Reiniciar" variante="peligro" onClick={reiniciar} />
      </div>

      {valor === 0 && <Alerta tipo="info" titulo="El contador está en cero">El contador está en cero</Alerta>}
      {valor > 10 && <Alerta tipo="advertencia" titulo="¡Valor alto!">¡Valor alto!</Alerta>}
    </div>
  )
}
