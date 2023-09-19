<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import AppLayout from './layouts/AppLayout.vue';
import AppHeader from './components/AppHeader.vue';
import { useRouter } from 'vue-router';
import { useCurrentUser } from 'vuefire';
// import { useCurrentUser, useFirebaseAuth } from 'vuefire';
const router = useRouter();
const user = useCurrentUser();

user.value?.email;

router.beforeEach(async (to) => {

	if (user.value?.email === undefined) {
		if (to.path === '/login' || to.path === '/register') return true;
		else if (to.path==="/") return "/login"
		else return false;
	} else {
		if (to.path === '/login' || to.path == '/register') {
			return false;
		}
	}
	return true;
});
</script>

<template>
	<AppLayout>
		<template v-slot:header>
			<AppHeader />
		</template>

		<template v-slot:main>
			<router-view />
		</template>

		<template v-slot:footer> Footer </template>
	</AppLayout>
	<!-- <router-view /> -->
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
