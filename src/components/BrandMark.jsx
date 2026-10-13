export function BrandMark({ inverse = false }) {
  return (
    <a className={`brand-mark ${inverse ? 'brand-mark--inverse' : ''}`} href="#inicio" aria-label="Picles Emaús — início">
      <span className="brand-mark__symbol" aria-hidden="true">✦</span>
      <span>
        <strong>Picles</strong>
        <em>Emaús</em>
      </span>
    </a>
  )
}
