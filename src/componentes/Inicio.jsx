import React from 'react'
import { Link } from 'react-router-dom'
import  './inicio.css'

function Inicio() {
  return (
    <div className='acceso'>DIRECTO A LA 

<div className='boton'>
<Link to={"/app"}> <button type="submit">LOS SIMPSONS</button></Link>
</div>
    </div>
  )
}

export default Inicio