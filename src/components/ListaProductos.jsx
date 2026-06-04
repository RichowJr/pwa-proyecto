export default function ListaProductos() {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 999.99, disponible: true },
    { id: 2, nombre: "Mouse", precio: 25.50, disponible: true },
    { id: 3, nombre: "Teclado", precio: 79.99, disponible: false },
    { id: 4, nombre: "Monitor", precio: 299.99, disponible: true },
    { id: 5, nombre: "Webcam", precio: 49.99, disponible: false },
  ]

  return (
    <div className="ejercicio-card">
      <h3>Lista de Productos</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #ddd" }}>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Nombre</th>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Precio</th>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "0.5rem" }}>{producto.nombre}</td>
              <td style={{ padding: "0.5rem" }}>
                ${producto.precio.toFixed(2)}
              </td>
              <td
                style={{
                  padding: "0.5rem",
                  color: producto.disponible ? "#4caf50" : "#f44336",
                  fontWeight: "bold",
                }}
              >
                {producto.disponible ? "Disponible" : "Agotado"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
