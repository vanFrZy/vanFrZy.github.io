<script>
	import University from '/src/Component/University.svelte';
	import um from '/src/lib/images/um.png';
	import kth from '/src/lib/images/kth.png';
</script>

<svelte:head>
	<title>Education</title>
	<meta name="description" content="My education" />
</svelte:head>

<div class="flex-col pt-9">
	<div class="text-center text-white text-4xl pb-3 font-medium">Education</div>
	<div class="p-6 grid grid-cols-1 sm:grid-cols-1 sm:p-6 md:grid-cols-2 md:p-6 m-auto max-w-6xl">
		<University
			university={'UM'}
			subject={'Data Science and Artificial Intelligence'}
			degree={'BSc'}
			graduation={2021}
			gpa={'8.2/10'}
			logo={um}
			homepage={'https://www.maastrichtuniversity.nl/'}
		/>
		<University
			university={'KTH'}
			subject={'Computer Science - Security and Privacy'}
			degree={'MSc'}
			graduation={'2023?'}
			gpa={'N/A'}
			logo={kth}
			homepage={'https://www.kth.se/en'}
		/>
	</div>
</div>
