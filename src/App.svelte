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
		<h3>Torne o seu produto único</h3>
		<div class="wrapper-cards">
			<div>
				<img src="https://cdn.decathlon.pt/landings/personalizacao/img/home-t-shirt.png" alt="00">
				<p>Escolha os artigos desportivos<br> para si ou para o seu clube</p>
			</div>
			<div>
				<img src="https://cdn.decathlon.pt/landings/personalizacao/img/home-t-shirt-1.png" alt="00">
				<p>Personalize a sua seleção<br> de produtos</p>
			</div>
			<div>
				<img src="https://cdn.decathlon.pt/landings/personalizacao/img/home-t-shirt-3.png" alt="00">
				<p>Encomende os seus <br>artigos personalizados</p>
			</div>
		</div>
	</div>
	<div class="banner-dois">
		<img src="https://cdn.decathlon.pt/landings/personalizacao/img/slide002-1024x320-1.jpeg" alt="banner-dois">
	</div>	
	<nav class="nav-item">
		{#each nav as navItem, i}
			<div class:selected="{current === i}" on:click={() => toggleView(i)}>{navItem.label}</div>
		{/each}
	</nav>
	{#if viewportComponent == views[currentView]}
		<div id="viewport" on:outroend={updateViewportComponent} transition:fade>
			<svelte:component this={viewportComponent} />
		</div>
	{/if}

</main>
<style>
#landing-personalizacao {
	width: 100%;
	background-color: white;
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
}

.wrapper-cards img {
	width: 100px;
}
.banner-dois {
	
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
	border: 1px solid rgba(0, 0, 0, 0.243);
	padding: 10px 15px;
}
.selected {
 font-weight: 800;
}	
@media only screen and (max-width: 900px) {
	.wrapper-cards {
		flex-direction: column;
	}
	.wrapper-cards div{
		width: 80%;	
	}
	.nav-item{
		overflow: scroll;
		gap: 2rem;
	}
	.nav-item::-webkit-scrollbar-track {
	margin: 10px 0;
	background-color: #ededed;
	}
	.nav-item::-webkit-scrollbar {
		height: 5px;
		margin: 10px 0;
	}
	.nav-item::-webkit-scrollbar-thumb {
	border-radius: 10px;
	box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #0082c3;
	border: 1px solid #000;
	}
}
</style>