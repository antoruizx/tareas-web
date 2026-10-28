// Muestra la prioridad de una tarea como una "etiqueta" de color.
function Insignia({ prioridad }) {
  return <span className={`insignia insignia--${prioridad}`}>{prioridad}</span>
}

export default Insignia
