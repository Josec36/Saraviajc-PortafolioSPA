import { useState } from 'react'
import '../styles/Navbar.css'

export default function Navbar({ tema, toggleTema }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="logo">Mi Portafolio | <span>JC</span></div>

      <nav className={`nav-links ${open ? 'active' : ''}`}>
        <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
        <a href="#sobre-mi" onClick={() => setOpen(false)}>Sobre mí</a>
        <a href="#habilidades" onClick={() => setOpen(false)}>Habilidades</a>
        <a href="#proyectos" onClick={() => setOpen(false)}>Proyectos</a>
        <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        
        {/* ☀️ / 🌙 BOTÓN MINIMALISTA DE TEMA ALTERNABLE */}
        <button 
          className="theme-toggle-btn" 
          onClick={() => {
            toggleTema();
            setOpen(false); // Cierra el menú en celulares al cambiar de tema
          }} 
          aria-label="Cambiar tema"
        >
          {tema === 'dark' ? (
            <i className="fas fa-sun" style={{ color: '#ffb703' }} /> /* Sol para el modo oscuro */
          ) : (
            <i className="fas fa-moon" style={{ color: '#50635d' }} /> /* Luna para el modo claro */
          )}
        </button>
      </nav>

      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menú">
        {open ? '✕' : '☰'}
      </button>
    </header>
  )
}