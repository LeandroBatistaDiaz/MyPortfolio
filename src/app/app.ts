import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, inject, PLATFORM_ID, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  LucideArrowUpRight,
  LucideFolderKanban,
  LucideHouse,
  LucideMail,
  LucideMoon,
  LucideSun,
  LucideUserRound,
} from '@lucide/angular';
import { filter } from 'rxjs';

type Theme = 'dark' | 'light';

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
    LucideMoon,
    LucideSun,
    LucideArrowUpRight,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly isStoryMode = signal(this.router.url.startsWith('/projects/'));
  readonly theme = signal<Theme>('dark');

  constructor() {
    this.applyTheme(this.getInitialTheme(), false);

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => this.isStoryMode.set(event.urlAfterRedirects.startsWith('/projects/')));
  }

  toggleTheme(): void {
    this.applyTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private getInitialTheme(): Theme {
    if (!isPlatformBrowser(this.platformId)) return 'dark';

    const stored = window.localStorage.getItem('portfolio-theme');
    if (stored === 'light' || stored === 'dark') return stored;

    return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  private applyTheme(theme: Theme, persist = true): void {
    this.theme.set(theme);
    const root = this.document.documentElement;
    if (root?.dataset) root.dataset['theme'] = theme;
    if (root?.style) root.style.colorScheme = theme;
    this.document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f4f7fb' : '#070b14');

    if (persist && isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('portfolio-theme', theme);
    }
  }
}
