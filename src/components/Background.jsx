export default function Background() {
  return (
    <div className="bg-layer">
      <div className="bg-grid" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />
      <div className="bg-orb bg-orb-4" />
      <div className="bg-orb bg-orb-5" />
      <div className="bg-svg-overlay">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          {/* Axis lines */}
          <line x1="80" y1="820" x2="80" y2="100" stroke="var(--svg-lines)" strokeWidth="1.5" />
          <line x1="80" y1="820" x2="1360" y2="820" stroke="var(--svg-lines)" strokeWidth="1.5" />

          {/* Time-series line */}
          <polyline
            fill="none"
            stroke="var(--svg-lines)"
            strokeWidth="2"
            points="80,700 200,680 320,650 440,620 560,580 680,560 800,520 920,490 1040,430 1160,400 1280,350 1360,320"
          />

          {/* Regression/trend dashed line */}
          <line
            x1="80" y1="720" x2="1360" y2="300"
            stroke="var(--svg-lines)"
            strokeWidth="1.5"
            strokeDasharray="12,8"
          />

          {/* Data scatter points */}
          <circle cx="200" cy="680" r="3" fill="var(--svg-lines)" />
          <circle cx="320" cy="650" r="3" fill="var(--svg-lines)" />
          <circle cx="440" cy="620" r="3" fill="var(--svg-lines)" />
          <circle cx="560" cy="580" r="3" fill="var(--svg-lines)" />
          <circle cx="680" cy="560" r="3" fill="var(--svg-lines)" />
          <circle cx="800" cy="520" r="3" fill="var(--svg-lines)" />
          <circle cx="920" cy="490" r="3" fill="var(--svg-lines)" />
          <circle cx="1040" cy="430" r="3" fill="var(--svg-lines)" />
          <circle cx="1160" cy="400" r="3" fill="var(--svg-lines)" />
          <circle cx="1280" cy="350" r="3" fill="var(--svg-lines)" />

          {/* Scatter noise points near the line */}
          <circle cx="250" cy="695" r="2" fill="var(--svg-lines)" />
          <circle cx="380" cy="630" r="2" fill="var(--svg-lines)" />
          <circle cx="510" cy="610" r="2" fill="var(--svg-lines)" />
          <circle cx="620" cy="550" r="2" fill="var(--svg-lines)" />
          <circle cx="740" cy="540" r="2" fill="var(--svg-lines)" />
          <circle cx="860" cy="500" r="2" fill="var(--svg-lines)" />
          <circle cx="980" cy="460" r="2" fill="var(--svg-lines)" />
          <circle cx="1100" cy="420" r="2" fill="var(--svg-lines)" />
          <circle cx="1220" cy="370" r="2" fill="var(--svg-lines)" />
          <circle cx="1320" cy="340" r="2" fill="var(--svg-lines)" />

          {/* Second decorative wave (upper area) */}
          <polyline
            fill="none"
            stroke="var(--svg-lines)"
            strokeWidth="1"
            opacity="0.5"
            points="80,300 200,290 320,310 440,280 560,260 680,270 800,240 920,220 1040,210 1160,190 1280,180 1360,160"
          />

          {/* Axis tick marks */}
          <line x1="200" y1="815" x2="200" y2="825" stroke="var(--svg-lines)" strokeWidth="1" />
          <line x1="440" y1="815" x2="440" y2="825" stroke="var(--svg-lines)" strokeWidth="1" />
          <line x1="680" y1="815" x2="680" y2="825" stroke="var(--svg-lines)" strokeWidth="1" />
          <line x1="920" y1="815" x2="920" y2="825" stroke="var(--svg-lines)" strokeWidth="1" />
          <line x1="1160" y1="815" x2="1160" y2="825" stroke="var(--svg-lines)" strokeWidth="1" />
        </svg>
      </div>
    </div>
  )
}
