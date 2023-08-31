<script setup>
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCurrentUser } from 'vuefire';

const router = useRouter();
const user = useCurrentUser();
</script>

<template>
	<!-- <div>{{ user }}</div> -->
	<div>
		<div class="text-left" v-for="(value, key) in user" key="key">
			<strong class="text-capitalize">{{ key }}</strong> : <span class="text-grey-darken-1">{{ value }}</span>
		</div>
	</div>
</template>

<style></style>
