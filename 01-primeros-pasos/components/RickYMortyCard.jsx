"use client"

import '../styles/estilos.css'
import Link from 'next/link'

function RickYMortyCard( {personaje} ) {
  return (
    <div className='text-center p-4 border border-stone-900 bg-stone-100 rounded'>
        <img className='mb-2' src={personaje.image} alt="Imagen de Personaje" />
        <Link href={`/rickymorty/${personaje.id}`}><h2 className='text-blue-500 font-bold text-lg hover:text-blue-900'>{personaje.name}</h2></Link>
        <p><span className="span-block">Estado:</span> {personaje.status}</p>
        <p><span className="span-block">Especie:</span> {personaje.species}</p>
        <p><span className="span-block">Género:</span> {personaje.gender}</p>
        
    </div>
  )
}

export default RickYMortyCard