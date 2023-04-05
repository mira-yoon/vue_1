<template>
	<div>
		<h1>디렉티브 2</h1>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const subscribers = ref(4000);
		const views = ref(400);
		const likes = ref(20);
		return { subscribers, views, likes };
		// 10:23
	},
};
</script>

<style lang="scss" scoped></style>
