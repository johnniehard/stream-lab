<script lang="ts">
	import { confetti } from '@neoconfetti/svelte';
	import { tick } from 'svelte';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

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

	async function handleClick(e: MouseEvent) {
		x = e.clientX;
		y = e.clientY;

		dispatch('click', {x, y})
	}

	$: showConfetti(x, y)
</script>

<div class="clicktarget" on:click={handleClick} />

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

	.clicktarget {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: -1;
	}
</style>
