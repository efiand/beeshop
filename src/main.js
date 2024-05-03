import '@/assets/scss/main.scss';
import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);

app.use(router);

app.mount('#app');

if (import.meta.env.DEV) {
	import('../dev/main.js');
}
