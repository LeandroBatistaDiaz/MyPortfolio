import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  LucideArrowUpRight,
  LucideBadgeCheck,
  LucideBoxes,
  LucideBriefcaseBusiness,
  LucideMapPin,
  LucideTestTubeDiagonal,
} from '@lucide/angular';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    ProjectCardComponent,
    LucideMapPin,
    LucideBriefcaseBusiness,
    LucideArrowUpRight,
    LucideBadgeCheck,
    LucideBoxes,
    LucideTestTubeDiagonal,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private readonly portfolio = inject(PortfolioService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly projects = this.portfolio.featuredProjects;
  readonly technologies = this.portfolio.technologies;

  constructor() {
    this.title.setTitle('Leandro Batista · .NET Software Engineer');
    this.meta.updateTag({
      name: 'description',
      content:
        'Portafolio de Leandro Batista, Software Engineer especializado en C#, .NET, APIs REST, SQL Server y aplicaciones empresariales.',
    });
  }
}
