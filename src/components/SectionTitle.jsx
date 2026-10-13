export function SectionTitle({ eyebrow, title, text, centered = false }) {
  return (
    <header className={`section-title ${centered ? 'section-title--centered' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  )
}
