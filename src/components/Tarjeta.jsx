export default function Tarjeta() {
  const datos = {
    titulo: "React Avanzado",
    descripcion:
      "Aprende patrones avanzados de React, hooks personalizados y optimización de rendimiento.",
    etiquetas: ["React", "JavaScript", "Web Development"],
    destacado: true,
  }

  return (
    <div
      className="ejercicio-card"
      style={{
        border: datos.destacado ? "3px solid #667eea" : "1px solid #ddd",
        backgroundColor: datos.destacado ? "rgba(102, 126, 234, 0.05)" : "white",
        borderRadius: "12px",
        padding: "1.5rem",
        boxShadow: datos.destacado
          ? "0 4px 20px rgba(102, 126, 234, 0.15)"
          : "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ marginBottom: "0.5rem" }}>{datos.titulo}</h3>
      <p style={{ marginBottom: "1rem", color: "#666" }}>{datos.descripcion}</p>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {datos.etiquetas.map((etiqueta, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "#667eea",
              color: "white",
              padding: "0.35rem 0.75rem",
              borderRadius: "20px",
              fontSize: "0.85rem",
              fontWeight: "500",
            }}
          >
            {etiqueta}
          </span>
        ))}
      </div>
    </div>
  )
}
