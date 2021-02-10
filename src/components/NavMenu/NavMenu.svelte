<script>
    import Fa from 'svelte-fa'
    import { faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons'
    import { faRss, faBars } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from 'fontawesome-svelte';
</script>

<nav class="
    relative
    max-w-screen-xl
    mx-auto
    flex
    items-center
    justify-between
    px-4
    sm:px-6
    pt-6
    pb-6
    sm:pb-12">
    <div class="flex items-center flex-1">
        <div class="flex items-center justify-between w-full md:w-auto">
            <div class="
                text-sm
                font-semibold
                uppercase
                tracking-wide
                text-gray-500
                sm:text-base
                lg:text-sm
                xl:text-base">
                <a href="/" aria-label="Home" class="">
                    Brian Ryall
                    <span class="">@PolarMutex</span>
                </a>
            </div>
        </div>
        <div class="hidden space-x-10 md:flex md:ml-10">
            <a href="/blog" class="">
                Blog
            </a>
        </div>
    </div>
    <div class="hidden md:flex">
        <FontAwesomeIcon size="2x" icon={faGithub} />
        <FontAwesomeIcon size="2x" icon={faRss} class="ml-4" />
        <FontAwesomeIcon size="2x" icon={faMastodon} class="ml-4" />
    </div>
</nav>
