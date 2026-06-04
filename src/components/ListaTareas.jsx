export default function ListaTareas() {
  const tareas = [
    { id: 1, titulo: "Completar proyecto React", completada: false, prioridad: "alta" },
    { id: 2, titulo: "Revisar código", completada: false, prioridad: "media" },
    { id: 3, titulo: "Documentar API", completada: true, prioridad: "media" },
    { id: 4, titulo: "Implementar autenticación", completada: false, prioridad: "alta" },
    { id: 5, titulo: "Desplegar a producción", completada: true, prioridad: "alta" },
    { id: 6, titulo: "Hacer pruebas unitarias", completada: false, prioridad: "baja" },
    { id: 7, titulo: "Actualizar dependencias", completada: true, prioridad: "baja" },
  ]

  const tareasPendientes = tareas.filter((tarea) => !tarea.completada)
  const tareasCompletadas = tareas.filter((tarea) => tarea.completada)

  const obtenerEstiloPrioridad = (prioridad) => {
    if (prioridad === "alta") {
      return { color: "#d32f2f", fontWeight: "bold" }
    }
    return {}
  }

  return (
    <div className="ejercicio-card">
      <h3>Gestor de Tareas</h3>

      <div style={{ marginBottom: "2rem" }}>
        <h4>
          Tareas pendientes ({tareasPendientes.length})
        </h4>
        {tareasPendientes.length === 0 ? (
          <p style={{ color: "#999" }}>No hay tareas pendientes</p>
        ) : (
          <ul>
            {tareasPendientes.map((tarea) => (
              <li key={tarea.id}>
                <span style={obtenerEstiloPrioridad(tarea.prioridad)}>
                  {tarea.titulo}
                </span>
                <span
                  style={{
                    marginLeft: "0.5rem",
                    padding: "0.25rem 0.5rem",
                    backgroundColor:
                      tarea.prioridad === "alta" ? "#ffebee" : "#f5f5f5",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                  }}
                >
                  {tarea.prioridad}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h4>
          Tareas completadas ({tareasCompletadas.length})
        </h4>
        {tareasCompletadas.length === 0 ? (
          <p style={{ color: "#999" }}>No hay tareas completadas</p>
        ) : (
          <ul>
            {tareasCompletadas.map((tarea) => (
              <li
                key={tarea.id}
                style={{ textDecoration: "line-through", color: "#999" }}
              >
                {tarea.titulo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
