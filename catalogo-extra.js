(() => {
  if (typeof groups === "undefined" || typeof icons === "undefined") return;

  icons.planning = `<svg viewBox="0 0 24 24"><path d="M6 4h12v16H6z"/><path d="M9 2v4M15 2v4M6 8h12M9 12h2M13 12h2M9 16h2M13 16h2"/></svg>`;
  icons.football = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m9 9 3-2 3 2-1 4h-4L9 9ZM10 13l-3 3M14 13l3 3M9 9 6-4M15 9l3 1M9 9 6 0"/></svg>`;
  icons.whistle = `<svg viewBox="0 0 24 24"><path d="M4 14h7a5 5 0 1 0 0-10H7v4h4a1 1 0 1 1 0 2H4v4Z"/><path d="M4 10v4M18 7h3"/></svg>`;
  icons.home = `<svg viewBox="0 0 24 24"><path d="m3 11 9-7 9 7"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>`;

  const planningGroup = {
    name: "Documentación y planificación de titulación",
    icon: "planning",
    description: "Planificación institucional de Complexivo, Trabajo de Titulación y Artículo Académico",
    sections: [
      {
        name: "Planificación de titulación",
        description: "Período, cronogramas, datos, validación y PDF institucional",
        apps: [
          {
            name: "Planificación de Titulación",
            description: "Examen Complexivo, Trabajo de Titulación y Artículo Académico",
            url: "https://jeffer91.github.io/doc-tit/",
            icon: "planning",
            badge: "Planificación"
          }
        ]
      }
    ]
  };

  const footballGroup = {
    name: "Club de fútbol",
    icon: "football",
    description: "Inscripciones, participantes, arbitraje y administración del campeonato",
    sections: [
      {
        name: "Acceso general",
        description: "Portal principal del Club de Fútbol ITSQMET",
        apps: [
          {
            name: "Club de Fútbol",
            description: "Página principal y acceso general al campeonato",
            url: "https://jeffer91.github.io/Club-futbol-ITSQMET-/",
            icon: "football",
            badge: "Principal"
          }
        ]
      },
      {
        name: "Participación",
        description: "Inscripción y consulta para estudiantes",
        apps: [
          {
            name: "Inscripción",
            description: "Registro de equipos y participantes",
            url: "https://jeffer91.github.io/Club-futbol-ITSQMET-/inscripcion/",
            icon: "checklist",
            badge: "Inscripción"
          },
          {
            name: "Estudiantes",
            description: "Consulta y acceso de estudiantes al campeonato",
            url: "https://jeffer91.github.io/Club-futbol-ITSQMET-/estudiantes/",
            icon: "student",
            badge: "Estudiantes"
          }
        ]
      },
      {
        name: "Gestión del campeonato",
        description: "Accesos operativos y administrativos",
        apps: [
          {
            name: "Árbitro",
            description: "Gestión de partidos, resultados y novedades arbitrales",
            url: "https://jeffer91.github.io/Club-futbol-ITSQMET-/arbitro/",
            icon: "whistle",
            badge: "Árbitro"
          },
          {
            name: "Administrador",
            description: "Administración general del campeonato",
            url: "https://jeffer91.github.io/Club-futbol-ITSQMET-/administrador/",
            icon: "shield",
            badge: "Administración"
          }
        ]
      }
    ]
  };

  // Mantener separados los procesos: entrega de títulos, planificación e informes.
  groups.splice(1, 0, planningGroup);
  groups.splice(groups.length - 1, 0, footballGroup);

  function refreshPortalMeta() {
    const count = groups.reduce(
      (sum, group) => sum + group.sections.reduce((sectionSum, section) => sectionSum + section.apps.length, 0),
      0
    );

    if (typeof appCount !== "undefined" && appCount) appCount.textContent = count;
    if (typeof resultsNote !== "undefined" && resultsNote && typeof searchInput !== "undefined" && !searchInput.value.trim()) {
      resultsNote.textContent = `${groups.length} áreas · ${count} accesos`;
    }
  }

  if (typeof render === "function") render();
  refreshPortalMeta();

  if (typeof searchInput !== "undefined" && searchInput) {
    searchInput.addEventListener("input", () => queueMicrotask(refreshPortalMeta));
  }
  if (typeof searchClear !== "undefined" && searchClear) {
    searchClear.addEventListener("click", () => queueMicrotask(refreshPortalMeta));
  }
})();
