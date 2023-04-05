<template>
	<div>
		<h1>Class와 Style 바인딩 - 클래스 객체 바인딩</h1>

		<!-- 
			- 일반 class와 v-bind:class 가 공존하는 것이 가능함
			- v-bind:class에 넣는 클래스명에 특수문자가 있으면 ''으로 묶는다. 'text-danger' 이렇게
		-->
		<p class="text" :class="{ active: isActive, 'text-danger': hasError }">
			텍스트 입니다.
		</p>
		<button v-on:click="toggle">toggle</button>
		<button v-on:click="hasError = !hasError">toggleError</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		const toggle = () => {
			isActive.value = !isActive.value; // true면 false를 할당, false면 true를 넣어서 토글기능
		};
		return { isActive, hasError, toggle };
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
</style>
