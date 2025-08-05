"use client"
import Link from 'next/link'

// RCC - React Client Component
function PostsCard({ post }) {
    return (
            <div>
                <h3>{post.id}. {post.title}</h3>
                <p>{post.body}</p>
                <Link href={`/posts/${post.id}`}>Ver detalles de Post</Link> <br /> <br />
                <button onClick={() => {
                    alert('Se activo la alerta')
                }}>Click</button>  
                
                <hr />
            </div>
    )
}

export default PostsCard