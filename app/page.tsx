"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Globe2,
  Layers3,
  MessageCircle,
  MousePointer2,
  Network,
  Play,
  Radar,
  Send,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const products = [
  {
    number: "01",
    label: "OPERAÇÃO",
    name: "Zailom Booking",
    short: "Onde a operação ganha ritmo.",
    description:
      "Uma camada operacional para transformar agenda, clientes, profissionais, serviços, financeiro, RH, marketing e pagamentos em uma única rotina.",
    color: "lime",
    icon: CalendarDays,
    href: "https://booking.zailom.com",
    capabilities: ["Agendamentos", "Clientes", "Profissionais", "Financeiro", "RH", "Marketing"],
  },
  {
    number: "02",
    label: "AUTOMAÇÃO",
    name: "Zailom Flow",
    short: "Onde as conversas viram processos.",
    description:
      "Um construtor visual para criar jornadas conversacionais, automações e experiências que podem consultar dados, tomar caminhos e acionar ações.",
    color: "violet",
    icon: Workflow,
    href: "https://flow-builder.zailom.com",
    capabilities: ["Fluxos", "Chatbots", "Automações", "Integrações", "Ações", "Experiências"],
  },
  {
    number: "03",
    label: "COMUNICAÇÃO",
    name: "Zailom WhatsApp",
    short: "Onde a comunicação chega.",
    description:
      "A infraestrutura de comunicação que conecta instâncias, mensagens, templates, eventos e webhooks aos demais produtos do ecossistema.",
    color: "green",
    icon: MessageCircle,
    href: "https://wa.zailom.com",
    capabilities: ["Instâncias", "Mensagens", "Templates", "Webhooks", "Eventos", "Tenants"],
  },
];

const modules = [
  ["01", "Agenda", "Horários, serviços, disponibilidade e compromissos."],
  ["02", "Clientes", "Histórico e relacionamento em uma visão contínua."],
  ["03", "Pessoas", "Profissionais, permissões, RH e organização da equipe."],
  ["04", "Financeiro", "Pagamentos, movimentações e visão da operação."],
  ["05", "Marketing", "Materiais, campanhas e ações para ativar clientes."],
  ["06", "Automação", "Fluxos que transformam eventos em ações."],
  ["07", "Comunicação", "WhatsApp, mensagens e notificações conectadas."],
  ["08", "API", "Integrações para levar a Zailom para outros sistemas."],
];

function ProductScene({ product, active }: { product: (typeof products)[number]; active: boolean }) {
  const Icon = product.icon;
  return (
    <article className={"product-scene product-" + product.color + (active ? " is-active" : "")}>
      <div className="scene-copy">
        <span className="section-kicker">{product.number} / {product.label}</span>
        <h3>{product.name}</h3>
        <p className="scene-short">{product.short}</p>
        <p className="scene-description">{product.description}</p>
        <div className="capability-list">
          {product.capabilities.map((item) => <span key={item}><Check size={13} />{item}</span>)}
        </div>
        <a className="arrow-link" href={product.href} target="_blank" rel="noreferrer">
          Explorar {product.name.replace("Zailom ", "")} <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="scene-art" aria-hidden="true">
        <div className="scene-grid" />
        <div className="signal signal-one" />
        <div className="signal signal-two" />
        <div className="dashboard-window">
          <div className="window-top"><span>zailom / {product.number}</span><span><Icon size={16} /></span></div>
          <div className="window-main">
            <div className="window-heading">
              <span>ECOSSISTEMA</span>
              <strong>{product.name.replace("Zailom ", "")}</strong>
            </div>
            <div className="mini-bars"><i /><i /><i /><i /><i /></div>
            <div className="window-cards">
              <span>OPERAÇÃO</span><span>AUTOMAÇÃO</span><span>COMUNICAÇÃO</span>
            </div>
          </div>
        </div>
        <div className="floating-node node-a"><Zap size={15} /> LIVE</div>
        <div className="floating-node node-b"><Network size={15} /> CONNECTED</div>
      </div>
    </article>
  );
}

export default function Home() {
  const progress = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      const systemMap = document.querySelector<HTMLElement>(".system-map");
      if (systemMap) {
        const rect = systemMap.getBoundingClientRect();
        const start = window.innerHeight * 0.88;
        const end = window.innerHeight * 0.12;
        const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
        systemMap.style.setProperty("--map-progress", progress.toFixed(3));
      }
    };
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }), { threshold: 0.12 });
    reveals.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <div className="progress" ref={progress} />

      <header className="nav">
        <a className="brand" href="#">ZAILOM<span>®</span></a>
        <nav>
          <a href="#ecosystem">Ecossistema</a>
          <a href="#products">Produtos</a>
          <a href="#capabilities">Capacidades</a>
        </nav>
        <a className="nav-cta" href="https://booking.zailom.com" target="_blank" rel="noreferrer">Entrar <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero">
        <div className="hero-noise" />
        <div className="hero-grid" />
        <div className="hero-ring ring-one" />
        <div className="hero-ring ring-two" />
        <div className="hero-orbit"><span /><span /><span /></div>
        <div className="hero-content">
          <div className="hero-meta"><span>TECNOLOGIA PARA NEGÓCIOS REAIS</span><span>BR / DIGITAL ECOSYSTEM</span></div>
          <h1>O negócio<br /><em>em movimento.</em></h1>
          <p>Operação, automação e comunicação conectadas para que cada parte do seu negócio trabalhe na mesma direção.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#ecosystem">Entrar no ecossistema <ArrowUpRight size={18} /></a>
            <a className="hero-scroll" href="#manifesto"><MousePointer2 size={15} /> role para explorar</a>
          </div>
        </div>
        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight size={18} />
          <span className="hero-code">ZLM / 001</span>
        </div>
      </section>

      <section id="manifesto" className="manifesto">
        <div className="manifesto-sticky">
          <div className="manifesto-side"><span>01</span><span>THE IDEA</span></div>
          <div className="manifesto-content">
            <span className="section-kicker">UM ECOSSISTEMA, NÃO UM MONTE DE FERRAMENTAS</span>
            <h2>Quando tudo<br /><span>conversa,</span><br />o negócio flui.</h2>
            <p>A Zailom conecta as peças que fazem uma operação digital acontecer — do primeiro contato ao agendamento, da automação à comunicação.</p>
          </div>
          <div className="manifesto-mark"><span>Z</span><i>01</i></div>
        </div>
      </section>

      <section id="ecosystem" className="ecosystem-intro reveal">
        <div className="section-head">
          <span className="section-kicker">02 / ECOSSISTEMA</span>
          <span>UMA ESTRUTURA. VÁRIAS CAMADAS.</span>
        </div>
        <div className="ecosystem-title">
          <h2>Uma operação<br /><em>conectada.</em></h2>
          <p>Não é sobre adicionar mais uma ferramenta. É sobre fazer as ferramentas que você já precisa funcionarem como partes de um mesmo sistema.</p>
        </div>
        <div className="system-map">
          <div className="map-line line-x" /><div className="map-line line-y" />
          <div className="map-core"><Sparkles size={25} /><strong>ZAILOM</strong><span>ECOSYSTEM CORE</span></div>
          <div className="map-node node-booking"><CalendarDays size={18} /><b>BOOKING</b><small>OPERAÇÃO</small></div>
          <div className="map-node node-flow"><Workflow size={18} /><b>FLOW</b><small>AUTOMAÇÃO</small></div>
          <div className="map-node node-wa"><MessageCircle size={18} /><b>WHATSAPP</b><small>COMUNICAÇÃO</small></div>
          <div className="map-node node-api"><Globe2 size={18} /><b>API</b><small>CONEXÕES</small></div>
        </div>
      </section>

      <section id="products" className="products-section">
        <div className="products-intro reveal">
          <span className="section-kicker">03 / OS PRODUTOS</span>
          <h2>Cada camada resolve<br /><em>uma parte.</em></h2>
          <p>Juntas, elas criam uma experiência contínua para quem opera e para quem está do outro lado.</p>
        </div>
        <div className="product-tabs">
          {products.map((p, i) => <button key={p.number} className={activeProduct === i ? "active" : ""} onClick={() => setActiveProduct(i)}><span>{p.number}</span>{p.name.replace("Zailom ", "")}<ChevronRight size={15} /></button>)}
        </div>
        <ProductScene product={products[activeProduct]} active />
      </section>

      <section id="capabilities" className="capabilities reveal">
        <div className="section-head">
          <span className="section-kicker">04 / DENTRO DA OPERAÇÃO</span>
          <span>MAIS DO QUE AGENDAMENTO</span>
        </div>
        <div className="capabilities-title">
          <h2>O que acontece<br /><em>por trás.</em></h2>
          <p>Uma base para organizar o que normalmente fica espalhado entre sistemas, planilhas, mensagens e processos manuais.</p>
        </div>
        <div className="module-grid">
          {modules.map(([num, title, text]) => <div className="module" key={num}><span>{num}</span><Layers3 size={19} /><h3>{title}</h3><p>{text}</p><ArrowUpRight size={17} /></div>)}
        </div>
      </section>

      <section className="flow-section reveal">
        <div className="flow-copy">
          <span className="section-kicker">05 / COMO TUDO SE ENCAIXA</span>
          <h2>Um evento.<br /><em>Várias possibilidades.</em></h2>
          <p>Uma pessoa chega. Uma mensagem é enviada. Um agendamento acontece. Um pagamento é confirmado. A informação pode atravessar as camadas certas sem depender de copiar e colar.</p>
        </div>
        <div className="flow-visual">
          <div className="flow-track"><i /><i /><i /><i /></div>
          <div className="flow-event"><Radar size={21} /><span>NOVO AGENDAMENTO</span><b>09:42:18</b></div>
          <div className="flow-step step-1"><CalendarDays size={18} /><span>BOOKING</span><b>Reserva criada</b></div>
          <div className="flow-step step-2"><Workflow size={18} /><span>FLOW</span><b>Jornada acionada</b></div>
          <div className="flow-step step-3"><MessageCircle size={18} /><span>WHATSAPP</span><b>Cliente notificado</b></div>
          <div className="flow-step step-4"><Send size={18} /><span>RESULTADO</span><b>Experiência contínua</b></div>
        </div>
      </section>

      <section className="manifesto-wide reveal">
        <div className="giant-word">CONECTAR<span>.</span></div>
        <div className="wide-caption"><span>06 / A NOSSA VISÃO</span><p>Construir tecnologia que desaparece na operação — porque o importante não é a ferramenta. É o que o negócio consegue fazer quando tudo está conectado.</p></div>
      </section>

      <section className="closing reveal">
        <div className="closing-glow" />
        <span className="section-kicker">07 / O PRÓXIMO PASSO</span>
        <h2>Seu negócio.<br /><em>Em movimento.</em></h2>
        <p>Comece pela operação. Expanda para a automação. Conecte a comunicação. O ecossistema cresce com você.</p>
        <div className="closing-actions">
          <a className="primary-btn" href="https://booking.zailom.com" target="_blank" rel="noreferrer">Conhecer o Booking <ArrowUpRight size={18} /></a>
          <a className="outline-btn" href="https://flow-builder.zailom.com" target="_blank" rel="noreferrer">Explorar o Flow <ArrowUpRight size={18} /></a>
        </div>
      </section>

      <footer>
        <div><div className="brand">ZAILOM<span>®</span></div><small>Operação. Automação. Comunicação.</small></div>
        <div className="footer-links"><a href="#ecosystem">Ecossistema</a><a href="#products">Produtos</a><a href="#capabilities">Capacidades</a></div>
        <div className="footer-right"><span>BR / DIGITAL ECOSYSTEM</span><span>© {new Date().getFullYear()} Zailom</span></div>
      </footer>
    </main>
  );
}
