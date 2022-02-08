import App from './App.svelte';

const target = document.getElementById("landing-personalizacao")

const app = new App({
	target: target,
	props: {
		name: 'world'
	}
});

export default app;