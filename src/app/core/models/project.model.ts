export type ProjectAccent = 'blue' | 'mint' | 'coral' | 'violet';

export interface ProjectSlide {
  readonly label: string;
  readonly title: string;
  readonly body: string;
  readonly image?: string;
  readonly imageAlt?: string;
  readonly bullets?: readonly string[];
  readonly metricLabel?: string;
  readonly metricValue?: string;
}

export interface PortfolioProject {
  readonly slug: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly category: string;
  readonly summary: string;
  readonly role: string;
  readonly period: string;
  readonly cover?: string;
  readonly accent: ProjectAccent;
  readonly technologies: readonly string[];
  readonly capabilities: readonly string[];
  readonly slides: readonly ProjectSlide[];
  readonly disclaimer: string;
  readonly isPlaceholder?: boolean;
}
