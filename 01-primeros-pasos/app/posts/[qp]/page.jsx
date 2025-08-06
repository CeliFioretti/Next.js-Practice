import Link from 'next/link'
import Posts from '../page'
import { Suspense } from 'react';

async function obtenerUnPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data
}

async function PostPage({ params }) {
  const { qp } = await params;
  const datosPost = await obtenerUnPost(qp)

  return (
    <div className='text-center'>

      <div className='p-7'>
        <h1 className='uppercase text-stone-200 mb-0.5'>Post #{datosPost.id}</h1>
        <Suspense fallback={<div>Cargando Imagen...</div>}>
          <img className='mx-auto my-5' src="https://picsum.photos/700/300" alt="Imagen aleatorio de fondo" />
        </Suspense>
        <h2 className='capitalize text-stone-200 mb-2 text-4xl'>{datosPost.title}</h2>
        <p className='text-stone-500 mb-5 capitalize'>{datosPost.body}</p>
        <Link className='text-stone-200 mb-2 hover:text-blue-500 capitalize' href="/posts">Volver</Link>
      </div>

      <div>
        <Suspense fallback={<div>
          Cargando Posts...
        </div>}>
          <Posts />
        </Suspense>
      </div>

    </div>
  )
}

export default PostPage