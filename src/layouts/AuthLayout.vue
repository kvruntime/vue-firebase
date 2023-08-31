<script setup>
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useCurrentUser } from 'vuefire';

const router = useRouter();
const user = useCurrentUser();


</script>
<template>
	<v-container>
		<v-row>
			<v-space />
			<v-col>
				<RouterView />
			</v-col>
			<v-space />
		</v-row>
	</v-container>
</template>

<style></style>
