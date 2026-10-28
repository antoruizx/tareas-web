import Encabezado from './components/Encabezado'
import Presentacion from './components/Presentacion'
import Pie from './components/Pie'
import Tarjeta from './components/Tarjeta'
import ListaTareas from './components/ListaTareas'
import { tareasEjemplo } from './data/tareas'

// Orden de cada prioridad: cuanto más chico el número, más arriba va.
const ordenPrioridad = { alta: 1, media: 2, baja: 3 }

function App() {
  // Ejercicio 4: contar las completadas con filter
  const completadas = tareasEjemplo.filter((tarea) => tarea.completada).length
  const total = tareasEjemplo.length

  // Ejercicio 5 (extra): [...array] hace una COPIA, así sort no modifica el original
  const tareasOrdenadas = [...tareasEjemplo].sort(
    (a, b) => ordenPrioridad[a.prioridad] - ordenPrioridad[b.prioridad]
  )

  return (
    <>
      <Encabezado />
      <main>
        <Presentacion />

        {/* Ejercicios 1, 3 y 4 */}
        <Tarjeta titulo="Mis tareas">
          <p className="progreso">{completadas} de {total} completadas</p>
          <ListaTareas tareas={tareasEjemplo} />
        </Tarjeta>

        {/* Ejercicio 5 (extra) */}
        <Tarjeta titulo="Ordenadas por prioridad">
          <ListaTareas tareas={tareasOrdenadas} />
        </Tarjeta>

        {/* Ejercicio 2: prueba con un array vacío */}
        <Tarjeta titulo="Prueba: lista vacía">
          <ListaTareas tareas={[]} />
        </Tarjeta>
      </main>
      <Pie />
    </>
  )
}

export default App
