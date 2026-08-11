import { PortfolioProject } from '../models/project.model';

export const PORTFOLIO_PROJECTS: readonly PortfolioProject[] = [
  {
    slug: 'vehicle-backed-lending-platform',
    title: 'Plataforma de préstamos con garantía vehicular',
    shortTitle: 'Lending Platform',
    category: 'Fintech · Sistema empresarial',
    summary:
      'Una plataforma centralizada para gestionar el ciclo completo de préstamos respaldados por vehículos: clientes, garantías, cuotas, pagos, moras y seguimiento legal.',
    role: 'Full Stack .NET Developer',
    period: 'Caso de estudio · 2023–2025',
    cover: '/images/project-lending.webp',
    accent: 'blue',
    technologies: ['Angular', '.NET', 'REST APIs', 'SQL Server', 'Entity Framework', 'JWT'],
    capabilities: ['Préstamos y cuotas', 'Garantías vehiculares', 'Pagos y moras', 'Notificaciones legales'],
    slides: [
      {
        label: '01 · Contexto',
        title: 'Un proceso financiero con demasiadas piezas desconectadas',
        body:
          'La operación necesitaba reunir en un único flujo la información de clientes, vehículos en garantía, préstamos, vencimientos, pagos y seguimiento de incidencias.',
        bullets: ['Trazabilidad del préstamo', 'Estado de cada garantía', 'Visión operativa compartida'],
      },
      {
        label: '02 · Solución',
        title: 'Un núcleo operativo diseñado alrededor del ciclo del préstamo',
        body:
          'Diseñé y desarrollé funcionalidades que conectan el alta del cliente con la evaluación de la garantía, la planificación de cuotas y el registro de pagos y moras.',
        metricLabel: 'Enfoque',
        metricValue: 'Flujo de extremo a extremo',
      },
      {
        label: '03 · Arquitectura',
        title: 'Frontend desacoplado, API REST y un modelo de datos consistente',
        body:
          'Angular concentra la experiencia operativa; la API en .NET encapsula reglas de negocio y acceso a datos, con SQL Server como fuente central de información.',
        bullets: ['Autenticación JWT', 'Entity Framework', 'Separación de responsabilidades'],
      },
      {
        label: '04 · Resultado',
        title: 'Una operación más clara, trazable y preparada para evolucionar',
        body:
          'La solución consolidó procesos que antes requerían múltiples seguimientos y proporcionó una base mantenible para incorporar nuevas reglas y reportes.',
        metricLabel: 'Resultado cualitativo',
        metricValue: 'Control centralizado',
      },
    ],
    disclaimer: 'Caso anonimizado. La interfaz mostrada es conceptual y no reproduce datos ni pantallas del cliente.',
  },
  {
    slug: 'industrial-manufacturing-erp',
    title: 'ERP industrial para fabricación e inventario',
    shortTitle: 'Manufacturing ERP',
    category: 'Industria · ERP',
    summary:
      'Una solución empresarial que conecta almacén, inventario, facturación y producción mediante composición de artículos y listas de materiales.',
    role: 'Software Developer · .NET',
    period: 'Caso de estudio · 2023–2025',
    cover: '/images/project-erp.webp',
    accent: 'mint',
    technologies: ['Angular', '.NET 8', 'SQL Server', 'Entity Framework', 'REST APIs', 'SOLID'],
    capabilities: ['Inventario', 'Producción', 'Listas de materiales', 'Facturación'],
    slides: [
      {
        label: '01 · Dominio',
        title: 'Fabricar exige conocer qué entra, qué se transforma y qué queda disponible',
        body:
          'El sistema debía representar artículos compuestos, materiales, movimientos de almacén, productos terminados y su impacto en inventario y facturación.',
        bullets: ['Materias primas', 'Artículos compuestos', 'Existencias y movimientos'],
      },
      {
        label: '02 · Diseño',
        title: 'El producto como composición, no solo como una referencia',
        body:
          'La solución incorpora listas de materiales para relacionar cada producto fabricado con los componentes que consume y mantener coherencia entre producción e inventario.',
        metricLabel: 'Modelo central',
        metricValue: 'Bill of Materials (BOM)',
      },
      {
        label: '03 · Implementación',
        title: 'Módulos conectados sobre una misma fuente de verdad',
        body:
          'Angular, .NET 8 y SQL Server sostienen una arquitectura modular en la que almacén, producción y facturación comparten reglas y datos consistentes.',
        bullets: ['API REST', 'Reglas de negocio', 'Validación funcional'],
      },
      {
        label: '04 · Resultado',
        title: 'Una visión integrada de la operación industrial',
        body:
          'El ERP permite seguir el flujo desde los materiales disponibles hasta el producto facturable, reduciendo la fragmentación entre áreas operativas.',
        metricLabel: 'Resultado cualitativo',
        metricValue: 'Operación integrada',
      },
    ],
    disclaimer: 'Caso anonimizado. Los recursos visuales son representaciones conceptuales creadas para este portafolio.',
  },
  {
    slug: 'clinical-billing-operations',
    title: 'Facturación y operaciones para un centro diagnóstico',
    shortTitle: 'Clinical Operations',
    category: 'HealthTech · Gestión clínica',
    summary:
      'Un sistema para conectar facturación, pacientes, aseguradoras, estudios clínicos y la trazabilidad de los profesionales responsables de cada lectura.',
    role: 'Full Stack .NET Developer',
    period: 'Caso de estudio · 2023–2025',
    cover: '/images/project-clinical.webp',
    accent: 'violet',
    technologies: ['Angular', '.NET 8', 'SQL Server', 'REST APIs', 'Entity Framework'],
    capabilities: ['Pacientes', 'Aseguradoras', 'Estudios clínicos', 'Facturación'],
    slides: [
      {
        label: '01 · Contexto',
        title: 'La información clínica y administrativa debía avanzar en el mismo flujo',
        body:
          'La operación requería relacionar pacientes, cobertura de aseguradoras, estudios realizados, facturación y médicos responsables de la interpretación.',
        bullets: ['Datos del paciente', 'Cobertura y facturación', 'Trazabilidad de estudios'],
      },
      {
        label: '02 · Solución',
        title: 'Una experiencia operativa centrada en el recorrido del estudio',
        body:
          'La aplicación organiza la información desde el registro del paciente hasta la lectura del estudio, manteniendo conectados los procesos clínicos y administrativos.',
        metricLabel: 'Eje funcional',
        metricValue: 'Trazabilidad clínica',
      },
      {
        label: '03 · Tecnología',
        title: 'Una plataforma web modular y preparada para mantener reglas sensibles',
        body:
          'La interfaz Angular consume servicios .NET 8 respaldados por SQL Server, separando las responsabilidades de presentación, dominio y persistencia.',
        bullets: ['Modelado relacional', 'Servicios REST', 'Validaciones de negocio'],
      },
      {
        label: '04 · Resultado',
        title: 'Menos fragmentación entre atención, lectura y facturación',
        body:
          'El sistema consolidó datos relacionados y facilitó el seguimiento de cada estudio sin exponer información clínica fuera de su contexto operativo.',
        metricLabel: 'Resultado cualitativo',
        metricValue: 'Información conectada',
      },
    ],
    disclaimer: 'Caso anonimizado. No se muestran pacientes, información clínica ni interfaces reales.',
  },
  {
    slug: 'warehouse-management-system',
    title: 'Sistema web para gestión de almacenes',
    shortTitle: 'Warehouse System',
    category: 'Logística · Inventario',
    summary:
      'Una aplicación web orientada al control de inventario y las operaciones de stock, construida con Blazor y una API en ASP.NET.',
    role: '.NET Developer',
    period: 'Caso de estudio · 2023–2025',
    cover: '/images/project-warehouse.webp',
    accent: 'coral',
    technologies: ['Blazor', 'ASP.NET Web API', 'C#', 'SQL Server', 'Entity Framework'],
    capabilities: ['Stock', 'Entradas y salidas', 'Trazabilidad', 'Operaciones de almacén'],
    slides: [
      {
        label: '01 · Necesidad',
        title: 'El inventario solo es útil cuando cada movimiento queda explicado',
        body:
          'El proyecto debía ofrecer una visión clara de existencias y operaciones, evitando que entradas, salidas y ajustes quedaran aislados del estado real del almacén.',
        bullets: ['Existencias', 'Movimientos', 'Historial operativo'],
      },
      {
        label: '02 · Solución',
        title: 'Un flujo web directo para las tareas cotidianas del almacén',
        body:
          'La experiencia se organizó alrededor de consultas rápidas, movimientos de stock y validaciones que protegen la consistencia del inventario.',
        metricLabel: 'Prioridad',
        metricValue: 'Claridad operativa',
      },
      {
        label: '03 · Arquitectura',
        title: 'Blazor para la interfaz y ASP.NET Web API para el dominio',
        body:
          'La separación entre experiencia web, lógica de negocio y persistencia permitió mantener el sistema y extender nuevas operaciones sin acoplar las capas.',
        bullets: ['Componentes reutilizables', 'Servicios REST', 'Acceso a datos'],
      },
      {
        label: '04 · Resultado',
        title: 'Una base mantenible para gestionar inventario con confianza',
        body:
          'El producto convirtió las operaciones de almacén en un proceso trazable y proporcionó una estructura clara para evolucionar reglas y reportes.',
        metricLabel: 'Resultado cualitativo',
        metricValue: 'Inventario trazable',
      },
    ],
    disclaimer: 'Caso anonimizado. La imagen y la interfaz son conceptuales y no contienen información empresarial.',
  },
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
