export type IconName =
  | 'Code'
  | 'Smartphone'
  | 'Database'
  | 'Plug'
  | 'Network'
  | 'GitBranch'
  | 'Zap'
  | 'Boxes';

export interface Capability {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  icon: IconName;
  category: 'development' | 'architecture' | 'tools';
  hero: {
    title: string;
    description: string;
    highlights: string[];
  };
  approach: {
    title: string;
    description: string;
    steps: {
      title: string;
      description: string;
      icon: IconName;
    }[];
  };
  technologies: {
    name: string;
    description: string;
    category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud';
  }[];
  examples: {
    title: string;
    description: string;
    outcome: string;
  }[];
  cta: {
    title: string;
    description: string;
  };
}

export const capabilities: Capability[] = [
  {
    id: 'fullstack-web',
    slug: 'fullstack-web-development',
    title: 'Fullstack Web Development',
    shortDescription:
      'Building complete web applications from frontend to backend with modern technologies.',
    icon: 'Code',
    category: 'development',
    hero: {
      title: 'End-to-End Web Solutions',
      description:
        'I create full-featured web applications that combine beautiful, responsive user interfaces with robust backend systems. From concept to deployment, I handle every aspect of web development.',
      highlights: [
        'Modern React & Next.js applications',
        'RESTful & GraphQL APIs',
        'Real-time features with WebSockets',
        'Responsive and accessible design',
      ],
    },
    approach: {
      title: 'My Development Process',
      description:
        'I follow a structured approach to ensure high-quality, maintainable code that scales with your business.',
      steps: [
        {
          title: 'Requirements & Planning',
          description:
            'Understanding your needs and planning the architecture, tech stack, and timeline.',
          icon: 'GitBranch',
        },
        {
          title: 'Frontend Development',
          description:
            'Building responsive, accessible interfaces with React, TypeScript, and modern CSS.',
          icon: 'Code',
        },
        {
          title: 'Backend Integration',
          description:
            'Creating robust APIs, database schemas, and server-side logic with Node.js.',
          icon: 'Database',
        },
        {
          title: 'Testing & Deployment',
          description:
            'Ensuring quality through testing and deploying to production with CI/CD.',
          icon: 'Zap',
        },
      ],
    },
    technologies: [
      {
        name: 'React & Next.js',
        description: 'Building dynamic, SEO-friendly web applications',
        category: 'frontend',
      },
      {
        name: 'TypeScript',
        description: 'Type-safe code for better maintainability',
        category: 'frontend',
      },
      {
        name: 'Tailwind CSS',
        description: 'Rapid UI development with utility-first CSS',
        category: 'frontend',
      },
      {
        name: 'Node.js & Fastify',
        description: 'High-performance backend services',
        category: 'backend',
      },
      {
        name: 'PostgreSQL & MongoDB',
        description: 'Flexible data storage solutions',
        category: 'database',
      },
      {
        name: 'Docker',
        description: 'Containerized deployments',
        category: 'tools',
      },
    ],
    examples: [
      {
        title: 'E-commerce Platform',
        description:
          'Built a full-featured online store with product catalog, cart, checkout, and admin dashboard.',
        outcome:
          'Increased conversion rate by 35% with optimized UX and fast load times.',
      },
      {
        title: 'SaaS Dashboard',
        description:
          'Developed a real-time analytics dashboard with data visualization and user management.',
        outcome:
          'Handles 10,000+ concurrent users with sub-second response times.',
      },
      {
        title: 'Content Management System',
        description:
          'Created a custom CMS with rich text editing, media management, and multi-user collaboration.',
        outcome:
          'Reduced content publishing time by 60% for editorial teams.',
      },
    ],
    cta: {
      title: 'Ready to Build Your Web Application?',
      description:
        "Let's discuss your project and create a web solution that exceeds your expectations.",
    },
  },
  {
    id: 'mobile-app',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription:
      'Creating native-quality mobile applications for iOS and Android.',
    icon: 'Smartphone',
    category: 'development',
    hero: {
      title: 'Mobile-First Solutions',
      description:
        'I build high-performance mobile applications that provide seamless experiences across iOS and Android platforms using React Native and modern mobile development practices.',
      highlights: [
        'Cross-platform iOS & Android apps',
        'Native performance and feel',
        'Offline-first architecture',
        'Push notifications & real-time updates',
      ],
    },
    approach: {
      title: 'Mobile Development Methodology',
      description:
        'Creating mobile apps that users love, with performance and user experience as top priorities.',
      steps: [
        {
          title: 'User Experience Design',
          description:
            'Designing intuitive mobile interfaces that follow platform guidelines.',
          icon: 'Smartphone',
        },
        {
          title: 'Cross-Platform Development',
          description:
            'Building with React Native for efficient, native-quality apps on both platforms.',
          icon: "Code",
        },
        {
          title: 'API & Backend Integration',
          description:
            'Connecting to backend services with robust error handling and caching.',
          icon: "Plug",
        },
        {
          title: 'Testing & Distribution',
          description:
            'Thorough testing on real devices and smooth App Store/Play Store deployment.',
          icon: "Zap",
        },
      ],
    },
    technologies: [
      {
        name: 'React Native',
        description: 'Cross-platform mobile development',
        category: 'frontend',
      },
      {
        name: 'Expo',
        description: 'Rapid development and deployment',
        category: 'tools',
      },
      {
        name: 'TypeScript',
        description: 'Type-safe mobile applications',
        category: 'frontend',
      },
      {
        name: 'Native Modules',
        description: 'Custom native functionality when needed',
        category: 'tools',
      },
      {
        name: 'Firebase',
        description: 'Authentication, analytics, and push notifications',
        category: 'backend',
      },
      {
        name: 'Redux/Context API',
        description: 'Predictable state management',
        category: 'frontend',
      },
    ],
    examples: [
      {
        title: 'Fitness Tracking App',
        description:
          'Built a mobile app with workout tracking, progress charts, and social features.',
        outcome:
          '50,000+ downloads with 4.8-star rating on both app stores.',
      },
      {
        title: 'Delivery Service App',
        description:
          'Created a real-time delivery tracking app with maps, notifications, and order management.',
        outcome:
          'Reduced customer support queries by 40% with live tracking.',
      },
      {
        title: 'Social Networking App',
        description:
          'Developed a photo-sharing app with feeds, comments, and real-time messaging.',
        outcome:
          'Supports 100,000+ active users with seamless performance.',
      },
    ],
    cta: {
      title: 'Launch Your Mobile App',
      description:
        'Transform your idea into a beautiful, functional mobile application.',
    },
  },
  {
    id: 'database-design',
    slug: 'database-design',
    title: 'Database Design',
    shortDescription:
      'Architecting efficient and scalable database solutions.',
    icon: "Database",
    category: 'development',
    hero: {
      title: 'Data Architecture Excellence',
      description:
        'I design and implement database solutions that ensure data integrity, optimize performance, and scale with your growing needs. From schema design to query optimization.',
      highlights: [
        'Relational & NoSQL database design',
        'Query optimization & indexing',
        'Data migration strategies',
        'Backup & recovery planning',
      ],
    },
    approach: {
      title: 'Database Design Process',
      description:
        'A methodical approach to creating robust, performant data storage solutions.',
      steps: [
        {
          title: 'Requirements Analysis',
          description:
            'Understanding data relationships, access patterns, and scalability needs.',
          icon: "GitBranch",
        },
        {
          title: 'Schema Design',
          description:
            'Creating normalized schemas for relational or flexible schemas for NoSQL.',
          icon: "Database",
        },
        {
          title: 'Optimization',
          description:
            'Implementing indexes, query optimization, and caching strategies.',
          icon: "Zap",
        },
        {
          title: 'Migration & Maintenance',
          description:
            'Safe data migrations and ongoing performance monitoring.',
          icon: "Boxes",
        },
      ],
    },
    technologies: [
      {
        name: 'PostgreSQL',
        description: 'Advanced relational database features',
        category: 'database',
      },
      {
        name: 'MongoDB',
        description: 'Flexible document-based storage',
        category: 'database',
      },
      {
        name: 'Redis',
        description: 'High-performance caching and sessions',
        category: 'database',
      },
      {
        name: 'Prisma',
        description: 'Type-safe database access',
        category: 'backend',
      },
      {
        name: 'Database Migrations',
        description: 'Version-controlled schema changes',
        category: 'tools',
      },
      {
        name: 'Query Optimization',
        description: 'Performance tuning and indexing',
        category: 'database',
      },
    ],
    examples: [
      {
        title: 'Multi-tenant SaaS Database',
        description:
          'Designed a scalable database architecture supporting thousands of isolated tenants.',
        outcome:
          'Achieved 99.9% uptime with sub-100ms query response times.',
      },
      {
        title: 'Data Warehouse',
        description:
          'Built an analytics-optimized database with ETL pipelines and aggregated reporting.',
        outcome:
          'Reduced report generation time from hours to minutes.',
      },
      {
        title: 'Legacy Database Migration',
        description:
          'Migrated a 10-year-old MySQL database to PostgreSQL with zero data loss.',
        outcome:
          'Improved query performance by 300% with modern schema design.',
      },
    ],
    cta: {
      title: 'Optimize Your Data Storage',
      description:
        "Let's design a database solution that powers your application efficiently.",
    },
  },
  {
    id: 'api-integration',
    slug: 'api-integration',
    title: 'API Integration',
    shortDescription:
      'Seamlessly connecting systems through robust API integrations.',
    icon: "Plug",
    category: 'development',
    hero: {
      title: 'Seamless System Connectivity',
      description:
        'I specialize in integrating third-party services and building custom APIs that connect your applications with external platforms, payment gateways, and business tools.',
      highlights: [
        'RESTful & GraphQL API development',
        'Third-party service integration',
        'API security & authentication',
        'Documentation & versioning',
      ],
    },
    approach: {
      title: 'Integration Strategy',
      description:
        'Building reliable connections between systems with proper error handling and monitoring.',
      steps: [
        {
          title: 'API Assessment',
          description:
            'Analyzing API documentation and planning integration architecture.',
          icon: "GitBranch",
        },
        {
          title: 'Implementation',
          description:
            'Building robust integrations with proper error handling and retries.',
          icon: "Plug",
        },
        {
          title: 'Testing',
          description:
            'Comprehensive testing with mock data and sandbox environments.',
          icon: "Zap",
        },
        {
          title: 'Monitoring',
          description:
            'Setting up logging, alerts, and performance monitoring.',
          icon: "Database",
        },
      ],
    },
    technologies: [
      {
        name: 'REST & GraphQL',
        description: 'Modern API protocols',
        category: 'backend',
      },
      {
        name: 'OAuth & JWT',
        description: 'Secure authentication flows',
        category: 'backend',
      },
      {
        name: 'Webhooks',
        description: 'Real-time event notifications',
        category: 'backend',
      },
      {
        name: 'API Documentation',
        description: 'OpenAPI/Swagger specifications',
        category: 'tools',
      },
      {
        name: 'Rate Limiting',
        description: 'Protecting API resources',
        category: 'backend',
      },
      {
        name: 'Postman/Insomnia',
        description: 'API testing and development',
        category: 'tools',
      },
    ],
    examples: [
      {
        title: 'Payment Gateway Integration',
        description:
          'Integrated Stripe for payment processing with subscription management and webhooks.',
        outcome:
          'Processed $1M+ in transactions with 99.99% success rate.',
      },
      {
        title: 'Multi-Service Integration',
        description:
          'Connected CRM, email marketing, and analytics tools into a unified dashboard.',
        outcome:
          'Reduced manual data entry by 90% with automated sync.',
      },
      {
        title: 'Custom API Development',
        description:
          'Built a RESTful API serving 1000+ requests/second with comprehensive documentation.',
        outcome:
          'Enabled 50+ third-party integrations for partner ecosystem.',
      },
    ],
    cta: {
      title: 'Connect Your Systems',
      description:
        'Integrate the tools and services your business depends on.',
    },
  },
  {
    id: 'microservices',
    slug: 'microservices-architecture',
    title: 'Microservices Architecture',
    shortDescription:
      'Building scalable, distributed systems with microservices.',
    icon: "Network",
    category: 'architecture',
    hero: {
      title: 'Scalable Distributed Systems',
      description:
        'I architect microservices-based applications that allow independent scaling, deployment, and development of services. Perfect for complex applications that need to grow.',
      highlights: [
        'Service decomposition & boundaries',
        'API gateway & service mesh',
        'Event-driven architecture',
        'Container orchestration',
      ],
    },
    approach: {
      title: 'Microservices Design',
      description:
        'Creating loosely coupled services that work together to deliver business value.',
      steps: [
        {
          title: 'Service Decomposition',
          description:
            'Breaking down monoliths into logical, independent services.',
          icon: "Boxes",
        },
        {
          title: 'Service Communication',
          description:
            'Implementing REST, gRPC, or message queues for inter-service communication.',
          icon: "Network",
        },
        {
          title: 'Containerization',
          description:
            'Packaging services with Docker for consistent deployment.',
          icon: "Database",
        },
        {
          title: 'Orchestration',
          description:
            'Managing services with Kubernetes or Docker Swarm.',
          icon: "GitBranch",
        },
      ],
    },
    technologies: [
      {
        name: 'Docker',
        description: 'Containerization platform',
        category: 'tools',
      },
      {
        name: 'Kubernetes',
        description: 'Container orchestration',
        category: 'cloud',
      },
      {
        name: 'Message Queues',
        description: 'RabbitMQ, Kafka for async communication',
        category: 'backend',
      },
      {
        name: 'API Gateway',
        description: 'Centralized routing and authentication',
        category: 'backend',
      },
      {
        name: 'Service Mesh',
        description: 'Traffic management and observability',
        category: 'cloud',
      },
      {
        name: 'Monitoring',
        description: 'Prometheus, Grafana for observability',
        category: 'tools',
      },
    ],
    examples: [
      {
        title: 'E-commerce Microservices',
        description:
          'Split monolithic e-commerce into 12 independent services (catalog, cart, orders, payments).',
        outcome:
          'Reduced deployment time from 2 hours to 10 minutes per service.',
      },
      {
        title: 'Event-Driven Platform',
        description:
          'Built an event-driven system with message queues for decoupled service communication.',
        outcome:
          'Achieved 99.95% uptime with automatic failover and recovery.',
      },
      {
        title: 'Multi-Region Deployment',
        description:
          'Deployed microservices across 3 regions with automatic load balancing.',
        outcome:
          'Improved response times by 60% for international users.',
      },
    ],
    cta: {
      title: 'Scale Your Application',
      description:
        'Transform your monolith into a scalable microservices architecture.',
    },
  },
  {
    id: 'system-design',
    slug: 'system-design-scalability',
    title: 'System Design & Scalability',
    shortDescription:
      'Architecting systems that handle growth and complexity.',
    icon: "GitBranch",
    category: 'architecture',
    hero: {
      title: 'Built to Scale',
      description:
        'I design system architectures that anticipate growth, handle high traffic, and maintain performance under load. From initial design to optimization strategies.',
      highlights: [
        'High availability & fault tolerance',
        'Load balancing & caching',
        'Database sharding & replication',
        'Performance optimization',
      ],
    },
    approach: {
      title: 'System Design Principles',
      description:
        'Creating architectures that are reliable, maintainable, and ready for scale.',
      steps: [
        {
          title: 'Requirements Analysis',
          description:
            'Understanding traffic patterns, data volume, and performance requirements.',
          icon: "GitBranch",
        },
        {
          title: 'Architecture Design',
          description:
            'Designing components, data flow, and system boundaries.',
          icon: "Network",
        },
        {
          title: 'Scalability Planning',
          description:
            'Implementing horizontal scaling, caching, and load balancing.',
          icon: "Boxes",
        },
        {
          title: 'Performance Testing',
          description:
            'Load testing and optimization based on real-world metrics.',
          icon: "Zap",
        },
      ],
    },
    technologies: [
      {
        name: 'Load Balancers',
        description: 'Nginx, HAProxy for traffic distribution',
        category: 'backend',
      },
      {
        name: 'Caching',
        description: 'Redis, Memcached for performance',
        category: 'database',
      },
      {
        name: 'CDN',
        description: 'CloudFlare, AWS CloudFront for static assets',
        category: 'cloud',
      },
      {
        name: 'Database Optimization',
        description: 'Sharding, replication, indexing strategies',
        category: 'database',
      },
      {
        name: 'Monitoring',
        description: 'System metrics and alerting',
        category: 'tools',
      },
      {
        name: 'Auto-scaling',
        description: 'Dynamic resource allocation',
        category: 'cloud',
      },
    ],
    examples: [
      {
        title: 'High-Traffic Platform',
        description:
          'Redesigned architecture to handle 1M+ daily active users with sub-second response times.',
        outcome:
          'Reduced infrastructure costs by 40% while improving performance.',
      },
      {
        title: 'Real-Time Analytics',
        description:
          'Built a system processing 10,000 events/second with real-time dashboards.',
        outcome:
          'Achieved 99.99% data accuracy with <1s latency.',
      },
      {
        title: 'Global Content Delivery',
        description:
          'Implemented CDN and edge caching for worldwide content distribution.',
        outcome:
          'Improved page load times by 75% for international users.',
      },
    ],
    cta: {
      title: 'Design for Growth',
      description:
        'Build a system architecture that scales with your success.',
    },
  },
  {
    id: 'performance-optimization',
    slug: 'performance-optimization',
    title: 'Performance Optimization',
    shortDescription:
      'Making applications faster and more efficient.',
    icon: "Zap",
    category: 'architecture',
    hero: {
      title: 'Speed Matters',
      description:
        'I optimize web and mobile applications for maximum performance. From reducing bundle sizes to optimizing database queries, every millisecond counts.',
      highlights: [
        'Frontend performance tuning',
        'Backend optimization',
        'Database query optimization',
        'Real-time performance monitoring',
      ],
    },
    approach: {
      title: 'Optimization Process',
      description:
        'Data-driven approach to identifying and fixing performance bottlenecks.',
      steps: [
        {
          title: 'Performance Audit',
          description:
            'Using tools like Lighthouse, Chrome DevTools to identify issues.',
          icon: "Zap",
        },
        {
          title: 'Prioritization',
          description:
            'Focusing on high-impact optimizations first based on metrics.',
          icon: "GitBranch",
        },
        {
          title: 'Implementation',
          description:
            'Code splitting, lazy loading, caching, and query optimization.',
          icon: "Code",
        },
        {
          title: 'Measurement',
          description:
            'Tracking improvements with real user monitoring and analytics.',
          icon: "Database",
        },
      ],
    },
    technologies: [
      {
        name: 'Webpack/Vite',
        description: 'Bundle optimization and code splitting',
        category: 'tools',
      },
      {
        name: 'React Performance',
        description: 'Memoization, lazy loading, virtualization',
        category: 'frontend',
      },
      {
        name: 'Image Optimization',
        description: 'WebP, lazy loading, responsive images',
        category: 'frontend',
      },
      {
        name: 'Database Indexing',
        description: 'Query optimization and caching',
        category: 'database',
      },
      {
        name: 'Lighthouse/PageSpeed',
        description: 'Performance measurement tools',
        category: 'tools',
      },
      {
        name: 'CDN & Caching',
        description: 'Edge caching and asset delivery',
        category: 'cloud',
      },
    ],
    examples: [
      {
        title: 'E-commerce Site Optimization',
        description:
          'Reduced page load time from 8s to 2s through image optimization and code splitting.',
        outcome:
          'Increased conversion rate by 25% and improved SEO rankings.',
      },
      {
        title: 'API Performance Tuning',
        description:
          'Optimized database queries and implemented caching for a high-traffic API.',
        outcome:
          'Reduced average response time from 500ms to 50ms.',
      },
      {
        title: 'Mobile App Optimization',
        description:
          'Optimized React Native app bundle size and implemented lazy loading.',
        outcome:
          'Reduced app size by 60% and improved startup time by 40%.',
      },
    ],
    cta: {
      title: 'Boost Your Performance',
      description:
        "Let's make your application lightning fast for your users.",
    },
  },
  {
    id: 'code-architecture',
    slug: 'code-architecture-patterns',
    title: 'Code Architecture & Patterns',
    shortDescription:
      'Writing maintainable, testable, and scalable code.',
    icon: "Boxes",
    category: 'architecture',
    hero: {
      title: 'Clean Code, Better Software',
      description:
        'I apply software design patterns and architectural principles to create codebases that are easy to understand, test, and extend. Quality code is an investment.',
      highlights: [
        'SOLID principles & design patterns',
        'Clean architecture & separation of concerns',
        'Test-driven development',
        'Code review & refactoring',
      ],
    },
    approach: {
      title: 'Code Quality Standards',
      description:
        'Building software with maintainability and extensibility as core priorities.',
      steps: [
        {
          title: 'Architecture Planning',
          description:
            'Defining layers, modules, and dependencies for clean separation.',
          icon: "GitBranch",
        },
        {
          title: 'Pattern Application',
          description:
            'Using proven design patterns (Factory, Strategy, Observer, etc.).',
          icon: "Boxes",
        },
        {
          title: 'Testing Strategy',
          description:
            'Writing unit, integration, and e2e tests for reliability.',
          icon: "Zap",
        },
        {
          title: 'Continuous Improvement',
          description:
            'Regular refactoring and code reviews for quality.',
          icon: "Code",
        },
      ],
    },
    technologies: [
      {
        name: 'TypeScript',
        description: 'Type safety and better tooling',
        category: 'frontend',
      },
      {
        name: 'ESLint/Prettier',
        description: 'Code quality and formatting',
        category: 'tools',
      },
      {
        name: 'Jest/Vitest',
        description: 'Unit and integration testing',
        category: 'tools',
      },
      {
        name: 'Design Patterns',
        description: 'Gang of Four and modern patterns',
        category: 'backend',
      },
      {
        name: 'Clean Architecture',
        description: 'Layered architecture principles',
        category: 'backend',
      },
      {
        name: 'Git & CI/CD',
        description: 'Version control and automation',
        category: 'tools',
      },
    ],
    examples: [
      {
        title: 'Legacy Code Refactoring',
        description:
          'Refactored a 50,000-line monolithic codebase into modular, testable components.',
        outcome:
          'Reduced bug count by 70% and improved developer onboarding time.',
      },
      {
        title: 'Test Coverage Improvement',
        description:
          'Implemented TDD practices and increased test coverage from 20% to 85%.',
        outcome:
          'Caught 90% of bugs before production deployment.',
      },
      {
        title: 'Modular Architecture',
        description:
          'Designed plugin-based architecture allowing feature additions without core changes.',
        outcome:
          'Reduced feature development time by 50% with reusable modules.',
      },
    ],
    cta: {
      title: 'Improve Your Codebase',
      description:
        'Create software that developers love to work with.',
    },
  },
];

// Helper function to get capability by slug
export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((cap) => cap.slug === slug);
}

// Helper function to get all capability slugs for static generation
export function getAllCapabilitySlugs(): string[] {
  return capabilities.map((cap) => cap.slug);
}

// Helper function to get related capabilities
export function getRelatedCapabilities(
  currentSlug: string,
  limit: number = 3
): Capability[] {
  const current = getCapabilityBySlug(currentSlug);
  if (!current) return [];

  return capabilities
    .filter(
      (cap) =>
        cap.slug !== currentSlug &&
        (cap.category === current.category || Math.random() > 0.5)
    )
    .slice(0, limit);
}
