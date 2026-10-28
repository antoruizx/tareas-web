import Insignia from './Insignia'

// Muestra UNA tarea. Al hacer clic avisa al padre con onToggle(id).
function TareaItem({ tarea, onToggle }) {
  return (
    <li
      className={tarea.completada ? 'tarea tarea--completada' : 'tarea'}
      onClick={() => onToggle(tarea.id)}
    >
      <span className="tarea__titulo">{tarea.titulo}</span>
      <Insignia prioridad={tarea.prioridad} />
    </li>
  )
}

export default TareaItem
