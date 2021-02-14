<script>
    import header from "../components/header.svelte"
    export let templateHtml, settings;
    const dev = process.env.NODE_ENV === 'development';
</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<svelte:head>
    <link rel="stylesheet" href="/style.css" />
    <script async defer data-domain="brianryall.xyz" src="https://stats.brianryall.xyz/js/plausible.js"></script>
</svelte:head>

<div id="base" class="bg-gruvbox-light-bg dark:bg-gruvbox-dark-bg text-gruvbox-light-fg dark:text-gruvbox-dark-fg" >
    <div class="">
        <header hydrate-client={{}} />
        <main class="mt-14">
            {@html templateHtml}
        </main>
    </div>
</div>
