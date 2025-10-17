import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Usama Bin Nadeem - Software Engineer',
    short_name: 'Usama Portfolio',
    description: 'Fullstack Software Engineer with 4+ years of experience crafting seamless digital experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0F',
    theme_color: '#8B5CF6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
