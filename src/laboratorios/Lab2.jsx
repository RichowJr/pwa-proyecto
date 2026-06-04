import Perfil from "../components/Perfil"
import Clima from "../components/Clima"
import EstadoPedido from "../components/EstadoPedido"
import MensajeBienvenida from "../components/MensajeBienvenida"
import ListaHabilidades from "../components/ListaHabilidades"
import ListaProductos from "../components/ListaProductos"
import ListaTareas from "../components/ListaTareas"
import Tarjeta from "../components/Tarjeta"
import Dashboard from "../components/Dashboard"

export default function Laboratorio2() {
  return (
    <div className="laboratorio">
      <h1>Laboratorio 2 - Expresiones, Condicionales y Listas</h1>

      <section>
        <h2>Ejercicio 1 - Expresiones Dinámicas</h2>
        <Perfil />
      </section>

      <section>
        <h2>Ejercicio 2 - Lógica Previa al Return</h2>
        <Clima />
      </section>

      <section>
        <h2>Ejercicio 3 - Operadores Ternarios</h2>
        <EstadoPedido />
      </section>

      <section>
        <h2>Ejercicio 4 - Early Return</h2>
        <MensajeBienvenida />
      </section>

      <section>
        <h2>Ejercicio 5 - Renderizado de Lista Simple</h2>
        <ListaHabilidades />
      </section>

      <section>
        <h2>Ejercicio 6 - Renderizado de Lista con Objetos</h2>
        <ListaProductos />
      </section>

      <section>
        <h2>Ejercicio 7 - Combinación de Filter y Map</h2>
        <ListaTareas />
      </section>

      <section>
        <h2>Ejercicio 8 - Componente Reutilizable</h2>
        <Tarjeta />
      </section>

      <section>
        <h2>Ejercicio 9 - Fragment y Múltiples Secciones</h2>
        <Dashboard />
      </section>
    </div>
  )
}

