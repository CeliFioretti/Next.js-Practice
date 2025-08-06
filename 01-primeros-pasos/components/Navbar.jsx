import Link from 'next/link'
import '../styles/estilos.css'

export default function Navbar () {
    return (
        <nav>
          <h1 className='nav-title'>Next.js</h1>
          <ul className='navbar'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/categorias/computadoras">Computadoras</Link></li>
            <li><Link href="/categorias/celulares">Celulares</Link></li>
            <li><Link href="/categorias/televisores">Televisores</Link></li>
            <li><Link href="/posts">Posts</Link></li>
            <li><Link href="/rickymorty">Rick y Morty</Link></li>
          </ul>
        </nav>
    )
}