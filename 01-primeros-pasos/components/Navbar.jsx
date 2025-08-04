import Link from 'next/link'

export default function Navbar () {
    return (
        <nav>
          <h1>NAVEGACIÓN</h1>
          <ul>
            <li><Link href="/categorias/computadoras">Computadoras</Link></li>
            <li><Link href="/categorias/celulares">Celulares</Link></li>
            <li><Link href="/categorias/televisores">Televisores</Link></li>
            <li><Link href="/posts">Posts</Link></li>
          </ul>
        </nav>
    )
}