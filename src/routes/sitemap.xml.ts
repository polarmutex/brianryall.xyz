import posts from './blog/_posts';

import fs from 'fs';
import type { Post } from '$lib/types/post';

const BASE_URL = 'https://brianryall.xyz';
const pages = [''];

fs.readdirSync('./src/routes').forEach((file) => {
  file = file.split('.')[0];
  if (
    file.charAt(0) !== '_' &&
    file !== 'sitemap' &&
    file !== 'index' &&
    file !== 'categories' &&
    file !== 'tags' &&
    file !== 'rss'
  ) {
    pages.push(file);
  }
});

const render = (
    pages: string[], posts: Post[]
) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages
    .map(
      (page: string) => `
    <url><loc>${BASE_URL}/${page ? `${page}/` : ''}</loc><priority>0.85</priority></url>
  `,
    )
    .join('\n')}
  ${posts
    .map(
      (post: Post) => `
    <url>
      <loc>${BASE_URL}/blog/${post.slug}/</loc>
      <priority>0.69</priority>
    </url>
  `,
    )
    .join('\n')}
</urlset>
`;

export function get() {
  const sitemap = render(pages, posts);
  return {
      body: sitemap,
  }
}
