<template>
	<div>
		<h1>디렉티브 2 - v-memo</h1>

		<!-- 
			v-memo는 성능과 관련된 디렉티브다.
			<div v-memo="[valueA, valueB]"></div> 

			배열 안의 반응형 데이터가 변경되었을 때만 업데이트가 일어난다. 
		-->

		<!--  subscribers 가 변경되었을 때만 div가 업데이트된다.-->
		<div v-memo="[subscribers]">
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>

		<!-- v-on: 을 @로 단축표현 -->
		<button @click="subscribers++">Subs++</button>
		<button @click="views++">Views++</button>
		<button @click="likes++">Likes++</button>

		<div>
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>

		<!-- 
			비교해보려고 이렇게 만들어보면 v-memo가 어떻게 쓰이는지 알 수 있다. 

			++되는 버튼들을 클릭해보면 아래 div에만 동기화가 일어나는데,
			그러다가 Subs++버튼을 누르면 지금까지 변동이 없던 
			v-memo가 붙은 div의 views와 likes의 값이 업데이트된다.

			Views++ 버튼 5번 눌러도 아래 div에만 동기화가 일어나서 +5가 되는데
			그러다가 Subs++버튼을 누르면 v-memo가 붙은 div의 views의 값에도 +5가 된다.
		 -->
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const subscribers = ref(4000);
		const views = ref(400);
		const likes = ref(20);
		return { subscribers, views, likes };
	},
};
</script>

<style lang="scss" scoped></style>
