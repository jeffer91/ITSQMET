/* Catálogo único de aplicaciones ITSQMET.
   Los accesos rápidos apuntan a registros de este catálogo: nunca suman duplicados. */
const groups = [
  {
    id: "estudiantes",
    name: "Estudiantes",
    icon: "student",
    description: "Trámites y consultas para estudiantes",
    featured: true,
    sections: [
      {
        name: "Titulación estudiantil",
        description: "Accede directamente a tus trámites de titulación",
        apps: [
          { id: "sede-estudiantes", name: "Elegir sede del Examen Complexivo", description: "Selecciona la sede donde rendirás el Examen Complexivo.", url: "https://jeffer91.github.io/sedes/estudiante/", icon: "location", badge: "Examen Complexivo", aliases: ["sede", "sedes", "campus", "donde rindo", "lugar de examen", "seleccionar sede", "elegir sede", "complexivo estudiante"] },
          { id: "titulo-articulo", name: "Título de Artículo Académico", description: "Registra y consulta tu propuesta de título de artículo académico.", url: "https://jeffer91.github.io/titulos/estudiantes/estudiante.html", icon: "article", badge: "Estudiantes", aliases: ["presentar titulo", "propuesta articulo", "investigacion formativa"] },
          { id: "titulo-trabajo", name: "Título de Trabajo de Titulación", description: "Registra y consulta tu propuesta de trabajo de titulación.", url: "https://titulos.pages.dev/trabajo-titulacion/", icon: "document", badge: "Estudiantes", aliases: ["propuesta", "proyecto", "trabajo de grado"] }
        ]
      }
    ]
  },
  {
    id: "titulacion",
    name: "Titulación y coordinación",
    icon: "graduation",
    description: "Revisión de títulos, planificación y gestión de procesos",
    sections: [
      {
        name: "Revisión de propuestas",
        apps: [
          { id: "revision-coordinadores", name: "Revisión de Coordinadores", description: "Validación inicial de propuestas de títulos.", url: "https://jeffer91.github.io/titulos/coordinadores/coordinador.html", icon: "users", badge: "Coordinación", aliases: ["coordinador", "aprobar titulo"] },
          { id: "revision-investigacion", name: "Revisión de Investigación", description: "Revisión y aprobación de propuestas por Investigación.", url: "https://jeffer91.github.io/titulos/investigadores/investigador.html", icon: "research", badge: "Investigación", aliases: ["investigador", "aprobar articulo"] },
          { id: "admin-titulos", name: "Administración de Títulos", description: "Gestión, seguimiento e historial de propuestas.", url: "https://jeffer91.github.io/titulos/administradores/administrador.html", icon: "shield", badge: "Administración", aliases: ["administrador", "titulos", "historial"] }
        ]
      },
      {
        name: "Planificación y gestión",
        apps: [
          { id: "planificacion", name: "Planificación de Titulación", description: "Cronogramas para Complexivo, Trabajo de Titulación y Artículo Académico.", url: "https://jeffer91.github.io/doc-tit/", icon: "calendar", badge: "Planificación", aliases: ["cronograma", "calendario", "fechas", "documentacion", "complexivo"] },
          { id: "sede-admin", name: "Administrar sedes del Examen Complexivo", description: "Consulta y gestiona las sedes seleccionadas por estudiantes.", url: "https://jeffer91.github.io/sedes/administrador/", icon: "location", badge: "Administración", aliases: ["sede", "sedes", "campus", "seleccion sedes", "gestion de sedes", "complexivo administrador"] },
          { id: "informes-titulacion", name: "Generador de Informes de Titulación", description: "Crea documentos e informes institucionales de titulación.", url: "https://jeffer91.github.io/Informtit/", icon: "report", badge: "Informes", aliases: ["informe", "reporte", "documentos"] }
        ]
      }
    ]
  },
  {
    id: "academica",
    name: "Gestión académica y docente",
    icon: "academic",
    description: "Currículo, formación docente y requisitos académicos",
    sections: [
      {
        name: "Gestión y seguimiento",
        apps: [
          { id: "curriculo", name: "Gestión Curricular", description: "Consulta y gestión de currículo, mallas, fichas y estadísticas.", url: "https://jeffer91.github.io/curriculo/", icon: "academic", aliases: ["curriculo", "mallas", "materias", "carreras"] },
          { id: "capacitacion", name: "Capacitación Docente", description: "Organización y seguimiento de la capacitación docente.", url: "https://capacitacindocenteitsqmet.netlify.app/index.html", icon: "training", aliases: ["formacion docente", "profesores", "cursos"] },
          { id: "documentos-formacion", name: "Documentos de Formación", description: "Diagnóstico, plan de formación e informe de cumplimiento.", url: "https://jeffer91.github.io/docformacion/", icon: "report", aliases: ["dnf", "deteccion necesidades", "capacitacion", "plan"] },
          { id: "requisitos", name: "Requisitos Académicos", description: "Carga, revisión y gestión de requisitos de titulación.", url: "https://jeffer91.github.io/requisitos/Maqueta/maq-index.html", icon: "checklist", aliases: ["requisitos", "habilitados", "documentos", "revision", "cumplimiento"] }
        ]
      }
    ]
  },
  {
    id: "otros",
    name: "Otros servicios",
    icon: "tools",
    description: "Herramientas académicas y Club de Fútbol ITSQMET",
    sections: [
      {
        name: "Herramientas académicas",
        apps: [
          { id: "antiplagio", name: "Aplicación Antiplagio", description: "Sistema de revisión antiplagio.", url: "https://jeffer91.github.io/Antiplagio-ITSQMET/", icon: "scan", aliases: ["plagio", "revisor", "similitud"] },
          { id: "antiplagio-repo", name: "Repositorio Antiplagio", description: "Código fuente y mantenimiento en GitHub.", url: "https://github.com/jeffer91/Antiplagio-ITSQMET", icon: "code", badge: "GitHub", aliases: ["antiplagio fuente", "codigo"] }
        ]
      },
      {
        name: "Club de fútbol",
        apps: [
          { id: "club", name: "Club de Fútbol", description: "Portal principal del campeonato institucional.", url: "https://jeffer91.github.io/Club-futbol-ITSQMET-/", icon: "football", badge: "Principal", aliases: ["campeonato", "torneo"] },
          { id: "club-inscripcion", name: "Inscripción al Club de Fútbol", description: "Registro de equipos y participantes.", url: "https://jeffer91.github.io/Club-futbol-ITSQMET-/inscripcion/", icon: "checklist", badge: "Inscripción", aliases: ["inscribir", "registrar equipo"] },
          { id: "club-estudiantes", name: "Estudiantes - Club de Fútbol", description: "Consultas y acceso de participantes.", url: "https://jeffer91.github.io/Club-futbol-ITSQMET-/estudiantes/", icon: "student", badge: "Estudiantes", aliases: ["campeonato participantes"] },
          { id: "club-arbitro", name: "Árbitro - Club de Fútbol", description: "Gestión de partidos, resultados y novedades.", url: "https://jeffer91.github.io/Club-futbol-ITSQMET-/arbitro/", icon: "whistle", badge: "Árbitro", aliases: ["arbitraje", "partidos"] },
          { id: "club-admin", name: "Administrador - Club de Fútbol", description: "Administración general del campeonato.", url: "https://jeffer91.github.io/Club-futbol-ITSQMET-/administrador/", icon: "shield", badge: "Administración", aliases: ["torneo gestion"] }
        ]
      }
    ]
  }
];

const icons = {
  student: '<svg viewBox="0 0 24 24"><path d="m3 10 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c3 2 7 2 10 0v-5M21 10v6"/></svg>',
  graduation: '<svg viewBox="0 0 24 24"><path d="m2.5 9.5 9.5-5 9.5 5-9.5 5-9.5-5ZM6.5 12v5c3 2.5 8 2.5 11 0v-5"/></svg>',
  location: '<svg viewBox="0 0 24 24"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  article: '<svg viewBox="0 0 24 24"><path d="M6 3.5h12v17H6zM9 8h6M9 11h6M9 14h4M9 17h5"/></svg>',
  document: '<svg viewBox="0 0 24 24"><path d="M6.5 3.5h7l4 4v13h-11v-17ZM13.5 3.5v4h4M9 12h6M9 15h6"/></svg>',
  report: '<svg viewBox="0 0 24 24"><path d="M6 3.5h9l3 3v14H6v-17ZM15 3.5v3h3M9 11h6M9 14h6M9 17h4"/></svg>',
  academic: '<svg viewBox="0 0 24 24"><path d="M4 5h6a3 3 0 0 1 3 3v11a3 3 0 0 0-3-3H4V5ZM20 5h-6a3 3 0 0 0-3 3v11a3 3 0 0 1 3-3h6V5Z"/></svg>',
  users: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 2-6 6-6s6 2 6 6M17 5a3 3 0 0 1 0 6M17 14c3 0 5 2 5 6"/></svg>',
  research: '<svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v5l-5 9a2.7 2.7 0 0 0 2.4 4h9.2a2.7 2.7 0 0 0 2.4-4l-5-9V3M8 14h8"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="m12 3 7 3v5.5c0 4.6-2.7 7.6-7 9.5-4.3-1.9-7-4.9-7-9.5V6l7-3Zm-3 9 2 2 4-4"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4M16 3v4M4 10h16M8 14h3M14 14h3M8 18h3"/></svg>',
  training: '<svg viewBox="0 0 24 24"><path d="M4 4h16v13H4zM9 21h6M12 17v4M8 9h8M8 12h5"/></svg>',
  checklist: '<svg viewBox="0 0 24 24"><path d="M6 4h12v16H6zM9 9l1.5 1.5L13 8M14.5 9H16M9 15h7"/></svg>',
  scan: '<svg viewBox="0 0 24 24"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M8 12h8M10 9h4M10 15h4"/></svg>',
  code: '<svg viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>',
  football: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m9 9 3-2 3 2-1 4h-4L9 9ZM10 13l-3 3M14 13l3 3M9 9 6-4M15 9l3 1"/></svg>',
  whistle: '<svg viewBox="0 0 24 24"><path d="M4 14h7a5 5 0 1 0 0-10H7v4h4a1 1 0 1 1 0 2H4v4ZM4 10v4M18 7h3"/></svg>',
  tools: '<svg viewBox="0 0 24 24"><path d="M14 6a4 4 0 0 0 4.8 4.8l-8.7 8.7a2 2 0 0 1-2.8-2.8L16 8a4 4 0 0 0 4.8-4.8L18 6l-2-2 2.8-2.8A4 4 0 0 0 14 6Z"/></svg>'
};

const quickAccess = [
  { id: "sede-estudiantes", title: "Elegir sede", subtitle: "Examen Complexivo", mark: "Trámite estudiantil" },
  { id: "titulo-articulo", title: "Registrar título", subtitle: "Artículo académico", mark: "Estudiantes" },
  { id: "requisitos", title: "Requisitos", subtitle: "Consulta y revisión", mark: "Gestión" },
  { id: "planificacion", title: "Planificación", subtitle: "Cronogramas de titulación", mark: "Coordinación" }
];

const byId = new Map();
const allApps = groups.flatMap(group =>
  group.sections.flatMap(section => section.apps.map(app => {
    if (byId.has(app.id)) throw new Error("ID duplicado en catálogo: " + app.id);
    const item = { ...app, group: group.name, section: section.name };
    byId.set(app.id, item);
    return item;
  }))
);
const totalApps = allApps.length;
const groupGrid = document.querySelector("#group-grid");
const quickGrid = document.querySelector("#quick-grid");
const searchResults = document.querySelector("#search-results");
const searchInput = document.querySelector("#search-input");
const searchClear = document.querySelector("#search-clear");
const emptyState = document.querySelector("#empty-state");
const resultsNote = document.querySelector("#results-note");
const appCount = document.querySelector("#app-count");
const quickSection = document.querySelector("#quick-access");
const catalogHeading = document.querySelector("#catalog-heading");
const openGroups = new Set(["estudiantes"]);

function normalize(value) {
  return String(value || "").toLocaleLowerCase("es").normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function getScore(app, terms) {
  const name = normalize(app.name);
  const keywords = normalize([app.name, app.description, app.group, app.section, app.badge, ...(app.aliases || [])].join(" "));
  const url = normalize(app.url);
  if (!terms.every(term => keywords.includes(term) || url.includes(term))) return -1;
  return terms.reduce((score, term) => score + (name.includes(term) ? 5 : 0) +
    (normalize((app.aliases || []).join(" ")).includes(term) ? 3 : 0), 0);
}

function iconFor(name) { return icons[name] || icons.document; }

function appRow(app, searchMode = false) {
  const badge = app.badge ? '<span class="route__badge">' + escapeHtml(app.badge) + '</span>' : "";
  const category = searchMode ? '<span class="route__category">' + escapeHtml(app.group) + '</span>' : "";
  return '<a class="route" href="' + escapeHtml(app.url) + '" target="_blank" rel="noopener noreferrer">' +
    '<span class="route__icon" aria-hidden="true">' + iconFor(app.icon) + '</span>' +
    '<span class="route__body"><span class="route__heading"><strong>' + escapeHtml(app.name) +
    '</strong>' + badge + '</span><span class="route__description">' + escapeHtml(app.description) +
    '</span>' + category + '</span><span class="route__arrow" aria-hidden="true">↗</span></a>';
}

function renderQuickAccess() {
  quickGrid.innerHTML = quickAccess.map(item => {
    const app = byId.get(item.id);
    if (!app) return "";
    return '<a class="quick-card' + (item.id === "sede-estudiantes" ? ' quick-card--primary' : '') +
      '" href="' + escapeHtml(app.url) + '" target="_blank" rel="noopener noreferrer">' +
      '<span class="quick-card__icon" aria-hidden="true">' + iconFor(app.icon) + '</span>' +
      '<span class="quick-card__body"><span class="quick-card__tag">' + escapeHtml(item.mark) +
      '</span><strong>' + escapeHtml(item.title) + '</strong><span class="quick-card__subtitle">' +
      escapeHtml(item.subtitle) + '</span></span><span class="quick-card__arrow" aria-hidden="true">↗</span></a>';
  }).join("");
}

function sectionBlock(section, group) {
  return '<div class="route-section"><div class="route-section__title"><strong>' +
    escapeHtml(section.name) + '</strong><span>' + section.apps.length + '</span></div>' +
    '<div class="route-list">' + section.apps.map(app => appRow(byId.get(app.id))).join("") +
    '</div></div>';
}

function groupCard(group) {
  const count = group.sections.reduce((sum, section) => sum + section.apps.length, 0);
  const open = openGroups.has(group.id);
  return '<section class="group-card' + (group.featured ? ' group-card--featured' : '') +
    (open ? ' is-open' : '') + '" data-group-id="' + escapeHtml(group.id) + '">' +
    '<button class="group-card__trigger" type="button" aria-expanded="' + open +
    '" aria-controls="panel-' + escapeHtml(group.id) + '">' +
    '<span class="group-card__icon" aria-hidden="true">' + iconFor(group.icon) + '</span>' +
    '<span class="group-card__title"><strong>' + escapeHtml(group.name) +
    '</strong><span>' + escapeHtml(group.description) + '</span></span>' +
    '<span class="group-card__meta"><span class="group-card__count">' + count +
    '</span><span class="group-card__chevron" aria-hidden="true">' +
    '<svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></span></span></button>' +
    '<div class="group-card__content" id="panel-' + escapeHtml(group.id) +
    '"' + (open ? '' : ' hidden') + '>' +
    group.sections.map(section => sectionBlock(section, group)).join("") + '</div></section>';
}

function render() {
  const query = normalize(searchInput.value);
  const searching = query.length > 0;
  quickSection.hidden = searching;
  groupGrid.hidden = searching;
  searchResults.hidden = !searching;
  searchClear.hidden = searchInput.value.length === 0;
  catalogHeading.textContent = searching ? "Resultados de búsqueda" : "Todas las aplicaciones";

  if (searching) {
    const terms = query.split(/\s+/).filter(Boolean);
    const matches = allApps.map((app, i) => ({ app, i, score: getScore(app, terms) }))
      .filter(item => item.score >= 0)
      .sort((a, b) => b.score - a.score || a.i - b.i);
    searchResults.innerHTML = matches.map(item => appRow(item.app, true)).join("");
    emptyState.hidden = matches.length > 0;
    resultsNote.textContent = matches.length + (matches.length === 1 ? " aplicación encontrada" : " aplicaciones encontradas");
  } else {
    searchResults.innerHTML = "";
    emptyState.hidden = true;
    groupGrid.innerHTML = groups.map(groupCard).join("");
    resultsNote.textContent = groups.length + " áreas · " + totalApps + " aplicaciones";
  }
}

groupGrid.addEventListener("click", event => {
  const button = event.target.closest(".group-card__trigger");
  if (!button) return;
  const card = button.closest(".group-card");
  const id = card.dataset.groupId;
  const panel = card.querySelector(".group-card__content");
  const willOpen = !openGroups.has(id);
  if (willOpen) {
    openGroups.clear();
    openGroups.add(id);
  } else {
    openGroups.delete(id);
  }
  for (const other of groupGrid.querySelectorAll(".group-card")) {
    const isOpen = openGroups.has(other.dataset.groupId);
    other.classList.toggle("is-open", isOpen);
    other.querySelector(".group-card__trigger").setAttribute("aria-expanded", String(isOpen));
    other.querySelector(".group-card__content").hidden = !isOpen;
  }
});

searchInput.addEventListener("input", render);
searchClear.addEventListener("click", () => {
  searchInput.value = "";
  render();
  searchInput.focus();
});
searchInput.addEventListener("keydown", event => {
  if (event.key === "Escape" && searchInput.value) {
    searchInput.value = "";
    render();
  }
});

appCount.textContent = totalApps;
renderQuickAccess();
render();
