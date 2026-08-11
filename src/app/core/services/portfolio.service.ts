import { computed, Injectable, signal } from '@angular/core';
import { CORE_TECHNOLOGIES, PORTFOLIO_PROJECTS } from '../data/portfolio.data';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly projects = signal(PORTFOLIO_PROJECTS);
  readonly technologies = signal(CORE_TECHNOLOGIES);
  readonly featuredProjects = computed(() => this.projects().slice(0, 4));

  getProject(slug: string) {
    return this.projects().find((project) => project.slug === slug);
  }

  getNextProject(slug: string) {
    const projects = this.projects();
    const currentIndex = projects.findIndex((project) => project.slug === slug);
    return projects[(currentIndex + 1) % projects.length];
  }
}
