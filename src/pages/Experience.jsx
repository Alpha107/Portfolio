import { EXPERIENCE } from '../data/experience'
import '../styles/experience.css'

export default function Experience() {
  return (
    <div className="experience-container">
      <section id="experience-hero">
        <div className="section-header">
          <h1>Experience</h1>
          <p>Professional journey in AI, Machine Learning, and Robotics education & development.</p>
        </div>
      </section>

      <section id="experience-timeline">
        <div className="timeline">
          {EXPERIENCE.map((exp, idx) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="company">
                  <strong>{exp.company}</strong> · {exp.location}
                </p>
                <p className="description">{exp.description}</p>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="highlights">
                    {exp.highlights.map((highlight, idx) => (
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
