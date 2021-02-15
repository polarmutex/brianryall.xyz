<script>
    export let data;
    data.map((x) => {console.log(x)})
</script>

<div>
    {#if data.length }
        <ul class="flex flex-col max-w-4xl mx-auto list-none">
            {#each data as item}
                <li class="mb-4 md:mb-8 px-1">
                    <div class="flex">
                        <span class="inline-flex justify-end items-center text-gray-600 text-xs font-mono whitespace-nowrap">{item.frontmatter.date}
                        </span>
                        <a
                            href={`/${item.slug}`}
                            class="relative -mr-px inline-flex text-sm text-left leading-5 mytext font-medium">
                            <h3
                                class="mylinkcolors text-base md:text-2xl leading-5 font-medium whitespace-normal ml-4 inline"
                                class:longTitle={item.frontmatter.title.length > 58}
                            >
                                {item.frontmatter.title}
                            </h3>
                            {#if item.frontmatter.tags}
                                <span class="font-mono text-xs ml-4 hidden md:inline-flex items-center">
                                    {item.frontmatter.tags && item.frontmatter.tags.length ? item.frontmatter.tags.map(x => `#${x}`).join(', ') : 'Uncategorized'}
                                </span>
                            {/if}
                        </a>
                    </div>
                </li>
            {/each}
        </ul>
    {/if}
</div>
