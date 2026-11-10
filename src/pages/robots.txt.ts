import type { APIRoute } from 'astro';
import { sitemapUrl } from '../config/seo.mjs';

export const prerender = true;

export const GET: APIRoute = () => new Response(
  `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`,
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
