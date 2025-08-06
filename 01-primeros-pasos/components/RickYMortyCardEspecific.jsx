"use client"

import '../styles/estilos.css'

function RickYMortyCard( {personaje} ) {
  return (
    <div className='text-center p-4 border border-stone-900 bg-stone-100 rounded'>
        <img className='mx-auto mb-2' src={personaje.image} alt="Imagen de Personaje" />
        <h2 className='text-blue-500 font-bold text-lg'>{personaje.name}</h2>
       <div className='py-2'>
         <p><span className="span-block">Estado:</span> {personaje.status}</p>
        <p><span className="span-block">Especie:</span> {personaje.species}</p>
        <p><span className="span-block">Género:</span> {personaje.gender}</p>
        <p><span className="span-block">Origen:</span> {personaje.origin.name}</p>
        <p><span className="span-block">Lugar actual:</span> {personaje.location.name}</p>
       </div>
    </div>
  )
}

export default RickYMortyCard