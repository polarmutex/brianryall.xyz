<script>
    import blogList from '../../components/blogList.svelte'
    export let data; // data is mainly being populated from the /plugins/edlerjs-plugin-markdown/index.js
</script>

<style>
</style>

<svelte:head>
  <title>brianryall.xyz blog</title>
</svelte:head>

<div class="pt-4 pb-20 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8 container mx-auto">
    <blogList hydrate-client={{ data: data.markdown.posts }} />
</div>
