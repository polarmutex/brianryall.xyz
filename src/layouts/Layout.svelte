<script>
    import Header from "../components/header.svelte"
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
    <div class="relative bg-gruvbox-light-bg dark:bg-gruvbox-dark-bg text-gruvbox-light-fg dark:text-gruvbox-dark-fg">
        <Header />
        <main>
            {@html templateHtml}
        </main>
    </div>
</div>
