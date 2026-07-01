import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotasProvider } from './context/NotasContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Notas from './pages/Notas'
import NuevaNota from './pages/NuevaNota'
import DetalleNota from './pages/DetalleNota'
import EditarNota from './pages/EditarNota'
import Laboratorio2 from './laboratorios/Lab2'
import Laboratorio3 from './laboratorios/Lab3'
import Laboratorio4 from './laboratorios/Lab4'
import NoEncontrada from './pages/NoEncontrada'

function App() {
  return (
    <NotasProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="notas" element={<Notas />} />
            <Route path="notas/nueva" element={<NuevaNota />} />
            <Route path="notas/:id" element={<DetalleNota />} />
            <Route path="notas/:id/editar" element={<EditarNota />} />
            <Route path="lab2" element={<Laboratorio2 />} />
            <Route path="lab3" element={<Laboratorio3 />} />
            <Route path="lab4" element={<Laboratorio4 />} />
            <Route path="*" element={<NoEncontrada />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NotasProvider>
  )
}

export default App
