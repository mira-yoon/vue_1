<template>
	<div>
		<h1>Watch - 1</h1>
	</div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
export default {
	setup() {
		// 실습 - 7
		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		watch(
			() => person.obj,
			(newValue, oldValue) => {
				console.log('newValue: ', newValue);
				console.log('oldValue: ', oldValue);
			},
		);
		return { person };
		// getter함수로 넣게 되면 obj의 값이 변경될 때만 감지한다.
		// obj안의 count가 변경이 되어도 감지를 하지 않는다.
		// obj: {name: "mira"} 이게 obj 자체가 변경된 것.
		// obj: "Hello" 이게 obj 자체가 변경된 것.
		// 결국에 getter함수는 getter함수로부터 받은 값이 바뀌었냐, 안바뀌었냐 그걸로 체크한다.

		/*
		// 실습 - 6
		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		watch(person, (newValue, oldValue) => {
			console.log('newValue: ', newValue);
			console.log('oldValue: ', oldValue);
		});
		return { person };
		// 반응형 객체 안의 중첩된 속성값도 다 감지한다. 이런걸 깊은 감시자가 생성되어 트리거된다고 한다.
		*/

		/*
		// 실습 - 5
		const obj = reactive({
			count: 0,
		});
		watch(
			() => obj.count, // getter함수
			(newValue, oldValue) => {
				console.log('newValue: ', newValue);
				console.log('oldValue: ', oldValue);
			},
		);
		return { obj };
		// 그런데 obj 안에 count라는 속성 하나만 감지하고 싶을 때 watch의 첫 번째 매개변수에 obj.count를 넣게 되면 watch가 감지를 할 수 없다.
		// 왜냐하면 obj.count은 반응형 데이터가 아니라 그냥 number다.
		// 그래서 count 속성을 감지하고 싶으면 첫 번째 매개변수 자리에 getter함수를 넣어줘야 한다.
		*/

		/*
		// 실습 - 4
		const obj = reactive({
			count: 0,
		});
		watch(obj, (newValue, oldValue) => {
			console.log('newValue: ', newValue);
			console.log('oldValue: ', oldValue);
		});
		return { obj };
		// 오브젝트 타입의 반응형 데이터로 감지할 수 있다.
		// 그런데 오브젝트 타입을 감지할 때는 newValue와 oldValue가 같은 객체를 가리키고 있기 때문에
		// 계속 같은 값이 찍힌다.
		*/

		/*
		// 실습 - 3
		const x = ref(0);
		const y = ref(0);
		watch([x, y], ([newX, newY]) => {
			console.log(newX, newY);
		});
		return { x, y };
		// 매개변수로 배열을 넘겨서 한꺼번에 따로따로도 감쌀 수 있다.
		// 그러면 결과도 배열로 받기 때문에 [newX, newY] 이렇게 newValue, oldValue를 넣어준 것이다.
		*/

		/*
		// 실습 - 2
		const x = ref(0);
		const y = ref(0);
		watch(
			() => x.value + y.value, // getter함수
			(sum, oldValue) => {
				console.log('sum: ', sum);
				console.log('oldValue: ', oldValue);
			},
		);
		return { x, y };
		// watch의 첫 번째 매개변수에 getter함수를 넣어줌으로서 x와 y의 합을 감지할 수 있다.
		// getter는 어떤 값을 반환한다.
		*/

		/*
		// 실습 - 1
		const message = ref('');
		watch(message, (newValue, oldValue) => { // 뷰데브툴즈에서 값 변경하면 콘솔창에 뜸
			console.log(newValue);
			console.log(oldValue);
		});
		return { message };
		*/
	},
};
</script>

<style lang="scss" scoped></style>
