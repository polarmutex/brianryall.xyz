<script lang="ts">
    const dev = process.env.NODE_ENV === 'production';
</script>

<svelte:head>
    {#if dev}
        <script async defer data-domain="brianryall.xyz" src="https://stats.brianryall.xyz/js/plausible.js"></script>
    {/if}
</svelte:head>
