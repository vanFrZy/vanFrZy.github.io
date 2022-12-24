<script>
	import Header from '/src/Component/Header.svelte';
	import Footer from '/src/Component/Footer.svelte';

	import './styles.css';
</script>

<div class="flex flex-col h-screen">
	<Header />

	<main class="flex justify-center">
		<slot />
	</main>

	<Footer />
</div>
