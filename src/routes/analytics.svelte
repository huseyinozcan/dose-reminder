<script>
    import { env } from '$env/dynamic/public';
	const MEASURMENT_ID = env.PUBLIC_GA_MEASURMENT_ID;
	window.dataLayer = window.dataLayer || [];

	function gtag() {
		window.dataLayer.push(arguments);
	}

	gtag('js', new Date());
	gtag('config', `${MEASURMENT_ID}`);
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id={MEASURMENT_ID}">
	</script>
</svelte:head>