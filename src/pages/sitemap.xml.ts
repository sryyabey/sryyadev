import type { APIRoute } from 'astro';
import { projectSlugs } from '../data/projectDetails';

const origin = 'https://sryya.dev';
const languages = ['tr', 'en', 'ru'] as const;
const paths = ['', ...projectSlugs.map((slug) => `projects/${slug}`)];
const blogPaths = ['blog', 'blog/freelancer-mi-ajans-mi-urun-studyosu-mu', 'blog/laravel-multi-tenant-saas-mimarisi-ne-zaman-dogru', 'blog/saas-mvp-gelistirme-maliyeti-2026-turkiye-fiyat-rehberi'];
const urlFor = (lang: typeof languages[number], path: string) => `${origin}/${lang === 'tr' ? '' : `${lang}/`}${path ? `${path}/` : ''}`;

export const GET: APIRoute = () => {
  const localizedEntries = paths.flatMap((path) => languages.map((lang) => `
  <url>
    <loc>${urlFor(lang, path)}</loc>
    <lastmod>2026-08-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path ? '0.8' : lang === 'tr' ? '1.0' : '0.9'}</priority>
    ${languages.map((alternate) => `<xhtml:link rel="alternate" hreflang="${alternate}" href="${urlFor(alternate, path)}" />`).join('\n    ')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor('tr', path)}" />
  </url>`)).join('');
  const blogEntries = blogPaths.flatMap((path) => languages.map((lang) => `
  <url>
    <loc>${urlFor(lang, path)}</loc>
    <lastmod>2026-08-01</lastmod>
    <changefreq>${path === 'blog' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === 'blog' ? '0.8' : '0.7'}</priority>
    ${languages.map((alternate) => `<xhtml:link rel="alternate" hreflang="${alternate}" href="${urlFor(alternate, path)}" />`).join('\n    ')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor('tr', path)}" />
  </url>`)).join('');
  const entries = localizedEntries + blogEntries;

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries}
</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
