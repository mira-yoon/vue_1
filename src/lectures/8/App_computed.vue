<template>
	<div>
		<h1>Computed</h1>
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까?</h3>
		<!-- <p>{{ teacher.lectures.length > 0 ? '있음😊' : '없음😂' }}</p> -->
		<p>{{ hasLectures }}</p>
		<p>{{ hasLectures }}</p>
		<p>{{ hasLectures }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<!-- 
			위와 같이 여러번 해 보면, 
			'computed'는 콘솔창에 한 번이 찍히는데, 'method'는 세 번이 찍힌다. 

			그 이유는 computed는 한 번 계산괸 결과를 캐시를 한다. 
			보관하고 있다가 다음에 요청했을 때, 그 캐시된 데이터를 불러준다. 

			하지만 method는 실행될 때 마다 찍힌다.

			캐시가 다시 계산되는 시점은 반응형 데이터가 변경되는 시점이다. 

			그래서 computed가 성능면에서 조금 더 유리하다. 

			컴포넌트가 랜더링될 때 computed로 계산된 속성은 다시 계산을 하지 않기 때문이다. 
		-->
		<button v-on:click="counter++">Counter : {{ counter }}</button>

		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { reactive, computed, ref } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
		});

		const hasLectures = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음😊' : '없음😂';
		});

		const existLecture = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? '있음😊' : '없음😂';
		};

		/*
		computed를 사용한 것과 그냥 콜백함수를 사용한 것과 결과는 같다. 
		그런데 computed가 더 효율적이다. computed는 괄호 안에서 계산된 값이 캐시된다.
		*/

		const counter = ref(0);

		/*
		위와 같이 ref로 카운트 버튼 만들어서 클릭할 때 마다 랜더링이 새로 일어나게 해 보면 확실히 보인다.
		클릭할 때 마다 method는 계속 실행되는데, computed는 캐시에 있는 값을 그대로 쓴다.
		*/

		const firstName = ref('홍');
		const lastName = ref('길동');
		/*
		const fullName = computed(() => firstName.value + ' ' + lastName.value);
		console.log('console 출력:', fullName.value); // 홍 길동
		fullName.value = '짐 코딩';

		위와 같이 홍길동을 짐코딩으로 수정하려고 하면 에러가 난다.  computed로 계산된 속성을 수정하는 것이 안 되는 것..

		computed로 계산된 속성을 수정하려면 getter, setter 함수를 사용한다.
		*/

		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				console.log('value:', value); // 짐 코딩
				console.log(value.split(' ')); // ['짐', '코딩']
				[firstName.value, lastName.value] = value.split(' '); // 구조분해할당으로 각각의 변수에 할당한 것
				console.log(firstName.value); // 짐
				console.log(lastName.value); // 코딩
			},
		});

		fullName.value = '짐 코딩';

		console.log('console 출력:', fullName.value); // 짐 코딩. setter함수에서 구조분해할당을 하기 전에는 '홍 길동'으로 나온다.

		return { teacher, hasLectures, existLecture, counter, fullName };
	},
};
</script>

<style lang="scss" scoped></style>
