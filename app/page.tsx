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

function BookingMockup() {
  return (
    <div className="product-ui booking-ui">
      <div className="product-ui-sidebar">
        <div className="ui-logo">Z<span>●</span></div>
        <div className="ui-company"><b>Minha empresa</b><small>painel empresarial</small></div>
        <div className="ui-nav">
          <span className="ui-active"><CalendarDays size={13} /> Dashboard</span>
          <span><CalendarDays size={13} /> Agendamentos</span>
          <span><UsersIcon size={13} /> Clientes</span>
          <span><Layers3 size={13} /> Serviços</span>
          <span><Network size={13} /> Profissionais</span>
          <span><Zap size={13} /> Financeiro</span>
        </div>
      </div>
      <div className="product-ui-main">
        <div className="ui-topbar"><span>Dashboard</span><span className="ui-avatar">LF</span></div>
        <div className="ui-welcome"><div><small>VISÃO GERAL</small><b>Bom dia, sua operação.</b></div><span className="ui-date">28 SET 2026</span></div>
        <div className="ui-stat-grid">
          <div><small>AGENDAMENTOS HOJE</small><strong>24</strong><em>+12% esta semana</em></div>
          <div><small>ESTA SEMANA</small><strong>118</strong><em>agenda em movimento</em></div>
          <div><small>RECEITA DO MÊS</small><strong>R$ 8,4k</strong><em>+18,4% no período</em></div>
          <div><small>CLIENTES</small><strong>342</strong><em>base ativa</em></div>
        </div>
        <div className="ui-lower-grid">
          <div className="ui-panel ui-chart">
            <div className="ui-panel-head"><b>Movimento da agenda</b><span>Últimos 7 dias</span></div>
            <div className="ui-bars"><i/><i/><i/><i/><i/><i/><i/></div>
            <div className="ui-days"><span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span><span>SÁB</span><span>DOM</span></div>
          </div>
          <div className="ui-panel ui-status">
            <div className="ui-panel-head"><b>Status</b><span>Hoje</span></div>
            <span><i className="dot yellow"/> Pendentes <b>04</b></span>
            <span><i className="dot green"/> Confirmados <b>16</b></span>
            <span><i className="dot blue"/> Completados <b>04</b></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function UsersIcon({ size }: { size: number }) {
  return <span className="users-icon" style={{ width: size, height: size }}><span/><span/></span>;
}

function FlowMockup() {
  return (
    <div className="product-ui flow-ui">
      <div className="flow-topbar"><span className="ui-logo">Z<span>●</span></span><b>Meu Workspace</b><span className="ui-avatar">LF</span></div>
      <div className="flow-body">
        <div className="flow-sidebar">
          <small>WORKSPACE</small>
          <span className="flow-side-active">▣ Meus fluxos</span>
          <span>◫ Templates</span>
          <span>◉ Integrações</span>
          <span>⚙ Configurações</span>
          <div className="flow-side-bottom"><small>PROJETO</small><b>Atendimento</b><span>Bot principal</span></div>
        </div>
        <div className="flow-canvas">
          <div className="flow-canvas-head"><span>Atendimento inicial</span><small>RASCUNHO</small></div>
          <div className="flow-grid-bg"/>
          <div className="flow-node flow-trigger"><small>TRIGGER</small><b>Mensagem recebida</b><span>WhatsApp</span></div>
          <div className="flow-connector c1"/>
          <div className="flow-node flow-action"><small>AÇÃO</small><b>Consultar cliente</b><span>Buscar dados</span></div>
          <div className="flow-connector c2"/>
          <div className="flow-node flow-condition"><small>CONDIÇÃO</small><b>Cliente existe?</b><span>Sim / Não</span></div>
          <div className="flow-connector c3"/>
          <div className="flow-node flow-message"><small>MENSAGEM</small><b>Enviar resposta</b><span>Olá! Como posso ajudar?</span></div>
          <div className="flow-minimap"><i/><i/><i/><i/></div>
        </div>
        <div className="flow-properties"><small>PROPRIEDADES</small><b>Consultar cliente</b><label>Integração</label><div>Booking API <ChevronRight size={11}/></div><label>Ação</label><div>Buscar cliente <ChevronRight size={11}/></div><label>STATUS</label><strong>● Conectado</strong></div>
      </div>
    </div>
  );
}

function WhatsAppMockup() {
  return (
    <div className="product-ui whatsapp-ui">
      <div className="wa-infra-head">
        <div className="ui-logo">Z<span>●</span></div>
        <span>COMMUNICATION INFRASTRUCTURE</span>
        <b>WHATSAPP</b>
      </div>
      <div className="wa-infra-canvas">
        <div className="wa-infra-line line-a" />
        <div className="wa-infra-line line-b" />
        <div className="wa-infra-line line-c" />
        <div className="wa-infra-source source-booking"><CalendarDays size={16}/><small>BOOKING</small><b>Agendamento</b></div>
        <div className="wa-infra-source source-flow"><Workflow size={16}/><small>FLOW</small><b>Automação</b></div>
        <div className="wa-infra-core"><MessageCircle size={24}/><strong>WHATSAPP</strong><span>CAMADA DE COMUNICAÇÃO</span></div>
        <div className="wa-infra-instance instance-one"><i/><small>INSTÂNCIA 01</small><b>Atendimento</b><span>ONLINE</span></div>
        <div className="wa-infra-instance instance-two"><i/><small>INSTÂNCIA 02</small><b>Comercial</b><span>ONLINE</span></div>
        <div className="wa-infra-instance instance-three"><i/><small>INSTÂNCIA 03</small><b>Suporte</b><span>STANDBY</span></div>
        <div className="wa-infra-events"><span>EVENT STREAM</span><b>1.284</b><small>mensagens processadas hoje</small></div>
      </div>
      <div className="wa-infra-footer"><span>WEBHOOKS</span><span>EVENTOS</span><span>TEMPLATES</span><span>INSTÂNCIAS</span><b>API CONNECTED</b></div>
    </div>
  );
}

function ProductScene({ product, active }: { product: (typeof products)[number]; active: boolean }) {
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
      <div className="scene-art product-interface" aria-hidden="true">
        <div className="interface-glow" />
        {activeProductMarkup(product.color)}
      </div>
    </article>
  );
}

function activeProductMarkup(color: string) {
  if (color === "violet") return <FlowMockup />;
  if (color === "green") return <WhatsAppMockup />;
  return <BookingMockup />;
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
        <div className="wide-caption"><span>06 / A NOSSA VISÃO</span><p>Construir tecnologia que simplifica a operação — porque o importante não é a ferramenta. É o que o negócio consegue fazer quando tudo está conectado.</p></div>
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
