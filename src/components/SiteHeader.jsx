import { BrandMark } from './BrandMark'
import { store } from '../config/store'
import { MapPin } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="site-header">
      <BrandMark />
      <span className="location"><MapPin aria-hidden="true" />{store.city}</span>
    </header>
  )
}
