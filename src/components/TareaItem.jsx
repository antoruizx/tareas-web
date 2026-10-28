import Insignia from './Insignia'

// Muestra UNA tarea: el título y su insignia de prioridad.
function TareaItem({ tarea }) {
  return (
    <li className={tarea.completada ? 'tarea tarea--completada' : 'tarea'}>
      <span className="tarea__titulo">{tarea.titulo}</span>
      <Insignia prioridad={tarea.prioridad} />
    </li>
  )
}

export default TareaItem
