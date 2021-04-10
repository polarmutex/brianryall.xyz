<script lang="ts">
    import { afterUpdate } from 'svelte';
    import { onMount } from 'svelte';
    import { theme } from '$lib/utils/theme';
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Plausible from '$lib/components/Plausible.svelte';
    import 'virtual:windi.css';
    import './global.css';

    let fullURL: string = '';
    afterUpdate(() => {
        let tmpURL = window.location.href;
        fullURL = tmpURL[tmpURL.length - 1] === '/' ? tmpURL : tmpURL + '/';
    });

    onMount(() => {
        const { matches: isDarkTheme } = window.matchMedia('(prefers-color-scheme: dark)');

        let preference;

        if (localStorage.getItem('theme')) {
            preference = localStorage.getItem('theme');
        } else {
            preference = isDarkTheme ? 'dark' : 'light';
        }

        theme.set(preference);

        theme.subscribe((current) => {
            localStorage.setItem('theme', current);
            if (localStorage.theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        });
    });
</script>

<svelte:head>
    <link rel="canonical" href={fullURL} />
    <script lang="ts">
        // set dark mode correctly before everythings get rendered
        // thanks https://github.com/pveyes
        try {
            // prettier-ignore
            const { matches: isDarkMode } = window.matchMedia( "(prefers-color-scheme: dark)")
            let preference;
            if (localStorage.getItem('theme')) {
                preference = localStorage.getItem('theme');
            } else {
                preference = isDarkMode ? 'dark' : 'light';
            }
            if (preference === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        } catch (err) {
            console.log(err);
        }
    </script>
</svelte:head>

<Plausible />

<Nav />

<main class="main">
    <slot />
</main>

<Footer />
