import React from 'react'
import { useNotas } from '../context/NotasContext'

const categoriaNombres = {
  personal: 'Personal',
  trabajo: 'Trabajo',
  estudio: 'Estudio',
  ideas: 'Ideas'
}

export default function Inicio() {
  const { notas } = useNotas()
  const totalNotas = notas.length
  const fijadas = notas.filter((nota) => nota.fijada).length

  const totalesPorCategoria = notas.reduce(
    (acc, nota) => {
      acc[nota.categoria] = (acc[nota.categoria] || 0) + 1
      return acc
    },
    {}
  )

  return (
    <div className="page-card">
      <h2>Bienvenido a MisNotas</h2>
      <p>Administra tus notas de manera rápida y organizada.</p>

      <div className="resumen-grid">
        <div className="resumen-card">
          <h3>Total de notas</h3>
          <p>{totalNotas}</p>
        </div>
        <div className="resumen-card">
          <h3>Notas fijadas</h3>
          <p>{fijadas}</p>
        </div>
      </div>

      <div className="resumen-categorias">
        <h3>Notas por categoría</h3>
        <ul>
          {Object.entries(categoriaNombres).map(([clave, nombre]) => (
            <li key={clave}>
              {nombre}: {totalesPorCategoria[clave] || 0}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
