import React, { useState } from 'react';
import '../styles/unidad.css'; 
import DetalleSemana from './DetalleSemana'; // 👈 Importamos el contenedor dinámico que crearemos abajo

export default function Unidad1({ alVolver }) {
  // Estado local para saber qué semana está viendo el usuario actualmente
  const [semanaActiva, setSemanaActiva] = useState(null);

  // Array de datos con el contenido real de tus semanas (Añade o edita lo que quieras aquí)
  const semanasData = [
    { id: 1, titulo: "Semana 1", desc: "Introducción al curso", contenido: "Aquí va todo el material teórico, tareas, enlaces y PDFs de la introducción." },
    { id: 2, titulo: "Semana 2", desc: "Conceptos básicos", contenido: "Estructuras iniciales, sintaxis básica y los pilares del aprendizaje de esta unidad." },
    { id: 3, titulo: "Semana 3", desc: "Ejercicios prácticos", contenido: "Laboratorios completados, capturas de pantalla de código y retos superados." },
    { id: 4, titulo: "Semana 4", desc: "Desarrollo de práctica", contenido: "Proyecto integrador de mitad de unidad. Documentación y código fuente." },
    { id: 5, titulo: "Semana 5", desc: "Evaluación unidad 1", contenido: "Resultados finales del examen teórico-práctico y conclusiones de la Unidad 1." },
  ];

  // Si el usuario hace clic en una semana, renderizamos su vista detallada
  if (semanaActiva) {
    return (
      <DetalleSemana 
        semana={semanaActiva} 
        alCerrar={() => setSemanaActiva(null)} 
      />
    );
  }

  return (
    <div className="unidad-container">
      <header>
        <div className="logo">
          Unidad 1 | <span>Semanas 1-5</span>
        </div>
        <nav>
          {/* ✅ ARREGLADO: Ejecuta alVolver() para regresar a la página principal */}
          <button 
            onClick={alVolver} 
            className="back-home-btn"
          >
            Inicio
          </button>
        </nav>
      </header>

      <section className="proyectos">
        <h2>Semana 1 - 5</h2>

        <div className="cards">
          {semanasData.map((semana) => (
            <div className="card" key={semana.id}>
              <h3>{semana.titulo}</h3>
              <p>{semana.desc}</p>
              {/* Al hacer clic, guarda toda la información de esa semana en el estado */}
              <div className="go-btn" onClick={() => setSemanaActiva(semana)}>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}