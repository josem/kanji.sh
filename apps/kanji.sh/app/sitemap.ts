import { Config } from '../src/config';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return ['about', 'read', 'write'].map((page) => ({
        url: `${Config.publicUrl}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1
    }));
}
