import React from 'react';
import '../styles/unidad.css';

export default function DetalleSemana({ semana, alCerrar }) {
  return (
    <div className="unidad-container">
      <header>
        <div className="logo">
          {semana.titulo} | <span>Contenido</span>
        </div>
        <nav>
          <button onClick={alCerrar}>
            Volver a la Unidad
          </button>
        </nav>
      </header>

      <main className="proyectos" style={{ marginTop: '20px' }}>
        <h2 style={{ fontFamily: 'DM Serif Display', fontSize: '32px' }}>{semana.titulo}</h2>
        <p style={{ fontSize: '18px', color: 'var(--texto-suave)', marginBottom: '30px' }}>{semana.desc}</p>
        
        <div className="card" style={{ padding: '40px', minHeight: '200px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.8' }}>{semana.contenido}</p>
        </div>
      </main>
    </div>
  );
}