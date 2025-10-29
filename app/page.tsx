import { Hero } from '@/components/sections/Hero';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  // Enhanced Person schema
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Usama Bin Nadeem',
    jobTitle: 'Software Engineer',
    url: 'https://usamabinnadeem.com',
    image: 'https://usamabinnadeem.com/avatar.jpg',
    sameAs: [
      'https://github.com/usamabinnadeem-10',
      'https://www.linkedin.com/in/usama-bin-nadeem/',
    ],
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Fullstack Development',
      'Mobile App Development',
      'Database Design',
      'API Integration',
      'Microservices Architecture',
      'System Design',
      'Performance Optimization',
    ],
    description:
      'Fullstack Software Engineer with 4+ years of experience crafting seamless digital experiences.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'Educational Institution',
    },
  };

  // WebSite schema with search action
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Usama Bin Nadeem - Software Engineer',
    url: 'https://usamabinnadeem.com',
    description:
      'Portfolio of Usama Bin Nadeem, a Fullstack Software Engineer specializing in web development, mobile apps, and system architecture.',
    author: {
      '@type': 'Person',
      name: 'Usama Bin Nadeem',
    },
    inLanguage: 'en-US',
  };

  // Professional Portfolio schema
  const profilePageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntity: {
      '@type': 'Person',
      name: 'Usama Bin Nadeem',
      jobTitle: 'Software Engineer',
      url: 'https://usamabinnadeem.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <div>
        <Hero />
        <CapabilitiesSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}
