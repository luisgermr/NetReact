import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mt-5'>
      <h1 className='text-primary'>Hola, esto es un SPA usando React</h1>
      <p className='lead'>Esto es un proyecto usando Vite y Bootstrap</p>
      <button className='btn btn-success'>Boton de test</button>
    <hr></hr>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Vite</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p class="card-text">Vite is a blazing fast frontend build tool powering the next generation of web applications.</p>
          <a href="#" class="card-link">Pagina Oficial</a>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">React</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p class="card-text">React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes. Crea tus propios componentes de React como Thumbnail, LikeButton, y Video. Luego combínalos para formar pantallas, páginas y aplicaciones.</p>
          <a href="#" class="card-link">Pagina Oficial</a>
        </div>
      </div>

    </div>


  )
}

export default App
