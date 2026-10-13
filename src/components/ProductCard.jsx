import { ProductJar } from './ProductJar'
import { WhatsAppButton } from './WhatsAppButton'
import { productOrderMessage } from '../utils/whatsapp'

export function ProductCard({ product }) {
  return (
    <article className={`product-card ${product.featured ? 'product-card--featured' : ''}`}>
      {product.featured && <span className="product-card__tag">Mais pedido</span>}
      <ProductJar size={product.id === 'pote-240' ? 'small' : 'large'} accent={product.accent} />
      <div className="product-card__content">
        <p className="eyebrow">Picles artesanal</p>
        <h3>Pote de {product.volume}</h3>
        <p>{product.description}</p>
        <strong className="product-card__price">R$ {product.price}</strong>
        <WhatsAppButton message={productOrderMessage(product)} variant="outline">Quero este pote</WhatsAppButton>
      </div>
    </article>
  )
}
