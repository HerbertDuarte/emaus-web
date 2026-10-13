const messages = ['Artesanal', 'Natural', 'Com propósito', 'Feito com carinho']

export function BrandMarquee() {
  return (
    <div className="hero__marquee" aria-label="Características dos picles Emaús">
      <div className="hero__marquee-track" aria-hidden="true">
        {[0, 1].map((group) => (
          <div className="hero__marquee-group" key={group}>
            {messages.map((message) => (
              <span className="hero__marquee-message" key={message}>
                {message}
                <i />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
