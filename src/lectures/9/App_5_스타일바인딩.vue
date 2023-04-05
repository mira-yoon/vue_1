<template>
	<div>
		<h1>스타일 바인딩</h1>
		<div :style="styleObject">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti
			blanditiis tempore eos quia quo, quibusdam iste iusto qui ipsa, in
			quaerat! Quaerat nulla animi ad. Voluptatibus cumque sit aspernatur?
		</div>
		<button v-on:click="fontSize--">-</button>
		<button v-on:click="fontSize++">+</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '13px', // 인라인으로 넣을 때는 속성명을 camel case로 넣는다
		// });

		const fontSize = ref(13);

		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});

		return { styleObject, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
