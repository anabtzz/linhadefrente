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

function applyAccessibilityState() {
  document.documentElement.lang = accessibilityState.lang;
  document.body.classList.toggle("dark-theme", localStorage.getItem("lf-theme") === "dark");
  document.body.classList.toggle("high-contrast", accessibilityState.contrast);
  document.body.classList.toggle("font-large", accessibilityState.fontScale >= 1.15);
  document.body.classList.toggle("font-xlarge", accessibilityState.fontScale >= 1.3);
  document.body.classList.toggle("reduced-motion", accessibilityState.reducedMotion);

  const langButton = document.querySelector("[data-action='language']");
  if (langButton) {
    langButton.textContent = accessibilityState.lang.toUpperCase();
    langButton.setAttribute("aria-label", `Idioma atual: ${accessibilityState.lang.toUpperCase()}`);
  }
}

function renderHeader(path) {
  const activeSlug = path.split("/")[1];
  return `<header class="site-header"><nav class="nav-shell" aria-label="Navegação principal">
    <a class="wordmark" href="#/" aria-label="Linha de Frente, início"><img class="wordmark-mark" src="./public/brand-logo.png" alt=""><span>LINHA DE<br>FRENTE<span class="wordmark-dot">.</span></span></a>
    <div class="desktop-nav">${navigation.map(([label, href]) => {
      const slug = href.split("/")[1];
      const department = departments[slug];
      return `<div class="nav-item ${department ? "has-menu" : ""}"><a class="nav-link ${activeSlug === slug && slug ? "is-active" : ""}" href="#${href}">${escapeHtml(label)}${department ? "<span class='nav-chevron'>⌄</span>" : ""}</a>${department ? `<div class="nav-dropdown"><div class="dropdown-heading"><span>Explore ${escapeHtml(label)}</span>${routeLink(href, "Ver departamento →")}</div><div class="dropdown-services">${department.services.map(([name, serviceSlug]) => routeLink(servicePath(slug, serviceSlug), escapeHtml(name))).join("")}</div></div>` : ""}</div>`;
    }).join("")}<a class="nav-link portal-link" href="https://portal-linha-de-frente.onrender.com/" target="_blank" rel="noopener noreferrer">Portal de notícias <span aria-hidden="true">↗</span></a></div>
    <div class="nav-actions">
      <div class="settings-wrap">
        <button class="icon-button accessibility-button" data-action="accessibility" aria-label="Abrir painel de acessibilidade" title="Acessibilidade"><span aria-hidden="true">A</span></button>
        <div class="settings-panel" hidden>
          <div class="settings-group">
            <span class="settings-label">Idioma</span>
            <div class="settings-options language-options">
              <button class="chip chip-active" type="button" data-action="language" data-lang="pt" aria-pressed="true">PT</button>
              <button class="chip" type="button" data-action="language" data-lang="en" aria-pressed="false">EN</button>
              <button class="chip" type="button" data-action="language" data-lang="es" aria-pressed="false">ES</button>
            </div>
          </div>
          <div class="settings-group">
            <span class="settings-label">Texto</span>
            <div class="settings-options">
              <button class="chip" type="button" data-action="font-scale" data-value="1">Padrão</button>
              <button class="chip" type="button" data-action="font-scale" data-value="1.15">A+</button>
              <button class="chip" type="button" data-action="font-scale" data-value="1.3">A++</button>
            </div>
          </div>
          <div class="settings-group settings-inline">
            <button class="chip chip-toggle" type="button" data-action="contrast" aria-pressed="false">Alto contraste</button>
            <button class="chip chip-toggle" type="button" data-action="reduced-motion" aria-pressed="false">Sem animação</button>
          </div>
        </div>
      </div>
      <button class="icon-button theme-button" data-action="theme" aria-label="Alternar tema" title="Alternar tema"><span class="theme-icon">☼</span></button>
      <button class="icon-button menu-button" data-action="menu" aria-label="Abrir menu" aria-expanded="false"><span class="menu-glyph">☰</span></button>
    </div>
    <div class="mobile-panel" hidden>${navigation.map(([label, href]) => routeLink(href, escapeHtml(label), "mobile-link")).join("")}<a class="mobile-link portal-link" href="https://portal-linha-de-frente.onrender.com/" target="_blank" rel="noopener noreferrer">Portal de notícias ↗</a></div>
  </nav></header>`;
}

function renderFooter() {
  return `<footer class="site-footer" id="contato"><div class="footer-top"><div><span class="eyebrow">Vamos conversar</span><h2>O próximo projeto<br>começa <span class="accent-text">aqui.</span></h2><p>Conte o que você tem em mente. A gente entra em campo junto.</p></div><form class="contact-form" id="contact-form"><div class="form-row"><label>Seu nome<input name="name" autocomplete="name" required placeholder="Como podemos chamar você?"></label><label>Seu e-mail<input name="email" type="email" autocomplete="email" required placeholder="voce@email.com"></label></div><label>Telefone <span class="optional">(opcional)</span><input name="phone" type="tel" autocomplete="tel" placeholder="(00) 00000-0000"></label><label>Mensagem<textarea name="message" rows="3" required placeholder="Fale um pouco sobre seu projeto"></textarea></label><button class="button button-primary form-submit" type="submit">Enviar mensagem <span>↗</span></button><p class="form-note" aria-live="polite"></p></form></div><div class="footer-bottom"><a class="wordmark" href="#/" aria-label="Linha de Frente, início"><img class="wordmark-mark" src="./public/brand-logo.png" alt=""><span>LINHA DE<br>FRENTE<span class="wordmark-dot">.</span></span></a><div class="footer-meta"><a href="https://portal-linha-de-frente.onrender.com/" target="_blank" rel="noopener noreferrer">Portal de notícias ↗</a><a href="https://instagram.com/linhadefrentemkt" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="mailto:linhadefrente.espro@gmail.com">E-mail ↗</a><span>Osasco, SP</span><span>© ${new Date().getFullYear()} Linha de Frente</span></div></div></footer>`;
}

function renderHome() {
  const featured = departments.marketing.projects[1];
  const departmentCards = Object.entries(departments).map(([slug, department], index) => `<a class="department-card reveal" href="#/${slug}"><div class="department-card-top"><span class="department-icon">${department.icon}</span><span class="card-index">0${index + 1}</span></div><h3>${escapeHtml(department.nav)}</h3><p>${escapeHtml(department.description.split(".")[0])}.</p><span class="card-arrow">Explorar área <b>↗</b></span></a>`).join("");
  return `<main>
    <section class="hero"><div class="hero-copy"><span class="eyebrow"><i></i> Marketing esportivo, feito no Brasil</span><h1>Estamos na<br><span class="hero-outline">linha de frente</span><br>do esporte<span class="accent-text">.</span></h1><p class="hero-description">Conectamos atletas, marcas e torcedores com ideias que saem do papel e entram em campo.</p><div class="hero-actions">${routeLink("/marketing", "Conheça nosso trabalho <span>↗</span>", "button button-primary")}<a class="text-link" href="#sobre-nos">Nossa história <span>↓</span></a></div><div class="hero-footnote"><span class="live-dot"></span> Criatividade, estratégia e paixão pelo jogo</div></div><div class="hero-visual"><img src="${encodeURI(featured.cover)}" alt="Equipe reunida no evento Janeiro Branco" fetchpriority="high"><div class="hero-image-shade"></div><div class="hero-stamp"><span>LF</span><small>ESPORTE<br>EM MOVIMENTO</small></div><div class="hero-caption"><span>01 / PROJETOS EM CAMPO</span><span>JANEIRO BRANCO · 2026</span></div><div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div></div><div class="hero-index">01 — 05</div></section>
    <section class="department-section section-pad" id="areas"><div class="section-heading reveal"><div><span class="eyebrow">Nosso time em campo</span><h2>Uma equipe.<br><span class="accent-text">Múltiplas especialidades.</span></h2></div><p>Estratégia, criação e execução no mesmo time. Conheça as áreas que fazem cada projeto acontecer.</p></div><div class="department-grid">${departmentCards}</div></section>
    <section class="feature-project"><div class="feature-image"><img src="${encodeURI(featured.cover)}" alt="Registro do projeto Janeiro Branco" loading="lazy"><span class="image-label">PROJETO EM DESTAQUE · 2026</span></div><div class="feature-copy"><span class="eyebrow">Da ideia à realização</span><h2>Histórias reais.<br><span class="accent-text">Impacto de verdade.</span></h2><p>Dos bastidores às grandes ideias, cada projeto aproxima pessoas e transforma a energia do esporte em experiências que ficam.</p>${routeLink("/marketing", "Ver projetos <span>↗</span>", "button button-outline")}</div></section>
    <section class="about-section section-pad" id="sobre-nos"><div class="about-intro reveal"><span class="eyebrow">Quem somos</span><h2>Mais que uma agência.<br><span class="accent-text">Parceiros de jogo.</span></h2><p>Somos uma equipe brasileira que acredita na força do esporte para conectar pessoas, marcas e comunidades. Unimos criatividade, tecnologia e colaboração para fazer cada iniciativa valer.</p><a class="text-link" href="#contato">Vamos conversar <span>↗</span></a></div><div class="about-aside"><div class="about-number">01<span>/</span>05</div><p>Uma estrutura colaborativa, com autonomia para criar e disposição para fazer acontecer.</p><div class="about-rule"></div><div class="values-list"><div><span>01</span><strong>Paixão pelo jogo</strong></div><div><span>02</span><strong>Inovação com propósito</strong></div><div><span>03</span><strong>Excelência em equipe</strong></div></div></div></section>
    <section class="manifesto"><span class="manifesto-mark">“</span><p>O esporte move o mundo.<br><span>A gente entra em campo para mover o esporte.</span></p><span class="manifesto-signature">LINHA DE FRENTE · OSASCO, SP</span></section>
    <section class="journey-section section-pad"><div class="section-heading reveal"><div><span class="eyebrow">Nossa jornada</span><h2>Passo a passo.<br><span class="accent-text">Sempre em movimento.</span></h2></div><p>Uma história construída por pessoas, projetos e vontade de fazer diferente.</p></div><ol class="journey-list"><li><span>OUT · 2025</span><strong>Nasce a Linha de Frente</strong><p>Fundação da Linha de Frente Esportiva.</p></li><li><span>NOV · 2025</span><strong>Novas áreas, um só time</strong><p>Estruturação dos departamentos e frentes de trabalho.</p></li><li><span>JAN · 2026</span><strong>Primeiro evento e novo site</strong><p>Um novo espaço para compartilhar o trabalho e a nossa história.</p></li><li><span>AGORA</span><strong>O próximo capítulo é coletivo</strong><p>Mais projetos, mais conexões e novas possibilidades.</p></li></ol></section>
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
  return `<main class="inner-page"><section class="not-found"><span class="eyebrow">404 · PÁGINA NÃO ENCONTRADA</span><h1>Perdemos essa bola<span class="accent-text">.</span></h1><p>Este endereço não existe ou mudou de lugar.</p><a class="button button-primary" href="#/">Voltar ao início <span>↗</span></a></section></main>`;
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

  const action = event.target.closest("[data-action]")?.dataset.action;
  const actionTarget = event.target.closest("[data-action]");
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
    applyAccessibilityState();
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
    actionTarget.setAttribute("aria-pressed", String(accessibilityState.contrast));
  }
  if (action === "reduced-motion") {
    accessibilityState.reducedMotion = !accessibilityState.reducedMotion;
    localStorage.setItem("lf-reduced-motion", accessibilityState.reducedMotion ? "on" : "off");
    applyAccessibilityState();
    actionTarget.setAttribute("aria-pressed", String(accessibilityState.reducedMotion));
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
