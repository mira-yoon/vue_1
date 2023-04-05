<template>
	<div>
		<h1>Class와 Style 바인딩 - 클래스 객체 바인딩3(computed)</h1>

		<p class="text" :class="classObject">텍스트 입니다.</p>
		<button v-on:click="toggle">toggle</button>
		<button v-on:click="hasError = !hasError">toggleError</button>
	</div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		const classObject = computed(() => {
			return {
				active: isActive.value, // computed 안에서 ref 반응형을 쓰려면 value를 붙인다
				'text-danger': hasError.value,
			};
		});

		const toggle = () => {
			isActive.value = !isActive.value; // true면 false를 할당, false면 true를 넣어서 토글기능
		};

		return { hasError, toggle, classObject };
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
