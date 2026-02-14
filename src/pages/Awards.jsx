import FadeIn from '../components/FadeIn'
import { awards, certifications } from '../data/awards'

export default function Awards() {
  return (
    <main className="page-top">
      <div className="container">
        <FadeIn>
          <h2 className="page-title">Awards &amp; Certifications</h2>
        </FadeIn>

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
