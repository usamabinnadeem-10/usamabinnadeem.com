import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import ProjectDetailPage from '@/components/sections/ProjectDetailPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const url = `https://usamabinnadeem.com/projects/${slug}`;
  const title = `${project.title} | Usama Nadeem`;
  const description = project.shortDescription;

  return {
    title,
    description,
    keywords: [
      project.title,
      ...project.tags,
      'software development',
      'web development',
      'portfolio',
      'case study',
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
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.image],
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

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Create JSON-LD structured data for the project
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.detail.overview,
    url: project.liveUrl,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    creator: {
      '@type': 'Person',
      name: 'Usama Bin Nadeem',
      url: 'https://usamabinnadeem.com',
    },
    screenshot: project.image,
    aggregateRating: project.detail.testimonial
      ? {
          '@type': 'AggregateRating',
          ratingValue: '5',
          ratingCount: '1',
          reviewCount: '1',
        }
      : undefined,
    review: project.detail.testimonial
      ? {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: project.detail.testimonial.author,
          },
          reviewBody: project.detail.testimonial.quote,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
        }
      : undefined,
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
        name: 'Projects',
        item: 'https://usamabinnadeem.com/#projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://usamabinnadeem.com/projects/${slug}`,
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
      <ProjectDetailPage project={project} />
    </>
  );
}
