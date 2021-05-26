<script>
	import { currentScore } from '../scripts/logics.js';
	import Header from './components/Header.svelte';
	import Controls from './components/Controls.svelte';
	import Wrapper from './components/Wrapper.svelte';
	import Confetti from './components/Confetti.svelte';
</script>
<Header />
<Controls />
<Wrapper />
{#if $currentScore === 12}
	<Confetti />
{/if}