<template>
	<div>
		<h1>디렉티브 1</h1>

		<p>{{ msg }}</p>
		<p v-text="msg"></p>
		<p v-html="htmlStr"></p>
		<!-- v-html은 태그가 태그로서 들어간다 -->
		<p v-text="htmlStr"></p>
		<!-- v-text는 태그를 넣어도 텍스트화되어서 들어간다 -->
		<p v-pre>{{ msg 안녕하세요 }}</p>
		<!-- v-pre는 {{  }} 이런 괄호를 처리하지 않고 그대로 보여준다 -->
		<p v-once>{{ msg }}!!!</p>
		<!-- 
			v-once는 최초 한 번만 랜더링된다.  
			크롬 vue devtools에서 msg를 수정해보면, v-once가 붙은 태그들은 동기화가 안 되는 것을 확인할 수 있다.
		-->
		<p v-memo></p>
		<!-- 
			v-memo는 성능과 관련된 디렉티브다.
			<div v-memo="[valueA, valueB]"></div> 

			배열 안의 반응형 데이터가 변경되었을 때만 업데이트가 일어난다. 
		 -->
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const msg = ref('안녕하세요');
		const htmlStr = ref('<strong>안녕!!!</strong>');

		return { msg, htmlStr };
	},
};
</script>

<style lang="scss" scoped></style>
