import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-text">
        <p className="hero-tag">✦ Desarrollador Web</p>
        <h1>
          Hola, soy <br />
          <span className="nombre typing">José</span>
        </h1>
        <p className="hero-desc">
          Estudiante apasionado por la tecnología y el desarrollo web.
          Me enfoco en crear soluciones modernas, limpias y eficientes.
        </p>

        <div className="social-icons">
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
        </div>

        <a href="/CV-Jose.pdf" download className="cv-btn">
          <i className="fas fa-download"></i> Descargar CV
        </a>
      </div>

      <div className="hero-img">
        <div className="img-ring" />
        <video autoPlay muted loop playsInline>
          <source src="/Video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}