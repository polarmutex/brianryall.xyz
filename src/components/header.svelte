<script>
    import Icon from 'svelte-awesome';
    import { faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons'
    import { faRss, faBars } from '@fortawesome/free-solid-svg-icons'
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
            py-2
            text-3xl
            ;
    }

    .titleContainer {
        @apply
            flex
            w-full
            items-center
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
            text-2xl
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
</style>

<!-- container -->
<div class="containerz">
    <!-- title-container -->
    <div class="titleContainer">
        <!-- title -->
        <div class="title">
            <a href="/" >
                <h4>Brian Ryall @PolarMutex</h4>
            </a>
        </div>
        <div class="menuButton">
            <Icon data={faBars}/>
        </div>
    </div>
    <div class="list">
        <ul>
            <li>
                <a href="/blog">Blog</a>
            </li>
        </ul>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://github.com/bryall"
                >
                    <Icon data={faGithub} scale="2" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://fosstodon.org/bryall"
                >
                    <Icon data={faMastodon} scale="2" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="/feed.xml"
                >
                    <Icon data={faRss} scale="2" />
                </a>
            </li>
        </ul>
    </div>
</div>
