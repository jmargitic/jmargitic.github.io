export default function TeachingCard({ badge, title, term, institution, collab, evalLink }) {
  return (
    <div className="teaching-card">
      <span className="badge">{badge}</span>
      <h4>{title}</h4>
      <p className="term">{institution ? `${institution} \u00B7 ` : ''}{term}</p>
      {collab && <p className="collab">{collab}</p>}
      {evalLink && (
        <a href={evalLink} className="eval-link" target="_blank" rel="noopener noreferrer">
          Teaching Evaluations
        </a>
      )}
    </div>
  )
}
