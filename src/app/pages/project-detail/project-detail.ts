import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  QueryList,
  ViewChildren,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  LucideArrowLeft,
  LucideArrowUpRight,
  LucideBoxes,
  LucideChevronDown,
  LucideChevronUp,
  LucideCircleCheck,
  LucideLayers,
  LucideShieldCheck,
  LucideTestTubeDiagonal,
} from '@lucide/angular';
import { PortfolioService } from '../../core/services/portfolio.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-project-detail-page',
  imports: [
    RouterLink,
    NgOptimizedImage,
    LucideArrowLeft,
    LucideArrowUpRight,
    LucideBoxes,
    LucideChevronDown,
    LucideChevronUp,
    LucideCircleCheck,
    LucideLayers,
    LucideShieldCheck,
    LucideTestTubeDiagonal,
  ],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailPage implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly portfolio = inject(PortfolioService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  readonly language = inject(LanguageService);
  private readonly routeParams = toSignal(this.route.paramMap);

  @ViewChildren('storySlide') private readonly storySlides!: QueryList<ElementRef<HTMLElement>>;

  readonly activeIndex = signal(0);
  readonly project = computed(() => this.portfolio.getProject(this.routeParams()?.get('slug') ?? ''));
  readonly nextProject = computed(() => {
    const project = this.project();
    return project ? this.portfolio.getNextProject(project.slug) : undefined;
  });

  constructor() {
    effect(() => {
      const project = this.project();
      if (!project) return;
      this.title.setTitle(`${project.title} · Leandro Batista`);
      this.meta.updateTag({ name: 'description', content: project.summary });
    });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in globalThis)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
        if (!visible) return;
        const index = this.storySlides.toArray().findIndex((slide) => slide.nativeElement === visible.target);
        if (index >= 0) this.activeIndex.set(index);
      },
      { threshold: [0.55, 0.72] },
    );

    this.storySlides.forEach((slide) => observer.observe(slide.nativeElement));
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown' || event.key === 'PageDown') {
      event.preventDefault();
      this.goToSlide(this.activeIndex() + 1);
    }
    if (event.key === 'ArrowUp' || event.key === 'PageUp') {
      event.preventDefault();
      this.goToSlide(this.activeIndex() - 1);
    }
  }

  goToSlide(index: number): void {
    const slides = this.storySlides?.toArray() ?? [];
    const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
    slides[safeIndex]?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  goBack(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const navigationId = Number(window.history.state?.navigationId ?? 0);
    if (navigationId > 1) {
      event.preventDefault();
      window.history.back();
      return;
    }

    this.router.navigate(['/'], { fragment: 'projects' });
  }
}
