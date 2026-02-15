export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="terminal-line">~/portfolio<span className="blink">_</span></p>
          <h1>Juan F. Margitic</h1>
          <p className="subtitle">&gt; Data Scientist &amp; Economist</p>
          <p className="bio">
            As a Data Scientist and Ph.D. Economist at the World Bank Group, I use technology to
            solve development challenges. I build end-to-end AI applications using Python and
            Databricks, leveraging Generative AI to turn raw data into strategic insights for
            leadership. I also act as a technical advisor, helping international agencies adopt AI
            to improve their own operations. My goal is to bridge the gap between economics and
            modern tech, ensuring that every tool we build drives real-world impact.
          </p>
          <div className="hero-actions">
            <a href="https://www.linkedin.com/in/juan-margitic/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" /> LinkedIn
            </a>
            <a href="https://github.com/jmargitic" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" /> GitHub
            </a>
            <a href="/files/CV_Margitic.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-arrow-down" /> CV
            </a>
          </div>
          <div className="hero-email">
            <a href="mailto:jfmargitic@gmail.com">
              <i className="fas fa-envelope" /> jfmargitic@gmail.com
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <img src="/images/IMG_2010.png" alt="Juan F. Margitic" />
        </div>
      </div>
    </section>
  )
}
