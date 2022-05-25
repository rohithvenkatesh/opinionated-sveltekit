<script lang="ts">
	export let icon: any;
	export let slug: string;
	export let selected: boolean;
</script>

<a
	href={slug}
	class="fill-primarylight w-12 rounded p-2 transition-all 
	first:bg-transparent last:mt-auto hover:bg-gray-600 first:hover:bg-transparent 
	{selected ? 'bg-primary' : 'bg-transparent'}"
>
	<svelte:component this={icon} />
</a>
