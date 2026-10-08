export const LANGS = ['en', 'pt'] as const
export type Lang = (typeof LANGS)[number]

export const isLang = (value: string | undefined): value is Lang =>
  LANGS.includes(value as Lang)

type Job = {
  company: string
  dates: string
  location: string
  roles: { title: string; years?: string }[]
  description: string
  tags: string[]
  current?: boolean
}

type EarlierJob = { company: string; role: string; summary: string; years: string }

const en = {
  meta: {
    title: 'Sergio Tomas — Software Architect',
    description:
      'Principal Software Engineer and Solutions Architect. React, Next.js, Node.js, Java, cloud and AI Engineering.',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    stack: 'Stack',
    contact: 'Contact',
    cta: 'Get in touch',
    menu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    back: 'Back to portfolio',
  },
  hero: {
    location: 'São Paulo, BR  ·  14+ years in software',
    eyebrow: '// Principal Software Engineer · Solutions Architect',
    headline: 'I architect scalable systems and lead them from first sketch to production.',
    subhead:
      'Software architect and tech lead with a front-end core (React, Next.js), back-end in Node.js and Java, and cloud on AWS, Azure and GCP — now bringing AI Engineering into how products get built.',
    primary: 'See my experience',
    secondary: 'Download CV',
    cvFile: '/cv/Sergio_Tomas_CV_en.pdf',
    figure: 'Fig. 01 — How I think about a product',
    diagram: [
      { tag: '01 · Experience', title: 'Front-end architecture', sub: 'React · Next.js · Vue · micro-frontends · design systems' },
      { tag: '02 · Services', title: 'APIs & back-end', sub: 'Node.js · NestJS · GraphQL · Java Spring' },
      { tag: '03 · AI', title: 'AI Engineering', sub: 'LLMs · RAG · MCP' },
      { tag: '04 · Data', title: 'Data layer', sub: 'SQL · MongoDB · DynamoDB · Firestore' },
      { tag: '05 · Platform', title: 'Cloud & delivery', sub: 'AWS · Azure · GCP · CI/CD' },
    ],
    stats: [
      ['14+', 'years'],
      ['8', 'companies'],
      ['3', 'clouds'],
    ],
  },
  about: {
    label: 'About',
    lead: 'Principal Software Engineer and architect, the technical reference for architecture and system design at companies like C&A and Claro — defining standards, designing highly available systems and driving products end to end.',
    aiPhrase: 'AI Engineering, done with engineering',
    aiText:
      'I integrate generative AI, LLMs and AI agents into the development lifecycle and into the solutions I architect — using AI to accelerate delivery without compromising quality, predictability or maintainability.',
    groundedIn: 'Always grounded in',
    fundamentals: ['Well-defined architecture', 'Code review', 'Automated testing', 'Observability', 'Security'],
  },
  experience: {
    label: 'Experience',
    range: '2010 — today',
    jobs: [
      {
        company: 'Stellar Gaming',
        dates: 'Jan 2024 — Present',
        location: 'Belo Horizonte, MG',
        roles: [{ title: 'Principal Software Engineer' }],
        description:
          'Software architecture and technical reference for developers. System design of the main projects, end-to-end products, and generative AI solutions with LLMs, RAG and MCP — driving AI Engineering with Claude Code and Spec-Driven Development.',
        tags: ['System design', 'AI Engineering', 'Tech leadership'],
        current: true,
      },
      {
        company: 'DOMVS iT',
        dates: 'Jan 2023 — Jan 2024',
        location: 'São Paulo, SP',
        roles: [{ title: 'Software Engineer' }],
        description:
          "Built a client's main website with Next.js as the core stack and took an active role in front-end architecture and standards decisions.",
        tags: ['Next.js', 'Front-end architecture'],
      },
      {
        company: 'C&A Brazil',
        dates: 'Feb 2022 — Jan 2023',
        location: 'São Paulo, SP',
        roles: [{ title: 'Senior Solutions Architect' }],
        description:
          'Corporate architecture standards, solution design and technical leadership for strategic #CeaFashionTech solutions. Led assessments and audits and drove adoption of new technologies.',
        tags: ['Enterprise architecture', 'Solution design'],
      },
      {
        company: 'Claro Brazil',
        dates: 'May 2017 — Feb 2022',
        location: 'São Paulo, SP',
        roles: [
          { title: 'Systems Architect', years: '2021 — 2022' },
          { title: 'Front-end Specialist Developer', years: '2019 — 2021' },
          { title: 'Senior Front-end Developer', years: '2018 — 2019' },
          { title: 'Front-end Developer', years: '2017 — 2018' },
        ],
        description:
          'Grew from developer to architect. Led the front-end chapter, built a micro-frontend architecture where React, Angular and Vue coexist, designed the front-end CI/CD with Jenkins and contributed to the Mondrian design system.',
        tags: ['Micro-frontends', 'AWS', 'CI/CD', 'Design systems'],
      },
    ] as Job[],
    earlierRange: '2010 — 2017',
    earlierTitle: 'Where it started',
    earlier: [
      { company: 'Resource IT Solutions', role: 'Programmer Analyst', summary: 'Angular, Java, AngularJS → Angular 2 migration, Cordova', years: '2016–2017' },
      { company: 'Tugarê | CDM São Paulo', role: 'Programmer', summary: 'iPad web apps for healthcare on Veeva & Agnitio, PHP, WordPress', years: '2014–2016' },
      { company: 'Marvin Tecnologia', role: 'Web Developer', summary: 'Interactive pharma presentations, .NET legacy systems', years: '2012–2014' },
      { company: 'Atento Brazil', role: 'Web Designer', summary: 'Intranet pages, layouts and graphics', years: '2010–2012' },
    ] as EarlierJob[],
  },
  stack: {
    label: 'Stack',
    lead: 'The languages and tools I build with.',
    languages: 'Languages',
    tools: 'Tools & platforms',
    hint: 'Hover to pause · Official logos · Click for details',
  },
  skills: {
    label: 'In detail',
    lead: 'A full-cycle toolkit, from the pixel to the platform.',
    rows: [
      ['Front-end', 'React (Redux, Redux-Saga, Context API) · Next.js · Vue.js · Angular · HTML5 (semantics, accessibility, SEO) · CSS3 (Flexbox, Grid, responsive) · Micro-frontends · Design systems'],
      ['Back-end & APIs', 'Node.js (Express, NestJS, GraphQL) · Java (Spring) · RESTful APIs · VTEX IO'],
      ['Databases', 'MySQL · SQL Server · Oracle · MongoDB · Firestore · DynamoDB'],
      ['Cloud & DevOps', 'AWS · Azure · Google Cloud · CI/CD (Jenkins)'],
      ['Architecture', 'Software design · Software & platform architecture · System design · ArchiMate'],
      ['AI Engineering', 'Claude Code · Spec-Driven Development (SDD) · MCP · RAG · LLMs & AI agents'],
    ],
  },
  credentials: {
    education: 'Education',
    degree: "Bachelor's Degree in Information Systems",
    degreeYears: '2011 — 2015',
    certifications: 'Certifications',
    certs: [
      'AZ-400: Designing and Implementing Microsoft DevOps Solutions',
      'ArchiMate 3 Foundation',
      'Node.js – The Complete Guide',
      "Go (Golang): Exploring Google's Language",
    ],
    languages: 'Languages',
    spoken: [
      ['Portuguese', 'Native'],
      ['English', 'Full professional'],
      ['Spanish', 'Elementary'],
    ],
  },
  contact: {
    label: 'Contact',
    headline: "Have a system to design or a team to lead? Let's talk.",
    linkedin: 'LinkedIn',
    phone: 'Phone',
    location: 'Location',
    locationValue: 'São Paulo, SP — Brazil',
    builtWith: 'Designed in pen.dev · Built with React',
  },
  tech: {
    stack: 'Stack',
    overview: 'Overview',
    concepts: 'Key concepts',
    conceptsLead: 'What anyone working with it needs to understand',
    practice: 'In practice',
    related: 'Related',
    usedAt: 'Used at',
    previous: 'Previous',
    next: 'Next',
    language: 'Language',
    tool: 'Tool',
  },
}

export type Messages = typeof en

const pt: Messages = {
  meta: {
    title: 'Sergio Tomas — Arquiteto de Software',
    description:
      'Principal Software Engineer e Arquiteto de Soluções. React, Next.js, Node.js, Java, nuvem e AI Engineering.',
  },
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    stack: 'Stack',
    contact: 'Contato',
    cta: 'Fale comigo',
    menu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    language: 'Idioma',
    back: 'Voltar ao portfólio',
  },
  hero: {
    location: 'São Paulo, BR  ·  14+ anos em software',
    eyebrow: '// Principal Software Engineer · Arquiteto de Soluções',
    headline: 'Arquiteto sistemas escaláveis e os conduzo do primeiro rascunho até a produção.',
    subhead:
      'Arquiteto de software e tech lead com base em front-end (React, Next.js), back-end em Node.js e Java, e nuvem em AWS, Azure e GCP — agora levando AI Engineering para a forma como produtos são construídos.',
    primary: 'Ver minha experiência',
    secondary: 'Baixar CV',
    cvFile: '/cv/Sergio_Tomas_CV_pt-BR.pdf',
    figure: 'Fig. 01 — Como penso um produto',
    diagram: [
      { tag: '01 · Experiência', title: 'Arquitetura de front-end', sub: 'React · Next.js · Vue · micro-frontends · design systems' },
      { tag: '02 · Serviços', title: 'APIs & back-end', sub: 'Node.js · NestJS · GraphQL · Java Spring' },
      { tag: '03 · IA', title: 'AI Engineering', sub: 'LLMs · RAG · MCP' },
      { tag: '04 · Dados', title: 'Camada de dados', sub: 'SQL · MongoDB · DynamoDB · Firestore' },
      { tag: '05 · Plataforma', title: 'Cloud & entrega', sub: 'AWS · Azure · GCP · CI/CD' },
    ],
    stats: [
      ['14+', 'anos'],
      ['8', 'empresas'],
      ['3', 'nuvens'],
    ],
  },
  about: {
    label: 'Sobre',
    lead: 'Principal Software Engineer e arquiteto, referência técnica em arquitetura e system design em empresas como C&A e Claro — definindo padrões, desenhando sistemas altamente disponíveis e conduzindo produtos de ponta a ponta.',
    aiPhrase: 'AI Engineering, feita com engenharia',
    aiText:
      'Integro IA generativa, LLMs e agentes de IA ao ciclo de desenvolvimento e às soluções que arquiteto — usando IA para acelerar entregas sem abrir mão de qualidade, previsibilidade ou manutenibilidade.',
    groundedIn: 'Sempre ancorado em',
    fundamentals: ['Arquitetura bem definida', 'Code review', 'Testes automatizados', 'Observabilidade', 'Segurança'],
  },
  experience: {
    label: 'Experiência',
    range: '2010 — hoje',
    jobs: [
      {
        company: 'Stellar Gaming',
        dates: 'Jan 2024 — Atual',
        location: 'Belo Horizonte, MG',
        roles: [{ title: 'Principal Software Engineer' }],
        description:
          'Arquitetura de software e referência técnica para os desenvolvedores. System design dos principais projetos, produtos de ponta a ponta e soluções de IA generativa com LLMs, RAG e MCP — conduzindo a AI Engineering com Claude Code e Spec-Driven Development.',
        tags: ['System design', 'AI Engineering', 'Liderança técnica'],
        current: true,
      },
      {
        company: 'DOMVS iT',
        dates: 'Jan 2023 — Jan 2024',
        location: 'São Paulo, SP',
        roles: [{ title: 'Software Engineer' }],
        description:
          'Desenvolvi o site principal de um cliente com Next.js como stack principal e participei ativamente das decisões de arquitetura e padrões de front-end.',
        tags: ['Next.js', 'Arquitetura de front-end'],
      },
      {
        company: 'C&A Brasil',
        dates: 'Fev 2022 — Jan 2023',
        location: 'São Paulo, SP',
        roles: [{ title: 'Arquiteto de Soluções Sênior' }],
        description:
          'Padrões corporativos de arquitetura, desenho de soluções e liderança técnica em soluções estratégicas do #CeaFashionTech. Conduzi assessments e auditorias e impulsionei a adoção de novas tecnologias.',
        tags: ['Arquitetura corporativa', 'Desenho de soluções'],
      },
      {
        company: 'Claro Brasil',
        dates: 'Mai 2017 — Fev 2022',
        location: 'São Paulo, SP',
        roles: [
          { title: 'Arquiteto de Sistemas', years: '2021 — 2022' },
          { title: 'Desenvolvedor Front-end Especialista', years: '2019 — 2021' },
          { title: 'Desenvolvedor Front-end Sênior', years: '2018 — 2019' },
          { title: 'Desenvolvedor Front-end', years: '2017 — 2018' },
        ],
        description:
          'Cresci de desenvolvedor a arquiteto. Liderei o chapter de front-end, construí uma arquitetura de micro-frontends onde React, Angular e Vue convivem, desenhei o CI/CD de front-end com Jenkins e contribuí com o design system Mondrian.',
        tags: ['Micro-frontends', 'AWS', 'CI/CD', 'Design systems'],
      },
    ],
    earlierRange: '2010 — 2017',
    earlierTitle: 'Onde tudo começou',
    earlier: [
      { company: 'Resource IT Solutions', role: 'Analista Programador', summary: 'Angular, Java, migração AngularJS → Angular 2, Cordova', years: '2016–2017' },
      { company: 'Tugarê | CDM São Paulo', role: 'Programador', summary: 'Web apps para iPad na área da saúde em Veeva e Agnitio, PHP, WordPress', years: '2014–2016' },
      { company: 'Marvin Tecnologia', role: 'Desenvolvedor Web', summary: 'Apresentações interativas para farmacêuticas, sistemas legados .NET', years: '2012–2014' },
      { company: 'Atento Brasil', role: 'Web Designer', summary: 'Páginas de intranet, layouts e peças gráficas', years: '2010–2012' },
    ],
  },
  stack: {
    label: 'Stack',
    lead: 'As linguagens e ferramentas com que construo.',
    languages: 'Linguagens',
    tools: 'Ferramentas & plataformas',
    hint: 'Passe o mouse para pausar · Logos oficiais · Clique para detalhes',
  },
  skills: {
    label: 'Em detalhe',
    lead: 'Um repertório full cycle, do pixel à plataforma.',
    rows: [
      ['Front-end', 'React (Redux, Redux-Saga, Context API) · Next.js · Vue.js · Angular · HTML5 (semântica, acessibilidade, SEO) · CSS3 (Flexbox, Grid, responsivo) · Micro-frontends · Design systems'],
      ['Back-end & APIs', 'Node.js (Express, NestJS, GraphQL) · Java (Spring) · RESTful APIs · VTEX IO'],
      ['Bancos de dados', 'MySQL · SQL Server · Oracle · MongoDB · Firestore · DynamoDB'],
      ['Cloud & DevOps', 'AWS · Azure · Google Cloud · CI/CD (Jenkins)'],
      ['Arquitetura', 'Design de software · Arquitetura de software e plataforma · System design · ArchiMate'],
      ['AI Engineering', 'Claude Code · Spec-Driven Development (SDD) · MCP · RAG · LLMs e agentes de IA'],
    ],
  },
  credentials: {
    education: 'Formação',
    degree: 'Bacharelado em Sistemas de Informação',
    degreeYears: '2011 — 2015',
    certifications: 'Certificações',
    certs: en.credentials.certs,
    languages: 'Idiomas',
    spoken: [
      ['Português', 'Nativo'],
      ['Inglês', 'Profissional completo'],
      ['Espanhol', 'Básico'],
    ],
  },
  contact: {
    label: 'Contato',
    headline: 'Tem um sistema para desenhar ou um time para liderar? Vamos conversar.',
    linkedin: 'LinkedIn',
    phone: 'Telefone',
    location: 'Localização',
    locationValue: 'São Paulo, SP — Brasil',
    builtWith: 'Desenhado no pen.dev · Feito com React',
  },
  tech: {
    stack: 'Stack',
    overview: 'Visão geral',
    concepts: 'Conceitos essenciais',
    conceptsLead: 'O que qualquer pessoa que trabalha com isso precisa entender',
    practice: 'Na prática',
    related: 'Relacionadas',
    usedAt: 'Onde usei',
    previous: 'Anterior',
    next: 'Próxima',
    language: 'Linguagem',
    tool: 'Ferramenta',
  },
}

export const messages: Record<Lang, Messages> = { en, pt }

export const CONTACT = {
  email: 'jobs.sergiotomas@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sergiottomas',
  linkedinLabel: 'linkedin.com/in/sergiottomas',
  phone: '+55 (11) 94462-0110',
  phoneHref: 'tel:+5511944620110',
}
