import { useState, useEffect, useRef, useCallback } from 'react'

export default function useNotificacion(duracion = 3000) {
  const [notificacion, setNotificacion] = useState(null)
  const timeoutRef = useRef(null)

  const cerrar = useCallback(() => {
    setNotificacion(null)
  }, [])

  const mostrar = useCallback((mensaje, tipo = 'info') => {
    setNotificacion({ id: Date.now(), mensaje, tipo })
  }, [])

  useEffect(() => {
    if (!notificacion) return
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = window.setTimeout(() => {
      setNotificacion(null)
    }, duracion)

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [notificacion, duracion])

  return { notificacion, mostrar, cerrar }
}
