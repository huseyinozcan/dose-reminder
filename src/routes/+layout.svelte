<script lang="ts">
	import '../app.css';
	import Analytics from './analytics.svelte';
</script>

<div class="max-w-xl mx-auto shadow h-screen flex flex-col items-center">
	<slot />
</div>

<Analytics />
