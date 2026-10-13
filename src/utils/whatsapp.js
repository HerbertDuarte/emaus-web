import { store } from '../config/store'

const baseUrl = 'https://wa.me/'

export function createWhatsAppLink(message) {
  const destination = store.whatsappNumber.replace(/\D/g, '')
  const query = new URLSearchParams({ text: message })

  return `${baseUrl}${destination}?${query.toString()}`
}

export function productOrderMessage(product) {
  return `Olá! Quero pedir o Picles Emaús no pote de ${product.volume} por R$ ${product.price}.`
}

export const generalOrderMessage = 'Olá! Gostaria de conhecer os produtos disponíveis do Picles Emaús.'
