<script lang="ts">
    export let x = 0
    export let y = 0
</script>

<div
class="fixed"
style:transform="translate({x}px, {y}px)"
>
    <img
      class="allan" alt="Allan Edwall" src="/allan.png" />
</div>

<style>
	.allan {

        /* display: inline-block; */

        margin-top: -100%;

        transform-origin: bottom left;

		--border-width: 3px;
		--border-width-neg: -3px;
		--border-color: black;
		--border-blur: 0px;
		filter: drop-shadow(
				var(--border-width) var(--border-width) var(--border-blur) var(--border-color)
			)
			drop-shadow(
				var(--border-width-neg) var(--border-width) var(--border-blur) var(--border-color)
			)
			drop-shadow(
				var(--border-width) var(--border-width-neg) var(--border-blur) var(--border-color)
			)
			drop-shadow(
				var(--border-width-neg) var(--border-width-neg) var(--border-blur) var(--border-color)
			);
	}

	.allan {
		animation: wiggle 10s infinite ease-in-out;
	}

	@keyframes wiggle {
		0% {
			transform: rotate(0deg);
		}
		15% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(-5deg);
		}
		50% {
			transform: rotate(5deg);
		}
		75% {
			transform: rotate(-10deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
