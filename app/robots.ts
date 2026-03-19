import type { MetadataRoute } from 'next';

// Always use custom domain - block vercel.app from indexing
const isDev = process.env.NODE_ENV === 'development';
const baseUrl = isDev ? 'http://localhost:3000' : 'https://chatanya.dev';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
