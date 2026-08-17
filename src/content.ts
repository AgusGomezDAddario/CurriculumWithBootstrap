import type { Locale, ProfileContent } from './types'

const sharedLinks = {
  linkedin: 'https://www.linkedin.com/in/agustingomezdaddario/',
  github: 'https://github.com/AgusGomezDAddario',
  email: 'mailto:gomezdaddarioagus@gmail.com',
  memoriumRepo: 'https://github.com/nahuellorenzo/TP-Final',
  memoriumPaper: 'https://drive.google.com/file/d/1bRSpxDZUDBlZM8W7LrvTtr3RnCXEOtOX/view?usp=sharing',
  databasePaper: 'https://docs.google.com/document/d/1bpIfZD0IstvmXx29mPxG8tn8X5yIONiq/edit?usp=drive_link',
}

export const content: Record<Locale, ProfileContent> = {
  es: {
    meta: {
      title: "Agustín Gomez D'Addario | Analista Funcional Técnico",
      description:
        'Analista Funcional Técnico, Citizen Developer e Ingeniero en Sistemas. Conecto negocio, procesos y tecnología para crear soluciones digitales.',
      locale: 'es_AR',
    },
    skipLink: 'Ir al contenido principal',
    nav: [
      { label: 'Perfil', href: '#perfil' },
      { label: 'Casos', href: '#casos' },
      { label: 'Experiencia', href: '#experiencia' },
      { label: 'Capacidades', href: '#capacidades' },
      { label: 'Contacto', href: '#contacto' },
    ],
    navCta: 'Descargar CV',
    availability: 'Abierto a propuestas relevantes',
    hero: {
      eyebrow: 'Analista Funcional Técnico · Citizen Developer',
      title: 'Conecto negocio, procesos y tecnología.',
      lead:
        'Transformo necesidades complejas en soluciones digitales claras, escalables y pensadas para que las personas realmente las adopten.',
      location: 'La Plata, Buenos Aires · Argentina',
      primaryCta: 'Ver casos seleccionados',
      secondaryCta: 'Conocer mi trayectoria',
      photoAlt: "Retrato de Agustín Gomez D'Addario",
      photoNote: 'Ingeniero en Sistemas de Información',
    },
    proofs: [
      {
        value: 'LATAM',
        label: 'Alcance regional',
        detail: 'Soluciones empresariales para distintas industrias.',
      },
      {
        value: '20%',
        label: 'Menor tiempo de adopción',
        detail: 'Coordinación funcional y acompañamiento de usuarios en DGSISAN.',
      },
      {
        value: '2023',
        label: 'CONAIISI',
        detail: 'Presentación de Memorium como innovación aplicada a salud.',
      },
    ],
    about: {
      eyebrow: 'Perfil',
      title: 'El punto de encuentro entre una necesidad y una solución que funciona.',
      paragraphs: [
        'Soy Ingeniero en Sistemas de Información y trabajo en la intersección entre análisis funcional, automatización y desarrollo. Entiendo el problema, ordeno la complejidad y acompaño la solución desde el relevamiento hasta su adopción.',
        'Mi experiencia combina procesos, documentación, interfaces y código. Esto me permite conversar con stakeholders de negocio y equipos técnicos con el mismo nivel de claridad, cuidando la trazabilidad, la calidad y el valor entregado.',
      ],
      statement: 'No se trata solo de construir software. Se trata de impulsar un cambio que genere valor.',
    },
    cases: {
      eyebrow: 'Casos seleccionados',
      title: 'Trabajo con contexto, decisiones y resultados.',
      intro:
        'Una selección curada de soluciones donde combiné análisis, diseño de procesos y ejecución técnica. Los casos comerciales están anonimizados para proteger a los clientes.',
      challengeLabel: 'Desafío',
      contributionLabel: 'Mi aporte',
      resultLabel: 'Resultado',
      expandLabel: 'Ver detalle del caso',
      items: [
        {
          index: '01',
          category: 'Automatización · Low-code',
          title: 'Soluciones empresariales con Deyel',
          summary:
            'Diseño e implementación de aplicaciones web y mobile para digitalizar operaciones de organizaciones de Latinoamérica.',
          challenge:
            'Convertir procesos manuales y necesidades de distintas áreas en flujos digitales consistentes, trazables y fáciles de adoptar.',
          contribution:
            'Relevamiento funcional, modelado de procesos, diseño de entidades y páginas, desarrollo low-code, validación, demos y capacitación de usuarios.',
          result:
            'Procesos operativos digitalizados y una adopción acompañada de punta a punta, conectando las necesidades del negocio con la implementación técnica.',
          stack: ['Deyel', 'BPMN', 'Low-code', 'UX', 'Testing', 'Agile'],
        },
        {
          index: '02',
          category: 'Producto · Gestión operativa',
          title: 'Sistema integral para una empresa de servicios',
          summary:
            'Plataforma para administrar órdenes de trabajo, pagos y egresos con foco en trazabilidad y control financiero.',
          challenge:
            'Centralizar información dispersa y definir un MVP que acompañara la operación cotidiana sin sumar fricción al equipo.',
          contribution:
            'Liderazgo funcional, definición de alcance, planificación, coordinación con el cliente, desarrollo frontend y validación de cada entrega.',
          result:
            'Una base digital responsive para ordenar el circuito operativo y financiero, con entregas incrementales y criterios de aceptación claros.',
          stack: ['React', 'PHP', 'MySQL', 'Google Cloud', 'Trello', 'UAT'],
        },
        {
          index: '03',
          category: 'Salud digital · Data-driven',
          title: 'Memorium',
          summary:
            'Ecosistema de seguimiento para personas mayores y profesionales de la salud, diseñado como proyecto final universitario.',
          challenge:
            'Capturar, persistir y presentar información clínica desde una aplicación móvil hacia una experiencia web para profesionales.',
          contribution:
            'Liderazgo de proyecto, diseño de arquitectura cloud, flujos de integración y una red neuronal en Python para analizar comentarios de usuarios.',
          result:
            'Prototipo funcional presentado en CONAIISI 2023 como caso de innovación tecnológica aplicada al seguimiento sanitario.',
          stack: ['AWS', 'Python', 'React', 'React Native', 'DynamoDB', 'Cognito'],
          link: { label: 'Ver repositorio', href: sharedLinks.memoriumRepo },
        },
      ],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Una trayectoria construida entre negocio y tecnología.',
      intro:
        'Roles donde la escucha, la documentación y la ejecución técnica forman parte del mismo proceso.',
      items: [
        {
          period: 'Sep. 2025 — Actualidad',
          role: 'Citizen Developer',
          company: 'Optaris',
          location: 'Remoto · Latinoamérica',
          summary:
            'Diseño y desarrollo de soluciones empresariales low-code/no-code para aplicaciones web y mobile.',
          highlights: [
            'Automatización y digitalización de procesos operativos.',
            'Análisis funcional, modelado, desarrollo, testing y demos.',
            'Coordinación con stakeholders y equipos interdisciplinarios.',
          ],
          tags: ['Deyel', 'BPMN', 'Low-code', 'Stakeholders'],
        },
        {
          period: 'Abr. 2026',
          role: 'Instructor · Deyel Citizen Developer',
          company: 'Optaris',
          location: 'Buenos Aires · Argentina',
          summary:
            'Capacitación teórico-práctica para perfiles de negocio, implementadores y desarrolladores.',
          highlights: [
            'Workshops de aplicaciones, procesos, tableros y reportes.',
            'Introducción de IA para personajes, historias y reglas de negocio.',
            'Buenas prácticas de gobernanza, trazabilidad y evolución.',
          ],
          tags: ['Formación', 'IA aplicada', 'Gobernanza', 'UX'],
        },
        {
          period: 'Ago. 2025 — Actualidad',
          role: 'Líder Funcional & Desarrollador Frontend',
          company: 'Proyecto independiente',
          location: 'Buenos Aires · Argentina',
          summary:
            'Liderazgo de un sistema de gestión operativo y financiero para una empresa de servicios.',
          highlights: [
            'Definición del alcance funcional y técnico del MVP.',
            'Desarrollo frontend, testing y validación funcional.',
            'Planificación ágil y coordinación entre cliente y equipo.',
          ],
          tags: ['React', 'PHP', 'MySQL', 'Google Cloud'],
        },
        {
          period: 'Nov. 2024 — Sep. 2025',
          role: 'Analista Funcional',
          company: 'DGSISAN · Ministerio de Salud CABA',
          location: 'Modalidad híbrida',
          summary:
            'Participación en la evolución de SIGEHOS, sistema crítico de información sanitaria.',
          highlights: [
            'Relevamiento y documentación funcional con trazabilidad.',
            'Flujos UML/BPMN, historias de usuario y pruebas funcionales.',
            'Coordinación que redujo 20% los tiempos de adopción.',
          ],
          tags: ['SIGEHOS', 'UML', 'BPMN', 'Jira'],
        },
        {
          period: 'Mar. 2024 — Nov. 2024',
          role: 'Becario de Proyectos',
          company: 'LINES · UTN La Plata',
          location: 'La Plata · Argentina',
          summary:
            'Desarrollo y mantenimiento del sitio institucional de Ingeniería en Sistemas.',
          highlights: [
            'Mejoras de accesibilidad, usabilidad y performance.',
            'Pruebas funcionales y documentación de incidencias.',
            'Despliegues mediante Docker y GitHub Actions.',
          ],
          tags: ['JavaScript', 'Docker', 'CI/CD', 'WCAG'],
        },
      ],
    },
    capabilities: {
      eyebrow: 'Capacidades',
      title: 'Un perfil técnico que entiende el negocio.',
      intro:
        'Organizo mis herramientas alrededor de los problemas que permiten resolver, no como una lista aislada de tecnologías.',
      groups: [
        {
          number: '01',
          title: 'Descubrimiento y análisis',
          description: 'Transformar conversaciones y necesidades en definiciones accionables.',
          skills: ['Relevamiento', 'Historias de usuario', 'Criterios de aceptación', 'Stakeholders', 'Documentación'],
        },
        {
          number: '02',
          title: 'Procesos y automatización',
          description: 'Modelar el trabajo real y diseñar flujos digitales que reduzcan fricción.',
          skills: ['BPMN', 'UML', 'Deyel', 'Low-code', 'Scrum', 'Kanban'],
        },
        {
          number: '03',
          title: 'Desarrollo y datos',
          description: 'Comprender la solución también desde su implementación e información.',
          skills: ['React', 'PHP', 'Python', 'SQL', 'MySQL', 'PostgreSQL', 'APIs'],
        },
        {
          number: '04',
          title: 'Calidad y entrega',
          description: 'Validar, desplegar y acompañar la adopción de manera sostenible.',
          skills: ['UAT', 'Testing funcional', 'AWS', 'Google Cloud', 'Docker', 'CI/CD', 'Capacitación'],
        },
      ],
      supportingLabel: 'Conocimientos complementarios',
      supporting: ['DevSecOps', 'NIST', 'CIS', 'SIEM', 'Bash', 'PowerShell', 'Figma'],
    },
    credentials: {
      eyebrow: 'Formación y publicaciones',
      title: 'Base académica y aprendizaje continuo.',
      items: [
        {
          period: '2020 — 2024',
          title: 'Ingeniería en Sistemas de Información',
          institution: 'Universidad Tecnológica Nacional · FRLP',
          description: 'Formación orientada a sistemas, software, organizaciones y gestión de información.',
        },
        {
          period: '2023 — Actualidad',
          title: 'Inglés · Nivel C1 en curso',
          institution: "The Queen's Tea",
          description: 'Formación continua para comunicación profesional y entornos internacionales.',
        },
      ],
      publicationsTitle: 'Publicaciones',
      publications: [
        {
          type: 'CONAIISI 2023',
          title: 'Memoria de trabajo y Memorium',
          description: 'Innovación tecnológica aplicada al seguimiento sanitario.',
          href: sharedLinks.memoriumPaper,
        },
        {
          type: 'Investigación universitaria',
          title: 'Motores de bases de datos en aplicaciones móviles',
          description: 'Análisis de alternativas de persistencia para entornos mobile.',
          href: sharedLinks.databasePaper,
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Hay un problema complejo que necesita claridad?',
      text:
        'Estoy abierto a conversar sobre oportunidades donde pueda conectar procesos, personas y tecnología para construir soluciones con impacto real.',
      emailLabel: 'Escribirme por email',
      linkedInLabel: 'Conectar en LinkedIn',
      responseNote: 'La Plata, Buenos Aires · Disponible para oportunidades remotas e híbridas.',
    },
    footer: {
      note: 'Diseñado y desarrollado con intención, claridad y código.',
      backToTop: 'Volver arriba',
    },
    labels: {
      current: 'Actualidad',
      downloadCv: 'Descargar CV',
      switchToSpanish: 'Cambiar a español',
      switchToEnglish: 'Switch to English',
    },
  },
  en: {
    meta: {
      title: "Agustín Gomez D'Addario | Business Systems Analyst",
      description:
        'Business Systems Analyst, Citizen Developer and Information Systems Engineer connecting business, processes and technology.',
      locale: 'en_US',
    },
    skipLink: 'Skip to main content',
    nav: [
      { label: 'Profile', href: '#perfil' },
      { label: 'Cases', href: '#casos' },
      { label: 'Experience', href: '#experiencia' },
      { label: 'Capabilities', href: '#capacidades' },
      { label: 'Contact', href: '#contacto' },
    ],
    navCta: 'Download résumé',
    availability: 'Open to relevant opportunities',
    hero: {
      eyebrow: 'Business Systems Analyst · Citizen Developer',
      title: 'I connect business, processes and technology.',
      lead:
        'I turn complex needs into clear, scalable digital solutions designed for people to confidently adopt and use.',
      location: 'La Plata, Buenos Aires · Argentina',
      primaryCta: 'Explore selected work',
      secondaryCta: 'View my experience',
      photoAlt: "Portrait of Agustín Gomez D'Addario",
      photoNote: 'Information Systems Engineer',
    },
    proofs: [
      {
        value: 'LATAM',
        label: 'Regional reach',
        detail: 'Enterprise solutions across multiple industries.',
      },
      {
        value: '20%',
        label: 'Faster adoption',
        detail: 'Functional coordination and user enablement at DGSISAN.',
      },
      {
        value: '2023',
        label: 'CONAIISI',
        detail: 'Memorium presented as digital health innovation.',
      },
    ],
    about: {
      eyebrow: 'Profile',
      title: 'Where a business need becomes a solution that works.',
      paragraphs: [
        'I am an Information Systems Engineer working at the intersection of business analysis, automation and software delivery. I understand the problem, structure complexity and support solutions from discovery through adoption.',
        'My experience spans processes, documentation, interfaces and code. This allows me to communicate clearly with both business stakeholders and technical teams while protecting traceability, quality and delivered value.',
      ],
      statement: 'It is not just about building software. It is about enabling change that delivers value.',
    },
    cases: {
      eyebrow: 'Selected work',
      title: 'Work presented through context, decisions and outcomes.',
      intro:
        'A curated selection of solutions where I combined analysis, process design and technical execution. Commercial cases are anonymized to protect client information.',
      challengeLabel: 'Challenge',
      contributionLabel: 'My contribution',
      resultLabel: 'Outcome',
      expandLabel: 'Open case details',
      items: [
        {
          index: '01',
          category: 'Automation · Low-code',
          title: 'Enterprise solutions with Deyel',
          summary:
            'Design and delivery of web and mobile applications that digitize operations for organizations across Latin America.',
          challenge:
            'Turn manual processes and cross-functional needs into consistent, traceable digital workflows that teams could confidently adopt.',
          contribution:
            'Requirements discovery, process modeling, entity and page design, low-code development, validation, demos and user training.',
          result:
            'Digitized operational processes supported end-to-end, connecting business needs with a practical technical implementation.',
          stack: ['Deyel', 'BPMN', 'Low-code', 'UX', 'Testing', 'Agile'],
        },
        {
          index: '02',
          category: 'Product · Operations',
          title: 'Management platform for a service business',
          summary:
            'A platform for work orders, payments and expenses focused on traceability and financial control.',
          challenge:
            'Centralize scattered information and shape an MVP that supported daily operations without creating new friction.',
          contribution:
            'Functional leadership, scope definition, planning, client coordination, frontend development and release validation.',
          result:
            'A responsive digital foundation for operational and financial workflows, delivered incrementally with explicit acceptance criteria.',
          stack: ['React', 'PHP', 'MySQL', 'Google Cloud', 'Trello', 'UAT'],
        },
        {
          index: '03',
          category: 'Digital health · Data-driven',
          title: 'Memorium',
          summary:
            'A monitoring ecosystem for older adults and healthcare professionals, created as a university capstone project.',
          challenge:
            'Capture, persist and present clinical information from a mobile experience to a web application for professionals.',
          contribution:
            'Project leadership, cloud architecture, integration flows and a Python neural network for user feedback analysis.',
          result:
            'A working prototype presented at CONAIISI 2023 as an innovative application of technology to healthcare monitoring.',
          stack: ['AWS', 'Python', 'React', 'React Native', 'DynamoDB', 'Cognito'],
          link: { label: 'View repository', href: sharedLinks.memoriumRepo },
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'A career built between business and technology.',
      intro:
        'Roles where listening, documentation and technical execution are parts of the same delivery process.',
      items: [
        {
          period: 'Sep 2025 — Present',
          role: 'Citizen Developer',
          company: 'Optaris',
          location: 'Remote · Latin America',
          summary: 'Design and development of low-code/no-code enterprise solutions for web and mobile applications.',
          highlights: [
            'Automation and digitization of operational processes.',
            'Business analysis, modeling, development, testing and demos.',
            'Coordination with stakeholders and cross-functional teams.',
          ],
          tags: ['Deyel', 'BPMN', 'Low-code', 'Stakeholders'],
        },
        {
          period: 'Apr 2026',
          role: 'Instructor · Deyel Citizen Developer',
          company: 'Optaris',
          location: 'Buenos Aires · Argentina',
          summary: 'Theory and hands-on training for business users, implementers and developers.',
          highlights: [
            'Workshops covering apps, processes, dashboards and reports.',
            'Applied AI for personas, user stories and business rules.',
            'Governance, traceability and sustainable evolution practices.',
          ],
          tags: ['Training', 'Applied AI', 'Governance', 'UX'],
        },
        {
          period: 'Aug 2025 — Present',
          role: 'Functional Lead & Frontend Developer',
          company: 'Independent project',
          location: 'Buenos Aires · Argentina',
          summary: 'Functional leadership for an operational and financial management platform for a service business.',
          highlights: [
            'Functional and technical MVP scope definition.',
            'Frontend development, testing and functional validation.',
            'Agile planning and coordination between client and team.',
          ],
          tags: ['React', 'PHP', 'MySQL', 'Google Cloud'],
        },
        {
          period: 'Nov 2024 — Sep 2025',
          role: 'Business Systems Analyst',
          company: 'DGSISAN · Buenos Aires City Ministry of Health',
          location: 'Hybrid',
          summary: 'Contributed to the evolution of SIGEHOS, a critical healthcare information system.',
          highlights: [
            'Traceable requirements discovery and functional documentation.',
            'UML/BPMN flows, user stories and functional testing.',
            'Coordination that reduced adoption times by 20%.',
          ],
          tags: ['SIGEHOS', 'UML', 'BPMN', 'Jira'],
        },
        {
          period: 'Mar 2024 — Nov 2024',
          role: 'Project Fellow',
          company: 'LINES · UTN La Plata',
          location: 'La Plata · Argentina',
          summary: 'Development and maintenance of the Information Systems Engineering institutional website.',
          highlights: [
            'Accessibility, usability and performance improvements.',
            'Functional testing and issue documentation.',
            'Deployments with Docker and GitHub Actions.',
          ],
          tags: ['JavaScript', 'Docker', 'CI/CD', 'WCAG'],
        },
      ],
    },
    capabilities: {
      eyebrow: 'Capabilities',
      title: 'A technical profile with business fluency.',
      intro: 'I organize tools around the problems they solve—not as an isolated list of technologies.',
      groups: [
        {
          number: '01',
          title: 'Discovery and analysis',
          description: 'Turn conversations and needs into clear, actionable definitions.',
          skills: ['Requirements', 'User stories', 'Acceptance criteria', 'Stakeholders', 'Documentation'],
        },
        {
          number: '02',
          title: 'Processes and automation',
          description: 'Model real work and design digital flows that remove friction.',
          skills: ['BPMN', 'UML', 'Deyel', 'Low-code', 'Scrum', 'Kanban'],
        },
        {
          number: '03',
          title: 'Development and data',
          description: 'Understand solutions through both implementation and information.',
          skills: ['React', 'PHP', 'Python', 'SQL', 'MySQL', 'PostgreSQL', 'APIs'],
        },
        {
          number: '04',
          title: 'Quality and delivery',
          description: 'Validate, ship and support adoption in a sustainable way.',
          skills: ['UAT', 'Functional testing', 'AWS', 'Google Cloud', 'Docker', 'CI/CD', 'Training'],
        },
      ],
      supportingLabel: 'Supporting knowledge',
      supporting: ['DevSecOps', 'NIST', 'CIS', 'SIEM', 'Bash', 'PowerShell', 'Figma'],
    },
    credentials: {
      eyebrow: 'Education and publications',
      title: 'Academic foundations and continuous learning.',
      items: [
        {
          period: '2020 — 2024',
          title: 'Information Systems Engineering',
          institution: 'National Technological University · FRLP',
          description: 'Education spanning systems, software, organizations and information management.',
        },
        {
          period: '2023 — Present',
          title: 'English · C1 level in progress',
          institution: "The Queen's Tea",
          description: 'Ongoing training for professional communication and international environments.',
        },
      ],
      publicationsTitle: 'Publications',
      publications: [
        {
          type: 'CONAIISI 2023',
          title: 'Working memory and Memorium',
          description: 'Technology innovation applied to healthcare monitoring.',
          href: sharedLinks.memoriumPaper,
        },
        {
          type: 'University research',
          title: 'Database engines in mobile applications',
          description: 'Analysis of persistence alternatives for mobile environments.',
          href: sharedLinks.databasePaper,
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Is there a complex problem that needs clarity?',
      text:
        'I am open to opportunities where I can connect processes, people and technology to build solutions with meaningful impact.',
      emailLabel: 'Send me an email',
      linkedInLabel: 'Connect on LinkedIn',
      responseNote: 'La Plata, Buenos Aires · Available for remote and hybrid opportunities.',
    },
    footer: {
      note: 'Designed and developed with intention, clarity and code.',
      backToTop: 'Back to top',
    },
    labels: {
      current: 'Present',
      downloadCv: 'Download résumé',
      switchToSpanish: 'Cambiar a español',
      switchToEnglish: 'Switch to English',
    },
  },
}

export { sharedLinks }
