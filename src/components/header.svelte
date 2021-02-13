<script>
    import Icon from 'svelte-awesome';
    import { faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons'
    import { faRss, faBars } from '@fortawesome/free-solid-svg-icons'

    let isMenuOpen = false

    function handleClickOutside() {
        if (isMenuOpen) isMenuOpen = false
    }
</script>

<style>
    .containerz {
        @apply
            bg-gruvbox-light-bg
            dark:bg-gruvbox-dark-bg
            fixed
            top-0
            left-0
            w-full
            box-border
            flex
            items-center
            justify-between
            px-1
            py-3
            text-xl
            flex-col
            lg:flex-row
            ;
    }

    .titleContainer {
        @apply
            flex
            w-full
            items-center
            justify-between
        ;
    }

    .title {
        & h4 {
            @apply
                m-0
                px-0
                py-1
            ;
        }

        & p {
            @apply
                m-0
                text-center
            ;
        }
    }

    .list {
        @apply
            flex
            justify-center
            items-center
            flex-nowrap
            text-base
            flex-col
            lg:flex-row
        ;
        & ul {
            @apply
                list-none
                flex
                justify-center
                items-center
                flex-nowrap
                h-8
                mx-0
                my-0
                p-0
            ;
            & li {
                @apply
                    mx-2
                    my-0
                ;
            }
        }
    }

    .expandedMenu {
    }

    .collapsedMenu {
        @apply hidden lg:flex;
    }

    .menuButton {
        @apply
            block
            float-right
            lg:hidden
        ;
    }

</style>

<!-- container -->
<div class="containerz">
    <!-- title-container -->
    <div class="titleContainer">
        <!-- title -->
        <div class="title">
            <a href="/" >
                <h4>
                <span class="text-gruvbox-light-blue dark:text-gruvbox-dark-blue">
                    Brian Ryall
                </span>
                <span class="text-gruvbox-light-yellow dark:text-gruvbox-dark-yellow">
                    @PolarMutex
                </span>
                </h4>
            </a>
        </div>
        <button
            class="menuButton"
            on:click={() => isMenuOpen = !isMenuOpen}
        >
            <Icon data={faBars} scale="1.5" />
        </button>
    </div>
    <div class="list {isMenuOpen ? 'expandedMenu': 'collapsedMenu'}">
        <ul class="text-gruvbox-light-green dark:text-gruvbox-dark-green" >
            <li>
                <a href="/blog">Blog</a>
            </li>
        </ul>
        <ul>
            <li class="text-white">
                <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://github.com/polarmutex"
                    class="white"
                >
                    <Icon data={faGithub} scale="1.5" style="fill: white" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://fosstodon.org/@polarmutex"
                >
                    <Icon data={faMastodon} scale="1.5" style="fill: #458588" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="/feed.xml"
                >
                    <Icon data={faRss} scale="1.5" style="fill: #d65d0e" />
                </a>
            </li>
        </ul>
    </div>
</div>
