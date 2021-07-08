<!-- https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535 -->
<script lang="ts">
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons';
  import { faBars, faRss } from '@fortawesome/free-solid-svg-icons';
  import { faMoon } from '@fortawesome/free-regular-svg-icons';
  import ClickOutside from 'svelte-click-outside';

  import { theme } from '../utils/theme';

  let open = false;

  const toggleMenu = () => {
    open = !open;
  };

  const toggleDarkMode = () => {
    theme.update((current) => (current === 'light' ? 'dark' : 'light'));
  };
</script>

<style>
  header {
    z-index: 1;
  }
</style>

<header class="fixed top-0 w-full bg-light-0-h dark:bg-dark-0-h">
  <div class="container flex flex-wrap items-center justify-between p-3 mx-auto bg-light-0-h dark:bg-dark-0-h">
    <div class="flex">
      <a href="/" aria-label="logo">Brian Ryall @PolarMutex</a>
    </div>
    <div class="ml-auto md:hidden">
      <ClickOutside on:clickoutside={() => (open = false)}>
        <button
          class="flex items-center px-3 py-2 text-teal-700 border border-gray-400 hover:text-teal-800 hover:border-gray-500"
          aria-label="Hamburger menu"
          on:click={toggleMenu}>
          <Icon data={faBars} />
        </button>
      </ClickOutside>
    </div>
    <nav class:hidden={!open} class="w-full ml-auto md:flex md:w-auto hidden">
      <a class="nav-link md:inline-block md:mt-0" href="/blog">Blog</a>
      <a class="nav-link md:inline-block md:mt-0" href="https://github.com/polarmutex">
        <Icon data={faGithub} />
      </a>
      <a class="nav-link md:inline-block md:mt-0" href="https://fosstodon.org/@polarmutex">
        <Icon data={faMastodon} />
      </a>
      <a class="nav-link md:inline-block md:mt-0" href="/rss.xml">
        <Icon data={faRss} />
      </a>
      <button class="nav-link md:inline-block md:mt-0" on:click={toggleDarkMode} aria-label="toggle darkmode">
        <Icon data={faMoon} />
      </button>
    </nav>
  </div>
</header>
