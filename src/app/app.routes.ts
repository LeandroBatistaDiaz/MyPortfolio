import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Leandro Batista · .NET Software Engineer',
    loadComponent: () => import('./pages/home/home').then((component) => component.HomePage),
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./pages/project-detail/project-detail').then((component) => component.ProjectDetailPage),
  },
  {
    path: 'about',
    title: 'Perfil · Leandro Batista',
    loadComponent: () => import('./pages/about/about').then((component) => component.AboutPage),
  },
  {
    path: 'contact',
    title: 'Contacto · Leandro Batista',
    loadComponent: () => import('./pages/contact/contact').then((component) => component.ContactPage),
  },
  { path: '**', redirectTo: '' },
];
