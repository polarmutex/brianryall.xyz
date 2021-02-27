<script lang="ts">
import type SEOProps from '../types/seoProps';
  export let options: SEOProps;
  const title = options.title ?? 'Brian Ryall | Developer';
  const description =
    options.description ??
    "delveloper writing about things I find interesting";
  const pathname = options.pathname ?? '';
  const url = `https://brianryall.xyz${pathname}`;
  const image =
    options.image ??
    '';
  const ogTitle = options.ogTitle ?? title;
  const ogDescription = options.ogDescription ?? description;
  const ogType = options.ogType ?? 'website';
  const ogImage = options.ogImage ?? image;
  const twitterUsername = 'polarmutex';
  const twitterTitle = options.twitterTitle ?? title;
  const twitterDescription = options.twitterDescription ?? description;
  const twitterImage = options.twitterImage ?? image;
  const disableIndex = options.disableIndex ?? true;
  const jsonLd = (content) => `<${'script'} type="application/ld+json">${JSON.stringify(content)}</${'script'}>`;
  const jsonLdGraph: any[] = [
    {
      '@context': 'http://www.schema.org',
      '@type': 'person',
      name: 'Brian Ryall',
      jobTitle: 'developer',
      gender: 'male',
      url: 'https://brianryall.xyz',
      sameAs: [
        'https://twitter.com/polarmutex',
        'https://github.com/polarmutex',
      ],
      image: '',
      email: 'brian+blog@brianryall.xyz',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://brianryall.xyz/#website',
      url: 'https://brianryall.xyz',
      name: 'brianryall.xyz',
      description: `delveloper writing about things I find interesting`,
      publisher: {
        '@id': 'https://brianryall.xyz/#person',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://brianryall.xyz' + pathname + '#webpage',
      url: 'https://brianryall.xyz' + pathname,
      name: title,
      isPartOf: {
        '@id': 'https://brianryall.xyz/#website',
      },
      inLanguage: 'en-US',
      description: description,
    },
  ];
  if (options.ogType === 'article') {
    jsonLdGraph[2]['potentialAction'] = [
      {
        '@type': 'ReadAction',
        target: ['https://brianryall.xyz' + pathname],
      },
    ];
    jsonLdGraph[2]['primaryImageOfPage'] = {
      '@id': 'https://brianryall.xyz' + pathname + '#primaryimage',
    };
    jsonLdGraph.push({
      '@type': 'ImageObject',
      '@id': 'https://brianryall.xyz' + pathname + '#primaryimage',
      inLanguage: 'en-US',
      url: image,
      width: 700,
      height: 394,
      caption: title,
    });
    jsonLdGraph.push({
      '@type': 'Article',
      '@id': 'https://brianryall.xyz' + pathname + '#article',
      isPartOf: {
        '@id': 'https://brianryall.xyz' + pathname + '#webpage',
      },
      author: {
        '@id': 'https://brianryall.xyz' + pathname + '#person',
      },
      headline: title,
      datePublished: options.datePublished,
      dateModified: options.dateModified,
      commentCount: 0,
      mainEntityOfPage: {
        '@id': 'https://brianryall.xyz' + pathname + '#webpage',
      },
      publisher: {
        '@id': 'https://brianryall.xyz/#organization',
      },
      image: {
        '@id': 'https://brianryall.xyz' + pathname + '#primaryimage',
      },
      keywords: options.keywords,
      inLanguage: 'en-US',
    });
  }
</script>
<title>{title}</title>
<meta name="description" content={description} />
<meta name="image" content={image} />
<link rel="”canonical”" href={url} />
<!-- OpenGraph   -->
<meta property="og:url" content={url} />
<meta property="og:type" content={ogType} />
<meta property="og:title" content={ogTitle} />
<meta property="og:description" content={ogDescription} />
<meta property="og:image" content={ogImage} />
<!-- Twitter Card  -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content={twitterUsername} />
<meta name="twitter:title" content={twitterTitle} />
<meta name="twitter:description" content={twitterDescription} />
<meta name="twitter:image" content={twitterImage} />
{#if disableIndex}
  <meta name="robots" content="noindex" />
  <meta name="bingbot" content="noindex" />
  <meta name="googlebot" content="noindex" />
{/if}
{@html jsonLd({ '@context': 'http://schema.org', '@graph': jsonLdGraph })}
