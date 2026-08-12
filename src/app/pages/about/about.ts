import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  LucideArrowUpRight,
  LucideBadgeCheck,
  LucideBriefcaseBusiness,
  LucideCircleCheck,
  LucideGraduationCap,
  LucideLanguages,
  LucideMapPin,
  LucideMoveRight,
} from '@lucide/angular';
import { CERTIFICATIONS } from '../../core/data/portfolio.data';
import { PortfolioService } from '../../core/services/portfolio.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-about-page',
  imports: [
    RouterLink,
    LucideArrowUpRight,
    LucideBadgeCheck,
    LucideBriefcaseBusiness,
    LucideCircleCheck,
    LucideGraduationCap,
    LucideLanguages,
    LucideMapPin,
    LucideMoveRight,
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {
  private readonly portfolio = inject(PortfolioService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  readonly language = inject(LanguageService);

  readonly technologies = this.portfolio.technologies;
  readonly certifications = CERTIFICATIONS;

  private readonly technologyIcons: Record<string, string> = {
    'C#': '/icons/csharp.svg',
    '.NET 8': '/icons/dotnet.svg',
    'ASP.NET Core': '/icons/dotnet.svg',
    'REST APIs': '/icons/swagger.svg',
    'SQL Server': '/icons/sql-server.svg',
    'Entity Framework': '/icons/entity-framework.svg',
    Angular: '/icons/angular.svg',
    Docker: '/icons/docker.svg',
  };

  technologyIcon(technology: string): string | null {
    return this.technologyIcons[technology] ?? null;
  }

  constructor() {
    this.title.setTitle('Perfil profesional · Leandro Batista');
    this.meta.updateTag({
      name: 'description',
      content: 'Experiencia, capacidades y formación de Leandro Batista, Software Engineer especializado en .NET.',
    });
  }
}
