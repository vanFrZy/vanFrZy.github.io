<script>
	import { page } from '$app/stores';
</script>

<div class="flex flex-col pt-9 default-text">
	<span class="text-center text-4xl pb-5 font-medium"> Not sure how you got here? </span>
	<span class="text-center text-xl pb-3 font-medium">
		Please return back <a href="/" class="text-blue-600"> Home </a>
	</span>
	<h1 class="text-center">
		{$page.status}: {$page.error.message}
	</h1>
</div>
