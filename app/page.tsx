"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, CalendarDays, MessageCircle, Workflow, ChevronDown } from "lucide-react";

const products = [
  {
    eyebrow:"01 / OPERAÇÃO",
    title:"Zailom Booking",
    text:"Agendamentos deixam de ser uma tarefa isolada e passam a fazer parte da operação inteira.",
    bullets:["Agenda e serviços","Clientes e profissionais","Financeiro, RH e marketing","Pagamentos e integrações"],
    href:"https://booking.zailom.com",
    icon:CalendarDays,
    className:"booking"
  },
  {
    eyebrow:"02 / AUTOMAÇÃO",
    title:"Zailom Flow",
    text:"Construa jornadas conversacionais que conectam pessoas, processos e ações.",
    bullets:["Fluxos conversacionais","Chatbots e automações","Integrações","Experiências sob medida"],
    href:"https://flow-builder.zailom.com",
    icon:Workflow,
    className:"flow"
  },
  {
    eyebrow:"03 / COMUNICAÇÃO",
    title:"Zailom WhatsApp",
    text:"Uma camada de comunicação preparada para conectar seus canais ao ecossistema.",
    bullets:["Instâncias e tenants","Mensagens e templates","Webhooks e eventos","Integração com produtos Zailom"],
    href:"https://wa.zailom.com",
    icon:MessageCircle,
    className:"whatsapp"
  }
];

function Product({p,index}:{p:(typeof products)[number],index:number}) {
  const Icon=p.icon;
  return <section className={"product "+p.className}>
    <div className="product-inner">
      <div className="product-copy">
        <span className="eyebrow">{p.eyebrow}</span>
        <h2>{p.title}</h2>
        <p>{p.text}</p>
        <ul>{p.bullets.map(x=><li key={x}>{x}</li>)}</ul>
        <a className="outline-btn" href={p.href} target="_blank" rel="noreferrer">Abrir produto <ArrowUpRight size={18}/></a>
      </div>
      <div className="product-visual">
        <div className="orbit orbit-a"></div><div className="orbit orbit-b"></div>
        <div className="product-card">
          <div className="card-top"><span>zailom / {String(index+1).padStart(2,"0")}</span><Icon size={20}/></div>
          <div className="mock-lines"><i></i><i></i><i></i><i></i></div>
          <div className="mock-panel"><strong>{p.title.replace("Zailom ","")}</strong><span>conectado ao ecossistema</span></div>
        </div>
      </div>
    </div>
  </section>
}

export default function Home() {
  const progress=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const onScroll=()=>{ if(progress.current) progress.current.style.transform=`scaleX(${Math.min(1,window.scrollY/(document.documentElement.scrollHeight-window.innerHeight))})`; };
    window.addEventListener("scroll",onScroll,{passive:true}); onScroll(); return()=>window.removeEventListener("scroll",onScroll);
  },[]);
  return <main>
    <div className="progress" ref={progress}/>
    <header className="nav"><a className="brand" href="#">ZAILOM<span>®</span></a><nav><a href="#ecosystem">Ecossistema</a><a href="#products">Produtos</a></nav><a className="nav-cta" href="https://booking.zailom.com" target="_blank" rel="noreferrer">Entrar <ArrowUpRight size={15}/></a></header>

    <section className="hero">
      <div className="hero-grid"></div><div className="hero-glow"></div>
      <div className="hero-content">
        <span className="eyebrow">TECNOLOGIA PARA NEGÓCIOS REAIS</span>
        <h1>Seu negócio.<br/><em>Conectado.</em></h1>
        <p>Operação, automação e comunicação trabalhando juntos — em um ecossistema criado para acompanhar o ritmo do seu negócio.</p>
        <a className="primary-btn" href="#ecosystem">Explorar a Zailom <ArrowUpRight size={18}/></a>
      </div>
      <div className="scroll-cue"><span>SCROLL</span><ChevronDown size={16}/></div>
    </section>

    <section id="ecosystem" className="statement">
      <div className="statement-pin">
        <span className="eyebrow">UM ECOSSISTEMA, NÃO UM MONTE DE FERRAMENTAS</span>
        <h2>Quando tudo<br/><span>conversa,</span><br/>o negócio flui.</h2>
        <p>A Zailom reúne as peças que fazem uma operação digital acontecer — do primeiro contato ao agendamento, da automação à comunicação.</p>
      </div>
    </section>

    <div id="products">{products.map((p,i)=><Product key={p.title} p={p} index={i}/>)}</div>

    <section className="closing">
      <div className="closing-orb"></div>
      <span className="eyebrow">O PRÓXIMO PASSO É SEU</span>
      <h2>Menos ferramentas.<br/><em>Mais conexão.</em></h2>
      <p>Conheça a plataforma que está sendo construída para colocar sua operação inteira na mesma direção.</p>
      <div className="closing-actions"><a className="primary-btn" href="https://booking.zailom.com" target="_blank" rel="noreferrer">Conhecer o Booking <ArrowUpRight size={18}/></a><a className="text-link" href="https://flow-builder.zailom.com" target="_blank" rel="noreferrer">Explorar o Flow <ArrowUpRight size={16}/></a></div>
    </section>

    <footer><div className="brand">ZAILOM<span>®</span></div><span>Operação. Automação. Comunicação.</span><span>© {new Date().getFullYear()} Zailom</span></footer>
  </main>
}