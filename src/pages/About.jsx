import FadeIn from '../components/FadeIn'
import { experience, education, skills } from '../data/experience'
import { awards, certifications } from '../data/awards'

export default function About() {
  return (
    <main className="page-top">
      <div className="container">
        <FadeIn>
          <h2 className="page-title">About Me</h2>
        </FadeIn>

        {/* Experience */}
        <FadeIn>
          <h3 className="subsection-title">Experience</h3>
          <div className="timeline">
            {experience.map((e) => (
              <div className="timeline-item" key={`${e.org}-${e.role}`}>
                <div className="timeline-header">
                  <div>
                    <h3>{e.role}</h3>
                    {e.subtitle && <span className="timeline-subtitle">{e.subtitle}</span>}
                    <p className="org">{e.org}{e.type ? ` \u00B7 ${e.type}` : ''}</p>
                  </div>
                  <span className="timeline-period">{e.period}</span>
                </div>
                <ul className="timeline-highlights">
                  {e.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn>
          <h3 className="subsection-title">Education</h3>
          <div className="experience-summary">
            {education.map((ed) => (
              <div className="experience-item" key={ed.school}>
                <h3>{ed.degree}</h3>
                <p className="org">{ed.school}</p>
                <p className="org">{ed.period}</p>
                {ed.note && <p className="org" style={{ marginTop: 4, fontStyle: 'italic' }}>{ed.note}</p>}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Skills */}
        <FadeIn>
          <h3 className="subsection-title">Skills</h3>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-group" key={category}>
                <h4 className="skill-category">{category}</h4>
                <div className="skill-tags">
                  {items.map((s) => (
                    <span className="skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Awards */}
        <FadeIn>
          <h3 className="subsection-title">Awards</h3>
          <ul className="awards-list">
            {awards.map((a) => (
              <li key={a.name}>
                <span className="award-name">{a.name}</span>
                <span className="award-year">{a.year}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Certifications */}
        <FadeIn>
          <h3 className="subsection-title">Certifications</h3>
          <ul className="cert-list">
            {certifications.map((c) => (
              <li key={c.name}>
                <span className="cert-name">{c.name}</span>
                <br />
                <span className="cert-org">{c.org}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </main>
  )
}
