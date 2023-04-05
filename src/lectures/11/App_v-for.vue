<template>
	<div>
		<h1>목록 랜더링</h1>
		<!-- 
			하나의 태그에 v-for과 v-if는 같이 쓰지 않는 것이 좋다. 
			v-for과 v-if를 같이 적용하려면 <template></template>으로 감싼 뒤에 v-for를 입히고, 
			<li></li>에 v-if를 입힌다
	. -->
		<ul>
			<template v-for="(item, index) in evenItems" :key="item.id">
				<li>ID: {{ item.id }} 인덱스: {{ index }}, {{ item.message }}</li>
			</template>
		</ul>

		<hr />

		<ul>
			<li v-for="(value, key, index) in myObject" :key="key">
				{{ index }} - {{ key }} - {{ value }}
			</li>
		</ul>
	</div>
</template>

<!-- 
	v-for로 뿌려줄 때는 :key 속성에 고유값을 지정해줘야 경고가 안 뜬다 
	
	<li v-for="item in items" :key="item.id">
		{{ item.message }}
	</li>	

	인덱스를 쓰고 싶으면 아래와 같이 ()로 묶어주면 된다.

	<li v-for="(item, index) in items" :key="item.id">
		인덱스: {{ index }}, {{ item.message }}
	</li>


	짝수인 li만 출력하기 - v-for 과 v-if를 사용하는 방식

	<template v-for="(item, index) in items" :key="item.id">
		<li v-if="item.id % 2 === 0">
			인덱스: {{ index }}, {{ item.message }}
		</li>
	</template>
-->

<script>
import { reactive, computed } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'Java' },
			{ id: 2, message: 'HTML' },
			{ id: 3, message: 'CSS' },
			{ id: 4, message: 'JavaScript' },
		]);

		// filter 메서드를 사용해서 스크립트에서 짝수만 필터링
		const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

		const myObject = reactive({
			title: '제목',
			author: '홍길동',
			publishedAt: '2023-04-05',
		});

		return { items, evenItems, myObject };
	},
};
</script>

<style lang="scss" scoped></style>
