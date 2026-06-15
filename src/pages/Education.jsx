import { EDUCATION } from '../data/education'
import '../styles/education.css'

export default function Education() {
  return (
    <div className="education-container">
      <section id="education-hero">
        <div className="section-header">
          <h1>Education</h1>
          <p>Academic background and continuous learning in Computer Science and Engineering.</p>
        </div>
      </section>

      <section id="education-timeline">
        <div className="timeline">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="education-header">
                  <h3>{edu.degree}</h3>
                  <span className="year">{edu.year}</span>
                </div>
                <p className="field">
                  <strong>{edu.field}</strong>
                  {edu.specialization && ` · ${edu.specialization}`}
                </p>
                <p className="institution">
                  {edu.institution} · {edu.location}
                </p>
                {edu.gpa && <p className="gpa">GPA: {edu.gpa}</p>}
                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="highlights">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
