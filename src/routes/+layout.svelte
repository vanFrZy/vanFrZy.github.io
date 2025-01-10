<script>
	import Footer from '/src/Component/Footer.svelte';

	import './styles.css';
</script>

<div class="flex flex-col h-screen">

	<main class="flex justify-center">
		<slot />
	</main>

	<Footer />
</div>
