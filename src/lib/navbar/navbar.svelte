<script lang="ts">
	import { page } from '$app/stores';
	import type { SvelteComponent } from 'svelte';

	import NavbarItem from '$lib/navbar/navbar-item.svelte';
	import HomeIcon from '$lib/icons/home-icon.svelte';
	import ParametersIcon from '$lib/icons/parameters-icon.svelte';
	import CalculatorsIcon from '$lib/icons/calculators-icon.svelte';
	import LogoutIcon from '$lib/icons/logout-icon.svelte';
	import HeroIcon from '$lib/icons/hero-icon.svelte';

	$: slug = $page.url.pathname;

	let pages: {
		icon: typeof SvelteComponent;
		slug: string;
	}[] = [
		{ icon: HeroIcon, slug: '/' },
		{ icon: HomeIcon, slug: '/' },
		{ icon: ParametersIcon, slug: '/parameters' },
		{ icon: CalculatorsIcon, slug: '/calculators' },
		{ icon: LogoutIcon, slug: '/logout' }
	];
</script>

<!-- nav -->
<div
	class="bg-primarydark text-primarylight 
	flex h-screen min-h-screen w-fit flex-col gap-10 
	overflow-hidden px-5 py-10 text-center"
>
	{#each pages as page}
		<NavbarItem icon={page.icon} slug={page.slug} selected={slug == page.slug} />
	{/each}
</div>
