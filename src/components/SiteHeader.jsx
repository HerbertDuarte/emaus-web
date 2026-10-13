import { BrandMark } from './BrandMark'
import { store } from '../config/store'

export function SiteHeader() {
  return (
    <header className="site-header">
      <BrandMark />
      <span className="location"><span aria-hidden="true">⌖</span>{store.city}</span>
    </header>
  )
}
