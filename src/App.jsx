import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imagenEstudiante from './assets/imagenEstudiante.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.utd.edu.mx" target="_blank">
          <img src={imagenEstudiante} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>DIEGO MARTINEZ RAMIREZ - EXAMEN PARCIAL 2</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          universidad tecnologica de durango - click en la imagen para visitar el sitio
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
