<script setup>
import { useRouter } from 'vue-router';
import { useCurrentUser } from 'vuefire';
import { onBeforeMount } from 'vue';

const user = useCurrentUser();
const router = useRouter();

onBeforeMount(() => {
	if (!user?.email) router.push({ name: 'login' });
});
</script>

<template>
	<div>
		<h2>Landing page</h2>
		<HelloWorld />
	</div>
</template>

<style></style>
