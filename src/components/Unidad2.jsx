import React from 'react';
import '../styles/unidad.css'; // Asegura la ruta correcta a tus estilos compartidos

export default function Unidad2() {
  const manejarNavegacion = (semana) => {
    console.log(`Navegando a la ${semana}`);
    // Aquí conectarás tu lógica de navegación SPA más adelante
  };

  return (
    <div className="unidad-container">
      <header>
        <div className="logo">
          Unidad 2 | <span>Semanas 6-10</span>
        </div>
        <nav>
          <button 
            onClick={() => manejarNavegacion('inicio')} 
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            Inicio
          </button>
        </nav>
      </header>

      <section className="proyectos">
        <h2>Semana 6 - 10</h2>

        <div className="cards">
          {/* Semana 6 */}
          <div className="card">
            <h3>Semana 6</h3>
            <p>Continuación de temas</p>
            <div className="go-btn" onClick={() => manejarNavegacion('semana 6')}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>

          {/* Semana 7 */}
          <div className="card">
            <h3>Semana 7</h3>
            <p>Práctica guiada</p>
            <div className="go-btn" onClick={() => manejarNavegacion('semana 7')}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>

          {/* Semana 8 */}
          <div className="card">
            <h3>Semana 8</h3>
            <p>Proyecto intermedio</p>
            <div className="go-btn" onClick={() => manejarNavegacion('semana 8')}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>

          {/* Semana 9 */}
          <div className="card">
            <h3>Semana 9</h3>
            <p>Desarrollo avanzado</p>
            <div className="go-btn" onClick={() => manejarNavegacion('semana 9')}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>

          {/* Semana 10 */}
          <div className="card">
            <h3>Semana 10</h3>
            <p>Evaluación unidad 2</p>
            <div className="go-btn" onClick={() => manejarNavegacion('semana 10')}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}