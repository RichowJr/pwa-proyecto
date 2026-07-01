import React, { useState, useEffect } from 'react'
import BotonAccion from './BotonAccion'
import Alerta from './Alerta'

const categorias = [
  { value: 'personal', label: 'Personal' },
  { value: 'trabajo', label: 'Trabajo' },
  { value: 'estudio', label: 'Estudio' },
  { value: 'ideas', label: 'Ideas' }
]

export default function FormularioNota({ initialValues, onSave, submitText, onCancel }) {
  const [form, setForm] = useState(initialValues)
  const [errores, setErrores] = useState({})

  useEffect(() => {
    setForm(initialValues)
  }, [initialValues])

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const validar = () => {
    const err = {}
    if (!form.titulo || form.titulo.trim().length < 3) err.titulo = 'El título debe tener al menos 3 caracteres.'
    if (!form.contenido || form.contenido.trim().length < 10) err.contenido = 'El contenido debe tener al menos 10 caracteres.'
    if (!form.categoria) err.categoria = 'Selecciona una categoría.'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validar()
    setErrores(err)
    if (Object.keys(err).length > 0) return
    onSave(form)
  }

  const camposValidos = Object.keys(validar()).length === 0

  return (
    <form className="page-card formulario-evento" onSubmit={handleSubmit}>
      <div className="campo">
        <label htmlFor="titulo">Título</label>
        <input id="titulo" className="input-text" name="titulo" value={form.titulo} onChange={handleChange} />
        {errores.titulo && <Alerta tipo="error" titulo="Error">{errores.titulo}</Alerta>}
      </div>

      <div className="campo">
        <label htmlFor="contenido">Contenido</label>
        <textarea id="contenido" className="input-textarea" name="contenido" value={form.contenido} onChange={handleChange} />
        {errores.contenido && <Alerta tipo="error" titulo="Error">{errores.contenido}</Alerta>}
      </div>

      <div className="campo">
        <label htmlFor="categoria">Categoría</label>
        <select id="categoria" className="input-select" name="categoria" value={form.categoria} onChange={handleChange}>
          <option value="">-- Selecciona --</option>
          {categorias.map((categoria) => (
            <option key={categoria.value} value={categoria.value}>
              {categoria.label}
            </option>
          ))}
        </select>
        {errores.categoria && <Alerta tipo="error" titulo="Error">{errores.categoria}</Alerta>}
      </div>

      <div className="campo checkbox-field">
        <input id="fijada" type="checkbox" name="fijada" checked={form.fijada} onChange={handleChange} />
        <label htmlFor="fijada">Fijada</label>
      </div>

      <div className="component-actions margin-top">
        <BotonAccion texto={submitText} variante="primario" disabled={!camposValidos} type="submit" />
        <BotonAccion texto="Cancelar" variante="secundario" onClick={onCancel} type="button" />
      </div>
    </form>
  )
}
