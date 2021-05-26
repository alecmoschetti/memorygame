<script>
    import Score from './Score.svelte';
	import Reset from './Reset.svelte';
</script>
<section>
	<Score />
	<Reset />
</section>
<style>
    section {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
    }
</style>