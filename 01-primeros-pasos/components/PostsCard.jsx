"use client"

// RCC - React Client Component
function PostsCard({post}) {
  return (
    <>
    <div>
        <h3>{post.id}. {post.title}</h3>
        <p>{post.body}</p>
    </div>
    <button onClick={() => {
        alert('Se activo la alerta')
    }}>Alerta</button>
    </>
  )
}

export default PostsCard