import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

export type PortfolioLanguage = 'es' | 'en';

const ENGLISH: Record<string, string> = {
  'Saltar al contenido': 'Skip to content', 'Ir al inicio': 'Go to home', 'Software Engineer': 'Software Engineer',
  Proyectos: 'Projects', Perfil: 'Profile', Contacto: 'Contact', Hablemos: "Let's talk", Claro: 'Light', Oscuro: 'Dark',
  'Activar modo claro': 'Enable light mode', 'Activar modo oscuro': 'Enable dark mode', 'Modo claro': 'Light mode', 'Modo oscuro': 'Dark mode',
  'Proyectos realizados': 'Projects developed', 'Senior Full-Stack Developer': 'Senior Full-Stack Developer', 'Stack principal': 'Core stack',
  Disponible: 'Available', 'Ubicaci\u00f3n': 'Location', 'Asturias, Espa\u00f1a': 'Asturias, Spain', Modalidad: 'Work model',
  'Presencial \u00b7 H\u00edbrido \u00b7 Remoto': 'On-site \u00b7 Hybrid \u00b7 Remote', 'Ver perfil completo': 'View full profile',
  'Abrir perfil de Leandro Batista': "Open Leandro Batista's profile", 'Contenido responsable': 'Responsible content',
  'Los proyectos empresariales est\u00e1n anonimizados y utilizan recursos visuales conceptuales.': 'Business projects are anonymized and use conceptual visual resources.',
  'Incorporaci\u00f3n inmediata': 'Available immediately', 'Jornada completa': 'Full-time', 'Jornada completa \u00b7 Espa\u00f1a': 'Full-time \u00b7 Spain',
  'Perfil profesional': 'Professional profile', 'Software Engineer \u00b7 Backend .NET': 'Software Engineer \u00b7 .NET Backend',
  '.NET, mentalidad de producto y experiencia empresarial.': '.NET, product thinking and enterprise experience.',
  'Soy Software Engineer especializado en C#, .NET 8, APIs REST y SQL Server. Transformo requisitos de negocio en soluciones mantenibles, desde el modelado de datos hasta la integraci\u00f3n, validaci\u00f3n funcional y evoluci\u00f3n del producto.': 'I am a Software Engineer specialized in C#, .NET 8, REST APIs, and SQL Server. I turn business requirements into maintainable solutions, from data modeling to integration, functional validation, and product evolution.',
  Contactar: 'Contact me', GitHub: 'GitHub', 'Enviar correo': 'Email me', 'Datos profesionales': 'Professional details', 'Espa\u00f1ol nativo \u00b7 Ingl\u00e9s B1': 'Native Spanish \u00b7 B1 English', 'Perfil internacional disponible': 'International profile available',
  Trayectoria: 'Experience', 'Experiencia profesional': 'Professional experience', 'Remoto \u00b7 Espa\u00f1a': 'Remote \u00b7 Spain',
  'Remoto \u00b7 Rep\u00fablica Dominicana': 'Remote \u00b7 Dominican Republic', 'H\u00edbrido \u00b7 Rep\u00fablica Dominicana': 'Hybrid \u00b7 Dominican Republic',
  'Tecnolog\u00edas': 'Technologies', 'Stack con el que construyo': 'The stack I build with', 'Formaci\u00f3n': 'Education',
  'Licenciatura en Inform\u00e1tica': "Bachelor's Degree in Computer Science", 'Aprendizaje continuo': 'Continuous learning', 'Certificaciones': 'Certifications', Certificado: 'Certificate',
  '\u00bfHay un producto complejo que necesita una base clara?': 'Have a complex product that needs a clear foundation?',
  'Estoy disponible para oportunidades como .NET Software Engineer, Backend Developer o Full Stack .NET Developer en Espa\u00f1a.': 'I am available for .NET Software Engineer, Backend Developer, or Full Stack .NET Developer opportunities in Spain.',
  'Escribir por LinkedIn': 'Message me on LinkedIn', Disponibilidad: 'Availability', Idiomas: 'Languages',
  'Incorporaci\u00f3n inmediata \u00b7 Jornada completa': 'Available immediately \u00b7 Full-time', 'Asturias \u00b7 H\u00edbrido y remoto en Espa\u00f1a': 'Asturias \u00b7 Hybrid and remote in Spain',
  'Este portafolio no expone informaci\u00f3n confidencial. Los casos de estudio est\u00e1n anonimizados y sus interfaces son conceptuales.': 'This portfolio does not expose confidential information. Case studies are anonymized and their interfaces are conceptual.',
  'Volver al feed de proyectos': 'Back to project feed', 'Historia del proyecto': 'Project story', 'Progreso de la historia': 'Story progress', 'Navegaci\u00f3n de la historia': 'Story navigation', 'Ir a ': 'Go to ', 'Volver al feed': 'Back to feed',
  'Proyecto desarrollado por JKF Engineering Soft': 'Project developed by JKF Engineering Soft', 'Diapositiva anterior': 'Previous slide', 'Diapositiva siguiente': 'Next slide', 'Siguiente caso \u00b7 ': 'Next case \u00b7 ',
  'Proyecto no encontrado': 'Project not found', 'Este caso todav\u00eda no forma parte del portafolio.': 'This case is not part of the portfolio yet.', 'Caso anonimizado y revisado': 'Anonymized and reviewed case', Anonimizado: 'Anonymized', Plantilla: 'Template',
  'Abrir plantilla': 'Open template', 'Ver historia del proyecto': 'View project story', 'Vista anonimizada de ': 'Anonymized view of ', 'Espacio para evidencia visual': 'Space for visual evidence', 'Tecnolog\u00edas principales': 'Main technologies',
  'Caso': 'Case', Abrir: 'Open', 'Resumen profesional': 'Professional summary', 'Tecnolog\u00edas y disponibilidad': 'Technologies and availability',
  'Full Stack .NET Developer': 'Full Stack .NET Developer', 'Software Engineer \u00b7 Full Stack .NET': 'Software Engineer \u00b7 Full Stack .NET', 'Software Engineer Intern \u00b7 C++ / Computer Vision': 'Software Engineer Intern \u00b7 C++ / Computer Vision',
  'Facturaci\u00f3n con seguros': 'Insurance billing', 'Gesti\u00f3n de pacientes': 'Patient management', 'Asignaci\u00f3n operativa': 'Operational assignment', 'Reportes y KPI': 'Reports and KPIs', 'Ventas y caja': 'Sales and cash', 'Inventario y almac\u00e9n': 'Inventory and warehouse', 'Fabricaci\u00f3n por composici\u00f3n': 'Bill-of-materials manufacturing', 'Reconocimiento visual': 'Visual recognition', 'Asistencia al pesaje': 'Weighing assistance', 'Confirmaci\u00f3n operativa': 'Operator confirmation', 'Feedback del operador': 'Operator feedback',
  'GI Medical Management': 'GI Medical Management', 'GI Medical': 'GI Medical', 'HealthTech · Facturaci\u00f3n cl\u00ednica': 'HealthTech · Clinical billing',
  'ERP - FCMSystem · Modular Multi-Tenant': 'ERP - FCMSystem · Modular Multi-Tenant', 'FCMSystem ERP': 'FCMSystem ERP', 'SaaS · ERP industrial': 'SaaS · Industrial ERP',
  'IA Computer Vision para reconocimiento de productos': 'AI Computer Vision for product recognition', 'Computer Vision': 'Computer Vision', 'Computer Vision · Retail Automation': 'Computer Vision · Retail Automation',
  'Indicadores y tendencias para entender la operaci\u00f3n de un vistazo': 'Indicators and trends to understand operations at a glance',
  'Un flujo guiado desde el paciente hasta el registro de servicios': 'A guided flow from patient intake to service registration',
  'Reportes exportables para seguimiento financiero y operativo': 'Exportable reports for financial and operational follow-up',
  'Una base cliente-servidor pensada para procesos sensibles': 'A client-server foundation designed for sensitive workflows',
  'Una vista ejecutiva para decidir con el pulso del negocio': 'An executive view for decisions grounded in business momentum',
  'Facturaci\u00f3n conectada con clientes, caja y existencias': 'Billing connected to customers, cash, and stock',
  'Composici\u00f3n de art\u00edculos para convertir materias primas en productos vendibles': 'Bill of materials to turn raw materials into sellable products',
  'Existencias confiables desde la compra hasta el despacho': 'Reliable stock from purchasing through dispatch',
  'Un monolito modular preparado para crecer por tenant y por dominio': 'A modular monolith ready to grow by tenant and domain',
  'Reconocer el producto en el mismo momento del pesaje': 'Recognize the product at the exact moment it is weighed',
  'Una consola clara para revisar la predicci\u00f3n y actuar con confianza': 'A clear console to review predictions and act with confidence',
  'Captura, reconocimiento y confirmaci\u00f3n en un flujo continuo': 'Capture, recognition, and confirmation in one continuous flow',
  'Tecnolog\u00eda aplicada al punto exacto donde ocurre la operaci\u00f3n': 'Technology applied exactly where the operation happens',
  'Desarrollo, integraci\u00f3n y liderazgo dentro del equipo': 'Development, integration, and team leadership',
  'Software Engineer especializado en backend .NET y sistemas empresariales.': 'Software Engineer specialized in .NET backend and business systems.',
  'Ingeniero de software con experiencia sólida en .NET, ASP, Windows Form, C#, Python y C++ aplicado a machine learning, automatización de procesos y desarrollo de software empresarial.': 'Software Engineer with solid experience in .NET, ASP, Windows Forms, C#, Python, and C++ applied to machine learning, process automation, and enterprise software development.',
  'Caso de estudio \u00b7 Proyecto empresarial': 'Case study \u00b7 Business project',
  'Pr\u00e1ctica acad\u00e9mica curricular \u00b7 mayo\u2013agosto 2026': 'Academic internship \u00b7 May\u2013August 2026',
  'Plataforma web para centralizar la facturaci\u00f3n de servicios m\u00e9dicos con seguros, la operaci\u00f3n cl\u00ednica y el seguimiento financiero.': 'Web platform that centralizes insured medical billing, clinical operations, and financial follow-up.',
  'SaaS multi-tenant para coordinar compras, ventas, inventario, almac\u00e9n y fabricaci\u00f3n desde una misma operaci\u00f3n empresarial.': 'Multi-tenant SaaS coordinating purchasing, sales, inventory, warehouse, and manufacturing in one business operation.',
  'Soluci\u00f3n de visi\u00f3n por computador para asistir el reconocimiento autom\u00e1tico de productos en estaciones de pesaje de supermercados.': 'Computer vision solution that assists automatic product recognition at supermarket weighing stations.',
  'KPI de hoy, ayer y \u00faltima semana': 'KPIs for today, yesterday, and the last week',
  'Tendencia mensual e hist\u00f3rico completo': 'Monthly trend and complete history',
  'Distribuci\u00f3n de servicios facturados': 'Distribution of billed services',
  'Resumen de ventas, caja e inventario': 'Sales, cash, and inventory summary',
  'Comparativos por periodo': 'Period comparisons',
  'Evoluci\u00f3n de ventas y alertas de stock': 'Sales trend and stock alerts',
  'Facturaci\u00f3n con NCF': 'NCF invoicing',
  'Cotizaciones y descuentos por contexto': 'Quotes and contextual discounts',
  'Caja, cobro e integraci\u00f3n con inventario': 'Cash, collection, and inventory integration',
  'Productos fabricados y piezas': 'Manufactured products and parts',
  'C\u00e1lculo de materia prima por dimensiones': 'Raw-material calculation by dimensions',
  '\u00d3rdenes de fabricaci\u00f3n asociables a ventas': 'Production orders linked to sales',
  'Balance y valoraci\u00f3n por art\u00edculo': 'Item balance and valuation',
  'Proveedores, compras y despachos': 'Suppliers, purchasing, and dispatch',
  'Movimientos y validaci\u00f3n de existencia': 'Movements and stock validation',
  'Multi-tenant con contexto y datos aislados': 'Multi-tenant context with isolated data',
  'Estaciones de pesaje asistidas': 'Assisted weighing stations',
  'Reconocimiento autom\u00e1tico de productos': 'Automatic product recognition',
  'Experiencia orientada al operador': 'Operator-centered experience',
  'Vista previa de c\u00e1mara': 'Camera preview',
  'Producto sugerido y alternativas': 'Suggested product and alternatives',
  'Confirmaci\u00f3n o selecci\u00f3n manual': 'Confirmation or manual selection',
  'Captura del producto en la balanza': 'Product capture on the scale',
  'Sugerencias visuales ordenadas': 'Ranked visual suggestions',
  'Confirmaci\u00f3n humana del resultado': 'Human confirmation of the result',
  'C\u00e1mara y balanza en el mismo punto de trabajo': 'Camera and scale at the same workstation',
  'Respuesta visual inmediata': 'Immediate visual feedback',
  'Asistencia sin sustituir la decisi\u00f3n del operador': 'Assistance without replacing operator judgment',
  'C++ y Computer Vision': 'C++ and Computer Vision',
  'An\u00e1lisis, integraci\u00f3n y validaci\u00f3n funcional': 'Analysis, integration, and functional validation',
  'Scrum Master y liderazgo t\u00e9cnico del equipo': 'Scrum Master and technical team leadership',
  'Operaci\u00f3n cl\u00ednica y financiera conectada': 'Connected clinical and financial operations',
  'Operaci\u00f3n industrial conectada en un solo producto': 'Connected industrial operations in one product',
  'Reconocimiento visual integrado en una experiencia operativa': 'Visual recognition integrated into an operational experience',
  'El dashboard re\u00fane indicadores de facturaci\u00f3n por periodo, la evoluci\u00f3n de los \u00faltimos doce meses y el hist\u00f3rico completo. El desglose de servicios m\u00e1s facturados ayuda a identificar patrones de demanda sin separar la lectura financiera de la operativa.': 'The dashboard brings together billing indicators by period, the last twelve months trend, and the complete history. The breakdown of most-billed services highlights demand patterns without separating financial and operational insight.',
  'La experiencia permite localizar o registrar al paciente, asociar su cobertura m\u00e9dica y seleccionar los servicios realizados. El operador revisa copagos, montos cubiertos y el total antes de registrar la factura, reduciendo pasos manuales dentro del punto de atenci\u00f3n.': 'The experience lets operators find or register a patient, associate medical coverage, and select performed services. Copays, covered amounts, and the total are reviewed before billing, reducing manual steps at the point of care.',
  'El m\u00f3dulo de reportes organiza la facturaci\u00f3n general, la facturaci\u00f3n por servicio y la facturaci\u00f3n por aseguradora. Los filtros por periodo y la exportaci\u00f3n a Excel o PDF facilitan el an\u00e1lisis y el intercambio de informaci\u00f3n sin depender de consolidaciones manuales.': 'The reporting module organizes overall billing, billing by service, and billing by insurer. Period filters and Excel or PDF export simplify analysis and sharing without manual consolidation.',
  'La soluci\u00f3n combina Angular y .NET en una arquitectura cliente-servidor, con SQL Server y Entity Framework Core para la persistencia. Clean Architecture mantiene separadas las responsabilidades; JWT, gesti\u00f3n de usuarios, asignaci\u00f3n de operarios y m\u00e9dicos lectores, copias de seguridad y controles de acceso refuerzan la operaci\u00f3n.': 'The solution combines Angular and .NET in a client-server architecture, with SQL Server and Entity Framework Core for persistence. Clean Architecture keeps responsibilities separated, while JWT, user management, staff and reader assignment, backups, and access controls strengthen operations.',
  'El dashboard concentra el resumen de ventas, caja e inventario de los \u00faltimos treinta d\u00edas y lo compara con el periodo anterior. Los indicadores de monto total, ticket promedio, cantidad de ventas, efectivo, inventario y art\u00edculos bajo stock convierten la operaci\u00f3n diaria en se\u00f1ales accionables.': 'The dashboard brings together sales, cash, and inventory for the last thirty days and compares them with the previous period. Total amount, average ticket, sales count, cash, inventory, and low-stock indicators turn daily operations into actionable signals.',
  'El flujo de ventas permite seleccionar art\u00edculos, aplicar cantidades y medidas, gestionar descuentos y calcular impuestos antes de cobrar. La factura se integra con clientes, condiciones de pago, comprobantes fiscales, caja e inventario para conservar la trazabilidad de cada operaci\u00f3n.': 'The sales flow lets operators select items, apply quantities and measurements, manage discounts, and calculate taxes before charging. Invoices connect customers, payment terms, fiscal documents, cash, and inventory to preserve traceability.',
  'La fabricaci\u00f3n se modela mediante productos compuestos y piezas. El sistema permite definir dimensiones, materias primas y relaciones de composici\u00f3n para calcular el material requerido, asociar \u00f3rdenes de fabricaci\u00f3n a una venta y reflejar el consumo en inventario.': 'Manufacturing is modeled through composite products and parts. The system defines dimensions, raw materials, and composition relationships to calculate required materials, link production orders to sales, and reflect consumption in inventory.',
  'Inventario y almac\u00e9n comparten una fuente de verdad para registrar entradas, salidas, movimientos, proveedores, \u00f3rdenes de compra y despachos. El balance por art\u00edculo, la validaci\u00f3n de existencias y las alertas de stock ayudan a proteger la continuidad operativa.': 'Inventory and warehouse share a single source of truth for receipts, issues, movements, suppliers, purchase orders, and dispatches. Item balances, stock validation, and alerts protect operational continuity.',
  'FCMSystem organiza sus capacidades dentro de un monolito modular construido con .NET y Angular. El contexto del tenant se resuelve en cada solicitud y los m\u00f3dulos comparten contratos de dominio sin perder separaci\u00f3n. SQL Server, Entity Framework Core, JWT con refresh token y hash de contrase\u00f1as sostienen una base segura y mantenible.': 'FCMSystem organizes its capabilities in a modular monolith built with .NET and Angular. Tenant context is resolved on each request and modules share domain contracts without losing separation. SQL Server, Entity Framework Core, JWT with refresh tokens, and password hashing provide a secure, maintainable foundation.',
  'Durante mi pr\u00e1ctica acad\u00e9mica curricular particip\u00e9 en una soluci\u00f3n de visi\u00f3n por computador orientada a automatizar la identificaci\u00f3n de productos en balanzas de supermercados. El objetivo era asistir al operador y reducir la fricci\u00f3n entre capturar el producto, reconocerlo y continuar la operaci\u00f3n.': 'During my academic internship, I contributed to a computer vision solution designed to automate product identification on supermarket scales. The goal was to assist operators and reduce friction between capturing an item, recognizing it, and continuing the operation.',
  'La experiencia conceptual muestra una vista de c\u00e1mara, el resultado del reconocimiento y una lista de alternativas. El operador puede confirmar el producto sugerido o elegir otro elemento cuando la identificaci\u00f3n requiere revisi\u00f3n humana.': 'The conceptual experience shows a camera view, recognition result, and alternative matches. Operators can confirm the suggested product or choose another item when human review is needed.',
  'El recorrido conecta la captura del producto sobre la balanza con el reconocimiento visual y la confirmaci\u00f3n final del operador. Esta combinaci\u00f3n mantiene a la persona dentro del circuito y permite que cada correcci\u00f3n se convierta en una se\u00f1al \u00fatil para mejorar la operaci\u00f3n.': 'The flow connects product capture on the scale with visual recognition and final operator confirmation. Keeping a person in the loop turns each correction into a useful signal for improving the operation.',
  'La soluci\u00f3n se concibi\u00f3 para convivir con el entorno real de una estaci\u00f3n de pesaje: c\u00e1mara, balanza, producto y pantalla de operaci\u00f3n. La interfaz prioriza una lectura r\u00e1pida para que el reconocimiento ayude al trabajo cotidiano sin interrumpirlo.': 'The solution was designed to fit the real environment of a weighing station: camera, scale, product, and operator display. The interface prioritizes fast reading so recognition helps daily work without interrupting it.',
  'Contribu\u00ed al an\u00e1lisis, desarrollo, integraci\u00f3n y validaci\u00f3n funcional del software de Computer Vision en C++. Adem\u00e1s, ejerc\u00ed como Scrum Master y l\u00edder del equipo de desarrollo, ayudando a organizar el trabajo y mantener el foco en entregables verificables durante la pr\u00e1ctica.': 'I contributed to the analysis, development, integration, and functional validation of the C++ computer vision software. I also served as Scrum Master and development-team lead, helping organize the work and keep the internship focused on verifiable deliverables.',
  'Caso empresarial anonimizado. Las capturas se han tratado para ocultar identidad, datos cl\u00ednicos, usuarios e importes; no contienen informaci\u00f3n de pacientes.': 'Anonymized business case. Screenshots were treated to hide identity, clinical data, users, and amounts; they contain no patient information.',
  'Caso empresarial presentado con capturas proporcionadas por el autor. El sistema automatiza compras, ventas, inventario, almac\u00e9n y fabricaci\u00f3n bajo una arquitectura SaaS multi-tenant.': 'Business case presented with screenshots supplied by the author. The system automates purchasing, sales, inventory, warehouse, and manufacturing under a multi-tenant SaaS architecture.',
  'Pr\u00e1ctica acad\u00e9mica curricular realizada en Grupo Epelsa. Las im\u00e1genes presentadas son conceptos visuales creados para representar el software real y no muestran interfaces ni informaci\u00f3n confidencial del proyecto.': 'Academic internship completed at Grupo Epelsa. The images are visual concepts created to represent the real software and do not show confidential interfaces or project information.',
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  readonly language = signal<PortfolioLanguage>('es');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = window.localStorage.getItem('portfolio-language');
      if (stored === 'en' || stored === 'es') this.language.set(stored);
    }
    this.applyDocumentLanguage();
  }

  toggle(): void {
    const next = this.language() === 'es' ? 'en' : 'es';
    this.language.set(next);
    this.applyDocumentLanguage();
    if (isPlatformBrowser(this.platformId)) window.localStorage.setItem('portfolio-language', next);
  }

  t(value: string): string { return this.language() === 'en' ? ENGLISH[value] ?? value : value; }

  private applyDocumentLanguage(): void {
    if (this.document?.documentElement) this.document.documentElement.lang = this.language();
  }
}
