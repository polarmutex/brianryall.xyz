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
  import type SEOProps from '$lib/types/seoProps';

  import SEO from '$lib/components/SEO.svelte';
  import PostCard from '$lib/components/PostCard.svelte';
  import Tag from '$lib/components/Tag.svelte';

  export let posts: Post[];
  let inputBox = null;
  let keyword = '';
  let tagKeyword = '';
  let filteredPosts = [];
  let tagFilter = [];
  let isCompletionVisible = false;

  // count available tags and insert it to an object, ex: `{a: 2, b: 3}`
  const tags = posts.map((post) => post.tags).flat();
  let count = {};
  for (const x of tags) {
    count[x] = (count[x] || 0) + 1;
  }

  $: filteredPosts = posts.filter((post) => {
    const query = keyword.substr(1).toLowerCase();
    const title = post.title.toLowerCase().includes(query);
    const slug = post.slug.toLowerCase().includes(query);
    const tags = tagFilter.length > 0 ? tagFilter.every((x) => post.tags.includes(x)) : true;
    return (title || slug) && tags;
  });

  const filterPost = ({ target: { value } }) => {
    // always reset the completion visibility
    isCompletionVisible = false;
    if (!value.match(/^#/)) {
      keyword = value;
      return;
    }
    tagKeyword = value;
    isCompletionVisible = true;
  };

  const seoProps: SEOProps = {
    title: `Blog | Brian Ryall`,
    description: '',
    pathname: '/blog',
  };
</script>

<style>
</style>

<svelte:head>
  <SEO options={seoProps} />
</svelte:head>

<section class="posts">
  <h1 class="posts__title">Blog</h1>
  <div class="post__input">
    <input
      class="input__box"
      id="posts__input"
      type="text"
      placeholder="Find post... (start with # to find tags)"
      aria-label="search post"
      on:input={filterPost}
      bind:this={inputBox} />
    {#if isCompletionVisible}
      <div class="input__autocomplete">
        {#each [...new Set(tags)] as tag}
          {#if tag.match(new RegExp(tagKeyword.substr(1)))}
            <span
              class="autocomplete__item"
              on:click={() => {
                tagFilter = [...tagFilter, tag];
                inputBox.value = '';
                tagKeyword = '';
                isCompletionVisible = false;
              }}>
              {tag} • {count[tag]} result{count[tag] > 1 ? 's' : ''}
            </span>
          {/if}
        {/each}
      </div>
    {/if}
  </div>
  <div class="posts__tags">
    {#each tagFilter as filter}
      <Tag
        label={filter}
        onClick={() => {
          tagFilter = tagFilter.filter((x) => x !== filter);
        }} />
    {/each}
  </div>
  <div class="posts__cards">
    {#each filteredPosts as post}
      <PostCard title={post.title} href={`/blog/${post.slug}`} desc={post.desc} date={post.date} tags={post.tags} />
    {/each}
  </div>
</section>
