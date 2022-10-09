<script lang="ts">
	import { confetti } from '@neoconfetti/svelte';
	import { tick } from 'svelte';


	let isVisible = false;

	export let x = 0;
	export let y = 0;

	async function showConfetti(_x: number, _y: number){
		isVisible = false;
		x = _x
		y = _y
		await tick();
		isVisible = true;
	}

	$: showConfetti(x, y)
</script>

{#if isVisible}
	<div>
		<div
			style:transform="translate({x}px, {y}px)"
			use:confetti={{
				stageHeight: 1080
			}}
		/>
	</div>
{/if}

<style>
	:global(body) {
		overflow: hidden;
	}
</style>
