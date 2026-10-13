import { FaWhatsapp } from 'react-icons/fa'
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
      <FaWhatsapp className="whatsapp-button__icon" aria-hidden="true" />
      {children}
    </a>
  )
}
