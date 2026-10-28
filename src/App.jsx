import { useState } from 'react'
import Encabezado from './components/Encabezado'
import Presentacion from './components/Presentacion'
import Pie from './components/Pie'
import Tarjeta from './components/Tarjeta'
import ListaTareas from './components/ListaTareas'
import { tareasEjemplo } from './data/tareas'

// Orden de cada prioridad: cuanto más chico el número, más arriba va.
const ordenPrioridad = { alta: 1, media: 2, baja: 3 }

function App() {
  // Estado: las tareas arrancan con el array de ejemplo y pueden cambiar
  const [tareas, setTareas] = useState(tareasEjemplo)

  // Cambia completada (true <-> false) de la tarea con ese id.
  // Con map creamos un array NUEVO (no se modifica el estado directamente).
  const alternarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    )
  }

  // Ejercicio 4: contar las completadas con filter
  const completadas = tareas.filter((tarea) => tarea.completada).length
  const total = tareas.length

  // Ejercicio 5 (extra): [...array] hace una COPIA, así sort no modifica el original
  const tareasOrdenadas = [...tareas].sort(
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
          <ListaTareas tareas={tareas} onToggle={alternarTarea} />
        </Tarjeta>

        {/* Ejercicio 5 (extra) */}
        <Tarjeta titulo="Ordenadas por prioridad">
          <ListaTareas tareas={tareasOrdenadas} onToggle={alternarTarea} />
        </Tarjeta>

        {/* Ejercicio 2: prueba con un array vacío */}
        <Tarjeta titulo="Prueba: lista vacía">
          <ListaTareas tareas={[]} onToggle={alternarTarea} />
        </Tarjeta>
      </main>
      <Pie />
    </>
  )
}

export default App
