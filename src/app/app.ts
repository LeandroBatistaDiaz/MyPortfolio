import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  LucideArrowUpRight,
  LucideFolderKanban,
  LucideHouse,
  LucideMail,
  LucideUserRound,
} from '@lucide/angular';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LucideHouse,
    LucideFolderKanban,
    LucideUserRound,
    LucideMail,
    LucideArrowUpRight,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly isStoryMode = signal(this.router.url.startsWith('/projects/'));

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => this.isStoryMode.set(event.urlAfterRedirects.startsWith('/projects/')));
  }
}
