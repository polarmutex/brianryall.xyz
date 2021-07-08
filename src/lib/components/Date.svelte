<script lang="ts">
    import dayjs from 'dayjs';

    export let date: string;
</script>

<div class="">
    <span class="flex gap-2 items-center justify-self-start text-sm">
        {dayjs(date).format('DD MMMM YYYY')}
    </span>
</div>
