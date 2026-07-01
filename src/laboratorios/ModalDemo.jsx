import React, { useState, useEffect } from 'react'
import Modal from '../components/Modal'
import BotonAccion from '../components/BotonAccion'

export default function ModalDemo() {
  const [abierto, setAbierto] = useState(false)

  useEffect(() => {
    const handler = () => setAbierto(true)
    window.addEventListener('abrir-modal-demo', handler)
    return () => window.removeEventListener('abrir-modal-demo', handler)
  }, [])

  return (
    <Modal titulo="Demo de Modal" abierto={abierto}>
      <p>Este es un modal de demostración que se abre con el botón en la sección.</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <BotonAccion texto="Cerrar" variante="secundario" onClick={() => setAbierto(false)} />
      </div>
    </Modal>
  )
}
