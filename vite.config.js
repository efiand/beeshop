import multipleAssets from 'vite-multiple-assets';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';

const isDev = process.env.NODE_ENV === 'development';

const plugins = [vue()];
if (isDev) {
	plugins.push(multipleAssets(['dev/public']));
}

// https://vitejs.dev/config/
export default defineConfig({
	base: '',
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "@/assets/scss/env" as *;',
			},
		},
	},
	plugins,
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
