import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getCapabilityBySlug,
  getAllCapabilitySlugs,
} from '@/data/capabilities';
import SkillDetailPage from '@/components/sections/SkillDetailPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCapabilitySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    return {
      title: 'Skill Not Found',
    };
  }

  const url = `https://usamabinnadeem.com/skills/${slug}`;
  const title = `${capability.title} | Usama Nadeem`;
  const description = capability.shortDescription;

  // Extract technology names for keywords
  const techKeywords = capability.technologies.map((tech) => tech.name);

  return {
    title,
    description,
    keywords: [
      capability.title,
      ...techKeywords,
      'software engineering',
      'technical expertise',
      'development services',
      capability.category,
    ],
    authors: [{ name: 'Usama Bin Nadeem' }],
    creator: 'Usama Bin Nadeem',
    publisher: 'Usama Bin Nadeem',
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName: 'Usama Bin Nadeem',
      locale: 'en_US',
      images: [
        {
          url: 'https://usamabinnadeem.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: capability.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://usamabinnadeem.com/og-image.jpg'],
      creator: '@usamabinnadeem',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function SkillPage({ params }: PageProps) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    notFound();
  }

  // Create JSON-LD structured data for the capability/skill
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: capability.title,
    name: capability.title,
    description: capability.hero.description,
    provider: {
      '@type': 'Person',
      name: 'Usama Bin Nadeem',
      url: 'https://usamabinnadeem.com',
      jobTitle: 'Software Engineer',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: capability.title,
      itemListElement: capability.approach.steps.map((step) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: step.title,
          description: step.description,
        },
      })),
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://usamabinnadeem.com/skills/${slug}`,
    },
  };

  // BreadcrumbList schema
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://usamabinnadeem.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Capabilities',
        item: 'https://usamabinnadeem.com/#capabilities',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: capability.title,
        item: `https://usamabinnadeem.com/skills/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SkillDetailPage capability={capability} />
    </>
  );
}
