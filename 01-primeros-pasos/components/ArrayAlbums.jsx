function Albums({imagen}) {
    return (
        <>
            <div>
                <h3>{imagen.id}. {imagen.title}</h3>
                <img src="https://picsum.photos/100/100" alt="Imagen Album" />
            </div>
        </>
    )
}

export default Albums