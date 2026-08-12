import { DecimalPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowUpRight, LucideCopyright, LucideLayers, LucideShieldCheck } from '@lucide/angular';
import { PortfolioProject } from '../../../core/models/project.model';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, NgOptimizedImage, DecimalPipe, LucideArrowUpRight, LucideCopyright, LucideLayers, LucideShieldCheck],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly language = inject(LanguageService);
  readonly project = input.required<PortfolioProject>();
  readonly index = input(0);

  capabilities(): string {
    return this.project().capabilities.slice(0, 2).map((value) => this.language.t(value)).join(' · ');
  }
}
