import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Habilidades from './components/Habilidades'
import Proyectos from './components/Proyectos'
import './styles/global.css'

import Unidad1 from './components/Unidad1'
import Unidad2 from './components/Unidad2'
import Unidad3 from './components/Unidad3'

function App() {
  const [vistaActual, setVistaActual] = useState('inicio')
  const [tema, setTema] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema)
  }, [tema])

  const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'dark' ? 'light' : 'dark'))
  }

  if (vistaActual === 'inicio') {
    return (
      <>
        <Navbar tema={tema} toggleTema={toggleTema} />
        <main>
          <Hero />
          <Habilidades />
          <Proyectos cambiarVista={setVistaActual} />
        </main>
      </>
    )
  }

  return (
    <>
      {vistaActual === 'u1' && <Unidad1 alVolver={() => setVistaActual('inicio')} />}
      {vistaActual === 'u2' && <Unidad2 alVolver={() => setVistaActual('inicio')} />}
      {vistaActual === 'u3' && <Unidad3 alVolver={() => setVistaActual('inicio')} />}
    </>
  )
}

export default App