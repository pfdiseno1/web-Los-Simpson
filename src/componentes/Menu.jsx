import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import Buscador from './Buscador'

function Menu({siguiente, previa}) {

    const handleNext = () => {
        siguiente()
      }

      const handlePrev = () => {
        previa()
      }


    return (
        
        <div className='menu'>

            
            
<Link to={"/"}><button type="submit">Volver al menu inicio!</button></Link>
            

                <button type="submit" onClick={handlePrev}>Anterior</button>

     
                <button type="submit" onClick={handleNext}>Siguiente</button>
    
         
            
         </div>
    )
}

export default Menu