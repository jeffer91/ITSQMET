# ITSQMET · Portal de Aplicaciones

Portal central para acceder a las aplicaciones institucionales de ITSQMET.

## Aplicaciones actuales

- Estudiantes
- Trabajo de Titulación
- Coordinadores
- Investigadores
- Administrador
- Antiplagio

## Agregar una nueva aplicación

Las aplicaciones se administran desde el arreglo `apps` de `app.js`.

Agregar un nuevo objeto con esta estructura:

```js
{
  name: "Nombre de la aplicación",
  category: "Categoría",
  description: "Descripción breve.",
  url: "https://...",
  icon: "document"
}
```

Las categorías se crean automáticamente a partir de los registros del arreglo y aparecen como filtros en el portal.

## Paleta

- Negro institucional: `#111315`
- Dorado principal: `#C6AC76`
- Dorado oscuro: `#A88B50`
- Marfil de fondo: `#F7F5F0`
- Blanco: `#FFFFFF`

## Estructura

```text
ITSQMET/
├── index.html
├── styles.css
├── app.js
└── assets/
    └── logo-itsqmet.webp
```
