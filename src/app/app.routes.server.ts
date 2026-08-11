import { RenderMode, ServerRoute } from '@angular/ssr';
import { PORTFOLIO_PROJECTS } from './core/data/portfolio.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projects/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return PORTFOLIO_PROJECTS.map((project) => ({ slug: project.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
