<template>
	<div class="page">
		<c-header />
		<main class="page__main">
			<router-view />
		</main>
		<c-footer />
	</div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import CHeader from '@/components/CHeader.vue';
import CFooter from '@/components/CFooter.vue';
</script>

<style lang="scss" scoped>
.page {
	position: fixed;
	inset: 0;
	display: flex;
	flex-direction: column;
	overflow: hidden auto;
}

.page__main {
	flex-grow: 1;
}
</style>
