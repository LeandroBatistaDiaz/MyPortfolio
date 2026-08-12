# Leandro Batista — Software Engineer Portfolio

Professional portfolio built with Angular. It presents a feed of anonymized enterprise case studies and a responsive, story-like detail view for each project.

## Highlights

- Angular 21 with standalone components and lazy-loaded routes.
- Static/prerendered output for fast navigation and SEO-friendly pages.
- Responsive light and dark themes with keyboard and reduced-motion support.
- Data-driven project content: cards and detail stories use the same source of truth.
- Real technology logos, conceptual product visuals, and accessible navigation.
- Cloudflare-compatible static output with a small worker for route fallback.

## Technology

Angular 21 · TypeScript · Tailwind CSS 4 · Angular SSR/prerender · Lucide icons

## Project structure

```text
src/app/core/data/              Project and case-study content
src/app/core/models/            TypeScript domain models
src/app/core/services/          Content access services
src/app/shared/components/      Reusable UI components
src/app/pages/                  Home, profile, contact, and project details
public/images/                  Conceptual project visuals
public/icons/                   Technology logos
scripts/                        Static output staging for deployment
worker/                         Route fallback worker
```

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm start
```

The development server runs at `http://localhost:4200/`.

## Publicar en GitHub Pages

El repositorio se publica automáticamente con GitHub Actions cada vez que se hace push a `main`.

```bash
npm run build:github-pages
```

El workflow `.github/workflows/deploy-pages.yml` instala las dependencias, genera la salida estática con el prefijo `/MyPortfolio/`, prepara el fallback `404.html` para las rutas de Angular y publica el artefacto en GitHub Pages. La URL del proyecto es:

`https://leandrobatistadiaz.github.io/MyPortfolio/`

Para activar Pages manualmente en GitHub: `Settings` → `Pages` → `Build and deployment` → `Source: GitHub Actions`. No se necesitan credenciales adicionales dentro del repositorio; el workflow usa los permisos de Pages de la cuenta propietaria.

## Quality checks

```bash
npm run build
npm test -- --watch=false
```

The production build prerenders the portfolio routes and stages the deployable static output.

## Add or edit a project

Update `src/app/core/data/portfolio.data.ts` with an object that follows the `PortfolioProject` model. Add authorized visual assets under `public/images/`. The feed, project route, and prerendered output consume the same collection.

## Privacy

The enterprise projects are anonymized. Visuals are conceptual and do not reproduce client interfaces, data, brands, or confidential information.
