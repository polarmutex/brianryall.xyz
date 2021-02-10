<script>
    import NavMenu from "../components/NavMenu/NavMenu.svelte"
  export let templateHtml, settings;
</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<svelte:head>
    <link rel="stylesheet" href="/style.css" />
</svelte:head>

<div id="base">
    <div class="relative bg-darkgrey overflow-hidden">
        <NavMenu hydrate-client={{}} />
        <main>
            {@html templateHtml}
        </main>
    </div>
</div>
