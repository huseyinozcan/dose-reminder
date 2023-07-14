<script>
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';

	onMount(() => {
		// gtag typings are wrong or something
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		window.gtag('config', env.PUBLIC_GA_MEASURMENT_ID);
	});
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id={env.PUBLIC_GA_MEASURMENT_ID}">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
	</script>
</svelte:head>
