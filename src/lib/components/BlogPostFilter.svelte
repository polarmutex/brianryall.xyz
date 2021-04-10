<script lang="ts">
    import BlogPostCard from './BlogPostCard.svelte';
    import type Post from '$lib/types/post';

    export let posts: Post[];
    let filteredPosts: Post[] = [];
    let textSearch: string = null;
    let keyword = '';

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
        return (title || slug) && tags;
    });
</script>

<div class="w-full">
    <div class="flex flex-wrap items-center mb-10 -mx-2">
        <div class="w-full px-2 my-2">
            <input
                id="text-search"
                bind:value={textSearch}
                class="w-full text-gray border border-gray rounded hover:border-gray"
                type="text"
                placeholder="Find post... (start with # to find tags)" />
        </div>
        <div class="flex flex-wrap -m-2 w-full">
            {#each filteredPosts as post}
                <div class="flex items-strech w-full p-2 sm:w-1/2">
                    <BlogPostCard {post} />
                </div>
            {/each}
            <div class="flex items-strech w-full p-2 sm:w-1/2">
                <div />
            </div>
        </div>
    </div>
</div>
