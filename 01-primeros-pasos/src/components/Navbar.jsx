import Link from 'next/link'
import '@/app/estilos.css'

export default function Navbar() {
  return (
    <div className='navbar bg-zinc-900'>
      <Link href={'/'}><h1 className='nav-title hover:text-blue-600 text-blue-400'>Next.js</h1></Link>
      <ul className='nav-items text-lg text-stone-200'>
        <li className='hover:text-blue-600'><Link href="/">Home</Link></li>
        <li className='hover:text-blue-600'><Link href="/users">Users</Link></li>
        <li className='hover:text-blue-600'><Link href="/categorias/computadoras">Computadoras</Link></li>
        <li className='hover:text-blue-600'><Link href="/categorias/televisores">Televisores</Link></li>
        <li className='hover:text-blue-600'><Link href="/posts">Posts</Link></li>
        <li className='hover:text-blue-600'><Link href="/rickymorty">Rick y Morty</Link></li>
      </ul>
    </div>
  )
}