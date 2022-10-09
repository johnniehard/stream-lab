<!-- svelte-ignore a11y-media-has-caption -->
<video src="computer.webm" autoplay muted />
<main>
	<div class="window" />
</main>

<style>
	main {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;

		display: grid;
		place-items: center;
		overflow: hidden;
	}

	.window {
		height: 70%;
		aspect-ratio: 1.6;
		background: lime;
	}
	video {
		filter: blur(10px);
		z-index: -1;
		position: fixed;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		transform: translateX(calc((100% - 100vw) / 2));
	}
</style>
