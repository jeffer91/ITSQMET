# ITSQMET · Portal de Aplicaciones

Portal institucional para acceder de forma rápida a los sistemas ITSQMET.

## Organización actual

**20 aplicaciones únicas en 4 áreas principales:**

1. Estudiantes (3): elección de sede del Examen Complexivo, título de artículo académico y título de trabajo de titulación.
2. Titulación y coordinación (6): revisión de títulos, administración de títulos, planificación, administración de sedes e informes.
3. Gestión académica y docente (4): currículo, capacitación, documentos de formación y requisitos académicos.
4. Otros servicios (7): antiplagio y Club de Fútbol.

El apartado **Accesos rápidos** muestra cuatro enlaces directos a aplicaciones del catálogo (elegir sede, registrar título, requisitos, planificación). Estos accesos **no se cuentan dos veces**.

La búsqueda muestra **resultados directos**, sin acordeones, y admite varias palabras, tildes y palabras alternativas indicadas en el campo \`aliases\` de cada aplicación (p. ej., «campus», «sede», «lugar de examen»).

Al navegar por categorías, solo hay un acordeón abierto a la vez. El apartado Estudiantes se abre por defecto.

## Cómo agregar o editar aplicaciones

Los 20 accesos y los íconos se administran en un único lugar: \`app.js\`, variable \`groups\`.

Cada aplicación tiene esta forma:

\`\`\`js
{
  id: "identificador-unico",
  name: "Nombre visible",
  description: "Descripción breve",
  url: "https://...",
  icon: "document",
  badge: "Opcional",
  aliases: ["otro nombre", "palabra alternativa"]
}
\`\`\`

El contador se calcula automáticamente desde \`groups\`. Para incluir una aplicación en Accesos rápidos, agrega su \`id\` a \`quickAccess\` (no la dupliques en \`groups\`).

## Identidad visual

- Azul oscuro: \`#0F1720\`
- Dorado principal: \`#B78A2F\`
- Dorado oscuro: \`#8F6A1F\`
- Blanco: \`#FFFFFF\`
- Fondo gris: \`#F8FAFC\`
- Tipografía: DM Sans, Playfair Display para el título principal

## Archivos activos

\`\`\`text
ITSQMET/
├── index.html
├── styles.css
├── app.js
├── .nojekyll
└── assets/
    └── logo-itsqmet.webp
\`\`\`

Los archivos anteriores \`catalogo-extra.js\`, \`accordion.js\` y \`accordion.css\` pueden conservarse en el historial, pero el portal ya no los carga: su lógica está unificada en \`app.js\` y \`styles.css\`.

Los accesos externos abren una nueva pestaña.
