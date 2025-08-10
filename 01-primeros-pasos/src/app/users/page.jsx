import React from 'react'
import Link from 'next/link'

async function obtenerDatos() {
    const res = await fetch('http://localhost:3000/api/users')
    const usuarios = await res.json();
    return usuarios;
}

async function UsersPage() {
    const datos = await obtenerDatos();

    return (
        <div>
            <div className='text-center'>
                <h1 className="text-5xl my-5 text-stone-500">Usuarios</h1>
                <hr />
            </div>
            <div className='grid grid-cols-4 gap-4 p-5'>
                {datos.map(usuario => (
                    <div className='p-5 bg-stone-400 border-2' key={usuario.id}>
                        <Link href={`/users/${usuario.id}`}><h2 className='text-2xl font-black text-amber-800 hover:text-amber-600'>{usuario.id}: {usuario.name}</h2></Link>
                        <p><span className='font-bold'>Username </span>: {usuario.username}</p>
                        <p><span className='font-bold'>Email </span>: {usuario.email}</p>
                        <div className='mt-2'>
                            <p><span className='font-bold'>Adress </span></p>
                            <ul>
                                <li>{usuario.address.street}</li>
                                <li>{usuario.address.suite}</li>
                                <li>{usuario.address.city}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UsersPage