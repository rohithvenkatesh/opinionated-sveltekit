<script>
	import '../app.css';
	import Navbar from '$lib/navbar/navbar.svelte';
</script>

<div class="bg-primarylight flex">
	<Navbar />
	<slot />
</div>
