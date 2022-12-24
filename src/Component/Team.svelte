<script>
	export let teamname;
	export let logo;
	export let homepage;
	export let ctftime;
	export let description;
</script>

<div class="px-5 flex flex-col">
	<div
		class=" max-w-full transition duration-500 hover:bg-indigo-700 hover:scale-105 rounded-lg border-2 border-gray-700"
	>
		<div class="px-5 flex flex-grow justify-around">
			<div class="flex flex-col flex-grow justify-center">
				<a href={`https://${homepage}`}>
					<h4 class="mb-2 text-2xl font-bold text-purple-500">{teamname}</h4>
				</a>
				<p />
				<a href={`https://ctftime.org/team/${ctftime}`}>
					<h5 class="mb-2 text-xl font-medium text-purple-300">CtfTime</h5>
				</a>
			</div>
			<img class="m-5 h-20" src={logo} alt="" />
		</div>
	</div>
	<div class="text-snowbright m-4 text-xl">
		{@html description}
	</div>
</div>
