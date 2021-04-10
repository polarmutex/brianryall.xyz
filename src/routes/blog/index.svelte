<script context="module" lang="ts">
  export async function load({ fetch }: LoadInput) {
    try {
      const posts_json = await fetch(`/api/blog.json`);
      const posts = await posts_json.json();
      return { props: { posts } };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script lang="ts">
  import type { LoadInput } from '@sveltejs/kit/types.internal';
  import type Post from '$lib/types/post';

  import SEO from '$lib/components/SEO.svelte';
  import BlogPostFilter from '$lib/components/BlogPostFilter.svelte';

  export let posts: Post[];
</script>

<svelte:head>
  <title>Blog | Brian Ryall</title>
  <meta name="description" content="Blog on Programming and other topics." />
</svelte:head>

<SEO />

<section class="container flex flex-wrap main-container">
  <BlogPostFilter {posts} />
</section>
