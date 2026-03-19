import { MetadataRoute } from 'next'

const isDev = process.env.NODE_ENV === 'development';
const baseUrl = isDev ? 'http://localhost:3000' : 'https://chatanya.dev';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chatanya Pratap - Full Stack Developer Portfolio',
    short_name: 'Chatanyapra',
    description: 'Chatanya Pratap (Chatanyapra) - Full Stack Developer Portfolio showcasing web development projects, tech blogs, and professional experience.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/assets/favicon-for-public/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/favicon-for-public/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
