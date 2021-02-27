<!-- https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-multi-level-sticky-footer-with-flexbox--cms-33341 -->
<script lang="ts">
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons';
  import { faRss } from '@fortawesome/free-solid-svg-icons';
</script>

<footer>
  <div class="icons">
    <!--<a href="mailto:{email}" target="_blank" rel="norel noreferrer" aria-label="email">
            <Icon data="{faEmail}" height="1.5rem" width="1.5rem" />
        </a>-->
    <a href="https://github.com/polarmutex" target="_blank" rel="norel noreferrer" aria-label="github">
      <Icon data={faGithub} height="1.5rem" width="1.5rem" />
    </a>
    <a href="https://fosstodon.orm/u/polarmutex" target="_blank" rel="norel noreferrer" aria-label="mastodon" >
      <Icon data="{faMastodon}" height="1.5rem" width="1.5rem" />
    </a>
    <a href="/rss.xml" rel="alternate" type="application/rss+xml" aria-label="rss">
      <Icon data="{faRss}" height="1.5rem" width="1.5rem" />
    </a>
  </div>
  <p>
    Powered by
    <a class="hl" href="https://sapper.svelte.dev">Sapper</a>
    • Source code is available on
    <a class="hl" href="https://github.com/polarmutex/brianryall.xyz">Github</a>
  </p>
  <p>Copyright &copy; 2021 <a class="hl" href="https://github.com/polarmutex" >PolarMutex</a></p>
</footer>

<style>
  footer {
    margin-top: 3rem;
    border-top: 0.0625rem var(--color-borders) solid;
    font-family: 'Overpass', sans-serif;
    text-align: center;
    padding: 2rem 1rem;
    background-color: var(--color-alt-bg);
  }
  p {
    line-height: 1.5em;
    color: var(--color-main-text);
  }
  a {
    text-decoration: none;
  }
  .hl {
    color: var(--color-main-accent);
    font-weight: 600;
  }
  .icons {
    margin: 0 auto 0.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 220px;
  }
  .icons a {
    color: var(--color-main-text);
    transition: color ease-out 0.2s;
  }
  .icons a:hover {
    color: var(--color-main-accent);
  }
</style>
