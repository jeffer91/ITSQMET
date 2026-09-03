const groups = [
  {
    name: "Titulación",
    icon: "graduation",
    description: "Títulos y documentos de titulación",
    sections: [
      {
        name: "Creación y aprobación de títulos",
        apps: [
          {
            name: "Estudiantes",
            description: "Ingreso y propuesta de títulos",
            url: "https://titulos.pages.dev/estudiantes/estudiante",
            icon: "student"
          },
          {
            name: "Trabajo de Titulación",
            description: "Gestión del trabajo y título",
            url: "https://titulos.pages.dev/trabajo-titulacion/",
            icon: "document"
          },
          {
            name: "Coordinadores",
            description: "Revisión y validación de títulos",
            url: "https://titulos-coordinadores.pages.dev/",
            icon: "users"
          },
          {
            name: "Investigadores",
            description: "Revisión de investigación",
            url: "https://titulos-investigadores.pages.dev/",
            icon: "research"
          },
          {
            name: "Administrador",
            description: "Administración del sistema de títulos",
            url: "https://titulos-administrador.pages.dev/",
            icon: "shield"
          }
        ]
      },
      {
        name: "Documentos de titulación",
        apps: [
          {
            name: "Informes de Titulación",
            description: "Crear documentos e informes de titulación",
            url: "https://jeffer91.github.io/Informtit/",
            icon: "report"
          }
        ]
      }
    ]
  },
  {
    name: "Gestión académica",
    icon: "academic",
    description: "Currículo, formación docente y requisitos",
    sections: [
      {
        name: "Currículo",
        apps: [
          {
            name: "Gestión Curricular",
            description: "Currículo, mallas, fichas y estadísticas",
            url: "https://jeffer91.github.io/curriculo/",
            icon: "curriculum"
          }
        ]
      },
      {
        name: "Formación docente",
        apps: [
          {
            name: "Capacitación Docente",
            description: "Gestión de capacitación docente",
            url: "https://capacitacindocenteitsqmet.netlify.app/index.html",
            icon: "training"
          },
          {
            name: "Documentos de Formación",
            description: "DNF, plan de formación e informe de cumplimiento",
            url: "https://jeffer91.github.io/docformacion/",
            icon: "report"
          }
        ]
      },
      {
        name: "Requisitos académicos",
        apps: [
          {
            name: "Requisitos",
            description: "Carga, revisión y gestión de requisitos",
            url: "https://jeffer91.github.io/requisitos/Maqueta/maq-index.html",
            icon: "checklist"
          }
        ]
      }
    ]
  },
  {
    name: "Herramientas académicas",
    icon: "tools",
    description: "Servicios de apoyo",
    sections: [
      {
        name: "Antiplagio",
        apps: [
          {
            name: "Aplicación Antiplagio",
            description: "Sistema institucional de revisión antiplagio",
            url: "https://jeffer91.github.io/Antiplagio-ITSQMET/",
            icon: "scan"
          },
          {
            name: "Repositorio Antiplagio",
            description: "Código fuente y mantenimiento en GitHub",
            url: "https://github.com/jeffer91/Antiplagio-ITSQMET",
            icon: "code"
          }
        ]
      }
    ]
  }
];

const icons = {
  graduation: `<svg viewBox="0 0 24 24"><path d="M3 10.5 12 6l9 4.5-9 4.5-9-4.5Z"/><path d="M7 12.5v4c2.8 2 7.2 2 10 0v-4M21 10.5v5"/></svg>`,
  academic: `<svg viewBox="0 0 24 24"><path d="M4 5h6a3 3 0 0 1 3 3v11a3 3 0 0 0-3-3H4V5Z"/><path d="M20 5h-6a3 3 0 0 0-3 3v11a3 3 0 0 1 3-3h6V5Z"/></svg>`,
  tools: `<svg viewBox="0 0 24 24"><path d="M14 6a4 4 0 0 0 4.8 4.8l-8.7 8.7a2 2 0 0 1-2.8-2.8L16 8a4 4 0 0 0 4.8-4.8L18 6l-2-2 2.8-2.8A4 4 0 0 0 14 6Z"/></svg>`,
  student: `<svg viewBox="0 0 24 24"><path d="M3 10.5 12 6l9 4.5-9 4.5-9-4.5Z"/><path d="M7 12.5v4c2.8 2 7.2 2 10 0v-4"/></svg>`,
  document: `<svg viewBox="0 0 24 24"><path d="M6.5 3.5h7l4 4v13h-11v-17Z"/><path d="M13.5 3.5v4h4M9 12h6M9 15h6"/></svg>`,
  report: `<svg viewBox="0 0 24 24"><path d="M6 3.5h9l3 3v14H6v-17Z"/><path d="M15 3.5v3h3M9 11h6M9 14h6M9 17h4"/></svg>`,
  users: `<svg viewBox="0 0 24 24"><path d="M8.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 19c.6-3 2.5-4.5 5.5-4.5S13.4 16 14 19M16 11a2.5 2.5 0 1 0 0-5M15.5 14.5c2.8 0 4.6 1.5 5.1 4.5"/></svg>`,
  research: `<svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v5l-5 9a2.7 2.7 0 0 0 2.4 4h9.2a2.7 2.7 0 0 0 2.4-4l-5-9V3"/><path d="M8 14h8"/></svg>`,
  shield: `<svg viewBox="0 0 24 24"><path d="M12 3 19 6v5.5c0 4.6-2.7 7.6-7 9.5-4.3-1.9-7-4.9-7-9.5V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  curriculum: `<svg viewBox="0 0 24 24"><path d="M4.5 5.5A2.5 2.5 0 0 1 7 3h4.5v16H7a2.5 2.5 0 0 0-2.5 2V5.5Z"/><path d="M19.5 5.5A2.5 2.5 0 0 0 17 3h-4.5v16H17a2.5 2.5 0 0 1 2.5 2V5.5Z"/></svg>`,
  training: `<svg viewBox="0 0 24 24"><path d="M5 4h14v12H5z"/><path d="M8 20h8M12 16v4M9 8h6M9 11h4"/></svg>`,
  checklist: `<svg viewBox="0 0 24 24"><path d="M6 4h12v16H6z"/><path d="m9 9 1.5 1.5L13 8M14.5 9H16M9 15h7"/></svg>`,
  scan: `<svg viewBox="0 0 24 24"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M8 12h8M10 9h4M10 15h4"/></svg>`,
  code: `<svg viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>`
};

const groupGrid = document.querySelector("#group-grid");
const searchInput = document.querySelector("#search-input");
const searchClear = document.querySelector("#search-clear");
const emptyState = document.querySelector("#empty-state");
const resultsNote = document.querySelector("#results-note");
const appCount = document.querySelector("#app-count");

const totalApps = groups.reduce(
  (sum, group) => sum + group.sections.reduce((sectionSum, section) => sectionSum + section.apps.length, 0),
  0
);
appCount.textContent = totalApps;

function normalize(value) {
  return String(value || "")
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function appMatches(app, group, section, query) {
  if (!query) return true;
  return normalize(`${group.name} ${group.description} ${section.name} ${app.name} ${app.description} ${app.url}`).includes(query);
}

function appRow(app) {
  return `
    <a class="route" href="${app.url}" target="_blank" rel="noopener noreferrer">
      <span class="route__icon">${icons[app.icon] || icons.document}</span>
      <span class="route__body">
        <strong>${app.name}</strong>
        <small>${app.description}</small>
      </span>
      <span class="route__arrow" aria-hidden="true">↗</span>
    </a>`;
}

function sectionBlock(section, visibleApps) {
  return `
    <section class="route-section">
      <div class="route-section__title">
        <span>${section.name}</span>
        <small>${visibleApps.length}</small>
      </div>
      <div class="route-list">
        ${visibleApps.map(appRow).join("")}
      </div>
    </section>`;
}

function groupCard(group, visibleSections) {
  const count = visibleSections.reduce((sum, item) => sum + item.visibleApps.length, 0);
  return `
    <article class="group-card">
      <header class="group-card__head">
        <span class="group-card__icon">${icons[group.icon] || icons.academic}</span>
        <span class="group-card__title">
          <strong>${group.name}</strong>
          <small>${group.description}</small>
        </span>
        <span class="group-card__count">${count}</span>
      </header>
      <div class="group-card__content">
        ${visibleSections.map(item => sectionBlock(item.section, item.visibleApps)).join("")}
      </div>
    </article>`;
}

function render() {
  const query = normalize(searchInput.value.trim());
  let visibleCount = 0;

  const visibleGroups = groups.map(group => {
    const visibleSections = group.sections.map(section => {
      const visibleApps = section.apps.filter(app => appMatches(app, group, section, query));
      visibleCount += visibleApps.length;
      return { section, visibleApps };
    }).filter(item => item.visibleApps.length > 0);

    return { group, visibleSections };
  }).filter(item => item.visibleSections.length > 0);

  groupGrid.innerHTML = visibleGroups.map(item => groupCard(item.group, item.visibleSections)).join("");
  emptyState.hidden = visibleGroups.length > 0;
  groupGrid.hidden = visibleGroups.length === 0;
  searchClear.hidden = searchInput.value.length === 0;
  resultsNote.textContent = query
    ? `${visibleCount} ${visibleCount === 1 ? "acceso encontrado" : "accesos encontrados"}`
    : `${groups.length} áreas · ${totalApps} accesos`;
}

searchInput.addEventListener("input", render);
searchClear.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  render();
});

render();
