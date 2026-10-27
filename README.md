# ITSQMET · Portal de Aplicaciones

Portal institucional organizado en tarjetas de áreas y aplicaciones. Web estática para GitHub Pages.

## Catálogo: 27 aplicaciones en 10 áreas

| Área | Aplicaciones |
| --- | --- |
| Títulos (5) | Artículo académico, Trabajo de titulación, Coordinadores, Investigación, Administrar títulos |
| Complexivo (2) | Elegir sede, Administrar sedes |
| Titulación (3) | Cronogramas, Requisitos, Informes |
| Currículo (1) | Gestión curricular |
| Docentes (5) | Encuesta docente, Resultados, Capacitación global, Seguimiento, Plan de formación |
| Finanzas (2) | Registrar clases, Revisar hojas |
| Antiplagio (2) | Revisar similitud, Código fuente |
| Deportes (5) | Club de fútbol, Inscripciones, Participantes, Árbitros, Administración |
| Mensajes (1) | Enviar mensajes |
| Inducciones (1) | Registrar inducción |

## Navegación

- Inicio: tarjetas por áreas, sin accesos rápidos ni acordeones.
- Áreas con varias herramientas: panel de tarjetas de aplicaciones.
- Áreas de una sola herramienta: enlace directo en una nueva pestaña.
- Buscador global por área, nombre, descripción y sinónimos; ignora tildes.
- Las áreas usan enlaces de tipo #area/ID, compatibles con el historial del navegador.
- Las aplicaciones externas conservan su alojamiento y sus propios controles de acceso.

## Archivos activos

- index.html: estructura de inicio, paneles y búsqueda.
- app.js: catálogo único (areas), búsqueda y navegación.
- styles.css: tarjetas, accesibilidad y diseño adaptable.
- assets/logo-itsqmet.webp: logo institucional.
- .nojekyll: soporte para GitHub Pages.

Los archivos catalogo-extra.js, accordion.js y accordion.css son heredados. index.html no los carga.

## Agregar aplicaciones

En app.js, agregar un objeto a la lista apps del área correspondiente con id único, name, description, icon, url y aliases. Los contadores y tarjetas se generan automáticamente.

El portal centraliza enlaces y no sustituye la autenticación de herramientas administrativas.
