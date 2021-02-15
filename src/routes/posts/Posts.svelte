<script type="ts">
    import Seo from '../../components/SEO.svelte';
    import type { SEOProps } from '../types/seoProps';

    export let data; // data is mainly being populated from the /plugins/edlerjs-plugin-markdown/index.js
    export let preview = false;

    const { html, frontmatter } = data;

    //const { seo } = data.content;
    const seoProps: SEOProps = {
        title: frontmatter.title,
        description:  frontmatter.excerpt,
        pathname: `/${frontmatter.slug}`,
        image: "",
        ogTitle: frontmatter.title,
        ogImage: "",
        ogDescription:  frontmatter.excerpt,
        ogType: 'article',
        twitterTitle: frontmatter.title,
        twitterDescription: "",
        twitterImage: "",
        disableIndex: preview,
        dateModified: frontmatter.updated,
        datePublished: frontmatter.date,
        keywords: frontmatter.tags.join(','),
    };
</script>

<style lang="postcss">
  .py-05 {
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
  }
  :global(strong) {
    @apply font-semibold;
  }
  :global(a) {
    @apply text-gruvbox-light-red dark:text-gruvbox-dark-red font-semibold;
  }
  :global(strong a) {
    @apply font-bold;
  }
  :global(h1) {
    @apply leading-tight border-b text-4xl font-semibold mb-4 mt-6 pb-2;
  }
  :global(h2) {
    @apply leading-relaxed tracking-wide border-b text-2xl font-normal mb-4 mt-6 pb-2;
  }
  :global(h3) {
    @apply leading-snug text-lg font-semibold mb-4 mt-6;
  }
  :global(h4) {
    @apply leading-none text-base font-semibold mb-4 mt-6;
  }
  :global(h5) {
    @apply leading-tight text-sm font-semibold mb-4 mt-6;
  }
  :global(h6) {
    @apply leading-tight text-sm font-semibold mb-4 mt-6 text-gruvbox-light-grey dark:text-gruvbox-dark-grey;
  }
  :global(blockquote) {
    @apply text-base border-l-4 pl-4 pr-4 text-gruvbox-light-grey dark:text-gruvbox-dark-grey;
  }
  :global(code) {
    @apply font-mono text-sm inline rounded px-1 py-05;
  }
  :global(pre) {
    @apply  rounded p-4;
  }
  :global(pre code) {
    @apply block w-full p-4 rounded-lg;
  }
  :global(ul) {
    @apply text-base pl-8 list-disc;
  }
  :global(ol) {
    @apply text-base pl-8 list-decimal;
  }
  :global(kbd) {
    @apply text-xs inline-block rounded border px-1 py-05 align-middle font-normal font-mono shadow;
  }
  :global(table) {
    @apply text-base;
  }
  :global(th) {
    @apply border py-1 px-3;
  }
  :global(td) {
    @apply border py-1 px-3;
  }
  /* Override pygments style background color. */
  :global(.highlight pre) {
    @apply  !important;
  }
</style>

<svelte:head>
    <Seo options={seoProps} />
</svelte:head>

<div class="flex flex-col items-start justify-start w-full h-full">

  <div class="pb-4 my-4 border-b border-solid">
    <div class="flex flex-row items-center justify-center w-full">
      <img src={frontmatter.coverImage} alt="" class="object-fill w-full overflow-hidden rounded-lg" />
    </div>
    <h1 class="mb-3">{frontmatter.title}</h1>

    {#if frontmatter.author}<small class="">By {frontmatter.author}</small>{/if}
  </div>

  {#if html}
    {@html html}
  {:else}
    <h1>Oops!! Markdown not found!</h1>
  {/if}
</div>
