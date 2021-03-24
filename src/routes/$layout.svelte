<script lang="ts">
    import { afterUpdate } from 'svelte';
    import { onMount } from "svelte"
    import { theme } from "../utils/theme"
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import Plausible from '../components/Plausible.svelte';

	export let segment: string;

    let fullURL: string = '';
    afterUpdate(() => {
        let tmpURL = window.location.href;
        fullURL = tmpURL[tmpURL.length - 1] === '/' ? tmpURL : tmpURL + '/';
    });

    onMount(() => {
        const { matches: isDarkTheme } = window.matchMedia(
            "(prefers-color-scheme: dark)"
        )

        let preference

        if (localStorage.getItem("theme")) {
            preference = localStorage.getItem("theme")
        }
        else {
            preference = isDarkTheme ? "dark" : "light"
        }

        theme.set(preference)
        theme.subscribe(current => {
            localStorage.setItem("theme", current)
            document.documentElement.setAttribute("data-theme", current)
        })
    })
</script>

<svelte:head>
    <link rel="canonical" href="{fullURL}" />
    <script>
        // set dark mode correctly before everythings get rendered
        // thanks https://github.com/pveyes
        try {
            // prettier-ignore
            const { matches: isDarkMode } = window.matchMedia( "(prefers-color-scheme: dark)")
            let preference
            if (localStorage.getItem("theme")) preference = localStorage.getItem("theme")
            else preference = isDarkMode ? "dark" : "light"
            if (preference) document.documentElement.setAttribute("data-theme", preference)
        } catch (err) {
            console.log(err)
        }
    </script>
</svelte:head>

<Plausible />
<Nav {segment}/>
<main>
    <div>
	    <slot />
    </div>
    <Footer />
</main>

<style>
main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
div {
    flex: 1;
    margin-top: 4.5rem;
}
</style>
