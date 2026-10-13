export function ProductJar({ size = 'large', accent = 'green' }) {
  return (
    <div className={`jar jar--${size} jar--${accent}`} aria-hidden="true">
      <div className="jar__lid"><span /></div>
      <div className="jar__glass">
        <i className="jar__shine" />
        <div className="jar__pickles"><b /><b /><b /><b /><b /></div>
        <div className="jar__label"><small>PICLES</small><strong>EMAÚS</strong><span>artesanal</span></div>
      </div>
    </div>
  )
}
