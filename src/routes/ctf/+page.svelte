<script>
	import Team from '/src/Component/Team.svelte';
</script>

<svelte:head>
	<title>CTF</title>
	<meta name="description" content="My CTF teams" />
</svelte:head>

<div class="flex-col flex-grow pt-9">
	<div class="text-center default-text text-4xl pb-3 font-medium default-text">
		Capture The Flag Teams
	</div>
	<div class="p-12 grid grid-cols-1 sm:grid-cols-1 sm:p-6 md:grid-cols-2 m-auto max-w-6xl">
		<Team
			teamname={'RoyalRoppers'}
			logo={'https://royalroppers.team/static/media/logo.6879899f1f83dfc69bc5524188e90c4d.svg'}
			homepage={'royalroppers.team'}
			ctftime={'176008'}
			description={'RoyalRoppers is the KTH university team that I Co-Founded with other students. <br/>' +
				'We do regular meet-ups to improve our CTF skills and then compete in several competitions. <br/>' +
				'In 2022 we managed to become number 92 in the worldwide leaderboard!!'}
		/>
		<Team
			teamname={'LetzPwn'}
			logo={'https://letzpwn.com/assets/images/logo.png'}
			homepage={'letzpwn.com'}
			ctftime={'78388'}
			description={'LetzPwn is the first Luxembourgish CTF team that I also Co-Founded with other people that ' +
				'represented Luxembourg in the European Cyber Security Challenge (ECSC) in 2022.<br/> ' +
				'We try to engage young people to become interested in Cyber Security and strengthen the ' +
				'Luxembourgish national team.'}
		/>
	</div>
</div>
