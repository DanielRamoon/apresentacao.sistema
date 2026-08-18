import logo from './assets/logo.new.png'
import logoFooter from './assets/logo.newb.png'
import logoCta from './assets/logo.nweb.png'
import painel from './assets/painel.png'
import './App.css'

const SITE_URL = 'https://www.showingressos.com.br'
const EMAIL = 'contato@showingressos.com.br'

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function IconTerminal() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="6" width="32" height="36" rx="4" fill="#f0e6ff" stroke="#c4a8e8" strokeWidth="1.5" />
      <rect x="12" y="10" width="24" height="14" rx="2" fill="#5c2d91" />
      <rect x="14" y="28" width="8" height="6" rx="1" fill="#7b3fae" />
      <rect x="24" y="28" width="8" height="6" rx="1" fill="#7b3fae" />
      <rect x="14" y="36" width="20" height="4" rx="2" fill="#3d1566" />
    </svg>
  )
}

function IconValidation() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="12" y="4" width="24" height="40" rx="4" fill="#f0e6ff" stroke="#c4a8e8" strokeWidth="1.5" />
      <rect x="16" y="10" width="16" height="16" rx="2" fill="#fff" stroke="#5c2d91" strokeWidth="1" />
      <rect x="18" y="12" width="4" height="4" fill="#5c2d91" />
      <rect x="26" y="12" width="4" height="4" fill="#5c2d91" />
      <rect x="18" y="20" width="4" height="4" fill="#5c2d91" />
      <rect x="26" y="20" width="4" height="4" fill="#5c2d91" />
      <rect x="18" y="30" width="12" height="3" rx="1.5" fill="#7b3fae" />
      <rect x="18" y="35" width="8" height="3" rx="1.5" fill="#c4a8e8" />
    </svg>
  )
}

function IconSupport() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 28v-6a16 16 0 0 1 32 0v6" stroke="#c4a8e8" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="4" y="26" width="8" height="14" rx="4" fill="#f0e6ff" stroke="#c4a8e8" strokeWidth="1.5" />
      <rect x="36" y="26" width="8" height="14" rx="4" fill="#f0e6ff" stroke="#c4a8e8" strokeWidth="1.5" />
      <path d="M20 38h8" stroke="#7b3fae" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function TicketQrCode() {
  return (
    <svg viewBox="0 0 100 100" className="ticket__qr-svg" aria-hidden="true">
      <rect width="100" height="100" fill="#fff" />
      <rect x="8" y="8" width="28" height="28" fill="#111" />
      <rect x="12" y="12" width="20" height="20" fill="#fff" />
      <rect x="16" y="16" width="12" height="12" fill="#111" />
      <rect x="64" y="8" width="28" height="28" fill="#111" />
      <rect x="68" y="12" width="20" height="20" fill="#fff" />
      <rect x="72" y="16" width="12" height="12" fill="#111" />
      <rect x="8" y="64" width="28" height="28" fill="#111" />
      <rect x="12" y="68" width="20" height="20" fill="#fff" />
      <rect x="16" y="72" width="12" height="12" fill="#111" />
      {[
        [44, 8], [52, 8], [44, 16], [60, 16], [44, 24], [52, 32],
        [8, 44], [16, 52], [24, 44], [32, 52], [40, 44], [48, 52],
        [56, 44], [64, 44], [72, 52], [80, 44], [88, 52],
        [44, 60], [52, 68], [60, 60], [68, 68], [76, 60], [84, 68],
        [44, 76], [52, 84], [60, 76], [68, 84], [76, 76], [84, 84], [92, 76],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="6" height="6" fill="#111" />
      ))}
    </svg>
  )
}

function PhoneTicket() {
  return (
    <div className="phone">
      <div className="phone__frame">
        <div className="phone__speaker" aria-hidden="true" />
        <div className="phone__screen">
          <div className="ticket">
            <div className="ticket__header">SEU INGRESSO</div>
            <div className="ticket__body">
              <TicketQrCode />
              <span className="ticket__badge">VÁLIDO</span>
              <p className="ticket__type">PISTA PREMIUM</p>
              <p className="ticket__price">R$ 60,00</p>
              <p className="ticket__code">#1234567890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactPills({ variant = 'light' }) {
  return (
    <div className={`contact-pills contact-pills--${variant}`}>
      <a href={SITE_URL} target="_blank" rel="noreferrer" className="contact-pill">
        <IconGlobe />
        <span>www.showingressos.com.br</span>
      </a>
      <a href={`mailto:${EMAIL}`} className="contact-pill">
        <IconMail />
        <span>{EMAIL}</span>
      </a>
    </div>
  )
}

function App() {
  return (
    <div className="landing">
      <header className="hero">
        <div className="hero__overlay" />
        <div className="container hero__inner">
          <div className="hero__grid">
            <div className="hero__content">
              <img src={logo} alt="Show Ingressos" className="hero__logo" />
              <h1>A plataforma completa para o sucesso do seu evento</h1>
              <p>
                Soluções em vendas, check-in, bilheteria e acompanhamento de receitas para que
                você foque no que realmente importa: o seu evento!
              </p>
              <ContactPills variant="hero" />
            </div>
            <div className="hero__visual">
              <div className="hero__devices">
                <div className="laptop">
                  <div className="laptop__screen">
                    <span className="laptop__camera" aria-hidden="true" />
                    <div className="laptop__display">
                      <img src={painel} alt="Painel do produtor Show Ingressos" className="laptop__painel" />
                    </div>
                  </div>
                  <div className="laptop__base">
                    <div className="laptop__trackpad" aria-hidden="true" />
                  </div>
                </div>
                <PhoneTicket />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section servicos">
        <div className="container">
          <h2 className="section-title">SERVIÇOS</h2>
          <div className="servicos__grid">
            {[
              {
                icon: '🛒',
                title: 'Vendas online',
                desc: 'Venda ingressos virtuais com link personalizado e acompanhamento em tempo real.',
              },
              {
                icon: '🎟️',
                title: 'Bilheteria no local',
                desc: 'Venda presencial com maquininhas e controle total das entradas.',
              },
              {
                icon: '📱',
                title: 'Check-in e validação',
                desc: 'Validação de QR Code em tempo real, sem filas e com segurança.',
              },
              {
                icon: '📊',
                title: 'Painel do produtor',
                desc: 'Dashboard completo com vendas, receita e check-ins por evento.',
              },
              {
                icon: '🎧',
                title: 'Suporte ao organizador',
                desc: 'Equipe dedicada para ajudar em todas as etapas do seu evento.',
              },
              {
                icon: '💰',
                title: 'Acompanhamento de receita',
                desc: 'Relatórios detalhados de faturamento e repasses automáticos.',
              },
            ].map((item) => (
              <article key={item.title} className="servico-card">
                <span className="servico-card__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
          <ContactPills variant="purple" />
        </div>
      </section>

      <section className="section cadastro">
        <div className="container">
          <div className="cadastro__grid">
            <div className="cadastro__left">
              <h2 className="section-title">CADASTRO</h2>
              <div className="cadastro__cards">
                <div className="cadastro-card">
                  <span className="cadastro-card__icon">👤</span>
                  <strong>ORGANIZADOR / PRODUTOR</strong>
                </div>
                <div className="cadastro-card">
                  <span className="cadastro-card__icon">🧑</span>
                  <strong>COMPRADOR (PESSOA FÍSICA)</strong>
                </div>
              </div>
              <div className="cadastro__req">
                <h3>Para publicar o evento na plataforma, precisamos receber:</h3>
                <ul>
                  <li>Banner e imagens do evento</li>
                  <li>Local, data e horário</li>
                  <li>Tipos de ingresso e valores</li>
                  <li>Informações de contato do organizador</li>
                </ul>
              </div>
              <a href={`mailto:${EMAIL}`} className="btn btn--primary btn--full">
                Envie os materiais para {EMAIL}
              </a>
            </div>

            <div className="equipamentos-box">
              <h2>EQUIPAMENTOS</h2>
              <p>Aluguel gratuito de equipamentos para eventos parceiros.</p>
              <div className="equipamentos__icons">
                <div className="equip-item">
                  <span className="equip-item__icon"><IconTerminal /></span>
                  <small>Maquininhas</small>
                </div>
                <div className="equip-item">
                  <span className="equip-item__icon"><IconValidation /></span>
                  <small>Validação</small>
                </div>
                <div className="equip-item">
                  <span className="equip-item__icon"><IconSupport /></span>
                  <small>Suporte</small>
                </div>
              </div>
              <div className="equipamentos__divider" aria-hidden="true" />
              <div className="equipamentos__checkin">
                <h3>Check-in</h3>
                <p>
                  Validação de QR Code em tempo real direto no celular ou terminal dedicado,
                  garantindo entrada rápida e segura.
                </p>
              </div>
              <div className="equipamentos__note">
                <p>
                  Os equipamentos devem ser devolvidos em até 48h após o evento, em perfeito
                  estado de conservação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section condicoes">
        <div className="container">
          <h2 className="section-title">CONDIÇÕES COMERCIAIS</h2>
          <div className="condicoes__grid">
            <article className="cond-card">
              <h3>INGRESSOS FÍSICOS</h3>
              <table>
                <tbody>
                  <tr><td>Pix</td><td>2,5%</td></tr>
                  <tr><td>Débito</td><td>3,5%</td></tr>
                  <tr><td>Crédito 1x</td><td>4,5%</td></tr>
                  <tr><td>Crédito 2x</td><td>5,5%</td></tr>
                  <tr><td>Crédito 3x</td><td>6,5%</td></tr>
                </tbody>
              </table>
              <button type="button" className="btn btn--primary btn--sm">Saiba mais</button>
            </article>

            <article className="cond-card cond-card--highlight">
              <h3>INGRESSOS VIRTUAIS</h3>
              <div className="cond-card__fee-wrap">
                <p className="cond-card__big">Taxa de Conveniência</p>
                <p className="cond-card__fee">10%</p>
                <p className="cond-card__desc">Sobre o valor do ingresso vendido online</p>
              </div>
              <button type="button" className="btn btn--primary btn--sm">Saiba mais</button>
            </article>

            <article className="cond-card">
              <h3>MARKUP</h3>
              <p>O produtor define taxas adicionais por forma de pagamento:</p>
              <ul className="cond-card__list">
                <li><strong>Pix:</strong> 2%</li>
                <li><strong>Débito:</strong> 5%</li>
                <li><strong>Crédito:</strong> 10%</li>
              </ul>
              <div className="cond-card__exemplo">
                <strong>EXEMPLO</strong>
                <p>Ingresso R$ 100 + taxa 10% = R$ 110 ao comprador</p>
              </div>
            </article>
          </div>
          <p className="condicoes__duvidas">
            Dúvidas comerciais? Entre em contato pelo e-mail{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </div>
      </section>

      <section className="section validacao">
        <div className="container">
          <div className="validacao__grid">
            <div className="validacao-box">
              <div className="validacao-box__header">
                <h2>VALIDAÇÃO</h2>
                <p className="validacao-box__subtitle">SEM CUSTO DE VALIDAÇÃO</p>
              </div>
              <div className="validacao-box__body">
                <ul className="validacao-list">
                  {[
                    'Sem taxa de equipamento',
                    'Check-in pelo celular',
                    'Validação em tempo real',
                    'Relatório de presença',
                    'Múltiplos pontos de entrada',
                    'Suporte durante o evento',
                    'Histórico completo de check-ins',
                  ].map((item) => (
                    <li key={item}>
                      <span className="validacao-list__check"><IconCheck /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="validacao-success">
                  <div className="validacao-success__card">
                    <span className="validacao-success__badge" aria-hidden="true">✓</span>
                    <p>Check-in realizado com sucesso!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="beneficios">
              <h2 className="section-title">BENEFÍCIOS DE FECHAR COM A SHOW INGRESSOS</h2>
              <div className="beneficio-item">
                <span className="beneficio-item__icon">📢</span>
                <div>
                  <strong>Apoio no tráfego pago do seu evento</strong>
                  <p>Vamos ajudar na divulgação e no alcance do seu evento nas redes sociais.</p>
                </div>
              </div>
              <div className="beneficio-item">
                <span className="beneficio-item__icon">👍</span>
                <div>
                  <strong>Suporte em mídias digitais</strong>
                  <p>Artes e materiais promocionais para divulgação.</p>
                </div>
              </div>
              <div className="beneficio-item">
                <span className="beneficio-item__icon">🎁</span>
                <div>
                  <strong>Parceria completa</strong>
                  <p>Do cadastro ao pós-evento, estamos com você.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section observacoes">
        <div className="container">
          <div className="observacoes__grid">
            <div className="observacoes__left">
              <h2 className="section-title">OBSERVAÇÕES</h2>
              <ul className="obs-list">
                <li>
                  <span>💳</span>
                  Repasse de valores conforme contrato, em até 3 dias úteis após o evento.
                </li>
                <li>
                  <span>📦</span>
                  Devolução de equipamentos em até 48h após o encerramento.
                </li>
                <li>
                  <span>⚠️</span>
                  Equipamentos danificados serão cobrados conforme tabela abaixo.
                </li>
              </ul>
            </div>

            <div className="observacoes__table-wrap">
              <table className="equip-table">
                <thead>
                  <tr>
                    <th>EQUIPAMENTO</th>
                    <th>VALOR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Terminal / maquininha móvel</td>
                    <td>R$ 1.750,00</td>
                  </tr>
                  <tr>
                    <td>Equipamento de validação</td>
                    <td>R$ 1.000,00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="cta-box">
              <img src={logoCta} alt="Show Ingressos" className="cta-box__logo" />
              <p className="cta-box__title">Vamos conversar sobre o seu próximo evento?</p>
              <ContactPills variant="cta" />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <img src={logoFooter} alt="Show Ingressos" className="footer__logo" />
          <ContactPills variant="footer" />
        </div>
      </footer>
    </div>
  )
}

export default App
