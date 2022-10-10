<script lang="ts">
    import {page} from '$app/stores'
    
	import io from 'socket.io-client'
	
	import Confetti from "$lib/components/Confetti.svelte";
	import Allan from '$lib/components/Allan.svelte';

    const components: {[id: string]: any} = {
        'confetti': Confetti,
        'allan': Allan
    }

    let messages: {
        component: string,
        x: number,
        y: number
    }[] = [

    ]

    const socket = io('ws://localhost:3000');

	socket.on('message', function(msg: any) {
        messages = [...messages.slice(0, 20), msg]
	});

    $: showControls = $page.url.searchParams.get('showControls') === 'true'

    let activeTool = 'confetti'

    function handleClick(e: MouseEvent) {
		const x = e.clientX;
		const y = e.clientY;

        socket.emit('message', {x, y, component: activeTool})
    }

    let tools = [
        {id: 'confetti', label: 'confetti'},
        {id: 'allan', label: 'allan'}
    ]
</script>

<div class="fixed inset-0 bg-blue-500">

    {#each messages as message}
        {@const component = components[message.component]}
        {#if component}
            {@const x = message.x}
            {@const y = message.y}
            <svelte:component this={component} {x} {y} />
        {/if}
    {/each}

    {#if showControls}
        <div class="absolute inset-0 z-20"
            on:click={handleClick}
        />
    {/if}

    {#if showControls}
        <div class="absolute bottom-0 flex justify-center w-full pb-12 z-30">
            <div class="rounded-lg bg-blue-200 h-32 p-4 flex gap-3">
                {#each tools as tool}
                <button on:click={() => activeTool = tool.id} class="tool grid place-items-center h-full bg-blue-300 p-2 rounded-md" class:active={activeTool === tool.id}>{tool.label}</button>
                {/each}
            </div>
        </div>
    {/if}
</div>



<style>
    .tool.active {
        @apply bg-blue-400;
    }
</style>