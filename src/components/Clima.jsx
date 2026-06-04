export default function Clima() {
  const temperatura = 20

  let sensacion
  let recomendacion

  if (temperatura < 15) {
    sensacion = "frío"
    recomendacion = "Lleva abrigo"
  } else if (temperatura >= 15 && temperatura <= 25) {
    sensacion = "agradable"
    recomendacion = "Disfruta el día"
  } else {
    sensacion = "caluroso"
    recomendacion = "Mantente hidratado"
  }

  return (
    <div className="ejercicio-card">
      <h3>Clima</h3>
      <p><strong>Temperatura:</strong> {temperatura}°C</p>
      <p><strong>Sensación térmica:</strong> {sensacion}</p>
      <p><strong>Recomendación:</strong> {recomendacion}</p>
    </div>
  )
}
