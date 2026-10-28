function Presentacion() {
  const alumno = {
    nombre: "Nadia Antonella Ruiz",
    curso: "Programación IV",
    tecnologias: ["HTML", "CSS", "JavaScript", "React"]
  }

  return (
    <section>
      <h2>Presentación</h2>
      <p><strong>Nombre:</strong> {alumno.nombre}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Tecnologías:</strong></p>
      <ul>
        {alumno.tecnologias.map((tec) => (
          <li key={tec}>{tec}</li>
        ))}
      </ul>
    </section>
  )
}

export default Presentacion