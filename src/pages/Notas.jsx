import React from 'react'
import { Link } from 'react-router-dom'
import { useNotas } from '../context/NotasContext'

const categorias = [
  { value: 'todas', label: 'Todas' },
  { value: 'personal', label: 'Personal' },
  { value: 'trabajo', label: 'Trabajo' },
  { value: 'estudio', label: 'Estudio' },
  { value: 'ideas', label: 'Ideas' }
]

const categoriaClases = {
  personal: 'badge-personal',
  trabajo: 'badge-trabajo',
  estudio: 'badge-estudio',
  ideas: 'badge-ideas'
}

const formatearFecha = (fecha) => new Date(fecha).toLocaleDateString()

export default function Notas() {
  const { notas, busqueda, filtroCategoria, cambiarBusqueda, cambiarFiltro, toggleFijada } = useNotas()

  const textoBusqueda = busqueda.trim().toLowerCase()
  const notasFiltradas = notas.filter((nota) => {
    const coincideBusqueda = [nota.titulo, nota.contenido]
      .join(' ')
      .toLowerCase()
      .includes(textoBusqueda)

    const coincideCategoria = filtroCategoria === 'todas' || nota.categoria === filtroCategoria

    return coincideBusqueda && coincideCategoria
  })

  const notasFijadas = notasFiltradas.filter((nota) => nota.fijada)
  const notasNormales = notasFiltradas.filter((nota) => !nota.fijada)

  return (
    <div className="page-card">
      <div className="notas-header">
        <h2>Notas</h2>
        <div className="notas-filtros">
          <input
            className="input-text"
            placeholder="Buscar notas..."
            value={busqueda}
            onChange={(e) => cambiarBusqueda(e.target.value)}
          />
          <select className="input-select" value={filtroCategoria} onChange={(e) => cambiarFiltro(e.target.value)}>
            {categorias.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="resultados-texto">
        {notasFiltradas.length} de {notas.length} notas encontradas
      </div>

      {notasFiltradas.length === 0 ? (
        <div className="mensaje-vacio">No se encontraron notas que coincidan con los filtros.</div>
      ) : (
        <div className="notas-lista">
          {notasFijadas.length > 0 && (
            <section className="notas-seccion">
              <h3>Fijadas</h3>
              <div className="notas-grid">
                {notasFijadas.map((nota) => (
                  <Link key={nota.id} to={`/notas/${nota.id}`} className="nota-tarjeta nota-fijada">
                    <div className="nota-como-link">
                      <div className="nota-titulo">
                        {nota.titulo}
                        <span className="nota-pin">📌</span>
                      </div>
                      <p>{nota.contenido.length > 100 ? `${nota.contenido.slice(0, 100)}...` : nota.contenido}</p>
                      <div className="nota-meta">
                        <span className={`badge ${categoriaClases[nota.categoria]}`}>{nota.categoria}</span>
                        <span>{formatearFecha(nota.fechaCreacion)}</span>
                      </div>
                    </div>
                    <button
                      className="boton-accion boton-secundario nota-fijar-btn"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        toggleFijada(nota.id)
                      }}
                    >
                      {nota.fijada ? 'Desfijar' : 'Fijar'}
                    </button>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="notas-seccion">
            {notasNormales.length > 0 && <h3>Otras notas</h3>}
            <div className="notas-grid">
              {notasNormales.map((nota) => (
                <Link key={nota.id} to={`/notas/${nota.id}`} className="nota-tarjeta">
                  <div className="nota-como-link">
                    <div className="nota-titulo">
                      {nota.titulo}
                      {nota.fijada && <span className="nota-pin">📌</span>}
                    </div>
                    <p>{nota.contenido.length > 100 ? `${nota.contenido.slice(0, 100)}...` : nota.contenido}</p>
                    <div className="nota-meta">
                      <span className={`badge ${categoriaClases[nota.categoria]}`}>{nota.categoria}</span>
                      <span>{formatearFecha(nota.fechaCreacion)}</span>
                    </div>
                  </div>
                  <button
                    className="boton-accion boton-secundario nota-fijar-btn"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleFijada(nota.id)
                    }}
                  >
                    {nota.fijada ? 'Desfijar' : 'Fijar'}
                  </button>
                </Link>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
