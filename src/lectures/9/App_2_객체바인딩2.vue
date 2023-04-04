<template>
	<div>
		<h1>Class와 Style 바인딩 - 객체 바인딩2</h1>
		<p class="text" :class="classObject">텍스트 입니다.</p>
		<!-- <p class="text" :class="{ active: isActive, 'text-danger': hasError }">
			텍스트 입니다.
		</p> -->
		<button v-on:click="toggle">toggle</button>
		<button v-on:click="hasError = !hasError">toggleError</button>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		// 객체바인딩하는 속성들이 많아지면 이렇게 넣을 수 있다.
		const classObject = reactive({
			active: isActive,
			'text-danger': hasError,
		});

		const toggle = () => {
			isActive.value = !isActive.value; // true면 false를 할당, false면 true를 넣어서 토글기능
		};
		return { isActive, hasError, toggle, classObject };
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
