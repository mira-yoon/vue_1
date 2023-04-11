<template>
	<div>
		<h1>Watch - 3 : watchEffect</h1>
		<form action="">
			<input v-model="title" type="text" placeholder="title" />
			<textarea v-model="contents" placeholder="contents"></textarea>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
	setup() {
		const title = ref('');
		const contents = ref('');
		watchEffect(() => {
			console.log(title.value);
			console.log(contents.value);
		});
		return { title, contents };
		// 콜백함수 안에 선언한 반응형 데이터의 변경을 감지
		// 19분까지 들음
	},
};
</script>

<style lang="scss" scoped></style>
