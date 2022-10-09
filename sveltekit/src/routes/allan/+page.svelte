<main>
	<img class="allan" alt="Allan Edwall" src="/allan.png" />
</main>

<style>
	.allan {
		width: 50%;

		--border-width: 3px;
		--border-width-neg: -3px;
		--border-color: black;
		--border-blur: 0px;
		align-self: end;
		margin-left: -20px;
		margin-bottom: -20px;
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

	main {
		height: 100vh;
		display: grid;
	}
</style>
