import { MetadataRoute } from 'next';
import { connectToDB } from '@/lib/mongodb';
import BlogModel from '@/models/BlogModel';

type Blog = {
  _id: string;
  updatedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://chatanya.dev';

  // Fetch dynamic blog posts
  let blogs: Blog[] = [];
  try {
    await connectToDB();
    const docs = await BlogModel.find().select('_id updatedAt').lean();
    blogs = Array.isArray(docs) ? (docs as any) : [];
  } catch {
    blogs = [];
  }

  const blogEntries: MetadataRoute.Sitemap = Array.isArray(blogs) ? blogs.map((blog: Blog) => ({
    url: `${baseUrl}/blogs/${blog._id}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.9,
  })) : [];

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return [...staticRoutes, ...blogEntries];
}
