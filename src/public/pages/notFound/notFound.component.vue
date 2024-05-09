<script>
export default {
	name: "app-not-found",
};
</script>
<template>
	<main class="flex flex-column align-items-center justify-center">
		<h1 class="text-center">404</h1>
		<p>Sorry, the page you are looking for does not exist.</p>
		<h3>
			Click <router-link to="/">here</router-link> to go back to the home page.
		</h3>
	</main>
</template>
<style scoped></style>
