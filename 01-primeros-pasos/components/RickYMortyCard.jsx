import '../styles/estilos.css'

function RickYMortyCard( {personaje} ) {
  return (
    <div className='div-rym'>
        <img src={personaje.image} alt="Imagen de Personaje" />
        <h2>{personaje.name}</h2>
        <p><span className="span-block">Estado:</span> {personaje.status}</p>
        <p><span className="span-block">Especie:</span> {personaje.species}</p>
        <p><span className="span-block">Género:</span> {personaje.gender}</p>
    </div>
  )
}

export default RickYMortyCard