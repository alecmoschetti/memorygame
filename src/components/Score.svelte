<script>
    import { currentScore, highScore } from '../../scripts/logics.js';
    import { slide } from 'svelte/transition';
</script>

<aside class="controls">
    {#key $currentScore}
    <h6 transition:slide={{ duration: 250 }}>Current Score: {$currentScore} <progress max="12" value={$currentScore}></progress></h6>
    {/key}
    <h6>High Score: {$highScore} <progress max="12" value={$highScore}></progress></h6>
</aside>

