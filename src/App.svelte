<script>
	import { Router } from 'svelte-router-spa'
  	import { routes } from './routes'
	
	export let name;
	import Slider from './UIElements/Slider/Slider.svelte';
</script>
<main>
	<Slider />
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<nav>
		<a href="/basquetebol">Basquetebol</a>
		<a href="/ciclismo">Ciclismo</a>
		<a href="/vela">Vela</a>
		<a href="/fitness">Fitness</a>
		<a href="/futebol">Futebol</a>
		<a href="/golf">Golf</a>
	</nav>
	<Router {routes} />
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