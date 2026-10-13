import { BrandMark } from './components/BrandMark'
import { ProductCard } from './components/ProductCard'
import { SectionTitle } from './components/SectionTitle'
import { SiteHeader } from './components/SiteHeader'
import { WhatsAppButton } from './components/WhatsAppButton'
import { products } from './data/products'
import { store, whatsappSetupNeeded } from './config/store'
import { generalOrderMessage } from './utils/whatsapp'
import { ArrowDown, HandHeart, HeartHandshake, Leaf } from 'lucide-react'

const values = [
  { icon: HandHeart, title: 'Feito à mão', description: 'Cuidado em cada etapa, do preparo ao pote.' },
  { icon: Leaf, title: 'Ingredientes naturais', description: 'Sabor de verdade, para acompanhar os seus melhores momentos.' },
  { icon: HeartHandshake, title: 'Produção com propósito', description: 'Uma marca guiada por amor, qualidade e princípios cristãos.' },
]

const steps = [
  ['01', 'Escolha seu pote', 'Encontre o tamanho ideal para você.'],
  ['02', 'Fale conosco', 'Clique e envie seu pedido pelo WhatsApp.'],
  ['03', 'Combine a entrega', 'Alinhamos pagamento, entrega ou retirada em Vitória da Conquista.'],
]

export default function App() {
  return (
    <>
      <main>
        <section className="hero" id="inicio">
          <SiteHeader />
          <div className="hero__content container">
            <div className="hero__copy">
              <p className="eyebrow eyebrow--light">Picles artesanais em Vitória da Conquista</p>
              <h1>Sabor que reúne <em>bons momentos.</em></h1>
              <p className="hero__description">Picles artesanais e naturais, feitos com carinho e propósito para deixar sua mesa ainda mais especial.</p>
              <div className="hero__actions">
                <WhatsAppButton message={generalOrderMessage}>Pedir pelo WhatsApp</WhatsAppButton>
              </div>
            </div>
            <div className="hero__product" aria-label="Pote de picles Emaús de 800 ml">
              <div className="hero__product-note">
                <span>O clássico da casa</span>
                <strong>Pepino em conserva</strong>
                <small>800 ml para compartilhar</small>
              </div>
              <img src="/images/picles-emaus-800ml-cutout.png" alt="Pote original de picles de pepino Emaús, 800 ml" />
            </div>
          </div>
          <div className="hero__marquee" aria-hidden="true">
            <div className="hero__marquee-track">
              {[0, 1].map((copy) => (
                <div className="hero__marquee-group" key={copy}>
                  <span>ARTESANAL</span><i /><span>NATURAL</span><i /><span>COM PROPÓSITO</span><i /><span>FEITO COM CARINHO</span><i />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="products section container" id="produtos">
          <SectionTitle eyebrow="Nosso picles" title="Escolha o seu tamanho." text="Do pote para experimentar ao tamanho certo para compartilhar, temos picles para o seu momento." centered />
          <div className="products__grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        </section>

        <section className="story section">
          <div className="container story__grid">
            <div>
              <SectionTitle eyebrow="De coração para a sua mesa" title="Mais que um acompanhamento." centered />
              <p className="story__text">O Picles Emaús nasce da vontade de criar alimentos especiais: com sabor, simplicidade e atenção aos detalhes. Cada pote é preparado artesanalmente, para transformar refeições comuns em momentos compartilhados.</p>
              <a className="text-link text-link--dark" href="#como-pedir">Como pedir <ArrowDown aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="values section container">
          <SectionTitle eyebrow="Nossa essência" title="O que vai em cada pote." centered />
          <div className="values__grid">{values.map(({ icon: Icon, title, description }) => <article key={title} className="value"><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </section>

        <section className="ordering section" id="como-pedir">
          <div className="container">
            <SectionTitle eyebrow="Simples assim" title="Seu pedido começa numa conversa." text="Tudo é combinado diretamente pelo WhatsApp, de forma prática e pessoal." centered />
            <ol className="steps">{steps.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
            <div className="ordering__cta"><WhatsAppButton message={generalOrderMessage}>Fazer meu pedido</WhatsAppButton></div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <BrandMark inverse />
          <p>Feito artesanalmente em {store.city}.</p>
        </div>
      </footer>

      {whatsappSetupNeeded && <div className="setup-notice">Configure o número do WhatsApp em <code>src/config/store.js</code> antes de publicar.</div>}
    </>
  )
}
