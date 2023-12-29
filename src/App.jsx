import { useState, useEffect } from "react"
import Character from "./componentes/Character";
import Menu from "./componentes/Menu";
import Buscador from "./componentes/Buscador";



function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([])

  const initialUrl = 'https://apisimpsons.fly.dev/api/personajes?limit=10'

  function fetchCharacters(url) { 
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
      setCharacters(datos.docs);
      setInfo(datos);
    })
    .catch(error => console.log(error));
  }

  function fetchBuscar(url) {
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(datos => {
        setCharacters(datos.result);
      })
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  const next = ()=> {
    fetchCharacters(`${initialUrl}&page=${info.nextPage}`);
    console.log("next");
  };
  const prev = ()=> {
    fetchCharacters(`${initialUrl}&page=${info.prevPage}`);
    console.log("prev");
  };
  const busqueda = (busq) => {
    fetchBuscar("https://apisimpsons.fly.dev/api/personajes/find/" + busq);
  };
  
  return <>
  <Menu siguiente={next} previa={prev}/>
  <Buscador  info={info} busqueda={busqueda}/>

    <div className="card-padre">
          {characters.map((personaje, index) =>(
   <Character key={index} personaje={personaje} />
  ))}

  </div>
 
 
  </>
  }
export default App
