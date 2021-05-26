<script>
    import {onMount} from 'svelte';
    import { currentScore, nasaStore, shuffle } from '../../scripts/logics.js';
    import { url, api_key } from '../../scripts/config.js';
    import Image from './Image.svelte';
    import Loading from './Loading.svelte';
    let promise = [];
    async function fetchNASA() {
            try {
                const response = await fetch(`${url}${api_key}&count=12`);
                const photos = await response.json();
                return photos;
            } catch (error) {
                console.log(error);
            }
        }
    onMount(() => {
        promise = fetchNASA();
    });
    function handleClick(item, arr) {
        $nasaStore = [...$nasaStore, item.title];
        shuffle(arr);
    }
</script>
    {#await promise}
        <Loading />
    {:then photos}
    {#key $currentScore}
        {#each photos as photo}
            <Image on:click={() => handleClick(photo, photos)} url={photo.hdurl} />
        {/each}
    {/key}
    {/await}