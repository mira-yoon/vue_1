<template>
	<div>
		<h1>양방향 바인딩2 - v-model의 수식어</h1>
		<h2>input value</h2>
		<!-- 
			<input type="text" v-model.lazy="inputValue" /> 
			<div>{{ inputValue }}</div> 
			v-model에 .lazy를 붙이면 바로 동기화되는게 아니라 chanege 이벤트 후에 동기화 된다. 
				바깥에 한 번 마우스가 클릭된 후에 동기화가 된다. 
			-->

		<!-- 
			<input type="text" v-model.number="inputValue" />
			<div>{{ typeof inputValue }}</div> 
			.number를 붙이면 자동으로 넘버 타입으로 형변환이 된다.
			-->

		<input type="text" v-model.trim="inputValue" />
		<div>{{ inputValue }}</div>
		<!-- 
			.trim을 붙이면 데브 툴즈에서 확인해보면 앞 뒤 공백이 다 들어가 있지만
			동기화가 될 때는 앞 뒤의 공백을 다 제거한다.
		 -->
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const inputValue = ref('');

		return {
			inputValue,
		};
	},
};
</script>

<style lang="scss" scoped></style>
