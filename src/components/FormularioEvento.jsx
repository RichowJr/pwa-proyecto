import React, { useState, useEffect } from 'react'
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
      const hoy = new Date();
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

    // éxito
    setEventos((prev) => [...prev, { ...form, id: Date.now() }])
    setConfirmVisible(true)
    setForm(initialForm)

    setTimeout(() => setConfirmVisible(false), 4000)
  }

  return (
    <div>
      <h3>Registro de Evento</h3>
      {confirmVisible && (
        <Alerta tipo="exito" titulo="Evento registrado">
          <div>Evento "{eventos[eventos.length - 1]?.titulo}" registrado correctamente.</div>
        </Alerta>
      )}

      <form onSubmit={handleSubmit} style={{ maxWidth: 700 }}>
        <div style={{ marginBottom: 8 }}>
          <label>Título</label>
          <input name="titulo" value={form.titulo} onChange={handleChange} style={{ width: '100%', padding: 8 }} />
          {errores.titulo && <Alerta tipo="error" titulo="Error">{errores.titulo}</Alerta>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Fecha</label>
          <input type="date" name="fecha" value={form.fecha} onChange={handleChange} style={{ width: '100%', padding: 8 }} />
          {errores.fecha && <Alerta tipo="error" titulo="Error">{errores.fecha}</Alerta>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Categoría</label>
          <select name="categoria" value={form.categoria} onChange={handleChange} style={{ width: '100%', padding: 8 }}>
            <option value="">-- Selecciona --</option>
            <option value="conferencia">conferencia</option>
            <option value="taller">taller</option>
            <option value="seminario">seminario</option>
            <option value="otro">otro</option>
          </select>
          {errores.categoria && <Alerta tipo="error" titulo="Error">{errores.categoria}</Alerta>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Descripción</label>
          <textarea name="descripcion" value={form.descripcion} onChange={handleChange} style={{ width: '100%', padding: 8 }} />
          {errores.descripcion && <Alerta tipo="error" titulo="Error">{errores.descripcion}</Alerta>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            <input type="checkbox" name="esPublico" checked={form.esPublico} onChange={handleChange} /> Es público
          </label>
        </div>

        <div style={{ marginTop: 12 }}>
          <BotonAccion texto="Enviar" variante="primario" disabled={!puedeEnviar()} onClick={handleSubmit} />
        </div>
      </form>

      <hr style={{ margin: '16px 0' }} />

      <h4>Eventos registrados ({eventos.length})</h4>
      <ul>
        {eventos.map((ev) => (
          <li key={ev.id} style={{ marginBottom: 8 }}>
            <strong>{ev.titulo}</strong> — {ev.fecha} — {ev.categoria} — {ev.esPublico ? 'Público' : 'Privado'}
          </li>
        ))}
      </ul>
    </div>
  )
}
