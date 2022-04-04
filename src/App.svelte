<script>
	import { fade } from 'svelte/transition';

	import Slider from './UIElements/Slider/Slider.svelte';
	import Basquetebol from '../src/pages/Sports/Basquetebol.svelte';
	import Golf from '../src/pages/Sports/Golf.svelte';
	import Running from '../src/pages/Sports/Running.svelte';
	import Ciclismo from '../src/pages/Sports/Ciclismo.svelte';
	import Vela from '../src/pages/Sports/Vela.svelte';
	import Futebol from '../src/pages/Sports/Futebol.svelte';
	import Fitness from '../src/pages/Sports/Fitness.svelte';
	import Stickers from '../src/UIElements/Stickers/Stickers.svelte';
	import Caroussel from '../src/UIElements/Caroussel/Caroussel.svelte';
	import Banner from '../src/UIElements/Banner/Banner.svelte';
	import Ratings from '../src/UIElements/Ratings/Ratings.svelte';

	const views = [Ciclismo, Vela, Basquetebol, Golf, Running, Futebol, Fitness]

	const nav = [
		{
			label: 'Ciclismo'
		},
		{
			label: 'Vela'
		},
		{
			label: 'Basquetebol'
		},
		{
			label: 'Golf'
		},	
		{
			label: 'Running'
		},	
		{
			label: 'Futebol'
		},	
		{
			label: 'Fitness'
		},	
	]

	let viewportComponent = null
	let currentView = 0
	let current = 0
	
	function toggleView(page) {
		currentView = page
		current = page
	}

	function updateViewportComponent() {
		viewportComponent = views[currentView]
	}
	
	updateViewportComponent()

</script>
<main>
	<Slider />
	<div class="personalizacao-unica">
		<h3>Descobre os nossos serviços para tornar o teu artigo único!</h3>
		<div class="wrapper-cards">
			<div>
				<img src="https://cdn.decathlon.pt/landings/personalizacao/img/home-t-shirt.png" alt="Escolhe os artigos desportivos para ti ou para o teu clube">
				<p>Escolhe os artigos desportivos<br> para ti ou para o teu clube</p>
			</div>
			<div>
				<img src="https://cdn.decathlon.pt/landings/personalizacao/img/home-t-shirt-1.png" alt="Personaliza a sua seleção de produtos">
				<p>Personaliza a tua seleção<br> de produtos</p>
			</div>
			<div>
				<img src="https://cdn.decathlon.pt/landings/personalizacao/img/home-t-shirt-3.png" alt="Encomenda os teus artigos personalizados">
				<p>Encomenda os teus <br>artigos personalizados</p>
			</div>
		</div>
	</div>
	<Caroussel />
	<Stickers />
	<Banner />
<!-- 	<nav class="nav-item">
		{#each nav as navItem, i}
			<div class:selected="{current === i}" on:click={() => toggleView(i)}>{navItem.label}</div>
		{/each}
	</nav>
	{#if viewportComponent == views[currentView]}
		<div id="viewport" on:outroend={updateViewportComponent} transition:fade>
			<svelte:component this={viewportComponent} />
		</div>
	{/if} -->
	
	<Ratings />
</main>
<style>
main {
	width: 100%;
	background-color: white;
	overflow: hidden;
}
.personalizacao-unica h3 {
	text-align: center;
	padding: 20px 0;
	font-size: 25px;
}
.wrapper-cards {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 30px 0;
	gap: 40px;
}
.wrapper-cards div{
	width: 22%;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	background-color: white;
}
.wrapper-cards img {
	width: 100px;
}
.banner-dois img {
	margin: 0 auto;
	display: block;
	width: 70%;
}
.nav-item {    
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin: 20px 0;
	width: 100%;
}
.nav-item div{    
	cursor: pointer;
	border-bottom: 1px solid rgba(0, 0, 0, 0.03);
	padding: 10px 15px;
}
.selected {
 font-weight: 700;
 border-bottom: 1px solid rgba(0, 0, 0, 0.438) !important;
}	
@media only screen and (max-width: 900px) {
	.wrapper-cards {
		flex-direction: column;
	}
	.wrapper-cards div{
		width: 80%;	
	}
	.nav-item{
		overflow-y: auto;
		gap: 2rem;
		width: 120%;
	}
	.nav-item::-webkit-scrollbar-track {
		box-shadow: inset 0 0 10px 10px rgb(232, 232, 232);
    	border: solid 3px transparent;
	}
	.nav-item::-webkit-scrollbar {
		height: 10px;
	}
	.nav-item::-webkit-scrollbar-thumb {
	border-radius: 10px;
	box-shadow: inset 0 0 10px 10px #0082c3;
    border: solid 3px transparent;
	}
}
</style>