<template>
	<div>
		<h1>반응형 API 기초4 - toRefs, toRef</h1>

		<p>author: {{ author }}</p>
		<p>title: {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
	setup() {
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 이 책을 지금 바로 읽습니다 ;)',
			price: '무료',
		});

		/*
		let { author, title } = book;
		console.log(typeof author); //string
		
		구조분해할당을 하면 author 라는 변수에 다시 재할당을 한 것으로, 
		반응형 상태를 잃어버린 그냥 string이다.

		vue.js devtools 크롬 확장프로그램을 깔고 vue탭에서 확인해보면 
		반응형 상태라면 (ref) 이렇게 표시가 되어있고, 
		일반 string이라면 옆에 아무것도 없음.

		=======================> 구조분해할당을 하면서 반응형을 그대로 유지할 수 있는 방법
		toRefs()를 사용하기. 
		toRefs()를 사용하면 구조분해할당을 한 것들이 서로 동기화가 된다.
		*/

		let { year } = book; // 이건 일반 string
		let { author, title } = toRefs(book);

		/*
		구조분해할당 말고 book 객체에서 딱 하나만 가지고 오고 싶을 때는 toRef()를 쓴다.
		toRef(객체, '속성')
		*/

		let price = toRef(book, 'price');

		return {
			year,
			author,
			title,
			price,
		};
	},
};
</script>

<style lang="scss" scoped></style>
