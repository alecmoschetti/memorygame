<script>
    import { fade } from 'svelte/transition';
    import Card from './Card.svelte';
    export let url;
</script>

<Card on:click>
    <div class="photo">
        <img in:fade src={url} alt="random area of space" decoding="async">
    </div>
</Card>

<style>
    .photo > img {
        border-radius: 6px;
        width: 10rem;
        height: 10rem;
        max-width: 10rem;
        max-height: 10rem;
        cursor: pointer;
    }
</style>