import '../styles/Habilidades.css'

const skills = [
  { name: 'HTML5',       level: 90, tag: 'Estructuras semánticas' },
  { name: 'CSS3',        level: 85, tag: 'Diseño responsivo' },
  { name: 'JavaScript',  level: 70, tag: 'ES6+' },
  { name: 'React',       level: 55, tag: 'Componentes & Hooks' },
  { name: 'Diseño UI',   level: 80, tag: 'Figma / UX' },
]

export default function Habilidades() {
  return (
    <section className="habilidades" id="habilidades">
      <div className="habilidades-inner">
        <span className="section-tag">✦ Skills</span>
        <h2>Mis habilidades</h2>

        <div className="skills-list">
          {skills.map((s) => (
            <div className="skill-item" key={s.name}>
              <div className="skill-header">
                <span className="skill-name">{s.name}</span>
                <span className="skill-tag">{s.tag}</span>
                <span className="skill-pct">{s.level}%</span>
              </div>
              <div className="barra">
                <div
                  className="nivel"
                  style={{ '--target': `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}