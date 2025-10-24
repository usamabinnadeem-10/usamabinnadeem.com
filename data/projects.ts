export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'fullstack' | 'design';
  featured: boolean;

  // Detailed page content
  detail: {
    overview: string;
    problem: string;
    solution: string;
    impact: {
      metric: string;
      value: string;
    }[];
    features: {
      title: string;
      description: string;
    }[];
    technologies: {
      category: string;
      items: string[];
    }[];
    challenges: {
      title: string;
      description: string;
      solution: string;
    }[];
    gallery?: {
      image: string;
      caption: string;
    }[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
      avatar?: string;
    };
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    shortDescription:
      'A modern e-commerce platform built with Next.js, TypeScript, and Stripe for payments.',
    image: '/projects/project-1.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'fullstack',
    featured: true,
    detail: {
      overview:
        'A fully-featured e-commerce platform designed to provide a seamless shopping experience. Built with modern web technologies, it handles everything from product browsing to secure checkout.',
      problem:
        'The client needed a scalable e-commerce solution that could handle high traffic during sales events, provide a smooth user experience, and integrate with their existing inventory management system.',
      solution:
        'Developed a server-side rendered Next.js application with optimized performance, integrated Stripe for secure payments, and built a custom admin dashboard for inventory management. Implemented caching strategies and CDN delivery for fast load times globally.',
      impact: [
        { metric: 'Page Load Time', value: '< 2s' },
        { metric: 'Conversion Rate', value: '+35%' },
        { metric: 'Mobile Traffic', value: '+60%' },
        { metric: 'Customer Satisfaction', value: '4.8/5' },
      ],
      features: [
        {
          title: 'Dynamic Product Catalog',
          description:
            'Advanced filtering, search, and sorting with real-time inventory updates.',
        },
        {
          title: 'Secure Checkout',
          description:
            'PCI-compliant payment processing with Stripe, supporting multiple payment methods.',
        },
        {
          title: 'User Accounts',
          description:
            'Customer profiles with order history, wishlists, and saved addresses.',
        },
        {
          title: 'Admin Dashboard',
          description:
            'Comprehensive backend for managing products, orders, and analytics.',
        },
        {
          title: 'Responsive Design',
          description:
            'Mobile-first design ensuring perfect experience on all devices.',
        },
        {
          title: 'Email Notifications',
          description:
            'Automated transactional emails for order confirmations and shipping updates.',
        },
      ],
      technologies: [
        {
          category: 'Frontend',
          items: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        },
        {
          category: 'Backend',
          items: ['Next.js API Routes', 'PostgreSQL', 'Prisma ORM'],
        },
        {
          category: 'Payments',
          items: ['Stripe API', 'Webhook Integration'],
        },
        {
          category: 'Infrastructure',
          items: ['Vercel', 'CloudFlare CDN', 'AWS S3'],
        },
      ],
      challenges: [
        {
          title: 'High Traffic During Sales',
          description:
            'The platform needed to handle 10x normal traffic during flash sales without performance degradation.',
          solution:
            'Implemented Redis caching, database query optimization, and serverless edge functions to distribute load globally.',
        },
        {
          title: 'Inventory Synchronization',
          description:
            'Real-time inventory updates across multiple sales channels were critical.',
          solution:
            'Built a webhook-based system with conflict resolution to sync inventory in real-time with 99.9% accuracy.',
        },
        {
          title: 'Mobile Performance',
          description:
            'Mobile users experienced slower load times affecting conversion rates.',
          solution:
            'Optimized images with next/image, implemented route prefetching, and reduced JavaScript bundle size by 40%.',
        },
      ],
      testimonial: {
        quote:
          'The new platform exceeded our expectations. Sales increased by 35% in the first quarter, and our customers love the seamless experience.',
        author: 'Sarah Johnson',
        role: 'CEO, Fashion Boutique',
      },
    },
  },
  {
    id: 2,
    slug: 'task-management-app',
    title: 'Task Management App',
    shortDescription:
      'A collaborative task management application with real-time updates and drag-and-drop interface.',
    image: '/projects/project-2.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'fullstack',
    featured: true,
    detail: {
      overview:
        'A powerful task management platform that enables teams to collaborate in real-time, organize projects with boards and lists, and track progress with detailed analytics.',
      problem:
        'Remote teams struggled with fragmented communication and lack of visibility into project progress. Existing solutions were either too complex or lacked essential collaboration features.',
      solution:
        'Created an intuitive, real-time collaborative platform with drag-and-drop task management, live cursors showing team activity, and integrated chat. Built on a scalable architecture to support teams of all sizes.',
      impact: [
        { metric: 'Active Users', value: '10,000+' },
        { metric: 'Team Productivity', value: '+45%' },
        { metric: 'Response Time', value: '< 100ms' },
        { metric: 'User Retention', value: '85%' },
      ],
      features: [
        {
          title: 'Real-Time Collaboration',
          description:
            'See team members working live with real-time updates and live cursors.',
        },
        {
          title: 'Drag & Drop Interface',
          description:
            'Intuitive Kanban-style boards with smooth drag-and-drop task management.',
        },
        {
          title: 'Team Chat',
          description:
            'Integrated messaging system for discussing tasks and projects.',
        },
        {
          title: 'Custom Workflows',
          description:
            'Create custom boards, lists, and task statuses to match your process.',
        },
        {
          title: 'Advanced Filtering',
          description:
            'Filter and search tasks by assignee, due date, labels, and more.',
        },
        {
          title: 'Analytics Dashboard',
          description:
            'Track team performance with detailed metrics and visualizations.',
        },
      ],
      technologies: [
        {
          category: 'Frontend',
          items: ['React 18', 'TypeScript', 'Redux Toolkit', 'React DnD'],
        },
        {
          category: 'Backend',
          items: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
        },
        {
          category: 'Real-time',
          items: ['Socket.io', 'Redis Pub/Sub'],
        },
        {
          category: 'Infrastructure',
          items: ['Docker', 'AWS EC2', 'MongoDB Atlas', 'nginx'],
        },
      ],
      challenges: [
        {
          title: 'Real-Time Synchronization',
          description:
            'Keeping all clients synchronized with hundreds of concurrent updates was complex.',
          solution:
            'Implemented operational transformation for conflict resolution and optimistic UI updates for instant feedback.',
        },
        {
          title: 'Scalability',
          description:
            'Single server couldn\'t handle growing user base and real-time connections.',
          solution:
            'Migrated to horizontal scaling with Redis pub/sub for cross-server communication and load balancing.',
        },
        {
          title: 'Offline Support',
          description:
            'Users needed to work offline and sync changes when reconnected.',
          solution:
            'Built a queue-based system with IndexedDB for offline storage and intelligent conflict resolution on sync.',
        },
      ],
      testimonial: {
        quote:
          'This app transformed how our distributed team works. We\'re more organized and productive than ever before.',
        author: 'Michael Chen',
        role: 'CTO, StartupCo',
      },
    },
  },
  {
    id: 3,
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    shortDescription:
      'A stunning portfolio website with smooth animations and dark mode support.',
    image: '/projects/project-3.jpg',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'web',
    featured: true,
    detail: {
      overview:
        'A beautifully designed portfolio website showcasing creative work with smooth animations, stunning visuals, and an intuitive user experience.',
      problem:
        'A creative professional needed a portfolio that would stand out and effectively showcase their work while being fast and accessible.',
      solution:
        'Designed and developed a modern, animated portfolio with smooth page transitions, optimized images, and a focus on performance. Implemented dark mode and ensured perfect scores on Lighthouse.',
      impact: [
        { metric: 'Lighthouse Score', value: '100/100' },
        { metric: 'Page Load', value: '< 1s' },
        { metric: 'Client Inquiries', value: '+200%' },
        { metric: 'Bounce Rate', value: '-60%' },
      ],
      features: [
        {
          title: 'Smooth Animations',
          description:
            'Eye-catching animations powered by Framer Motion for delightful interactions.',
        },
        {
          title: 'Dark Mode',
          description:
            'Automatic and manual dark mode with smooth theme transitions.',
        },
        {
          title: 'Project Showcases',
          description:
            'Beautiful project galleries with lightbox functionality and detailed case studies.',
        },
        {
          title: 'Contact Form',
          description:
            'Integrated contact form with email notifications and spam protection.',
        },
        {
          title: 'Blog Integration',
          description:
            'Built-in blog powered by MDX for rich, interactive content.',
        },
        {
          title: 'SEO Optimized',
          description:
            'Perfect SEO with meta tags, structured data, and social media previews.',
        },
      ],
      technologies: [
        {
          category: 'Frontend',
          items: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        },
        {
          category: 'Content',
          items: ['MDX', 'Gray Matter', 'Remark/Rehype'],
        },
        {
          category: 'Forms',
          items: ['React Hook Form', 'Zod Validation', 'SendGrid'],
        },
        {
          category: 'Infrastructure',
          items: ['Vercel', 'Cloudinary', 'Google Analytics'],
        },
      ],
      challenges: [
        {
          title: 'Animation Performance',
          description:
            'Complex animations caused frame drops on lower-end devices.',
          solution:
            'Optimized animations with will-change CSS, reduced motion queries, and GPU-accelerated transforms.',
        },
        {
          title: 'Image Optimization',
          description:
            'High-resolution portfolio images affected load times.',
          solution:
            'Implemented next/image with Cloudinary for automatic optimization, WebP conversion, and responsive sizing.',
        },
        {
          title: 'Cross-Browser Compatibility',
          description:
            'Ensuring consistent experience across all browsers and devices.',
          solution:
            'Used progressive enhancement, polyfills, and extensive cross-browser testing.',
        },
      ],
      testimonial: {
        quote:
          'My new portfolio has been a game-changer. I\'ve received more project inquiries in two months than in the previous year.',
        author: 'Emily Rodriguez',
        role: 'Creative Director',
      },
    },
  },
];

// Helper functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((project) => project.category === category);
}
