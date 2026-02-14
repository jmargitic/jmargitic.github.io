import TeachingCard from '../components/TeachingCard'
import FadeIn from '../components/FadeIn'
import { courses, taPositions } from '../data/teaching'

export default function Teaching() {
  return (
    <main className="page-top">
      <div className="container">
        <FadeIn>
          <h2 className="page-title">Teaching</h2>
        </FadeIn>

        {taPositions.map((inst) => (
          <FadeIn key={inst.institution}>
            <div className="institution">
              <h3>{inst.institution}</h3>

              {inst.institution === 'Georgetown University' && (
                <div className="teaching-grid">
                  {courses.map((c) => (
                    <TeachingCard key={c.title} {...c} />
                  ))}
                </div>
              )}

              <div className="ta-section">
                {inst.groups.map((g) => (
                  <div className="ta-group" key={g.professor}>
                    <h4>{g.professor}</h4>
                    <ul>
                      {g.courses.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </main>
  )
}
