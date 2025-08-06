import '../../../styles/estilos.css'
import RickYMortyCardEspecific from '../../../components/RickYMortyCardEspecific';

async function ObtenerDataRYM(id) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = res.json();
    return data;
}

async function RickYMortyCardPage({ params }) {
    const { card } = await params;
    const personaje = await ObtenerDataRYM(card);

    return (
        <div className='rym-container'>
            <RickYMortyCardEspecific personaje={personaje}/>
        </div>
    )
}

export default RickYMortyCardPage