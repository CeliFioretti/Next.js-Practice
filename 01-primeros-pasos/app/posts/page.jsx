import PostCard from '@/components/PostsCard'


async function obtenerPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    // Simulando Delay para cargar los Posts
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    return data;
}

// RSC - React Server Component
async function PostsPage() {
    const posts = await obtenerPosts();

    return (
        <div className='bg-gray-900'>
            <div>
                <h1 className='py-5 text-3xl uppercase font-bold text-center'>Publicaciones</h1>
            </div>
            <div className=' grid grid-cols-3 gap-5 px-15 pb-15'>
                {
                    posts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))
                }
            </div>
        </div>

    )
}

export default PostsPage