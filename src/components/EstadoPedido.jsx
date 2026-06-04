export default function EstadoPedido() {
  const estado = "enviado"

  const iconos = {
    pendiente: "⏳",
    enviado: "🚚",
    entregado: "✅",
    cancelado: "❌",
  }

  const mensajes = {
    pendiente: "Tu pedido está siendo procesado",
    enviado: "Tu pedido está en camino",
    entregado: "Tu pedido ha sido entregado",
    cancelado: "Tu pedido fue cancelado",
  }

  return (
    <div className="ejercicio-card">
      <h3>Estado del Pedido</h3>
      <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        {iconos[estado]}
      </div>
      <p>
        <strong>
          {estado === "pendiente"
            ? mensajes.pendiente
            : estado === "enviado"
            ? mensajes.enviado
            : estado === "entregado"
            ? mensajes.entregado
            : mensajes.cancelado}
        </strong>
      </p>
      {estado === "enviado" && (
        <p style={{ color: "#666", fontSize: "0.9rem" }}>
          Tiempo estimado de entrega: 2-3 días hábiles
        </p>
      )}
    </div>
  )
}
