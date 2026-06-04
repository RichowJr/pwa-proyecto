export default function Perfil() {
  const nombre = "Carlos García"
  const profesion = "Desarrollador Full Stack"
  const experiencia = 5
  const disponible = true

  return (
    <div className="ejercicio-card">
      <h3>{nombre}</h3>
      <p><strong>Profesión:</strong> {profesion}</p>
      <p>{experiencia} años de experiencia</p>
      <p className={disponible ? "disponible" : "no-disponible"}>
        {disponible ? "Disponible para contratar" : "No disponible"}
      </p>
    </div>
  )
}
