import React, { useState } from 'react'
import BotonAccion from './BotonAccion'
import Alerta from './Alerta'

const initialForm = {
  titulo: '',
  fecha: '',
  categoria: '',
  descripcion: '',
  esPublico: false
}

export default function FormularioEvento() {
  const [form, setForm] = useState(initialForm)
  const [errores, setErrores] = useState({})
  const [confirmVisible, setConfirmVisible] = useState(false)
  const [eventos, setEventos] = useState([])

  function handleChange(e) {
    const { name, type, value, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const validar = () => {
    const err = {}
    if (!form.titulo || form.titulo.trim().length < 5) err.titulo = 'El título debe tener al menos 5 caracteres.'
    if (!form.fecha) err.fecha = 'La fecha es obligatoria.'
    else {
      const hoy = new Date()
      const f = new Date(form.fecha + 'T00:00:00')
      if (f < new Date(hoy.toDateString())) err.fecha = 'La fecha no puede ser pasada.'
    }
    if (!form.categoria) err.categoria = 'Selecciona una categoría.'
    if (!form.descripcion || form.descripcion.trim().length < 20) err.descripcion = 'La descripción debe tener al menos 20 caracteres.'
    return err
  }

  const puedeEnviar = () => {
    return form.titulo && form.fecha && form.categoria && form.descripcion
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validar()
    setErrores(err)
    if (Object.keys(err).length > 0) return

    setEventos((prev) => [...prev, { ...form, id: Date.now() }])
    setConfirmVisible(true)
    setForm(initialForm)

    setTimeout(() => setConfirmVisible(false), 4000)
  }

  return (
    <div className="component-card formulario-evento">
      <h3>Registro de evento</h3>

      {confirmVisible && (
        <Alerta tipo="exito" titulo="Evento registrado">
          <p>Evento "{eventos[eventos.length - 1]?.titulo}" registrado correctamente.</p>
        </Alerta>
      )}

      <form className="formulario-grid" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="titulo">Título</label>
          <input id="titulo" className="input-text" name="titulo" value={form.titulo} onChange={handleChange} />
          {errores.titulo && <Alerta tipo="error" titulo="Error">{errores.titulo}</Alerta>}
        </div>

        <div className="campo">
          <label htmlFor="fecha">Fecha</label>
          <input id="fecha" className="input-text" type="date" name="fecha" value={form.fecha} onChange={handleChange} />
          {errores.fecha && <Alerta tipo="error" titulo="Error">{errores.fecha}</Alerta>}
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select id="categoria" className="input-select" name="categoria" value={form.categoria} onChange={handleChange}>
            <option value="">-- Selecciona --</option>
            <option value="conferencia">conferencia</option>
            <option value="taller">taller</option>
            <option value="seminario">seminario</option>
            <option value="otro">otro</option>
          </select>
          {errores.categoria && <Alerta tipo="error" titulo="Error">{errores.categoria}</Alerta>}
        </div>

        <div className="campo">
          <label htmlFor="descripcion">Descripción</label>
          <textarea id="descripcion" className="input-textarea" name="descripcion" value={form.descripcion} onChange={handleChange} />
          {errores.descripcion && <Alerta tipo="error" titulo="Error">{errores.descripcion}</Alerta>}
        </div>

        <div className="campo checkbox-field">
          <input id="esPublico" type="checkbox" name="esPublico" checked={form.esPublico} onChange={handleChange} />
          <label htmlFor="esPublico">Es público</label>
        </div>

        <div className="component-actions">
          <BotonAccion texto="Enviar" variante="primario" disabled={!puedeEnviar()} onClick={handleSubmit} />
        </div>
      </form>

      <div className="eventos-registrados">
        <h4>Eventos registrados ({eventos.length})</h4>
        <ul className="lista-eventos">
          {eventos.map((ev) => (
            <li key={ev.id} className="evento-item">
              <strong>{ev.titulo}</strong> — {ev.fecha} — {ev.categoria} — {ev.esPublico ? 'Público' : 'Privado'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
