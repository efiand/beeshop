import { createRouter, createWebHistory } from 'vue-router';
import PageIndex from '@/pages/PageIndex.vue';

const routes = [
	{
		path: '/',
		name: 'index',
		component: PageIndex,
	},
];
if (import.meta.env.DEV) {
	routes.push({ path: '/pixelperfect' });
}
routes.push({
	path: '/:catchAll(.*)',
	redirect: '/',
});

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
