<script lang="ts">
    export let tags: string[];
</script>

<div class="flex flex-wrap gap-2">
    {#each tags as tag}
        <span class="bg-green-faded text-sm font-semibold rounded gap-2 py-1 px-2 mt-2">
            {tag}
        </span>
    {/each}
</div>
