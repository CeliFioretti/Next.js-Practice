import PostCard from '../../components/PostsCard'


async function obtenerPosts () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    await new Promise((resolve) => setTimeout(resolve, 5000));

    return data;
}

// RSC - React Server Component
async function PostsPage() {
    const posts = await obtenerPosts();

  return (
    <div>
        <h1>Posts</h1>
        {
            posts.map(post => (
                <PostCard key={post.id} post={post}/>
            ))
        }
        
    </div>
  )
}

export default PostsPage