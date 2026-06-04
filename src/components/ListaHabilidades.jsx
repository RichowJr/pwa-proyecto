export default function ListaHabilidades() {
  const habilidades = ["React", "JavaScript", "CSS", "Node.js", "Git", "TypeScript"]

  return (
    <div className="ejercicio-card">
      <h3>Habilidades técnicas</h3>
      <p>Total de habilidades: {habilidades.length}</p>
      <ul>
        {habilidades.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      </ul>
    </div>
  )
}
