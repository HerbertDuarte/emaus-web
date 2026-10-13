import { createWhatsAppLink } from '../utils/whatsapp'

export function WhatsAppButton({ message, children, variant = 'primary', className = '', ...linkProps }) {
  return (
    <a
      className={`whatsapp-button whatsapp-button--${variant} ${className}`.trim()}
      href={createWhatsAppLink(message)}
      target="_blank"
      rel="noreferrer"
      {...linkProps}
    >
      <span className="whatsapp-button__icon" aria-hidden="true">⌕</span>
      {children}
    </a>
  )
}
