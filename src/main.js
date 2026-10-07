const { departments, navigation } = window.LFData;

const root = document.querySelector("#app");
const departmentOrder = Object.keys(departments);
let galleryState = null;

const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[character]));
const assetUrl = (path) => path.replace(/^\//, "./public/");
Object.values(departments).forEach(({ projects }) => projects.forEach((project) => {
  if (project.cover) project.cover = assetUrl(project.cover);
  if (project.gallery) project.gallery = project.gallery.map(assetUrl);
}));

const routePath = () => {
  const hash = location.hash.slice(1);
  return hash.startsWith("/") ? hash.split("#")[0] : "/";
};

const routeLink = (path, label, className = "") => `<a class="${className}" href="#${path}">${label}</a>`;
const servicePath = (slug, serviceSlug) => `/${slug}/servicos/${serviceSlug}`;

const accessibilityState = {
  lang: localStorage.getItem("lf-lang") || "pt",
  fontScale: Number(localStorage.getItem("lf-font-scale") || 1),
  contrast: localStorage.getItem("lf-contrast") === "high",
  reducedMotion: localStorage.getItem("lf-reduced-motion") === "on"
};

const translations = {
  pt: {
    panelTitle: "Acessibilidade",
    lang: "Idioma",
    text: "Texto",
    standard: "Padrão",
    highContrast: "Alto contraste",
    reducedMotion: "Sem animação",
    portal: "Portal de notícias",
    explore: "Explore",
    department: "Ver departamento",
    back: "Voltar ao início",
    ourWork: "Conheça nosso trabalho",
    ourStory: "Nossa história",
    journey: "Nossa jornada",
    teamField: "Nosso time em campo",
    teamIntro: "Uma equipe.",
    specialties: "Múltiplas especialidades.",
    ourFuture: "Da ideia à realização",
    impact: "Histórias reais.",
    impact2: "Impacto de verdade.",
    about: "Quem somos",
    aboutTitle: "Mais que uma agência.",
    aboutSubtitle: "Parceiros de jogo.",
    manifestation: "O esporte move o mundo.",
    manifestationSub: "A gente entra em campo para mover o esporte.",
    exhibition: "Trabalho que fala por si",
    projects: "Projetos",
    realized: "realizados.",
    quote: "Vamos conversar",
    contactText: "Conte o que você tem em mente. A gente entra em campo junto.",
    name: "Seu nome",
    email: "Seu e-mail",
    phone: "Telefone",
    message: "Mensagem",
    send: "Enviar mensagem",
    place: "Osasco, SP",
    whatWeDo: "O que fazemos",
    services: "SERVIÇOS",
    speak: "Fale com a equipe",
    time: "Gente que faz",
    knowTeam: "Conheça o",
    timeEnd: "time.",
    movement: "Em movimento",
    happened: "Por aqui, já aconteceu.",
    serviceIntro: "SERVIÇOS",
    noFoundTitle: "Perdemos essa bola",
    noFoundBody: "Este endereço não existe ou mudou de lugar.",
    backHome: "Voltar ao início",
    noPage: "PÁGINA NÃO ENCONTRADA",
    close: "Fechar",
    previous: "Foto anterior",
    next: "Próxima foto",
    exploreArea: "Explorar área",
    viewProjects: "Ver projetos",
    openGallery: "Abrir fotos de",
    heroBadge: "Marketing esportivo, feito no Brasil",
    heroText: "Estamos na",
    heroOutline: "linha de frente",
    heroSub: "Conectamos atletas, marcas e torcedores com ideias que saem do papel e entram em campo.",
    projectHighlight: "PROJETO EM DESTAQUE",
    projectHighlight2: "Projeto em destaque",
    ourHistory: "Nossa história",
    ourTime: "Nosso time em campo",
    speaking: "Vamos conversar",
    contactButton: "Fale com a gente",
    people: "Pessoas",
    now: "Agora",
    more: "Mais",
    openMenu: "Abrir menu",
    portalNews: "Portal de notícias",
    accessibility: "Acessibilidade",
    menu: "Menu",
    appName: "Linha de Frente"
  },
  en: {
    panelTitle: "Accessibility",
    lang: "Language",
    text: "Text",
    standard: "Default",
    highContrast: "High contrast",
    reducedMotion: "Reduce motion",
    portal: "News portal",
    explore: "Explore",
    department: "View department",
    back: "Back to home",
    ourWork: "Discover our work",
    ourStory: "Our story",
    journey: "Our journey",
    teamField: "Our team on the field",
    teamIntro: "One team.",
    specialties: "Multiple specialties.",
    ourFuture: "From idea to realization",
    impact: "Real stories.",
    impact2: "True impact.",
    about: "Who we are",
    aboutTitle: "More than an agency.",
    aboutSubtitle: "Game partners.",
    manifestation: "Sport moves the world.",
    manifestationSub: "We step onto the field to move sport.",
    exhibition: "Work that speaks for itself",
    projects: "Projects",
    realized: "completed.",
    quote: "Let’s talk",
    contactText: "Tell us about your idea. We’ll move together.",
    name: "Your name",
    email: "Your e-mail",
    phone: "Phone",
    message: "Message",
    send: "Send message",
    place: "Osasco, SP",
    whatWeDo: "What we do",
    services: "SERVICES",
    speak: "Talk to the team",
    time: "The people behind it",
    knowTeam: "Meet the",
    timeEnd: "team.",
    movement: "In motion",
    happened: "This is what we’ve done.",
    serviceIntro: "SERVICES",
    noFoundTitle: "We missed that one",
    noFoundBody: "This page doesn’t exist or has moved.",
    backHome: "Back to home",
    noPage: "PAGE NOT FOUND",
    close: "Close",
    previous: "Previous photo",
    next: "Next photo",
    exploreArea: "Explore area",
    viewProjects: "View projects",
    openGallery: "Open photos of",
    heroBadge: "Sports marketing, made in Brazil",
    heroText: "We are on the",
    heroOutline: "front line",
    heroSub: "We connect athletes, brands and fans through ideas that leave the page and hit the field.",
    projectHighlight: "FEATURED PROJECT",
    projectHighlight2: "Featured project",
    ourHistory: "Our story",
    ourTime: "Our team in action",
    speaking: "Let’s talk",
    contactButton: "Get in touch",
    people: "People",
    now: "Now",
    more: "More",
    openMenu: "Open menu",
    portalNews: "News portal",
    accessibility: "Accessibility",
    menu: "Menu",
    appName: "Linha de Frente"
  },
  es: {
    panelTitle: "Accesibilidad",
    lang: "Idioma",
    text: "Texto",
    standard: "Estándar",
    highContrast: "Alto contraste",
    reducedMotion: "Sin animación",
    portal: "Portal de noticias",
    explore: "Explorar",
    department: "Ver departamento",
    back: "Volver al inicio",
    ourWork: "Conoce nuestro trabajo",
    ourStory: "Nuestra historia",
    journey: "Nuestro recorrido",
    teamField: "Nuestro equipo en el campo",
    teamIntro: "Un equipo.",
    specialties: "Múltiples especialidades.",
    ourFuture: "De la idea a la ejecución",
    impact: "Historias reales.",
    impact2: "Impacto real.",
    about: "Quiénes somos",
    aboutTitle: "Más que una agencia.",
    aboutSubtitle: "Socios del juego.",
    manifestation: "El deporte mueve el mundo.",
    manifestationSub: "Entramos al campo para mover el deporte.",
    exhibition: "Trabajo que habla por sí solo",
    projects: "Proyectos",
    realized: "realizados.",
    quote: "Hablemos",
    contactText: "Cuéntanos tu idea. Vamos juntos.",
    name: "Tu nombre",
    email: "Tu correo",
    phone: "Teléfono",
    message: "Mensaje",
    send: "Enviar mensaje",
    place: "Osasco, SP",
    whatWeDo: "Qué hacemos",
    services: "SERVICIOS",
    speak: "Habla con el equipo",
    time: "Gente que hace",
    knowTeam: "Conoce al",
    timeEnd: "equipo.",
    movement: "En movimiento",
    happened: "Por aquí ya pasó.",
    serviceIntro: "SERVICIOS",
    noFoundTitle: "Perdimos esa pelota",
    noFoundBody: "Esta dirección no existe o cambió de lugar.",
    backHome: "Volver al inicio",
    noPage: "PÁGINA NO ENCONTRADA",
    close: "Cerrar",
    previous: "Foto anterior",
    next: "Siguiente foto",
    exploreArea: "Explorar área",
    viewProjects: "Ver proyectos",
    openGallery: "Abrir fotos de",
    heroBadge: "Marketing deportivo, hecho en Brasil",
    heroText: "Estamos en la",
    heroOutline: "línea de frente",
    heroSub: "Conectamos atletas, marcas y aficionados con ideas que salen del papel y entran al campo.",
    projectHighlight: "PROYECTO DESTACADO",
    projectHighlight2: "Proyecto destacado",
    ourHistory: "Nuestra historia",
    ourTime: "Nuestro equipo en acción",
    speaking: "Hablemos",
    contactButton: "Contáctanos",
    people: "Personas",
    now: "Ahora",
    more: "Más",
    openMenu: "Abrir menú",
    portalNews: "Portal de noticias",
    accessibility: "Accesibilidad",
    menu: "Menú",
    appName: "Línea de Frente"
  }
};

const t = (key) => translations[accessibilityState.lang]?.[key] || translations.pt[key] || key;

function applyAccessibilityState() {
  document.documentElement.lang = accessibilityState.lang;
  document.body.classList.toggle("dark-theme", localStorage.getItem("lf-theme") === "dark");
  document.body.classList.toggle("high-contrast", accessibilityState.contrast);
  document.body.classList.toggle("font-large", accessibilityState.fontScale >= 1.15);
  document.body.classList.toggle("font-xlarge", accessibilityState.fontScale >= 1.3);
  document.body.classList.toggle("reduced-motion", accessibilityState.reducedMotion);

  document.querySelectorAll(".chip[data-action='language']").forEach((button) => {
    const isSelected = button.dataset.lang === accessibilityState.lang;
    button.classList.toggle("chip-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  document.querySelectorAll(".chip[data-action='font-scale']").forEach((button) => {
    const isSelected = Number(button.dataset.value) === accessibilityState.fontScale;
    button.classList.toggle("chip-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  const contrastButton = document.querySelector("[data-action='contrast']");
  if (contrastButton) {
    contrastButton.classList.toggle("chip-active", accessibilityState.contrast);
    contrastButton.setAttribute("aria-pressed", String(accessibilityState.contrast));
  }

  const motionButton = document.querySelector("[data-action='reduced-motion']");
  if (motionButton) {
    motionButton.classList.toggle("chip-active", accessibilityState.reducedMotion);
    motionButton.setAttribute("aria-pressed", String(accessibilityState.reducedMotion));
  }
}

function renderHeader(path) {
  const activeSlug = path.split("/")[1];
  const portalLabel = t("portal");
  return `<header class="site-header"><nav class="nav-shell" aria-label="Navegação principal">
    <a class="wordmark" href="#/" aria-label="Linha de Frente, início"><img class="wordmark-mark" src="./public/brand-logo.png" alt=""><span>LINHA DE<br>FRENTE<span class="wordmark-dot">.</span></span></a>
    <div class="desktop-nav">${navigation.map(([label, href]) => {
      const slug = href.split("/")[1];
      const department = departments[slug];
      const translatedLabel = slug ? department?.nav || label : "Início";
      return `<div class="nav-item ${department ? "has-menu" : ""}"><a class="nav-link ${activeSlug === slug && slug ? "is-active" : ""}" href="#${href}">${escapeHtml(translatedLabel)}${department ? "<span class='nav-chevron'>⌄</span>" : ""}</a>${department ? `<div class="nav-dropdown"><div class="dropdown-heading"><span>${t("explore")} ${escapeHtml(translatedLabel)}</span>${routeLink(href, `${t("department")} →`)}</div><div class="dropdown-services">${department.services.map(([name, serviceSlug]) => routeLink(servicePath(slug, serviceSlug), escapeHtml(name))).join("")}</div></div>` : ""}</div>`;
    }).join("")}<a class="nav-link portal-link" href="https://portal-linha-de-frente.onrender.com/" target="_blank" rel="noopener noreferrer">${portalLabel} <span aria-hidden="true">↗</span></a></div>
    <div class="nav-actions">
      <div class="settings-wrap">
        <button class="icon-button accessibility-button" data-action="accessibility" aria-label="${t("accessibility")}" title="${t("accessibility")}"><span aria-hidden="true">A</span></button>
        <div class="settings-panel" hidden>
          <div class="settings-group">
            <span class="settings-label">${t("lang")}</span>
            <div class="settings-options language-options">
              <button class="chip ${accessibilityState.lang === "pt" ? "chip-active" : ""}" type="button" data-action="language" data-lang="pt" aria-pressed="${accessibilityState.lang === "pt"}">PT</button>
              <button class="chip ${accessibilityState.lang === "en" ? "chip-active" : ""}" type="button" data-action="language" data-lang="en" aria-pressed="${accessibilityState.lang === "en"}">EN</button>
              <button class="chip ${accessibilityState.lang === "es" ? "chip-active" : ""}" type="button" data-action="language" data-lang="es" aria-pressed="${accessibilityState.lang === "es"}">ES</button>
            </div>
          </div>
          <div class="settings-group">
            <span class="settings-label">${t("text")}</span>
            <div class="settings-options">
              <button class="chip ${accessibilityState.fontScale === 1 ? "chip-active" : ""}" type="button" data-action="font-scale" data-value="1" aria-pressed="${accessibilityState.fontScale === 1}">${t("standard")}</button>
              <button class="chip ${accessibilityState.fontScale === 1.15 ? "chip-active" : ""}" type="button" data-action="font-scale" data-value="1.15" aria-pressed="${accessibilityState.fontScale === 1.15}">A+</button>
              <button class="chip ${accessibilityState.fontScale === 1.3 ? "chip-active" : ""}" type="button" data-action="font-scale" data-value="1.3" aria-pressed="${accessibilityState.fontScale === 1.3}">A++</button>
            </div>
          </div>
          <div class="settings-group settings-inline">
            <button class="chip chip-toggle ${accessibilityState.contrast ? "chip-active" : ""}" type="button" data-action="contrast" aria-pressed="${accessibilityState.contrast}">${t("highContrast")}</button>
            <button class="chip chip-toggle ${accessibilityState.reducedMotion ? "chip-active" : ""}" type="button" data-action="reduced-motion" aria-pressed="${accessibilityState.reducedMotion}">${t("reducedMotion")}</button>
          </div>
        </div>
      </div>
      <button class="icon-button theme-button" data-action="theme" aria-label="Alternar tema" title="Alternar tema"><span class="theme-icon">☼</span></button>
      <button class="icon-button menu-button" data-action="menu" aria-label="${t("openMenu")}" aria-expanded="false"><span class="menu-glyph">☰</span></button>
    </div>
    <div class="mobile-panel" hidden>${navigation.map(([label, href]) => routeLink(href, escapeHtml(label), "mobile-link")).join("")}<a class="mobile-link portal-link" href="https://portal-linha-de-frente.onrender.com/" target="_blank" rel="noopener noreferrer">${portalLabel} ↗</a></div>
  </nav></header>`;
}

function renderFooter() {
  const emailLabel = "E-mail";
  return `<footer class="site-footer" id="contato"><div class="footer-top"><div><span class="eyebrow">${t("quote")}</span><h2>O próximo projeto<br>começa <span class="accent-text">aqui.</span></h2><p>${t("contactText")}</p></div><form class="contact-form" id="contact-form"><div class="form-row"><label>${t("name")}<input name="name" autocomplete="name" required placeholder="Como podemos chamar você?"></label><label>${t("email")}<input name="email" type="email" autocomplete="email" required placeholder="voce@email.com"></label></div><label>${t("phone")} <span class="optional">(opcional)</span><input name="phone" type="tel" autocomplete="tel" placeholder="(00) 00000-0000"></label><label>${t("message")}<textarea name="message" rows="3" required placeholder="Fale um pouco sobre seu projeto"></textarea></label><button class="button button-primary form-submit" type="submit">${t("send")} <span>↗</span></button><p class="form-note" aria-live="polite"></p></form></div><div class="footer-bottom"><a class="wordmark" href="#/" aria-label="Linha de Frente, início"><img class="wordmark-mark" src="./public/brand-logo.png" alt=""><span>LINHA DE<br>FRENTE<span class="wordmark-dot">.</span></span></a><div class="footer-meta"><a href="https://portal-linha-de-frente.onrender.com/" target="_blank" rel="noopener noreferrer">${t("portal")} ↗</a><a href="https://instagram.com/linhadefrentemkt" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="mailto:linhadefrente.espro@gmail.com">${emailLabel} ↗</a><span>${t("place")}</span><span>© ${new Date().getFullYear()} Linha de Frente</span></div></div></footer>`;
}

function renderHome() {
  const featured = departments.marketing.projects[1];
  const departmentCards = Object.entries(departments).map(([slug, department], index) => `<a class="department-card reveal" href="#/${slug}"><div class="department-card-top"><span class="department-icon">${department.icon}</span><span class="card-index">0${index + 1}</span></div><h3>${escapeHtml(department.nav)}</h3><p>${escapeHtml(department.description.split(".")[0])}.</p><span class="card-arrow">${t("exploreArea")} <b>↗</b></span></a>`).join("");
  return `<main>
    <section class="hero"><div class="hero-copy"><span class="eyebrow"><i></i> ${t("heroBadge")}</span><h1>${t("heroText")}<br><span class="hero-outline">${t("heroOutline")}</span><br>do esporte<span class="accent-text">.</span></h1><p class="hero-description">${t("heroSub")}</p><div class="hero-actions">${routeLink("/marketing", `${t("ourWork")} <span>↗</span>`, "button button-primary")}<a class="text-link" href="#sobre-nos">${t("ourStory")} <span>↓</span></a></div><div class="hero-footnote"><span class="live-dot"></span> ${t("people")}</div></div><div class="hero-visual"><img src="${encodeURI(featured.cover)}" alt="Equipe reunida no evento Janeiro Branco" fetchpriority="high"><div class="hero-image-shade"></div><div class="hero-stamp"><span>LF</span><small>ESPORTE<br>EM MOVIMENTO</small></div><div class="hero-caption"><span>01 / ${t("projectHighlight")}</span><span>JANEIRO BRANCO · 2026</span></div><div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div></div><div class="hero-index">01 — 05</div></section>
    <section class="department-section section-pad" id="areas"><div class="section-heading reveal"><div><span class="eyebrow">${t("teamField")}</span><h2>${t("teamIntro")}<br><span class="accent-text">${t("specialties")}</span></h2></div><p>Estratégia, criação e execução no mesmo time. Conheça as áreas que fazem cada projeto acontecer.</p></div><div class="department-grid">${departmentCards}</div></section>
    <section class="feature-project"><div class="feature-image"><img src="${encodeURI(featured.cover)}" alt="Registro do projeto Janeiro Branco" loading="lazy"><span class="image-label">${t("projectHighlight")} · 2026</span></div><div class="feature-copy"><span class="eyebrow">${t("ourFuture")}</span><h2>${t("impact")}<br><span class="accent-text">${t("impact2")}</span></h2><p>Dos bastidores às grandes ideias, cada projeto aproxima pessoas e transforma a energia do esporte em experiências que ficam.</p>${routeLink("/marketing", `${t("viewProjects")} <span>↗</span>`, "button button-outline")}</div></section>
    <section class="about-section section-pad" id="sobre-nos"><div class="about-intro reveal"><span class="eyebrow">${t("about")}</span><h2>${t("aboutTitle")}<br><span class="accent-text">${t("aboutSubtitle")}</span></h2><p>Somos uma equipe brasileira que acredita na força do esporte para conectar pessoas, marcas e comunidades. Unimos criatividade, tecnologia e colaboração para fazer cada iniciativa valer.</p><a class="text-link" href="#contato">${t("speaking")} <span>↗</span></a></div><div class="about-aside"><div class="about-number">01<span>/</span>05</div><p>Uma estrutura colaborativa, com autonomia para criar e disposição para fazer acontecer.</p><div class="about-rule"></div><div class="values-list"><div><span>01</span><strong>Paixão pelo jogo</strong></div><div><span>02</span><strong>Inovação com propósito</strong></div><div><span>03</span><strong>Excelência em equipe</strong></div></div></div></section>
    <section class="manifesto"><span class="manifesto-mark">“</span><p>${t("manifestation")}<br><span>${t("manifestationSub")}</span></p><span class="manifesto-signature">LINHA DE FRENTE · OSASCO, SP</span></section>
    <section class="journey-section section-pad"><div class="section-heading reveal"><div><span class="eyebrow">${t("journey")}</span><h2>Passo a passo.<br><span class="accent-text">Sempre em movimento.</span></h2></div><p>Uma história construída por pessoas, projetos e vontade de fazer diferente.</p></div><ol class="journey-list"><li><span>OUT · 2025</span><strong>Nasce a Linha de Frente</strong><p>Fundação da Linha de Frente Esportiva.</p></li><li><span>NOV · 2025</span><strong>Novas áreas, um só time</strong><p>Estruturação dos departamentos e frentes de trabalho.</p></li><li><span>JAN · 2026</span><strong>Primeiro evento e novo site</strong><p>Um novo espaço para compartilhar o trabalho e a nossa história.</p></li><li><span>AGORA</span><strong>O próximo capítulo é coletivo</strong><p>Mais projetos, mais conexões e novas possibilidades.</p></li></ol></section>
  </main>`;
}

function renderProject(project, index) {
  const gallery = project.gallery || [];
  const image = project.cover ? `<img src="${encodeURI(project.cover)}" alt="${escapeHtml(project.title)}" loading="lazy">` : `<div class="project-placeholder"><span>LF</span></div>`;
  return `<article class="project-card reveal" ${gallery.length ? `data-gallery="${index}" tabindex="0" role="button" aria-label="Abrir fotos de ${escapeHtml(project.title)}"` : ""}><div class="project-image">${image}<span class="project-category">${escapeHtml(project.category)}</span>${gallery.length ? `<span class="photo-count">${gallery.length} fotos ↗</span>` : ""}</div><div class="project-info"><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.description)}</p></div></article>`;
}

function renderDepartment(slug) {
  const department = departments[slug];
  const position = departmentOrder.indexOf(slug);
  const next = departmentOrder[(position + 1) % departmentOrder.length];
  return `<main class="inner-page"><div class="page-wrap"><a class="back-link" href="#/"><span>←</span> Voltar ao início</a><section class="department-hero"><div class="department-intro"><span class="department-icon department-icon-large">${department.icon}</span><span class="eyebrow">DEPARTAMENTO · 0${position + 1}</span><h1>${escapeHtml(department.title)}<span class="accent-text">.</span></h1><h2>${escapeHtml(department.subtitle)}</h2><p>${escapeHtml(department.description)}</p><a class="text-link" href="#contato">Fale com a equipe <span>↗</span></a></div><aside class="service-panel"><div class="panel-heading"><span>O que fazemos</span><span>${String(department.services.length).padStart(2, "0")} SERVIÇOS</span></div><div class="service-list">${department.services.map(([name, serviceSlug], index) => `<a href="#${servicePath(slug, serviceSlug)}"><span class="service-index">${String(index + 1).padStart(2, "0")}</span><span>${escapeHtml(name)}</span><b>↗</b></a>`).join("")}</div></aside></section><section class="portfolio-section"><div class="section-heading"><div><span class="eyebrow">Trabalho que fala por si</span><h2>Projetos <span class="accent-text">realizados.</span></h2></div><p>Um recorte do que já colocamos em movimento.</p></div><div class="project-grid">${department.projects.map(renderProject).join("")}</div></section><section class="team-section"><div class="team-heading"><span class="eyebrow">Gente que faz</span><h2>Conheça o <span class="accent-text">time.</span></h2><p>Talentos diferentes, trabalhando na mesma direção.</p></div><div class="team-grid">${department.team.map((member, index) => { const [name, role] = member.split("|"); return `<article class="team-member"><span class="team-number">${String(index + 1).padStart(2, "0")}</span><div><h3>${escapeHtml(name)}</h3><p>${escapeHtml(role)}</p></div></article>`; }).join("")}</div></section><section class="department-timeline"><span class="eyebrow">Em movimento</span><h2>Por aqui, já aconteceu.</h2><div class="timeline-list">${department.timeline.map(([date, title], index) => `<div class="timeline-item"><span>${escapeHtml(date)}</span><i></i><div><b>${escapeHtml(title)}</b><small>Etapa ${String(index + 1).padStart(2, "0")}</small></div></div>`).join("")}</div></section><a class="next-department" href="#/${next}"><span>PRÓXIMO DEPARTAMENTO</span><strong>${escapeHtml(departments[next].title)} <b>↗</b></strong></a></div></main>`;
}

function renderService(slug, serviceSlug) {
  const department = departments[slug];
  const service = department.services.find(([, candidate]) => candidate === serviceSlug);
  if (!service) return renderNotFound();
  const [name] = service;
  const departmentPath = `/${slug}`;
  const intro = `${name} é parte de uma atuação integrada que combina conhecimento do mercado esportivo, estratégia e execução próxima. Nossa equipe entende os objetivos do projeto para desenvolver uma solução sob medida.`;
  const features = ["Planejamento alinhado aos objetivos do projeto", "Estratégia personalizada para o contexto esportivo", "Execução colaborativa com acompanhamento próximo", "Análise de resultados e próximos passos"];
  const benefits = ["Comunicação mais relevante com o público", "Decisões orientadas por objetivos claros", "Uma experiência consistente em cada etapa"];
  return `<main class="inner-page"><div class="page-wrap service-page"><a class="back-link" href="#${departmentPath}"><span>←</span> Voltar para ${escapeHtml(department.nav)}</a><section class="service-hero"><span class="department-icon department-icon-large">${department.icon}</span><span class="eyebrow">${escapeHtml(department.title)} · SERVIÇOS</span><h1>${escapeHtml(name)}<span class="accent-text">.</span></h1><p>${escapeHtml(intro)}</p></section><section class="service-detail-grid"><div><span class="eyebrow">01 / NOSSA ATUAÇÃO</span><h2>O que oferecemos</h2>${features.map((feature, i) => `<div class="detail-row"><span>0${i + 1}</span><p>${escapeHtml(feature)}</p></div>`).join("")}</div><div><span class="eyebrow">02 / RESULTADOS</span><h2>Benefícios</h2>${benefits.map((benefit, i) => `<div class="benefit-row"><i>✓</i><p>${escapeHtml(benefit)}</p></div>`).join("")}</div></section><section class="service-cta"><div><span class="eyebrow">Vamos fazer acontecer</span><h2>Tem um projeto em mente?</h2></div><a class="button button-primary" href="#contato">Fale com a gente <span>↗</span></a></section></div></main>`;
}

function renderNotFound() {
  return `<main class="inner-page"><section class="not-found"><span class="eyebrow">404 · ${t("noPage")}</span><h1>${t("noFoundTitle")}<span class="accent-text">.</span></h1><p>${t("noFoundBody")}</p><a class="button button-primary" href="#/">${t("backHome")} <span>↗</span></a></section></main>`;
}

function render() {
  const path = routePath();
  const segments = path.split("/").filter(Boolean);
  const slug = segments[0];
  let content = "";
  if (!segments.length) content = renderHome();
  else if (departments[slug] && segments.length === 1) content = renderDepartment(slug);
  else if (departments[slug] && segments[1] === "servicos" && segments[2]) content = renderService(slug, segments[2]);
  else content = renderNotFound();
  root.innerHTML = `${renderHeader(path)}${content}${renderFooter()}${galleryState ? renderGallery() : ""}`;
  applyAccessibilityState();
  document.title = segments.length ? `${departments[slug]?.title || "Página não encontrada"} | Linha de Frente` : "Linha de Frente | Marketing Esportivo";
  observeReveals();
  if (location.hash.includes("#contato")) requestAnimationFrame(() => document.querySelector("#contato")?.scrollIntoView());
}

function renderGallery() {
  const { images, index, title } = galleryState;
  return `<div class="lightbox" data-action="close-gallery" role="dialog" aria-modal="true" aria-label="Galeria de ${escapeHtml(title)}"><button class="lightbox-close" data-action="close-gallery" aria-label="Fechar">×</button>${images.length > 1 ? `<button class="lightbox-arrow lightbox-prev" data-action="previous-image" aria-label="Foto anterior">←</button><button class="lightbox-arrow lightbox-next" data-action="next-image" aria-label="Próxima foto">→</button>` : ""}<figure><img src="${encodeURI(images[index])}" alt="${escapeHtml(title)} · foto ${index + 1}"><figcaption>${escapeHtml(title)} <span>${index + 1} / ${images.length}</span></figcaption></figure></div>`;
}

function observeReveals() {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function openGallery(index) {
  const slug = routePath().split("/")[1];
  const project = departments[slug]?.projects[index];
  if (!project?.gallery?.length) return;
  galleryState = { images: project.gallery, index: 0, title: project.title };
  render();
}

window.addEventListener("hashchange", () => {
  galleryState = null;
  render();
  window.scrollTo(0, 0);
});

document.addEventListener("click", (event) => {
  const sectionLink = event.target.closest('a[href^="#"]:not([href^="#/"])');
  if (sectionLink) {
    event.preventDefault();
    document.getElementById(sectionLink.getAttribute("href").slice(1))?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  const action = actionTarget?.dataset.action;
  const panel = document.querySelector(".settings-panel");

  if (action === "menu") {
    const mobilePanel = document.querySelector(".mobile-panel");
    const button = document.querySelector(".menu-button");
    const isOpen = mobilePanel.hidden;
    mobilePanel.hidden = !isOpen;
    button.setAttribute("aria-expanded", String(isOpen));
    button.querySelector(".menu-glyph").textContent = isOpen ? "×" : "☰";
  }
  if (action === "theme") {
    const dark = !document.body.classList.contains("dark-theme");
    document.body.classList.toggle("dark-theme", dark);
    localStorage.setItem("lf-theme", dark ? "dark" : "light");
  }
  if (action === "accessibility") {
    if (panel) panel.hidden = !panel.hidden;
  }
  if (action === "language") {
    accessibilityState.lang = actionTarget.dataset.lang;
    localStorage.setItem("lf-lang", accessibilityState.lang);
    render();
  }
  if (action === "font-scale") {
    accessibilityState.fontScale = Number(actionTarget.dataset.value);
    localStorage.setItem("lf-font-scale", String(accessibilityState.fontScale));
    applyAccessibilityState();
  }
  if (action === "contrast") {
    accessibilityState.contrast = !accessibilityState.contrast;
    localStorage.setItem("lf-contrast", accessibilityState.contrast ? "high" : "normal");
    applyAccessibilityState();
  }
  if (action === "reduced-motion") {
    accessibilityState.reducedMotion = !accessibilityState.reducedMotion;
    localStorage.setItem("lf-reduced-motion", accessibilityState.reducedMotion ? "on" : "off");
    applyAccessibilityState();
  }
  if (action === "close-gallery" && event.target.matches(".lightbox")) {
    galleryState = null;
    render();
  }
  if ((action === "next-image" || action === "previous-image") && galleryState) {
    event.stopPropagation();
    const offset = action === "next-image" ? 1 : -1;
    galleryState.index = (galleryState.index + offset + galleryState.images.length) % galleryState.images.length;
    render();
  }

  if (!actionTarget && !event.target.closest(".settings-panel")) {
    const settingsPanel = document.querySelector(".settings-panel");
    if (settingsPanel && !settingsPanel.hidden) settingsPanel.hidden = true;
  }

  const projectCard = event.target.closest("[data-gallery]");
  if (projectCard) openGallery(Number(projectCard.dataset.gallery));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && galleryState) {
    galleryState = null;
    render();
  }
  if ((event.key === "ArrowRight" || event.key === "ArrowLeft") && galleryState) {
    galleryState.index = (galleryState.index + (event.key === "ArrowRight" ? 1 : -1) + galleryState.images.length) % galleryState.images.length;
    render();
  }
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-gallery]")) {
    event.preventDefault();
    openGallery(Number(event.target.dataset.gallery));
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id !== "contact-form") return;
  event.preventDefault();
  const form = new FormData(event.target);
  const name = form.get("name");
  const subject = encodeURIComponent(`Contato de ${name}`);
  const body = encodeURIComponent(`Nome: ${name}\nEmail: ${form.get("email")}\nTelefone: ${form.get("phone")}\n\nMensagem:\n${form.get("message")}`);
  const note = event.target.querySelector(".form-note");
  note.textContent = "Abrindo seu aplicativo de e-mail para concluir o envio.";
  window.location.href = `mailto:linhadefrente.espro@gmail.com?subject=${subject}&body=${body}`;
  event.target.reset();
});

render();
