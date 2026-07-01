import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useNotas } from '../context/NotasContext'
import FormularioNota from '../components/FormularioNota'

const valoresIniciales = {
  titulo: '',
  contenido: '',
  categoria: '',
  fijada: false
}

export default function NuevaNota() {
  const { agregarNota } = useNotas()
  const navigate = useNavigate()

  const handleSave = (nota) => {
    agregarNota(nota)
    navigate('/notas')
  }

  return (
    <div className="page-card">
      <h2>Nueva nota</h2>
      <FormularioNota initialValues={valoresIniciales} onSave={handleSave} submitText="Guardar nota" onCancel={() => navigate('/notas')} />
    </div>
  )
}
