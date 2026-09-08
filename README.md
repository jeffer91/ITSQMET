# ITSQMET · Portal de Aplicaciones

Portal central para acceder de forma ordenada a las aplicaciones institucionales de ITSQMET.

## Estructura actual

El portal organiza **18 accesos en 6 áreas principales**, presentadas como acordeones:

- **Entrega de títulos**
  - Registro de propuestas para estudiantes
  - Revisión institucional
- **Documentación y planificación de titulación**
  - Planificación de Examen Complexivo, Trabajo de Titulación y Artículo Académico
- **Informes de titulación**
  - Generador de Informes de Titulación
- **Gestión académica**
  - Currículo
  - Formación docente
  - Requisitos académicos
- **Club de fútbol**
  - Portal principal
  - Inscripción
  - Estudiantes
  - Árbitro
  - Administrador
- **Herramientas académicas**
  - Antiplagio

La sección de Entrega de títulos se abre por defecto. Al abrir otra área, la anterior se cierra. Durante una búsqueda se muestran abiertas las áreas que contienen coincidencias.

## Agregar o editar una aplicación

Las áreas principales existentes se administran desde `app.js`. Las áreas incorporadas posteriormente de planificación y Club de Fútbol se encuentran en `catalogo-extra.js`.

Cada aplicación utiliza una estructura como esta:

```js
{
  name: "Nombre de la aplicación",
  description: "Descripción breve",
  url: "https://...",
  icon: "document",
  badge: "Opcional"
}
```

## Paleta visual

- Azul oscuro institucional: `#0F1720`
- Dorado principal: `#B78A2F`
- Dorado oscuro: `#8F6A1F`
- Blanco: `#FFFFFF`
- Gris de fondo: `#F8FAFC`
- Gris de bordes: `#E5E7EB`

## Estructura del repositorio

```text
ITSQMET/
├── index.html
├── styles.css
├── app.js
├── catalogo-extra.js
├── accordion.css
├── accordion.js
├── .nojekyll
└── assets/
    └── logo-itsqmet.webp
```
