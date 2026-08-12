import { PortfolioProject } from '../models/project.model';

const PROJECT_TEMPLATE_SLIDES = [
  {
    label: '01 · Contexto',
    title: 'Contexto del proyecto',
    body: 'Este espacio está preparado para presentar el problema de negocio, los usuarios y el objetivo del próximo caso de estudio.',
    bullets: ['Reto por documentar', 'Usuarios por definir', 'Alcance pendiente'],
  },
  {
    label: '02 · Solución',
    title: 'Proceso y experiencia',
    body: 'Aquí se documentará el flujo principal, las decisiones de producto y las pantallas autorizadas que expliquen la solución de forma clara.',
    bullets: ['Flujo principal', 'Decisiones de UX', 'Evidencia visual'],
  },
  {
    label: '03 · Arquitectura',
    title: 'Arquitectura y tecnologías',
    body: 'La plantilla admite la descripción de las capas, integraciones, decisiones técnicas y tecnologías que correspondan al proyecto.',
    bullets: ['Componentes', 'Integraciones', 'Calidad técnica'],
  },
  {
    label: '04 · Resultado',
    title: 'Resultado y aprendizaje',
    body: 'Este cierre recogerá los resultados verificables, el impacto cualitativo y los siguientes pasos, sin inventar métricas.',
    metricLabel: 'Estado',
    metricValue: 'Pendiente de documentar',
  },
] as const;

const createProjectTemplate = (
  slug: string,
  accent: PortfolioProject['accent'],
): PortfolioProject => ({
  slug,
  title: 'Próximo caso de estudio',
  shortTitle: 'Próximamente',
  category: 'Plantilla reutilizable',
  summary:
    'Espacio preparado para incorporar un proyecto con información, capturas y resultados autorizados.',
  role: 'Contenido pendiente',
  period: 'En preparación',
  accent,
  technologies: [],
  capabilities: ['Contexto', 'Solución', 'Arquitectura', 'Resultado'],
  slides: PROJECT_TEMPLATE_SLIDES,
  disclaimer:
    'Plantilla vacía. Se completará únicamente con información confirmada y recursos visuales autorizados.',
  isPlaceholder: true,
});

export const PORTFOLIO_PROJECTS: readonly PortfolioProject[] = [
  {
    slug: 'gi-medical-management',
    title: 'GI Medical Management',
    shortTitle: 'GI Medical',
    category: 'HealthTech · Facturación clínica',
    summary:
      'Plataforma web para centralizar la facturación de servicios médicos con seguros, la operación clínica y el seguimiento financiero.',
    role: 'Full Stack .NET Developer',
    period: 'Caso de estudio · Proyecto empresarial',
    cover: '/images/gi-medical-dashboard.png',
    accent: 'mint',
    technologies: ['Angular', '.NET', 'SQL Server', 'Entity Framework', 'REST APIs', 'JWT', 'Clean Architecture'],
    capabilities: ['Facturación con seguros', 'Gestión de pacientes', 'Asignación operativa', 'Reportes y KPI'],
    slides: [
      {
        image: '/images/gi-medical-dashboard.png',
        imageAlt: 'Dashboard anonimizado de facturación clínica con indicadores, tendencia anual y distribución de servicios.',
        label: '01 · Visibilidad operativa',
        title: 'Indicadores y tendencias para entender la operación de un vistazo',
        body:
          'El dashboard reúne indicadores de facturación por periodo, la evolución de los últimos doce meses y el histórico completo. El desglose de servicios más facturados ayuda a identificar patrones de demanda sin separar la lectura financiera de la operativa.',
        bullets: ['KPI de hoy, ayer y última semana', 'Tendencia mensual e histórico completo', 'Distribución de servicios facturados'],
      },
      {
        image: '/images/gi-medical-billing.png',
        imageAlt: 'Pantalla anonimizada de facturación de servicios médicos con datos del paciente, cobertura y servicios.',
        label: '02 · Facturación',
        title: 'Un flujo guiado desde el paciente hasta el registro de servicios',
        body:
          'La experiencia permite localizar o registrar al paciente, asociar su cobertura médica y seleccionar los servicios realizados. El operador revisa copagos, montos cubiertos y el total antes de registrar la factura, reduciendo pasos manuales dentro del punto de atención.',
        bullets: ['Búsqueda y registro de pacientes', 'Cobertura médica y copagos', 'Servicios, cantidades y total de la factura'],
      },
      {
        image: '/images/gi-medical-reports.png',
        imageAlt: 'Pantalla anonimizada de reportes de facturación clínica con filtros por fecha y exportación.',
        label: '03 · Reportes',
        title: 'Reportes exportables para seguimiento financiero y operativo',
        body:
          'El módulo de reportes organiza la facturación general, la facturación por servicio y la facturación por aseguradora. Los filtros por periodo y la exportación a Excel o PDF facilitan el análisis y el intercambio de información sin depender de consolidaciones manuales.',
        bullets: ['Facturación general, por servicio y por aseguradora', 'Filtros por rango de fechas', 'Exportación a Excel y PDF'],
      },
      {
        image: '/images/gi-medical-login.png',
        imageAlt: 'Acceso anonimizado a la plataforma clínica.',
        label: '04 · Arquitectura y seguridad',
        title: 'Una base cliente-servidor pensada para procesos sensibles',
        body:
          'La solución combina Angular y .NET en una arquitectura cliente-servidor, con SQL Server y Entity Framework Core para la persistencia. Clean Architecture mantiene separadas las responsabilidades; JWT, gestión de usuarios, asignación de operarios y médicos lectores, copias de seguridad y controles de acceso refuerzan la operación.',
        bullets: ['Clean Architecture y API REST', 'JWT, usuarios y permisos', 'Asignación de operarios y médicos lectores', 'Gestión de caja, lecturas y respaldos'],
        metricLabel: 'Resultado cualitativo',
        metricValue: 'Operación clínica y financiera conectada',
      },
    ],
    disclaimer:
      'Caso empresarial anonimizado. Las capturas se han tratado para ocultar identidad, datos clínicos, usuarios e importes; no contienen información de pacientes.',
  },
  createProjectTemplate('vehicle-backed-lending-platform', 'blue'),
  createProjectTemplate('industrial-manufacturing-erp', 'mint'),
  createProjectTemplate('warehouse-management-system', 'coral'),
  createProjectTemplate('measurement-quotation-system', 'violet'),
];

export const CORE_TECHNOLOGIES = [
  'C#',
  '.NET 8',
  'ASP.NET Core',
  'REST APIs',
  'SQL Server',
  'Entity Framework',
  'Angular',
  'Docker',
  'Clean Architecture',
  'Unit Testing',
] as const;

export const CERTIFICATIONS = [
  { title: 'Programación avanzada en C# .NET', issuer: 'ITLA', date: '2025' },
  { title: 'Desarrollo web frontend con Angular', issuer: 'ITLA', date: '2024' },
  { title: 'Foundational C#', issuer: 'Microsoft · freeCodeCamp', date: '2023' },
  { title: 'Intermediate Machine Learning', issuer: 'Kaggle', date: '2026' },
] as const;
