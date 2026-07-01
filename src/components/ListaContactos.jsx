import React, { useState } from 'react'
import Alerta from './Alerta'
import Modal from './Modal'
import BotonAccion from './BotonAccion'

const initialContacts = [
  { id: 1, nombre: 'Ana Ruiz', telefono: '555-1234', favorito: true },
  { id: 2, nombre: 'Carlos Pérez', telefono: '555-2345', favorito: false },
  { id: 3, nombre: 'Lucía Gómez', telefono: '555-3456', favorito: true },
  { id: 4, nombre: 'Miguel Torres', telefono: '555-4567', favorito: false },
  { id: 5, nombre: 'Sofía Morales', telefono: '555-5678', favorito: false }
]

export default function ListaContactos() {
  const [contactos, setContactos] = useState(initialContacts)
  const [nuevoBusqueda, setNuevoBusqueda] = useState('')
  const [soloFavoritos, setSoloFavoritos] = useState(false)
  const [modalEliminar, setModalEliminar] = useState({ abierto: false, contacto: null })

  const toggleFavorito = (id) => {
    setContactos((prev) => prev.map((c) => (c.id === id ? { ...c, favorito: !c.favorito } : c)))
  }

  const pedirEliminar = (contacto) => setModalEliminar({ abierto: true, contacto })
  const cancelarEliminar = () => setModalEliminar({ abierto: false, contacto: null })
  const confirmarEliminar = () => {
    setContactos((prev) => prev.filter((c) => c.id !== modalEliminar.contacto.id))
    setModalEliminar({ abierto: false, contacto: null })
  }

  const filtrados = contactos.filter((c) => {
    if (soloFavoritos && !c.favorito) return false
    const q = nuevoBusqueda.trim().toLowerCase()
    if (!q) return true
    return c.nombre.toLowerCase().includes(q) || c.telefono.toLowerCase().includes(q)
  })

  const favoritosCount = contactos.filter((c) => c.favorito).length

  return (
    <div className="component-card">
      <h3>Contactos</h3>

      <div className="buscador-grupo">
        <input
          className="buscador-input"
          placeholder="Buscar por nombre o teléfono"
          value={nuevoBusqueda}
          onChange={(e) => setNuevoBusqueda(e.target.value)}
        />
        <BotonAccion
          texto={soloFavoritos ? 'Mostrar todos' : 'Mostrar solo favoritos'}
          variante="secundario"
          onClick={() => setSoloFavoritos((v) => !v)}
        />
      </div>

      <div className="contactos-meta">
        Favoritos: {favoritosCount} / Total: {contactos.length} — Resultados: {filtrados.length}
      </div>

      {filtrados.length === 0 && <Alerta tipo="info" titulo="No se encontraron contactos">No se encontraron contactos</Alerta>}

      <ul className="contacto-lista">
        {filtrados.map((c) => (
          <li key={c.id} className="contacto-item">
            <div className="contacto-info">
              <div className="contacto-nombre">{c.nombre}</div>
              <div className="contacto-telefono">{c.telefono}</div>
            </div>
            <div className="contacto-acciones">
              <button className="contacto-favorito" onClick={() => toggleFavorito(c.id)}>
                {c.favorito ? '★' : '☆'}
              </button>
              <BotonAccion texto="Eliminar" variante="peligro" onClick={() => pedirEliminar(c)} />
            </div>
          </li>
        ))}
      </ul>

      <Modal
        titulo={`¿Estás seguro de eliminar a ${modalEliminar.contacto ? modalEliminar.contacto.nombre : ''}?`}
        abierto={modalEliminar.abierto}
      >
        <div className="component-actions">
          <BotonAccion texto="Cancelar" variante="secundario" onClick={cancelarEliminar} />
          <BotonAccion texto="Eliminar" variante="peligro" onClick={confirmarEliminar} />
        </div>
      </Modal>
    </div>
  )
}
