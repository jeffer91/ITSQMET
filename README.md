# ITSQMET · Portal de Aplicaciones

Portal institucional organizado por **procesos**, no por perfiles o tipos de usuario.

## Catálogo actual: 24 aplicaciones en 8 procesos

1. **Propuestas y aprobación de títulos (5):** título de artículo académico, título de trabajo de titulación, revisión de coordinadores, revisión de investigación y administración de títulos.
2. **Examen Complexivo y planificación (3):** elección de sede, administración de sedes y planificación de titulación.
3. **Requisitos e informes de titulación (2):** requisitos académicos y generador de informes.
4. **Gestión curricular (1):** currículo, mallas y fichas.
5. **Formación y capacitación docente (4):** encuesta docente, panel de administración, capacitación docente y documentos de formación.
6. **Hojas financieras (2):** formulario de registro de clases (https://jeffer91.github.io/Hoja-Financiera/) y administración de documentos firmados (https://jeffer91.github.io/Hoja-Financiera/administrador/).
7. **Integridad académica (2):** antiplagio y su repositorio.
8. **Deporte institucional (5):** portal del club, inscripción, consulta de estudiantes, árbitros y administración.

## Mantenimiento del catálogo

El catálogo vive en `app.js`, variable `groups`. Cada grupo representa un proceso y contiene secciones y aplicaciones. La distinción entre formularios y paneles de administración aparece dentro del mismo proceso.

El contador se calcula automáticamente desde `groups`. Los cinco accesos rápidos apuntan a las mismas aplicaciones mediante su `id` y no cuentan como duplicados.

El buscador acepta palabras, variantes sin tilde y términos incluidos en `aliases`. Los enlaces externos se abren en pestaña nueva. Las aplicaciones enlazadas son independientes del portal.

## Archivos activos

- `index.html`: estructura del portal y referencias a CSS y JS.
- `styles.css`: presentación visual.
- `app.js`: catálogo, búsqueda, accesos rápidos y acordeones.
- `.nojekyll`: publicación estática en GitHub Pages.
- `assets/logo-itsqmet.webp`: identidad institucional.

`catalogo-extra.js`, `accordion.js` y `accordion.css` son archivos antiguos que el HTML actual no carga.
