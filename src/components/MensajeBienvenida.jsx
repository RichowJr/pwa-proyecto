export default function MensajeBienvenida() {
  const usuario = { nombre: "Juan", rol: "admin" }
  // Descomenta esta línea para probar con usuario = null
  // const usuario = null

  if (usuario === null) {
    return (
      <div className="ejercicio-card">
        <p style={{ color: "#d32f2f", fontWeight: "bold" }}>
          Por favor, inicia sesión para continuar
        </p>
      </div>
    )
  }

  return (
    <div className="ejercicio-card">
      <h3>Bienvenido, {usuario.nombre}</h3>
      <p><strong>Rol:</strong> {usuario.rol}</p>
      {usuario.rol === "admin" && (
        <p style={{ color: "#1976d2", fontWeight: "bold" }}>
          Tienes acceso completo al sistema
        </p>
      )}
    </div>
  )
}
