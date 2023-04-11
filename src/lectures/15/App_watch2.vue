<template>
	<div>
		<h1>Watch - 2</h1>
		<h2>watch 즉시 실행하기</h2>
		<p>{{ message }}</p>
		<p>{{ reverseMessage }}</p>
	</div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
	setup() {
		/* 
		// 예제 1
		const message = ref('Hello Vue3');
		const reverseMessage = ref('');
		watch(
			message,
			newValue => {
				reverseMessage.value = newValue.split('').reverse().join('');
			},
			{ immediate: true },
		);
		return { message, reverseMessage };
		// watch는 첫 번째 매개변수에 변화가 있어야 실행이 된다.
		// 그런데 즉시 실행되기를 원한다면 세 번째 매개변수에 {immediate: true}를 넣어준다.
		*/

		/*
		// 예제 2-1
		const message = ref('Hello Vue3');
		const reverseMessage = ref('');
		const reverseFunction = newValue => {
			reverseMessage.value = newValue.split('').reverse().join('');
		};
		watch(message, reverseFunction);
		reverseFunction(message.value); // 밖에서 실행될 때는 newValue값이 null이므로 message.value를 매개변수로 넣어준다
		return { message, reverseMessage };
		// 두 번째 파라미터에 들어가는 콜백함수를 reverseFunction에 담아서 밖으로 뺄 수 있다.
		// 그리고 {immediate: true}를 삭제하고, 밖에서 한 번 실행해주면 즉시 실행이 된다.
		*/

		// 예제 2-2
		const message = ref('Hello Vue3');
		const reverseMessage = ref('');
		const reverseFunction = () => {
			reverseMessage.value = message.value.split('').reverse().join('');
		};
		watch(message, reverseFunction);
		reverseFunction(message.value); // 밖에서 실행될 때는 newValue값이 null이므로 message.value를 매개변수로 넣어준다
		return { message, reverseMessage };
		// 위와 같이 newValue를 아예 빼 버리고 message.value을 넣어서 하는 방법도 있다.
	},
};
</script>

<style lang="scss" scoped></style>
