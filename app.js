const apps = [
  {
    name: "Estudiantes",
    category: "Titulación",
    description: "Portal para estudiantes dentro del proceso de titulación.",
    url: "https://titulos.pages.dev/estudiantes/estudiante",
    icon: "student"
  },
  {
    name: "Trabajo de Titulación",
    category: "Titulación",
    description: "Acceso al módulo principal para la gestión del trabajo de titulación.",
    url: "https://titulos.pages.dev/trabajo-titulacion/",
    icon: "document"
  },
  {
    name: "Coordinadores",
    category: "Titulación",
    description: "Revisión y gestión académica de propuestas desde coordinación.",
    url: "https://titulos-coordinadores.pages.dev/",
    icon: "users"
  },
  {
    name: "Investigadores",
    category: "Titulación",
    description: "Validación y revisión de títulos por parte del equipo de investigación.",
    url: "https://titulos-investigadores.pages.dev/",
    icon: "research"
  },
  {
    name: "Administrador",
    category: "Titulación",
    description: "Panel de administración central del ecosistema de titulación.",
    url: "https://titulos-administrador.pages.dev/",
    icon: "shield"
  },
  {
    name: "Antiplagio",
    category: "Herramientas académicas",
    description: "Panel administrativo para el sistema de revisión antiplagio institucional.",
    url: "https://jeffer91.github.io/Antiplagio-ITSQMET/#/admin",
    icon: "scan"
  }
];

const icons = {
  student: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5 12 6l9 4.5-9 4.5-9-4.5Z"/><path d="M7 12.5v4c2.8 2 7.2 2 10 0v-4M21 10.5v5"/></svg>`,
  document: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 3.5h7l4 4v13h-11v-17Z"/><path d="M13.5 3.5v4h4M9 12h6M9 15h6"/></svg>`,
  users: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 19c.6-3 2.5-4.5 5.5-4.5S13.4 16 14 19M16 11a2.5 2.5 0 1 0 0-5M15.5 14.5c2.8 0 4.6 1.5 5.1 4.5"/></svg>`,
  research: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6M10 3v5l-5 9a2.7 2.7 0 0 0 2.4 4h9.2a2.7 2.7 0 0 0 2.4-4l-5-9V3"/><path d="M8 14h8"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 19 6v5.5c0 4.6-2.7 7.6-7 9.5-4.3-1.9-7-4.9-7-9.5V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  scan: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M8 12h8M10 9h4M10 15h4"/></svg>`
};

const grid = document.querySelector("#app-grid");
const filters = document.querySelector("#filters");
const searchInput = document.querySelector("#search-input");
const searchClear = document.querySelector("#search-clear");
const emptyState = document.querySelector("#empty-state");
const resultsNote = document.querySelector("#results-note");
const appCount = document.querySelector("#app-count");

let activeCategory = "Todas";

appCount.textContent = apps.length;

function domainOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return url; }
}

function normalize(value) {
  return value
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function cardTemplate(app) {
  return `
    <article class="app-card">
      <div class="app-card__top">
        <div class="app-icon">${icons[app.icon] || icons.document}</div>
        <span class="app-tag">${app.category}</span>
      </div>
      <h3>${app.name}</h3>
      <p>${app.description}</p>
      <div class="app-card__footer">
        <span class="app-domain">${domainOf(app.url)}</span>
        <a class="open-link" href="${app.url}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${app.name}">
          Abrir <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>`;
}

function renderFilters() {
  const categories = ["Todas", ...new Set(apps.map(app => app.category))];
  filters.innerHTML = categories.map(category => `
    <button type="button" class="filter-btn ${category === activeCategory ? "is-active" : ""}" data-category="${category}">
      ${category}
    </button>`).join("");
}

function renderApps() {
  const query = normalize(searchInput.value.trim());
  const visible = apps.filter(app => {
    const matchesCategory = activeCategory === "Todas" || app.category === activeCategory;
    const searchable = normalize(`${app.name} ${app.category} ${app.description} ${domainOf(app.url)}`);
    const matchesQuery = !query || searchable.includes(query);
    return matchesCategory && matchesQuery;
  });

  grid.innerHTML = visible.map(cardTemplate).join("");
  emptyState.hidden = visible.length !== 0;
  grid.hidden = visible.length === 0;
  searchClear.hidden = searchInput.value.length === 0;

  const filtering = activeCategory !== "Todas" || query;
  resultsNote.textContent = filtering
    ? `${visible.length} ${visible.length === 1 ? "aplicación encontrada" : "aplicaciones encontradas"}`
    : "";
}

filters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderApps();
});

searchInput.addEventListener("input", renderApps);
searchClear.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  renderApps();
});

renderFilters();
renderApps();
