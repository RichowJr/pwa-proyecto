import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useNotificacion from '../hooks/useNotificacion'
import BotonAccion from './BotonAccion'
import Alerta from './Alerta'

const configInicial = {
  nombre: '',
  tema: 'claro',
  notificaciones: true
}

export default function ConfiguracionUsuario() {
  const [config, setConfig] = useLocalStorage('config-usuario', configInicial)
  const { notificacion, mostrar } = useNotificacion(3000)

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    setConfig((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleReset = () => {
    try {
      window.localStorage.removeItem('config-usuario')
    } catch {
      // ignore
    }
    setConfig(configInicial)
    mostrar('Configuración restablecida', 'info')
  }

  return (
    <div className="formulario-evento">
      <div className="formulario-grid">
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" className="input-text" name="nombre" value={config.nombre} onChange={handleChange} />
        </div>

        <div className="campo">
          <label htmlFor="tema">Tema</label>
          <select id="tema" className="input-select" name="tema" value={config.tema} onChange={handleChange}>
            <option value="claro">claro</option>
            <option value="oscuro">oscuro</option>
          </select>
        </div>

        <div className="campo checkbox-field">
          <input id="notificaciones" type="checkbox" name="notificaciones" checked={config.notificaciones} onChange={handleChange} />
          <label htmlFor="notificaciones">Notificaciones activas</label>
        </div>
      </div>

      <div className="component-actions margin-top">
        <BotonAccion texto="Restablecer valores" variante="peligro" onClick={handleReset} />
      </div>

      {notificacion && (
        <Alerta tipo={notificacion.tipo} titulo={notificacion.mensaje}>
          <p>El cambio se guardó en localStorage.</p>
        </Alerta>
      )}

      <div className="preview-box">
        <h4>Vista previa</h4>
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </div>
    </div>
  )
}
