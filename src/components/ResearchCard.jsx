import { useState } from 'react'

function AuthorList({ authors }) {
  if (!authors) return null
  if (typeof authors === 'string') return <p className="research-card__authors">{authors}</p>
  return (
    <p className="research-card__authors">
      {authors.map((a, i) => (
        <span key={a.name}>
          {i > 0 && (i === authors.length - 1 ? ' & ' : ', ')}
          {a.url ? (
            <a href={a.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              {a.name}
            </a>
          ) : (
            a.name
          )}
        </span>
      ))}
    </p>
  )
}

export default function ResearchCard({ title, authors, journal, award, image, imageAlt, links, description, featuredIn }) {
  const [expanded, setExpanded] = useState(false)
  const isExpandable = description || image

  return (
    <div
      className={`research-card ${expanded ? 'research-card--expanded' : ''}`}
      onClick={() => isExpandable && setExpanded(!expanded)}
      style={{ cursor: isExpandable ? 'pointer' : 'default' }}
    >
      <div className="research-card__accent" />

      <div className="research-card__content">
        <div className="research-card__top">
          {image && (
            <div className="research-card__thumb">
              <img src={image} alt={imageAlt || title} />
            </div>
          )}
          <div className="research-card__info">
            <div className="research-card__title-row">
              <h3>{title}</h3>
              {isExpandable && (
                <span className="research-card__chevron">
                  <i className={`fas fa-chevron-${expanded ? 'up' : 'down'}`} />
                </span>
              )}
            </div>
            <AuthorList authors={authors} />
            {journal && <p className="research-card__journal">{journal}</p>}
            {award && (
              <div className="research-card__award">
                <i className="fas fa-award" /> {award}
              </div>
            )}
            {links && links.length > 0 && (
              <div className="research-card__links" onClick={(e) => e.stopPropagation()}>
                {links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label} <i className="fas fa-arrow-up-right-from-square" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {expanded && (
          <div className="research-card__details">
            {image && (
              <div className="research-card__detail-image">
                <img src={image} alt={imageAlt || title} />
              </div>
            )}
            {description && <p className="research-card__description">{description}</p>}
            {featuredIn && featuredIn.length > 0 && (
              <div className="research-card__featured" onClick={(e) => e.stopPropagation()}>
                <span className="research-card__featured-label">Featured in:</span>
                {featuredIn.map((f) => (
                  <a key={f.url} href={f.url} target="_blank" rel="noopener noreferrer">
                    {f.source}
                  </a>
                ))}
              </div>
            )}
            {links && links.length > 0 && (
              <div className="research-card__links research-card__links--detail" onClick={(e) => e.stopPropagation()}>
                {links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label} <i className="fas fa-arrow-up-right-from-square" />
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
