import type { APIRoute } from 'astro';
import { projectSlugs } from '../data/projectDetails';

const origin = 'https://sryya.dev';
const languages = ['tr', 'en', 'ru'] as const;
const paths = ['', ...projectSlugs.map((slug) => `projects/${slug}`)];
const urlFor = (lang: typeof languages[number], path: string) => `${origin}/${lang === 'tr' ? '' : `${lang}/`}${path ? `${path}/` : ''}`;

export const GET: APIRoute = () => {
  const entries = paths.flatMap((path) => languages.map((lang) => `
  <url>
    <loc>${urlFor(lang, path)}</loc>
    <lastmod>2026-08-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path ? '0.8' : lang === 'tr' ? '1.0' : '0.9'}</priority>
    ${languages.map((alternate) => `<xhtml:link rel="alternate" hreflang="${alternate}" href="${urlFor(alternate, path)}" />`).join('\n    ')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor('tr', path)}" />
  </url>`)).join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries}
</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
