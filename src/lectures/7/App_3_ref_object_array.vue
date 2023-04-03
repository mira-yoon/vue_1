<template>
	<div>
		<h1>반응형 API 기초3 - Ref, Object, Array</h1>
		<h2>ref를 객체에서 사용하기</h2>
		<p>{{ state.count }}</p>

		<h2>ref를 Array에서 사용하기</h2>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		/* 1. ref를 객체에서 사용하기 */
		const count = ref(0);
		const state = reactive({
			//count: count, 속성과 값이 같으면 아래와 같이 단축해서 쓸 수 있다.
			count,
		});

		console.log(count); // ref 반응형 객체
		console.log(count.value); // 0
		console.log(state); // reactive 반응형 객체
		console.log(state.count.value); // undefined
		console.log(state.count); // 0

		/*
		console.log(state); 이렇게 하면 콘솔창에 reactive 반응형 객체가 찍힌다.
		reactive 반응형 객체 안에 count 객체가 들어있는 모양이라서
		당연히 state.count.value 이렇게 해야 0이 나올 것 같은데...

		ref로 선언한 데이터를 반응형 객체에 속성으로 넣게 되면 자동으로 자동으로 언래핑되는 현상이 나타난다.
		*/
		state.count++;

		/* 2. ref를 Array에서 사용하기 */
		const message = ref('Hello');
		const arr = reactive([message]);

		console.log('arr: ', arr);
		console.log('arr[0]: ', arr[0]); // ref 반응형 객체
		console.log('arr[0].value: ', arr[0].value); // Hello

		/*
		ref로 선언한 반응형 상태를 객체에 넣고, 이 객체에서 사용할 때는 .value가 안 붙는다.
		ref로 선언한 반응형 상태를 배열에 넣었을 때, 이 배열에서 접근하기 위해서는 .value가 붙는다.

		
		*/

		return {
			count,
			state,
		};
	},
};
</script>

<style lang="scss" scoped></style>
