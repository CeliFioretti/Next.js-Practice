import Link from 'next/link'

export default function Navbar () {
    return (
        <nav>
          <h2>Navegación</h2>
          <ul>
            <li><Link href="/categorias/computadoras">Computadoras</Link></li>
            <li><Link href="/categorias/celulares">Celulares</Link></li>
            <li><Link href="/categorias/televisores">Televisores</Link></li>
          </ul>
        </nav>
    )
}