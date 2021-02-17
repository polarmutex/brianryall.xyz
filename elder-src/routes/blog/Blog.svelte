<script lang="ts">
    import Seo from '../../components/SEO.svelte';
    import type { SEOProps } from '../../types/seoProps';
    import blogList from '../../components/blogList.svelte'

    export let data; // data is mainly being populated from the /plugins/edlerjs-plugin-markdown/index.js

    const seoProps: SEOProps = {
        title: `Blog | brianryall.xyz`,
        description: '',
        pathname: '/blog',
  };
</script>

<style>
</style>

<svelte:head>
    <Seo options={seoProps} />
</svelte:head>

<div class="pt-4 pb-20 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8 container mx-auto">
    <blogList hydrate-client={{ data: data.markdown.posts }} />
</div>
