'use strict';
import { createRouter, createWebHashHistory } from 'vue-router';
import { useCurrentUser } from 'vuefire';

const routes = [
	{
		name: 'home',
		path: '/',
		component: () => import('@/components/HelloWorld.vue'),
	},
	{
		name: 'auth',
		path: '/auth',
		redirect: '/login',
		component: () => import('@/layouts/AuthLayout.vue'),
		children: [
			{
				name: 'login',
				path: '/login',
				component: () => import('@/pages/auth/LoginPage.vue'),
			},
			{
				name: 'register',
				path: '/register',
				component: () => import('@/pages/auth/RegisterPage.vue'),
			},
		],
	},
	{
		name: 'landing-page',
		path: '/landing',
		component: () => import('@/pages/LandingPage.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
});



export default router;
