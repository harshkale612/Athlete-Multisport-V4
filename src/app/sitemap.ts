import type { MetadataRoute } from 'next';
import { sportsData } from '../data/sportsData';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://youinsports.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const sportRoutes = sportsData.map((sport) => ({
    url: `${BASE_URL}/sport/${sport.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/athlete/harsh-kale`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...sportRoutes,
  ];
}
