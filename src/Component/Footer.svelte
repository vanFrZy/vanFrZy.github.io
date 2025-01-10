<script>
	import { Envelope, GithubLogo, LinkedinLogo, Key } from 'phosphor-svelte';
</script>

<footer class="flex justify-center mb-2">
	<div class="flex flex-wrap">
		<a
			class="m-3 transition duration-500 hover:scale-125"
			href="https://keys.openpgp.org/vks/v1/by-fingerprint/362A8C33D77622BC5AF6DD54002CAE07A9FDAE95"
		>
			<Key color={'white'} size={40} />
		</a>
		<a class="m-3 transition duration-500 hover:scale-125" href="mailto:contact@windt.me">
			<Envelope color={'white'} size={40} />
		</a>
		<a
			class="m-3 transition duration-500 hover:scale-125"
			href="https://www.linkedin.com/in/frederick-van-der-windt-072530184/"
		>
			<LinkedinLogo color={'white'} size={40} />
		</a>
		<a class="m-3 transition duration-500 hover:scale-125" href="https://github.com/vanFrZy">
			<GithubLogo color={'white'} size={40} />
		</a>
	</div>
</footer>
