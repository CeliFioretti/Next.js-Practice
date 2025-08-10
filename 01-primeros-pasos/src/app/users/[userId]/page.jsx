import React from 'react'

async function obtenerDatosUsuario(id) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    const data = await res.json();
    return data;
}

async function UserPersonalPage({params}) {
    const usuarioId = params.userId;
    const usuario = await obtenerDatosUsuario(usuarioId);
    return (
        <div>
            <div className='text-center'>
                <h1 className="text-5xl my-5 text-stone-500">Usuarios</h1>
                <hr />
            </div>
            <div>
                <div className='p-5 bg-stone-400 border-2'>
                    <h2 className='text-2xl font-black text-amber-800 hover:text-amber-600'>{usuario.id}: {usuario.name}</h2>
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
            </div>
        </div>
    )
}

export default UserPersonalPage