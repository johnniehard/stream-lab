<script lang="ts">
	import { onMount } from 'svelte';

	export let text = 'HEJ MAMMA';

	let time: number = 0;

	// = performance.now();

	function draw() {
		time = performance.now();
		requestAnimationFrame(draw);
	}

	onMount(() => {
		draw();
	});
</script>

<main>
	<div>
		<h1>
			{#each text.split('') as char, i}
				<span
					style={`
					transform: translate(0px, ${Math.cos(time * 0.01 + i) * 10}px) scale(${
						Math.sin(time * 0.01) + 0.2
					});
					color: hsl(${(time * 0.2 + i * 20) % 360}, 100%, 50%);
			`}>{char}</span
				>
			{/each}
		</h1>
	</div>
</main>

<style>
	h1 span {
		display: inline-block;
		min-width: 0.3em;
		font-size: 2em;
	}
</style>
