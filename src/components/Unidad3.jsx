import React from 'react';
import '../styles/unidad.css'; // Asegura la ruta correcta a tus estilos compartidos

export default function Unidad3({ alVolver }) {
  const manejarNavegacion = (semana) => {
    console.log(`Navegando a la ${semana}`);
    // Aquí conectarás las vistas internas de tus semanas
  };

  return (
    <div className="unidad-container">
      <header>
        <div className="logo">
          Unidad 3 | <span>Semanas 11-16</span>
        </div>
        <nav>
          {/* Al hacer clic, ejecutamos la función para regresar al inicio del portafolio */}
          <button 
            onClick={alVolver} 
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '1rem' }}
          >
            Inicio
          </button>
        </nav>
      </header>

      <section className="proyectos">
        <h2>Semana 11 - 16</h2>

        <div className="cards">
          {/* Semana 11 */}
          <div className="card">
            <h3>Semana 11</h3>
            <p>Proyecto final inicio</p>
            <div className="go-btn" onClick={() => manejarNavegacion('semana 11')}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>

          {/* Semana 12 */}
          <div className="card">
            <h3>Semana 12</h3>
            <p>Desarrollo final</p>
            <div className="go-btn" onClick={() => manejarNavegacion('semana 12')}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>

          {/* Semana 13 */}
          <div className="card">
            <h3>Semana 13</h3>
            <p>Mejoras UI</p>
            <div className="go-btn" onClick={() => manejarNavegacion('semana 13')}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>

          {/* Semana 14 */}
          <div className="card">
            <h3>Semana 14</h3>
            <p>Optimización</p>
            <div className="go-btn" onClick={() => manejarNavegacion('semana 14')}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>

          {/* Semana 15 */}
          <div className="card">
            <h3>Semana 15</h3>
            <p>Revisión general</p>
            <div className="go-btn" onClick={() => manejarNavegacion('semana 15')}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>

          {/* Semana 16 */}
          <div className="card">
            <h3>Semana 16</h3>
            <p>Entrega final</p>
            <div className="go-btn" onClick={() => manejarNavegacion('semana 16')}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}