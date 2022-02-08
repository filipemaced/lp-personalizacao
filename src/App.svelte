<script>
	import { fade } from 'svelte/transition'

	import Slider from './UIElements/Slider/Slider.svelte';
	import Basquetebol from '../src/pages/Sports/Basquetebol.svelte'
	import Golf from '../src/pages/Sports/Golf.svelte'
	import Running from '../src/pages/Sports/Running.svelte'
	import Ciclismo from '../src/pages/Sports/Ciclismo.svelte'
	import Vela from '../src/pages/Sports/Vela.svelte'

	const views = [Basquetebol, Golf, Running, Ciclismo, Vela]

	let viewportComponent = null
	let currentView = 0
	
	function toggleView(page) {
		currentView = page
	}

	function updateViewportComponent() {
		viewportComponent = views[currentView]
	}
	
	updateViewportComponent()

</script>
<main>
	<Slider />
	<nav>
		<div on:click={() => toggleView(0)}>Page 1</div>
		<div on:click={() => toggleView(1)}>Page 2</div>
		<div on:click={() => toggleView(2)}>Page 3</div>
		<div on:click={() => toggleView(3)}>Page 4</div>
		<div on:click={() => toggleView(4)}>Page 5</div>
	</nav>
	{#if viewportComponent == views[currentView]}
		<div id="viewport" on:outroend={updateViewportComponent} transition:fade>
			<svelte:component this={viewportComponent} />
		</div>
	{/if}

</main>
<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>