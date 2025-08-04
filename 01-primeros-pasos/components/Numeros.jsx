"use client"

import React, { useState } from 'react'

function Numeros() {

    const [ numero, setNumero ] = useState(0);

  return (
    <div>
        <h3>{numero}</h3>
        <button onClick={() => {
            setNumero(numero+1)
        }}>
            Aumentar número
        </button>
    </div>
  )
}

export default Numeros