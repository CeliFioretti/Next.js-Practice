import Link from 'next/link'

export default function ComputadorasLayout({ children }) {
    return (
        <>
            <nav>
                <h3>Navegación de Computadoras</h3>
                <ul>
                    <li><Link href="/categorias/computadoras/monitores/hd">Monitores HD</Link></li>
                    <li><Link href="/categorias/computadoras/monitores/led">Monitores LED</Link></li>
                </ul>
            </nav>
            {children}
        </>
    )
}