// Componente "contenedor": dibuja la caja con un título
// y adentro muestra lo que le pasemos entre las etiquetas (children).
function Tarjeta({ titulo, children }) {
  return (
    <section>
      <h2>{titulo}</h2>
      {children}
    </section>
  )
}

export default Tarjeta
