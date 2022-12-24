<script>
	import { Envelope, GithubLogo, LinkedinLogo, Key } from 'phosphor-svelte';
</script>

<footer class="flex justify-center mb-2">
	<div class="flex flex-wrap">
		<a class="m-3 transition duration-500 hover:scale-125" href="https://ctftime.org/user/127095">
			<Key color={'white'} size={40} />
		</a>
		<a class="m-3 transition duration-500 hover:scale-125" href="mailto:fred@windt.me">
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
