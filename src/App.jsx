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
    </div>
  )
}

export default App
