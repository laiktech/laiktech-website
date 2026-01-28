import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.laiktech.com/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
    }
  ]
}
