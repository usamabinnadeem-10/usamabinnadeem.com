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

  return {
    title: `${capability.title} | Usama Nadeem`,
    description: capability.shortDescription,
  };
}

export default async function SkillPage({ params }: PageProps) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    notFound();
  }

  return <SkillDetailPage capability={capability} />;
}
