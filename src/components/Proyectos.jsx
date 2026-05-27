import { useState } from 'react'
import '../styles/Proyectos.css'

const unidades = [
  {
    id: 'u1',
    titulo: 'Unidad 1',
    semanas: 'Semanas 1 – 5',
    desc: 'HTML5, HTTP/HTTPS y fundamentos de la web.',
    color: '#a8d5b5',
  },
  {
    id: 'u2',
    titulo: 'Unidad 2',
    semanas: 'Semanas 6 – 10',
    desc: 'CSS3, diseño web y estructura visual moderna.',
    color: '#b5cfa8',
  },
  {
    id: 'u3',
    titulo: 'Unidad 3',
    semanas: 'Semanas 11 – 16',
    desc: 'JavaScript y desarrollo web moderno.',
    color: '#c3d9a8',
  },
]

// 1. Recibimos "cambiarVista" como parámetro (prop)
export default function Proyectos({ cambiarVista }) {
  const [active, setActive] = useState(null)

  const modal = unidades.find((u) => u.id === active)

  return (
    <section className="proyectos" id="proyectos">
      <div className="proyectos-inner">
        <span className="section-tag">✦ Unidades</span>
        <h2>Mi recorrido</h2>

        <div className="cards">
          {unidades.map((u) => (
            <div
              className="card"
              key={u.id}
              onClick={() => setActive(u.id)}
              style={{ '--accent': u.color }}
            >
              <div className="card-dot" />
              <h3>{u.titulo}</h3>
              <p>{u.semanas}</p>
              <div className="go-btn">
                <i className="fas fa-eye" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {modal && (
        <div className="modal-overlay" onClick={() => setActive(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActive(null)}>✕</button>
            <div className="modal-dot" style={{ background: modal.color }} />
            <h2>{modal.titulo}</h2>
            <p>{modal.desc}</p>
            
            {/* 2. CAMBIO AQUÍ: Cambiamos <a> por <button> y disparamos la navegación SPA */}
            <button 
              className="modal-btn" 
              onClick={() => {
                setActive(null);        // Cierra el modal primero
                cambiarVista(modal.id); // Cambia la pantalla a 'u1', 'u2' o 'u3'
              }}
              style={{ border: 'none', cursor: 'pointer' }} // Para mantener tus estilos de CSS intactos
            >
              Continuar <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}