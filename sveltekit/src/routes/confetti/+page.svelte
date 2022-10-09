<script lang="ts">
	import io from 'socket.io-client'
	
	import Confetti from "$lib/components/Confetti.svelte";

    const socket = io('ws://localhost:3000');


	let x = 0
	let y = 0

	socket.on('confetti', function(msg: any) {
		console.log('SOCKET', {msg})

		x = msg.x
		y = msg.y

	});
</script>

<Confetti {x} {y} on:click={({detail: coords}) => {
	socket.emit('confetti', coords)
}} />

<style>
	button {
		z-index: 10;
	}
</style>