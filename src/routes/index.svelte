<script lang="ts">
  export let data, helpers;
  import Seo from "$lib/components/SEO.svelte"
  import type SEOProps from '$types/seoProps';
  const seoProps: SEOProps = {};
</script>

<svelte:head>
    <Seo options={seoProps} />
</svelte:head>

<main class="main">
    <h1>Hello world!</h1>
    <p>
My name is Brian. I am a senior software engineer. This is my home
for my journey to improve my skills and share my knowledge and
intersets. My goal for this site is to be my plot of land on the
internet, to own and control and to be a light to the world.
Thank you for following me on this journey!
    </p>
</main>

<style>
.main {
  max-width: 1080px;
  margin: 0 auto;
  padding: 2rem 1rem 0;
  z-index: 2;
}
</style>
