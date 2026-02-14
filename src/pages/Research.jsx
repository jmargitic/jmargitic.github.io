import ResearchCard from '../components/ResearchCard'
import FadeIn from '../components/FadeIn'
import { publications, workInProgress, idbPublications } from '../data/research'

export default function Research() {
  return (
    <main className="page-top">
      <div className="container">
        <FadeIn>
          <h2 className="page-title">Research</h2>
        </FadeIn>

        <FadeIn>
          <h3 className="subsection-title">Publications</h3>
          <div className="card-grid">
            {publications.map((p) => (
              <ResearchCard key={p.title} {...p} />
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h3 className="subsection-title">Work in Progress</h3>
          <div className="card-grid">
            {workInProgress.map((p) => (
              <ResearchCard key={p.title} {...p} />
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h3 className="subsection-title">IDB Technical Notes &amp; Policy Publications</h3>
          <div className="card-grid">
            {idbPublications.map((p) => (
              <ResearchCard key={p.title} {...p} />
            ))}
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
