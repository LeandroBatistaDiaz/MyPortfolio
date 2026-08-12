import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import {
  LucideArrowLeft,
  LucideArrowUpRight,
  LucideBriefcaseBusiness,
  LucideMapPin,
  LucideMessageCircle,
  LucideShieldCheck,
} from '@lucide/angular';

@Component({
  selector: 'app-contact-page',
  imports: [
    RouterLink,
    LucideArrowLeft,
    LucideArrowUpRight,
    LucideBriefcaseBusiness,
    LucideMapPin,
    LucideMessageCircle,
    LucideShieldCheck,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  readonly language = inject(LanguageService);

  constructor() {
    this.title.setTitle('Contacto · Leandro Batista');
    this.meta.updateTag({ name: 'description', content: 'Contacta con Leandro Batista para oportunidades de desarrollo .NET en España.' });
  }
}
