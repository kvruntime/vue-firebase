'use strict';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		name: 'home',
		path: '/',
		component: () => import('@/components/HelloWorld.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
