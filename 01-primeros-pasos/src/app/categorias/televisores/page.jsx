"use client"

import { useRouter } from "next/navigation"

export default function televisores () {
    const router = useRouter();

    return (
        <div className="text-center">
            <h1 className="text-5xl my-5 text-stone-500">Televisores</h1>

            <button onClick={() => {
                alert('Se presionó el botón')
                router.push('/')
            }} className="bg-stone-600 rounded-2xl p-3 hover:bg-stone-500 text-stone-50">
                Ir al Inicio
            </button>
        </div>
    )
}