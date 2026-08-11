import { TestBed } from '@angular/core/testing';
import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioService);
  });

  it('provides projects with unique slugs', () => {
    const slugs = service.projects().map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('resolves every published project by slug', () => {
    for (const project of service.projects()) {
      expect(service.getProject(project.slug)).toEqual(project);
    }
  });

  it('returns the following case study cyclically', () => {
    const projects = service.projects();
    expect(service.getNextProject(projects.at(-1)!.slug)).toEqual(projects[0]);
  });
});
