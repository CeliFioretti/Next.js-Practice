"use client"
import Link from 'next/link'

// RCC - React Client Component
function PostsCard({ post }) {
    return (
            <div className='bg-stone-950 p-7 text-center'>
                <a href={`/posts/${post.id}`}><h3 className='text-stone-200 mb-2 hover:text-blue-500 capitalize text-lg'>{post.id}. {post.title}</h3></a>
                <p className='text-stone-500 mb-5'>{post.body}</p>
                <button className='shadow-lg w-24 h-8 bg-gray-900 border rounded-md hover:bg-blue-950 text-stone-500' onClick={() => {
                    alert('Se activo la alerta')
                }}>Click</button>  
            </div>
    )
}

export default PostsCard