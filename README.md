# Portafolio de Leandro Batista

Portafolio profesional construido con Angular 21 LTS, renderizado estático y Tailwind CSS 4. El sitio combina un feed de casos de estudio con una experiencia vertical tipo historias para explorar cada proyecto en móvil y escritorio.

## Arquitectura

- `src/app/core/models`: contratos de contenido.
- `src/app/core/data`: proyectos, tecnologías y certificaciones.
- `src/app/core/services`: acceso reactivo al contenido.
- `src/app/shared/components`: piezas reutilizables del feed.
- `src/app/pages`: páginas y rutas del portafolio.
- `public/images`: recursos visuales conceptuales.

La interfaz no contiene información específica de un proyecto. Toda la información variable se obtiene desde `portfolio.data.ts`, lo que permite reutilizar las mismas tarjetas, rutas y diapositivas.

## Añadir o editar un proyecto

1. Edita `src/app/core/data/portfolio.data.ts`.
2. Añade un objeto que cumpla el modelo `PortfolioProject`.
3. Guarda su imagen conceptual en `public/images`.
4. El feed, la ruta `/projects/:slug` y el prerenderizado se actualizan desde la misma colección.

Cada proyecto admite tantas diapositivas como sea necesario. Las secciones de contexto, solución, arquitectura y resultado son contenido, no componentes duplicados.

## Scripts

- `npm start`: desarrollo local.
- `npm run build`: compilación y prerenderizado estático.
- `npm test -- --watch=false`: pruebas unitarias.

## Privacidad

Los casos empresariales están anonimizados. Las imágenes son conceptos generados para el portafolio y no reproducen interfaces, datos ni marcas de clientes.
