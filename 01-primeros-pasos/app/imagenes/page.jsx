import Albums from '../../components/ArrayAlbums'

async function obtenerImagenes() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const imagenesJSON = await res.json();
    return imagenesJSON;
}

async function ImagenesPage() {
    const imagenes = await obtenerImagenes();

    return (
        <div>
            {
                imagenes.map(imagen => (
                    <Albums key={imagen.id} imagen={imagen}/>
                ))
            }
        </div>
    )
}

export default ImagenesPage