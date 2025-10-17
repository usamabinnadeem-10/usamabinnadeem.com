import { Hero } from '@/components/sections/Hero';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Usama Bin Nadeem',
    jobTitle: 'Software Engineer',
    url: 'https://usamabinnadeem.com',
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
    ],
    description: 'Fullstack Software Engineer with 4+ years of experience crafting seamless digital experiences.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
