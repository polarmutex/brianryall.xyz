<script lang="ts">
    import type { Post } from '$lib/types/post';
    import Tags from '$lib/components/Tags.svelte';
    import Date from '$lib/components/Date.svelte';

    export let post: Post;
</script>

<div class="card">
    <div class="px-6 py-8">
        <div class="my-3 text-xl font-bold">
            <a sveltekit:prefetch href="/blog/{post.slug}" class="link-inherit">
                {post.title}
            </a>
        </div>

        <Date date={post.creationDate} />

        {#if post.excerpt}
            <p class="mt-3 mb-12">
                {post.excerpt.length > 100 ? `${post.excerpt.substr(0, 100)}...` : post.excerpt}
            </p>
        {/if}
    </div>

    <Tags tags={post.tags} />

    <div class="absolute bottom-0 right-0 pt-4 pl-6 text-right">
        <a
            sveltekit:prefetch
            aria-label={post.slug}
            href="/blog/{post.slug}"
            class="inline-block rounded-br btn-primary">
            Read
        </a>
    </div>
</div>
