import { useState } from 'react'

export default function ResearchCard({ title, authors, journal, award, image, imageAlt, links, description }) {
  const [expanded, setExpanded] = useState(false)
  const isExpandable = description || image

  return (
    <div
      className={`research-card ${expanded ? 'research-card--expanded' : ''}`}
      onClick={() => isExpandable && setExpanded(!expanded)}
      style={{ cursor: isExpandable ? 'pointer' : 'default' }}
    >
      {/* Accent bar */}
      <div className="research-card__accent" />

      <div className="research-card__content">
        {/* Top row: thumbnail + info */}
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
            <p className="research-card__authors">{authors}</p>
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

        {/* Expanded detail */}
        {expanded && (
          <div className="research-card__details">
            {image && (
              <div className="research-card__detail-image">
                <img src={image} alt={imageAlt || title} />
              </div>
            )}
            {description && <p className="research-card__description">{description}</p>}
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
