// Esta página por defecto en la carpeta app, se ejecuta cada vez que sucede un error 404 NotFound
// Basta con crear 1 archivo "not-found.jsx" en la carpeta app

import Link from 'next/link'

export default function NoEncontrado () {
    return (
        <>
        <h1>Error 404</h1>
        <p>Página no encontrada</p>
        <Link href="/">
            Regresar al inicio
        </Link>
        </>
    )
}