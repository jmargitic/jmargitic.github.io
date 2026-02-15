import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ResearchCard from '../components/ResearchCard'
import TeachingCard from '../components/TeachingCard'
import FadeIn from '../components/FadeIn'
import { publications } from '../data/research'
import { courses } from '../data/teaching'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Research Highlights */}
      <FadeIn>
        <section id="research">
          <div className="container">
            <div className="section-header">
              <h2><span className="section-prefix">01.</span> Research</h2>
              <Link to="/research">View all &rarr;</Link>
            </div>
            <div className="card-grid">
              {publications.map((p) => (
                <ResearchCard key={p.title} {...p} />
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Teaching Highlights */}
      <FadeIn>
        <section id="teaching">
          <div className="container">
            <div className="section-header">
              <h2><span className="section-prefix">02.</span> Teaching</h2>
              <Link to="/teaching">View all &rarr;</Link>
            </div>
            <div className="teaching-grid">
              {courses.map((c) => (
                <TeachingCard key={c.title} {...c} />
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Contact */}
      <FadeIn>
        <section id="contact">
          <div className="container">
            <div className="section-header">
              <h2><span className="section-prefix">03.</span> Contact</h2>
            </div>
            <div className="contact-bar">
              <a href="mailto:jfmargitic@gmail.com">
                <i className="fas fa-envelope" /> jfmargitic@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/juan-margitic/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in" /> LinkedIn
              </a>
              <a href="https://github.com/jmargitic" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" /> GitHub
              </a>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  )
}
