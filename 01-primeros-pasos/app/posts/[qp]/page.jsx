import Link from 'next/link'
import Posts from '../page'
import { Suspense } from 'react';

async function obtenerUnPost (id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data
}

async function PostPage({params}) {

    const datosPost = await obtenerUnPost(params.qp)

  return (
    <div>
      <h1>Post #{datosPost.id}</h1>

        <h2>{datosPost.title}</h2>
        <p>{datosPost.body}</p>
        <Link href="/posts">Volver</Link>
        <hr />

        <Suspense fallback={<div>
          Cargando Posts...
        </div>}>
            <Posts/>
        </Suspense>

    </div>
  )
}

export default PostPage