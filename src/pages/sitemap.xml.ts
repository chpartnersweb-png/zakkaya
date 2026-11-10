import type { APIRoute } from 'astro';
import { siteUrl } from '../config/seo.mjs';

export const prerender = true;

const escapeXml = (value: string) => value.replace(/[<>&"']/g, (character) => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
})[character]!);

// 1ページのLPのため、ページ内アンカーを別URLとして登録しません。
// 更新日の裏付けがないlastmodや、不要なpriority/changefreqも出力しません。
export const GET: APIRoute = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${escapeXml(siteUrl)}</loc></url>\n</urlset>\n`,
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
);
