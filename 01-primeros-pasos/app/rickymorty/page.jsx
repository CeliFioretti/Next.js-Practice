import Link from "next/link";
import RickYMortyCard from "../../components/RickYMortyCard";
import '../../styles/estilos.css'

async function obtenerDataRYM(page = 1) {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = await res.json();
  return data;
}

async function RickAndMortyPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams?.page || 1);
  const data = await obtenerDataRYM(page);
  const personajes = data.results;

  return (
    <div>
      <div className="rym-container">
        {
          personajes.map(personaje => (
            <RickYMortyCard key={personaje.id} personaje={personaje} />
          ))
        }
      </div>
      <div className="pagination">
          {
            data.info.prev && (
              <Link href={`?page=${page - 1}`} className="button">Anterior</Link>
            )
          }
          <span>Página {page}</span>
          {
            data.info.next && (
              <Link href={`?page=${page + 1}`} className="button">Siguiente</Link>
            )
          }
      </div>
    </div>
  )
}

export default RickAndMortyPage