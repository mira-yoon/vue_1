<template>
	<div>
		<h1>반응형 API 기초2 - Ref 함수</h1>

		<h2>reactive()함수</h2>
		<p>{{ message.value }}</p>
		<!-- reactive()함수로 만든 반응형 객체를 템플릿에서 쓰려면 위와 같이 .value를 붙여야 함 -->
		<button v-on:click="addMessage">add Click</button>
		<hr />

		<h2>ref()함수</h2>
		<p>{{ counter }}</p>
		<!-- ref()함수로 만든 반응형 객체를 템플릿에서 쓰려면 위와 같이 .value를 붙이지 않고 쓴다 -->
		<button v-on:click="increment">click!</button>
		<button v-on:click="counter++">click!</button>
		<!-- 함수 내용을 v-on:click="" 안에 바로 쓸 때도 .value를 붙이지 않고 쓴다 -->
	</div>
</template>

<script>
import { ref } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		/*

		<p>{{ message }}</p>
		
		let message = reactive('Hello Vue!'); 이렇게 넣으면 값을 갱신하지 못함
		console.log(message); // Hello Vue!
		console.log(typeof message); // string이다.

		template 안에 있는 <p>{{ message }}</p> 이중 중괄호 안에 있는 값과 
		setup함수 안에 있는 let message 의 값이 서로 동기화를 하려면
		message 가 메모리 주소를 갖고 있고, 그 값을 서로 공유를 해야 한다.

		메모리 주소를 갖고 있고, 그 값을 서로 공유를 해야 한다. => 이게 무슨 말이냐 하면, 코딩애플에서 레퍼런스 데이터 타입 공부한거 여기에 잠시 정리해봄

		var 이름1 = {name : '김'};
    var 이름2 = 이름1;
    이름1.name = '박';
    console.log(이름1); // {name: '박'}
    console.log(이름2); // {name: '박'}  

		위와 같이 객체를 얕은 복사를 했을 때, 
		화살표(레퍼런스)를 복사한 셈이 되어서 같은 화살표를 갖게 되고 {name : '김'} 라는 데이터를 공유하고 있고
		이름1의 name을 바꾸었는데, 이름2까지 값이 바뀌어버리는 것.
		이런 성질을 이용해서 동기화가 이루어지는 것

		그런데 string, number, boolean 같은 primative 타입 자료형은 
		변수에 그대로 값을 할당하는 방식이지, 레퍼런스 타입 자료형처럼 화살표를 저장하는 방식이 아니라서
		값의 동기화가 일어날 수 없는 것..

		순수 자바스크립트에서는 동기화 이런게 아니라 아예 데이터를 수정해서 출력한다.

		let a = 10;
		let btn = document.querySelector("button")
		btn.addEventListener('click',()=>{
			a = 20;
			btn.innerHTML = a 
		})
		console.log(a) // 20

		=====================> reactive() 함수로 primative 타입 자료형의 값을 갱신하려면
		{} 안에 value와 같은 약속된 속성을 선언하고, 그 안에 선언해야 한다. 
		그런데 결국에는 primative 타입 자료형을 선언한 것이 아니라, 객체를 선언한 것이다.

		그래서 반응형 API에서는 primative 타입을 선언할 수 있는 ref()함수를 제공한다.
		ref()함수는 primative 타입의 반응형 데이터를 만들 때 사용한다.

		*/

		let message = reactive({
			value: 'Hello Vue!',
		});

		const addMessage = () => {
			message.value = message.value + '!';
		};

		const counter = ref(0);
		console.log(counter); // 반응형 객체
		console.log(counter.value); // 0
		// counter는 실제 반응형 객체의 참조 역할 (reference)만 할 뿐이다. 그래서 이 함수 이름이 ref()인 것이다.
		// ref() 함수를 자바스크립트에서 사용할 때는 .value를 붙여서 쓰고, 템플릿에서는 .value 없이 쓴다.
		// 템플릿 표현식에서 사용할 때는 리턴된 반응형 객체는 자동으로 Unwarpping이 되서, value 안에 있는 값을 다시 counter로 대입한다.

		const increment = () => {
			counter.value++;
		};

		return {
			message,
			addMessage,
			counter,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
