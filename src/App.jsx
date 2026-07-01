import './App.css'
import { useState, Suspense } from 'react'
import Home from './pages/Home'
import Laboratorio2 from './laboratorios/Lab2'
import Laboratorio3 from './laboratorios/Lab3'

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="app" style={{ padding: 20 }}>
      {!selected && <Home onSelect={setSelected} />}

      {selected === 'lab2' && (
        <div>
          <button onClick={() => setSelected(null)} style={{ marginBottom: 12 }}>
            ← Volver
          </button>
          <Laboratorio2 />
        </div>
      )}

      {selected === 'lab3' && (
        <div>
          <button onClick={() => setSelected(null)} style={{ marginBottom: 12 }}>
            ← Volver
          </button>
                <Laboratorio3 />
              </div>
            )}

            {selected && selected !== 'lab2' && selected !== 'lab3' && (
              <div>
                <button onClick={() => setSelected(null)} style={{ marginBottom: 12 }}>
                  ← Volver
                </button>
                <h2>{selected.toUpperCase()} - Página aún no implementada</h2>
                <p>Este laboratorio todavía no está disponible en la interfaz. Puedes implementarlo y volver a intentarlo.</p>
              </div>
            )}
    </div>
  )
}

export default App
