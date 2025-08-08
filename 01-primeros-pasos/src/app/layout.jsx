// Por defecto, el archivo layout.jsx en cada carpeta dentro de 'app'
// actúa como una plantilla envolvente para las páginas de esa ruta.
// Se renderiza automáticamente alrededor de todos los componentes children,
// permitiendo incluir elementos persistentes como encabezados, navegación,
// estilos comunes o configuraciones específicas para esa sección.

import Navbar from '@/components/Navbar'

import "./globals.css"

// Importar fuentes
import { Roboto } from 'next/font/google'

// Para colocar la etiqueta meta en todas las páginas
// Se puede usar en todas las páginas para definir el titulo por ejemplo
export const metadata = {
  title : "ElectroTienda",
  description: "Esta es la página principal de ElectroTienda",
  keywords: ["tienda", "ecommerce", "electrónica"]
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: [ "italic","normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>

        {children}
      </body>
    </html>
  )
}
