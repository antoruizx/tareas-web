import TareaItem from './TareaItem'

// Recibe un array de tareas y dibuja un TareaItem por cada una.
// Si el array está vacío, muestra un mensaje (renderizado condicional).
function ListaTareas({ tareas, onToggle }) {
  if (tareas.length === 0) {
    return <p className="vacio">No hay tareas todavía.</p>
  }

  return (
    <ul>
      {tareas.map((tarea) => (
        <TareaItem key={tarea.id} tarea={tarea} onToggle={onToggle} />
      ))}
    </ul>
  )
}

export default ListaTareas
