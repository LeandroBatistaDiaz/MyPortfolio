import { computed, Injectable, signal } from '@angular/core';
import { CORE_TECHNOLOGIES, PORTFOLIO_PROJECTS } from '../data/portfolio.data';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly projects = signal(PORTFOLIO_PROJECTS);
  readonly technologies = signal(CORE_TECHNOLOGIES);
  // The feed is the portfolio's complete project stream; keep every case study
  // visible instead of silently truncating it to the first four entries.
  readonly featuredProjects = computed(() => this.projects());

  getProject(slug: string) {
    return this.projects().find((project) => project.slug === slug);
  }

  getNextProject(slug: string) {
    const projects = this.projects();
    const currentIndex = projects.findIndex((project) => project.slug === slug);
    return projects[(currentIndex + 1) % projects.length];
  }
}
