import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useNotas } from '../context/NotasContext'
import FormularioNota from '../components/FormularioNota'

export default function EditarNota() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { notas, editarNota } = useNotas()
  const nota = notas.find((item) => item.id === id)

  if (!nota) {
    return (
      <div className="page-card">
        <h2>Nota no encontrada</h2>
        <p>No se encontró la nota que intentas editar.</p>
        <Link className="boton-accion boton-secundario" to="/notas">
          Volver a notas
        </Link>
      </div>
    )
  }

  const handleSave = (formData) => {
    editarNota(id, formData)
    navigate(`/notas/${id}`)
  }

  return (
    <div className="page-card">
      <h2>Editar nota</h2>
      <FormularioNota initialValues={nota} onSave={handleSave} submitText="Guardar cambios" onCancel={() => navigate(`/notas/${id}`)} />
    </div>
  )
}
