import posts from './blog/_posts';
import type Post from '$lib/types/post';

const siteUrl = 'https://brianryall.xyz';

const renderXmlRssFeed = (
    posts: Post[]): string => `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title><![CDATA[Brian Ryall - ]]></title>
    <description><![CDATA[Personal website and blog written from scratch with SapperJS and Svelte.]]></description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <generator>SapperKit</generator>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
      .map(
        (post: Post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="false">${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.creationDate).toUTCString()}</pubDate>
    </item>
    `,
      )
      .join('\n')}
  </channel>
</rss>`;

// eslint-disable-next-line
export function get() {
  const feed = renderXmlRssFeed(posts);
  return {
      body: feed,
  }
}

