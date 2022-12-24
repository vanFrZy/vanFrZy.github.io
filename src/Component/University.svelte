<script>
	export let university;
	export let subject;
	export let degree;
	export let logo;
	export let graduation;
	export let gpa;
	export let homepage;
</script>

<div
	class="max-w-md py-3 transition duration-500 hover:scale-105 hover:bg-indigo-700 rounded-lg border-2 border-gray-700 place-self-center self-stretch"
>
	<div class="px-5 flex items-center justify-between default-text">
		<div>
			<a href={homepage}>
				<h4 class="mb-2 text-2xl font-bold text-purple-500">{university}</h4>
			</a>
			<h5 class="mb-2 text-xl font-medium ">{subject}</h5>
			<p class="mb-2 text-xl font-medium ">{degree}</p>
			<h5 class="mb-3 text-lg text-gray-400">Graduation {graduation}</h5>
			<h5 class="mb-3 text-lg text-gray-400">Gpa: {gpa}</h5>
		</div>
		<img class="m-5 h-20" src={logo} alt="" />
	</div>
</div>
