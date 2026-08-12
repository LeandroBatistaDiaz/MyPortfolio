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
    logo: '/images/jkf-logo.png',
    logoAlt: 'JKF Engineering Soft',
    coverSequence: [
      '/og.png',
      '/images/gi-medical-dashboard.png',
      '/images/gi-medical-billing.png',
    ],
    accent: 'mint',
    technologies: ['Angular', '.NET', 'SQL Server', 'Entity Framework', 'REST APIs', 'JWT', 'Clean Architecture'],
    capabilities: ['Facturación con seguros', 'Gestión de pacientes', 'Asignación operativa', 'Reportes y KPI'],
    attribution: 'JKF Engineering Soft',
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
  {
    slug: 'fcmsystem-modular-erp',
    title: 'ERP - FCMSystem · Modular Multi-Tenant',
    shortTitle: 'FCMSystem ERP',
    category: 'SaaS · ERP industrial',
    summary:
      'SaaS multi-tenant para coordinar compras, ventas, inventario, almacén y fabricación desde una misma operación empresarial.',
    role: 'Software Engineer · Full Stack .NET',
    period: 'Caso de estudio · Proyecto empresarial',
    cover: '/images/fcm-dashboard.png',
    coverSequence: [
      '/images/fcm-erp-cover.jpg',
      '/images/fcm-dashboard.png',
      '/images/fcm-billing.png',
      '/images/fcm-manufacturing.png',
    ],
    logo: '/images/jkf-logo.png',
    logoAlt: 'JKF Engineering Soft',
    accent: 'blue',
    technologies: ['Angular', '.NET', 'SQL Server', 'Entity Framework', 'REST APIs', 'JWT'],
    capabilities: ['Ventas y caja', 'Inventario y almacén', 'Fabricación por composición', 'Multi-tenant'],
    attribution: 'JKF Engineering Soft',
    contactCta: '¿Te interesa este sistema? Escríbenos un email: kelvisferreras@gmail.com',
    slides: [
      {
        image: '/images/fcm-dashboard.png',
        imageAlt: 'Dashboard general de FCMSystem con indicadores de ventas, caja e inventario.',
        label: '01 · Operación',
        title: 'Una vista ejecutiva para decidir con el pulso del negocio',
        body:
          'El dashboard concentra el resumen de ventas, caja e inventario de los últimos treinta días y lo compara con el periodo anterior. Los indicadores de monto total, ticket promedio, cantidad de ventas, efectivo, inventario y artículos bajo stock convierten la operación diaria en señales accionables.',
        bullets: ['Resumen de ventas, caja e inventario', 'Comparativos por periodo', 'Evolución de ventas y alertas de stock'],
      },
      {
        image: '/images/fcm-billing.png',
        imageAlt: 'Pantalla de facturación de FCMSystem con artículos, cantidades, impuestos y resumen de venta.',
        label: '02 · Ventas',
        title: 'Facturación conectada con clientes, caja y existencias',
        body:
          'El flujo de ventas permite seleccionar artículos, aplicar cantidades y medidas, gestionar descuentos y calcular impuestos antes de cobrar. La factura se integra con clientes, condiciones de pago, comprobantes fiscales, caja e inventario para conservar la trazabilidad de cada operación.',
        bullets: ['Facturación con NCF', 'Cotizaciones y descuentos por contexto', 'Caja, cobro e integración con inventario'],
      },
      {
        image: '/images/fcm-manufacturing.png',
        imageAlt: 'Módulo de productos fabricados y configuración de piezas de FCMSystem.',
        label: '03 · Fabricación',
        title: 'Composición de artículos para convertir materias primas en productos vendibles',
        body:
          'La fabricación se modela mediante productos compuestos y piezas. El sistema permite definir dimensiones, materias primas y relaciones de composición para calcular el material requerido, asociar órdenes de fabricación a una venta y reflejar el consumo en inventario.',
        bullets: ['Productos fabricados y piezas', 'Cálculo de materia prima por dimensiones', 'Órdenes de fabricación asociables a ventas'],
      },
      {
        image: '/images/fcm-inventory.png',
        imageAlt: 'Balance de inventario de FCMSystem con existencias, valoración, alertas y movimientos.',
        label: '04 · Inventario y almacén',
        title: 'Existencias confiables desde la compra hasta el despacho',
        body:
          'Inventario y almacén comparten una fuente de verdad para registrar entradas, salidas, movimientos, proveedores, órdenes de compra y despachos. El balance por artículo, la validación de existencias y las alertas de stock ayudan a proteger la continuidad operativa.',
        bullets: ['Balance y valoración por artículo', 'Proveedores, compras y despachos', 'Movimientos y validación de existencia'],
      },
      {
        image: '/images/fcm-architecture.png',
        imageAlt: 'Diagrama de arquitectura monolítica modular multi-tenant de FCMSystem.',
        label: '05 · Arquitectura',
        title: 'Un monolito modular preparado para crecer por tenant y por dominio',
        body:
          'FCMSystem organiza sus capacidades dentro de un monolito modular construido con .NET y Angular. El contexto del tenant se resuelve en cada solicitud y los módulos comparten contratos de dominio sin perder separación. SQL Server, Entity Framework Core, JWT con refresh token y hash de contraseñas sostienen una base segura y mantenible.',
        bullets: ['Angular, .NET y API REST', 'Multi-tenant con contexto y datos aislados', 'EF Core, SQL Server y contratos compartidos', 'JWT, refresh token, roles y permisos'],
        metricLabel: 'Resultado cualitativo',
        metricValue: 'Operación industrial conectada en un solo producto',
      },
    ],
    disclaimer:
      'Caso empresarial presentado con capturas proporcionadas por el autor. El sistema automatiza compras, ventas, inventario, almacén y fabricación bajo una arquitectura SaaS multi-tenant.',
  },
  {
    slug: 'epelsa-computer-vision',
    title: 'IA Computer Vision para reconocimiento de productos',
    shortTitle: 'Computer Vision',
    category: 'Computer Vision · Retail Automation',
    summary:
      'Solución de visión por computador para asistir el reconocimiento automático de productos en estaciones de pesaje de supermercados.',
    role: 'Software Engineer Intern · C++ / Computer Vision',
    period: 'Práctica académica curricular · mayo–agosto 2026',
    cover: '/images/epelsa-vision-hero.jpg',
    coverSequence: [
      '/images/epelsa-vision-hero.jpg',
      '/images/epelsa-vision-console.jpg',
      '/images/epelsa-vision-workflow.jpg',
    ],
    logo: '/images/epelsa-logo.jpg',
    logoAlt: 'Grupo Epelsa',
    accent: 'violet',
    technologies: ['C++'],
    capabilities: ['Reconocimiento visual', 'Asistencia al pesaje', 'Confirmación operativa', 'Feedback del operador'],
    attribution: 'Grupo Epelsa',
    slides: [
      {
        image: '/images/epelsa-vision-hero.jpg',
        imageAlt: 'Concepto visual de una estación de pesaje con cámara y reconocimiento de producto.',
        label: '01 · Contexto',
        title: 'Reconocer el producto en el mismo momento del pesaje',
        body:
          'Durante mi práctica académica curricular participé en una solución de visión por computador orientada a automatizar la identificación de productos en balanzas de supermercados. El objetivo era asistir al operador y reducir la fricción entre capturar el producto, reconocerlo y continuar la operación.',
        bullets: ['Estaciones de pesaje asistidas', 'Reconocimiento automático de productos', 'Experiencia orientada al operador'],
      },
      {
        image: '/images/epelsa-vision-console.jpg',
        imageAlt: 'Interfaz conceptual de una consola de reconocimiento visual para una estación de pesaje.',
        label: '02 · Experiencia',
        title: 'Una consola clara para revisar la predicción y actuar con confianza',
        body:
          'La experiencia conceptual muestra una vista de cámara, el resultado del reconocimiento y una lista de alternativas. El operador puede confirmar el producto sugerido o elegir otro elemento cuando la identificación requiere revisión humana.',
        bullets: ['Vista previa de cámara', 'Producto sugerido y alternativas', 'Confirmación o selección manual'],
      },
      {
        image: '/images/epelsa-vision-workflow.jpg',
        imageAlt: 'Flujo conceptual de captura, reconocimiento y confirmación humana de un producto.',
        label: '03 · Flujo operativo',
        title: 'Captura, reconocimiento y confirmación en un flujo continuo',
        body:
          'El recorrido conecta la captura del producto sobre la balanza con el reconocimiento visual y la confirmación final del operador. Esta combinación mantiene a la persona dentro del circuito y permite que cada corrección se convierta en una señal útil para mejorar la operación.',
        bullets: ['Captura del producto en la balanza', 'Sugerencias visuales ordenadas', 'Confirmación humana del resultado'],
      },
      {
        image: '/images/epelsa-vision-scale.jpg',
        imageAlt: 'Concepto cinematográfico de una balanza de supermercado con cámara y producto identificado.',
        label: '04 · Integración',
        title: 'Tecnología aplicada al punto exacto donde ocurre la operación',
        body:
          'La solución se concibió para convivir con el entorno real de una estación de pesaje: cámara, balanza, producto y pantalla de operación. La interfaz prioriza una lectura rápida para que el reconocimiento ayude al trabajo cotidiano sin interrumpirlo.',
        bullets: ['Cámara y balanza en el mismo punto de trabajo', 'Respuesta visual inmediata', 'Asistencia sin sustituir la decisión del operador'],
      },
      {
        image: '/images/epelsa-vision-flow.jpg',
        imageAlt: 'Diagrama conceptual del flujo de captura, reconocimiento, sugerencias y confirmación.',
        label: '05 · Contribución',
        title: 'Desarrollo, integración y liderazgo dentro del equipo',
        body:
          'Contribuí al análisis, desarrollo, integración y validación funcional del software de Computer Vision en C++. Además, ejercí como Scrum Master y líder del equipo de desarrollo, ayudando a organizar el trabajo y mantener el foco en entregables verificables durante la práctica.',
        bullets: ['C++ y Computer Vision', 'Análisis, integración y validación funcional', 'Scrum Master y liderazgo técnico del equipo'],
        metricLabel: 'Resultado cualitativo',
        metricValue: 'Reconocimiento visual integrado en una experiencia operativa',
      },
    ],
    disclaimer:
      'Práctica académica curricular realizada en Grupo Epelsa. Las imágenes presentadas son conceptos visuales creados para representar el software real y no muestran interfaces ni información confidencial del proyecto.',
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
  'C++',
  'Python',
] as const;

export const CERTIFICATIONS = [
  { title: 'Programación avanzada en C# .NET', issuer: 'ITLA', date: '2025', image: '/images/certificates/net-avanzado.jpg' },
  { title: 'Desarrollo web frontend con Angular', issuer: 'ITLA', date: '2024', image: '/images/certificates/angular.jpg' },
  { title: 'Python', issuer: 'Kaggle', date: '2026', image: '/images/certificates/python.png' },
  { title: 'Intermediate Machine Learning', issuer: 'Kaggle', date: '2026', image: '/images/certificates/kaggle-intermediate-machine-learning.jpg' },
] as const;
