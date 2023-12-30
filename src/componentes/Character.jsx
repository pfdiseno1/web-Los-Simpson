import React from 'react'
import  './character.css'

export default function Character(personaje) {
  return (
 
<div className="card">
    <div className='presentacion'>
      <h2>{personaje.personaje.Nombre}</h2>      
      <img src={personaje.personaje.Imagen}></img>
      </div>
      <div className='datos'>
      <p>{personaje.personaje.Genero}</p>
      <p>{personaje.personaje.Ocupacion}</p>
      </div>
      
  </div>
    )
}