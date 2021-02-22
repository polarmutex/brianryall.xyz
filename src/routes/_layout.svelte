<script lang="ts">
    import { afterUpdate } from 'svelte';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment: string;

    let fullURL: string = '';
    afterUpdate(() => {
        let tmpURL = window.location.href;
        fullURL = tmpURL[tmpURL.length - 1] === '/' ? tmpURL : tmpURL + '/';
    });
</script>

<svelte:head>
    <link rel="canonical" href="{fullURL}" />
</svelte:head>

<Nav {segment}/>

<main class="pb-12 mh">
	<slot />
</main>

<Footer />

<style>
</style>
