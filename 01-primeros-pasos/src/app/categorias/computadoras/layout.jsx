import Link from 'next/link'

export default function ComputadorasLayout({ children }) {
    return (
        <>
            <nav>
                <h3 className='text-center m-2 text-stone-100 text-3xl'>Navegación de Computadoras</h3>
                <ul className='text-center '>
                    <li><Link className='text-amber-50 hover:text-blue-600' href="/categorias/computadoras/monitores/hd">Monitores HD</Link></li>
                    <li><Link className='text-amber-50 hover:text-blue-600' href="/categorias/computadoras/monitores/led">Monitores LED</Link></li>
                </ul>
            </nav>
            {children}
        </>
    )
}