<script>
	import { page } from '$app/stores';
	import logo from '../lib/images/test.png';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<header>
	<Navbar navClass="" let:hidden let:toggle>
		<NavBrand href="/">
			<img src={logo} class="mr-3 h-6 sm:h-9" alt="Windt.me" />
			<span class="self-center whitespace-nowrap text-xl font-semibold text-[#202A44]">Windt</span>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			<NavLi href="/" active={$page.url.pathname === '/' ? 'page' : undefined}>
				<span class="text-xl"> Home </span>
			</NavLi>
			<NavLi href="/about" active={$page.url.pathname === '/about' ? 'page' : undefined}>
				<span class="text-xl"> About </span>
			</NavLi>
			<NavLi href="/education" active={$page.url.pathname === '/education' ? 'page' : undefined}>
				<span class="text-xl"> Education </span>
			</NavLi>
			<NavLi href="/ctf" active={$page.url.pathname === '/ctf' ? 'page' : undefined}>
				<span class="text-xl"> CTF </span>
			</NavLi>
		</NavUl>
	</Navbar>
</header>
