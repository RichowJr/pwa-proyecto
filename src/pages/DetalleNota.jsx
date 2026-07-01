import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useNotas } from '../context/NotasContext'

const formatearFecha = (fecha) => new Date(fecha).toLocaleDateString()

export default function DetalleNota() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { notas, eliminarNota } = useNotas()
  const nota = notas.find((item) => item.id === id)

  if (!nota) {
    return (
      <div className="page-card">
        <h2>Nota no encontrada</h2>
        <p>Lo sentimos, no se encontró la nota que estás intentando ver.</p>
        <Link className="boton-accion boton-secundario" to="/notas">
          Volver a notas
        </Link>
      </div>
    )
  }

  const handleEliminar = () => {
    if (window.confirm('¿Estás seguro de eliminar esta nota?')) {
      eliminarNota(id)
      navigate('/notas')
    }
  }

  return (
    <div className="page-card">
      <div className="detalle-header">
        <div>
          <h2>{nota.titulo}</h2>
          <div className={`badge ${'badge-' + nota.categoria}`}>{nota.categoria}</div>
        </div>
        <div className="detalle-meta">Creada el {formatearFecha(nota.fechaCreacion)}</div>
      </div>

      <div className="detalle-contenido">
        <p>{nota.contenido}</p>
      </div>

      <div className="detalle-acciones">
        <Link className="boton-accion boton-secundario" to="/notas">
          Volver a notas
        </Link>
        <Link className="boton-accion boton-primario" to={`/notas/${id}/editar`}>
          Editar
        </Link>
        <button className="boton-accion boton-peligro" onClick={handleEliminar}>
          Eliminar
        </button>
      </div>
    </div>
  )
}
