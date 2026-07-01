import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Laboratorio2 from './laboratorios/Lab2'
import Laboratorio3 from './laboratorios/Lab3'
import Laboratorio4 from './laboratorios/Lab4'

function App() {
  return (
    <BrowserRouter>
            <div className="app">
              <header className="app-header">
                <div className="header-inner">
                  <div>
                    <h1 className="app-title">pwa-proyecto</h1>
                    <p className="app-subtitle">Ejercicios de React organizados por laboratorios</p>
                  </div>
                  <nav className="app-nav">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                      Inicio
                    </NavLink>
                    <NavLink to="/lab2" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                      Lab 2
                    </NavLink>
                    <NavLink to="/lab3" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                      Lab 3
                    </NavLink>
                    <NavLink to="/lab4" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                      Lab 4
                    </NavLink>
                  </nav>
                </div>
              </header>

              <main className="app-main">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/lab2" element={<Laboratorio2 />} />
                  <Route path="/lab3" element={<Laboratorio3 />} />
                  <Route path="/lab4" element={<Laboratorio4 />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </main>

              <footer className="app-footer">
                <p>Proyecto PWA - Laboratorios React</p>
              </footer>
            </div>
    </BrowserRouter>
  )
}

export default App
