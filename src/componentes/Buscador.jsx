import { useState, useEffect } from 'react'
import './Buscador.css'

function Buscador({ busqueda }) {

  const handleBusq = () => {
    busqueda(casillerobusqueda.value)
  }

  return (
      <div className='buscador'>
       <p>Buscar:</p>
       <input type="search" onChange={handleBusq} name="casillerobusqueda" defaultValue="" id="casillerobusqueda"/>
      </div>
  );
}

export default Buscador