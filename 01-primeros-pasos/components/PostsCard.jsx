"use client"
import Link from 'next/link'

// RCC - React Client Component
function PostsCard({ post }) {
    return (
            <div>
                <h3><Link href={`/posts/${post.id}`}>{post.id}. {post.title}</Link></h3>
                <p>{post.body}</p>
                <button onClick={() => {
                    alert('Se activo la alerta')
                }}>Click</button>  
                
                <hr />
            </div>
    )
}

export default PostsCard