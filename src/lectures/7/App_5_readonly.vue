<template>
	<div>
		<h1>반응형 API 기초5 - readonly</h1>
	</div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
	setup() {
		const original = reactive({
			count: 0,
		});
		const copy = readonly(original);
		original.count++;
		console.log(original.count); // 1
		copy.count++;
		console.log(copy.count); // 콘솔창에 1이 찍히긴 하지만 위에 경고도 뜬다
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
