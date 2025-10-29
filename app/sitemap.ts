import { MetadataRoute } from 'next'
import { getAllProjectSlugs } from '@/data/projects'
import { getAllCapabilitySlugs } from '@/data/capabilities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://usamabinnadeem.com'

  // Get all dynamic routes
  const projectSlugs = getAllProjectSlugs()
  const skillSlugs = getAllCapabilitySlugs()

  // Create project URLs
  const projectUrls = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Create skill URLs
  const skillUrls = skillSlugs.map((slug) => ({
    url: `${baseUrl}/skills/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#capabilities`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...projectUrls,
    ...skillUrls,
  ]
}
