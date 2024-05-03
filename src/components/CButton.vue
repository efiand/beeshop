<template>
	<button
		class="button"
		:class="{ 'button--primary': primary }"
		:type="type"
		v-bind="$attrs"
	>
		<slot></slot>
  </button>
</template>

<script setup>
defineProps({
	type: {
		type: String,
		default: 'button',
	},
});
</script>

<style lang="scss" scoped>
.button {
	padding: 18px 36px 17px;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	text-transform: uppercase;
	background-color: #f2b236;
	border-radius: 14px;
	box-shadow: 0 3px 7px #ffe9bf;

	&:hover {
		color: #865800;
		background-color: #fbb835;
	}

	&:disabled {
		color: #fbf5ea;
		background-color: #ffdd9b;
	}

	&--primary {
		background-color: #db4e66;
		box-shadow: 2px 4px 9px #fbccd4;

		&:hover {
			color: #420000;
			background-color: #b0354a;
		}

		&:disabled {
			color: #f7e5e5;
			background-color: #e8b0b9;
			box-shadow: 2px 4px 9px #fffbfc;
		}
	}
}
</style>
