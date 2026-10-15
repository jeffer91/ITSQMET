# ITSQMET · Portal de Aplicaciones

Portal institucional para acceder de forma rápida a los sistemas ITSQMET.

## Organización actual

**22 aplicaciones únicas en 4 áreas principales:**

1. Estudiantes (3): elección de sede del Examen Complexivo, título de artículo académico y título de trabajo de titulación.
2. Titulación y coordinación (6): revisión de títulos, administración de títulos, planificación, administración de sedes e informes.
3. Gestión académica y docente (6): encuesta de detección de necesidades de formación y capacitación (formulario y administración), currículo, capacitación, documentos de formación y requisitos académicos.
4. Otros servicios (7): antiplagio y Club de Fútbol.

El apartado **Accesos rápidos** muestra cinco enlaces directos a aplicaciones del catálogo (elegir sede, registrar título, requisitos, planificación y encuesta docente). Estos accesos **no se cuentan dos veces**.

La búsqueda muestra **resultados directos**, sin acordeones, y admite varias palabras, tildes y palabras alternativas indicadas en el campo `aliases` de cada aplicación (p. ej., «campus», «sede», «lugar de examen»).

Al navegar por categorías, solo hay un acordeón abierto a la vez. El apartado Estudiantes se abre por defecto.

## Cómo agregar o editar aplicaciones

Los 22 accesos y los íconos se administran en un único lugar: `app.js`, variable `groups`.

Cada aplicación tiene esta forma:

```js
{
  id: "identificador-unico",
  name: "Nombre visible",
  description: "Descripción breve",
  url: "https://...",
  icon: "document",
  badge: "Opcional",
  aliases: ["otro nombre", "palabra alternativa"]
}
```

El contador se calcula automáticamente desde `groups`. Para incluir una aplicación en Accesos rápidos, agrega su `id` a `quickAccess` (no la dupliques en `groups`).

## Identidad visual

El diseño compacto diferencia visualmente las áreas por tonos: azul (estudiantes), violeta (titulación), verde azulado (gestión docente) y dorado (otros servicios). Los accesos rápidos usan color de fondo suave y contraste de texto. 


- Azul oscuro: `#0F1720`
- Dorado principal: `#B78A2F`
- Dorado oscuro: `#8F6A1F`
- Blanco: `#FFFFFF`
- Fondo gris: `#F8FAFC`
- Tipografía: DM Sans, Playfair Display para el título principal

## Archivos activos

```text
ITSQMET/
├── index.html
├── styles.css
├── app.js
├── .nojekyll
└── assets/
    └── logo-itsqmet.webp
```

Los archivos anteriores `catalogo-extra.js`, `accordion.js` y `accordion.css` pueden conservarse en el historial, pero el portal ya no los carga: su lógica está unificada en `app.js` y `styles.css`.

Los accesos externos abren una nueva pestaña.
