export default function Dashboard() {
  const usuario = { nombre: "María López", email: "maria@example.com", rol: "usuario" }

  const notificaciones = [
    { id: 1, mensaje: "Tu pedido ha sido confirmado", leida: false },
    { id: 2, mensaje: "Nueva promoción disponible", leida: false },
    { id: 3, mensaje: "Actualización de perfil completada", leida: true },
    { id: 4, mensaje: "Recordatorio: Tu suscripción vence pronto", leida: true },
  ]

  const actividadReciente = [
    { id: 1, accion: "Realizó una compra", fecha: "2024-06-04" },
    { id: 2, accion: "Actualizó su perfil", fecha: "2024-06-03" },
    { id: 3, accion: "Dejó una reseña", fecha: "2024-06-02" },
  ]

  const notificacionesNoLeidas = notificaciones.filter((n) => !n.leida)

  return (
    <>
      <div className="ejercicio-card">
        <h3>Dashboard de Usuario</h3>
      </div>

      <div className="ejercicio-card">
        <h4>Información del Usuario</h4>
        <p><strong>Nombre:</strong> {usuario.nombre}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Rol:</strong> {usuario.rol}</p>
      </div>

      <div className="ejercicio-card">
        <h4>
          Notificaciones ({notificacionesNoLeidas.length} no leídas)
        </h4>
        {notificaciones.length === 0 ? (
          <p style={{ color: "#999" }}>No tienes notificaciones pendientes</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {notificaciones.map((notificacion) => (
              <li
                key={notificacion.id}
                style={{
                  padding: "0.75rem",
                  borderBottom: "1px solid #eee",
                  fontWeight: notificacion.leida ? "normal" : "bold",
                  opacity: notificacion.leida ? 0.6 : 1,
                }}
              >
                {notificacion.mensaje}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="ejercicio-card">
        <h4>Actividad Reciente</h4>
        {actividadReciente.length === 0 ? (
          <p style={{ color: "#999" }}>No hay actividad reciente</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {actividadReciente.map((actividad) => (
              <li
                key={actividad.id}
                style={{
                  padding: "0.75rem",
                  borderBottom: "1px solid #eee",
                }}
              >
                <strong>{actividad.accion}</strong> - {actividad.fecha}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
