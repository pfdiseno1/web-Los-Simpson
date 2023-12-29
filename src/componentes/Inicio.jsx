import React from 'react'
import { Link } from 'react-router-dom'
import  './inicio.css'

function Inicio() {
  return (
    <div className='acceso'>DIRECTO A LA 

<Link to={"/app"}> <button type="submit">APP</button></Link>
    </div>
  )
}

export default Inicio