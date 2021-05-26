<script>
    import { reset, nasaStore } from '../../scripts/logics.js';
    import Promise from './Promise.svelte';
    function action() {
        return {
            destroy: () => $nasaStore = []
        }
    }
</script>
{#key $reset}
    <section use:action class="flex" id="shuffle">
        <Promise />
    </section>
{/key}
<style>
    .flex {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        align-content: center;
        padding: 1rem;
        margin: 0 auto;
        max-width: 100%;
    }
</style>