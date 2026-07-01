import { createContext, useContext, useReducer, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useNotificacion from '../hooks/useNotificacion'

const NotasContext = createContext(null)

const initialState = {
  notas: [
    {
      id: Date.now().toString(),
      titulo: 'Compra semanal',
      contenido: 'Comprar leche, huevos, pan integral y vegetales frescos para la semana.',
      categoria: 'personal',
      fijada: true,
      fechaCreacion: new Date().toISOString()
    },
    {
      id: (Date.now() + 1).toString(),
      titulo: 'Proyecto React',
      contenido: 'Terminar la página de notas y asegurar que la navegación funcione correctamente.',
      categoria: 'trabajo',
      fijada: true,
      fechaCreacion: new Date().toISOString()
    },
    {
      id: (Date.now() + 2).toString(),
      titulo: 'Estudio de algoritmos',
      contenido: 'Repasar el tema de grafos y practicar con recorridos en profundidad y amplitud.',
      categoria: 'estudio',
      fijada: false,
      fechaCreacion: new Date().toISOString()
    },
    {
      id: (Date.now() + 3).toString(),
      titulo: 'Ideas de blog',
      contenido: 'Escribir sobre cómo usar React Context y hooks personalizados en proyectos reales.',
      categoria: 'ideas',
      fijada: false,
      fechaCreacion: new Date().toISOString()
    },
    {
      id: (Date.now() + 4).toString(),
      titulo: 'Llamada con el equipo',
      contenido: 'Coordinar la reunión de seguimiento del proyecto para el jueves por la mañana.',
      categoria: 'trabajo',
      fijada: false,
      fechaCreacion: new Date().toISOString()
    }
  ],
  filtroCategoria: 'todas',
  busqueda: ''
}

function notasReducer(state, action) {
  switch (action.type) {
    case 'AGREGAR_NOTA': {
      return {
        ...state,
        notas: [action.payload, ...state.notas]
      }
    }
    case 'ELIMINAR_NOTA': {
      return {
        ...state,
        notas: state.notas.filter((nota) => nota.id !== action.payload)
      }
    }
    case 'EDITAR_NOTA': {
      return {
        ...state,
        notas: state.notas.map((nota) =>
          nota.id === action.payload.id ? { ...nota, ...action.payload.datos } : nota
        )
      }
    }
    case 'TOGGLE_FIJADA': {
      return {
        ...state,
        notas: state.notas.map((nota) =>
          nota.id === action.payload ? { ...nota, fijada: !nota.fijada } : nota
        )
      }
    }
    case 'CAMBIAR_FILTRO': {
      return {
        ...state,
        filtroCategoria: action.payload
      }
    }
    case 'CAMBIAR_BUSQUEDA': {
      return {
        ...state,
        busqueda: action.payload
      }
    }
    default:
      return state
  }
}

export function NotasProvider({ children }) {
  const [localState, setLocalState] = useLocalStorage('mis-notas', initialState)
  const [state, dispatch] = useReducer(notasReducer, localState)
  const { notificacion, mostrar, cerrar } = useNotificacion(3000)

  useEffect(() => {
    setLocalState(state)
  }, [state, setLocalState])

  const agregarNota = ({ titulo, contenido, categoria, fijada }) => {
    const nota = {
      id: Date.now().toString(),
      titulo,
      contenido,
      categoria,
      fijada,
      fechaCreacion: new Date().toISOString()
    }
    dispatch({ type: 'AGREGAR_NOTA', payload: nota })
    mostrar('Nota agregada', 'exito')
  }

  const eliminarNota = (id) => {
    dispatch({ type: 'ELIMINAR_NOTA', payload: id })
    mostrar('Nota eliminada', 'peligro')
  }

  const editarNota = (id, datos) => {
    dispatch({ type: 'EDITAR_NOTA', payload: { id, datos } })
    mostrar('Nota actualizada', 'exito')
  }

  const toggleFijada = (id) => {
    dispatch({ type: 'TOGGLE_FIJADA', payload: id })
    mostrar('Estado de fijada actualizado', 'info')
  }

  const cambiarFiltro = (categoria) => {
    dispatch({ type: 'CAMBIAR_FILTRO', payload: categoria })
  }

  const cambiarBusqueda = (texto) => {
    dispatch({ type: 'CAMBIAR_BUSQUEDA', payload: texto })
  }

  return (
    <NotasContext.Provider
      value={{
        ...state,
        agregarNota,
        eliminarNota,
        editarNota,
        toggleFijada,
        cambiarFiltro,
        cambiarBusqueda,
        notificacion,
        cerrar
      }}
    >
      {children}
    </NotasContext.Provider>
  )
}

export function useNotas() {
  const context = useContext(NotasContext)
  if (!context) {
    throw new Error('useNotas debe usarse dentro de NotasProvider')
  }
  return context
}
