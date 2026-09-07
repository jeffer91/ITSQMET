# ITSQMET · Portal de Aplicaciones

Portal central para acceder de forma ordenada a las aplicaciones institucionales de ITSQMET.

## Estructura actual

El portal organiza **12 accesos en 3 áreas principales**, presentadas como acordeones:

- **Titulación**
  - Registro de títulos para estudiantes
  - Revisión y aprobación
  - Documentos y reportes
- **Gestión académica**
  - Currículo
  - Formación docente
  - Requisitos académicos
- **Herramientas académicas**
  - Antiplagio

La sección de Titulación se abre por defecto. Al abrir otra área, la anterior se cierra. Durante una búsqueda se muestran abiertas las áreas que contienen coincidencias.

## Agregar o editar una aplicación

Las áreas, secciones y aplicaciones se administran desde el arreglo `groups` de `app.js`.

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
├── accordion.css
├── accordion.js
├── .nojekyll
└── assets/
    └── logo-itsqmet.webp
```
