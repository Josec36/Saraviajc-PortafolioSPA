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
  
  // Estado para el modo oscuro o claro (inicia en oscuro por defecto como te gusta)
  const [tema, setTema] = useState('dark')

  // Efecto para inyectar el atributo data-theme en el HTML cada vez que cambie el tema
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema)
  }, [tema])

  // Función para alternar entre claro y oscuro
  const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'dark' ? 'light' : 'dark'))
  }

  if (vistaActual === 'inicio') {
    return (
      <>
        {/* Le pasamos el tema actual y la función para cambiarlo al Navbar */}
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