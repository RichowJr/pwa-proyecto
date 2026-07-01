import { useState, useEffect } from 'react'

export default function useLocalStorage(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    if (typeof window === 'undefined') return valorInicial
    try {
      const item = window.localStorage.getItem(clave)
      if (item === null) return valorInicial
      return JSON.parse(item)
    } catch {
      return valorInicial
    }
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(clave, JSON.stringify(valor))
    } catch {
      // Manejar almacenamiento no disponible de forma silenciosa
    }
  }, [clave, valor])

  return [valor, setValor]
}
