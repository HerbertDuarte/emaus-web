export function BrandMark({ inverse = false }) {
  return (
    <a className={`brand-mark ${inverse ? 'brand-mark--inverse' : ''}`} href="#inicio" aria-label="Picles Emaús — início">
      <img src="/images/logo-emaus.jpg" alt="Emaús" />
    </a>
  )
}
