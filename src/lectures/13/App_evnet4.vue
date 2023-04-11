<template>
	<div>
		<h1>이벤트 처리4 - key 관련 수식어</h1>

		<input type="text" @keyup.ctrl.enter="addTodo" />
		<!-- .ctrl.enter 수식어: 컨트롤과 엔터가 함께 눌려야 실행이 된다. -->
		<ul>
			<li v-for="(todo, index) in todos" :key="index">
				{{ todo }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const todos = reactive([]);
		const addTodo = event => {
			// if (event.key == 'Enter') {  특정 키를 눌렀을 때 실행되게 하려면 이렇게 쓸 수도 있고, 위에서 .enter 수식어로 쓸 수도 있다
			// 	todos.push(event.target.value);
			// 	event.target.value = '';
			// 	event.target.focus();
			// }
			todos.push(event.target.value);
			event.target.value = '';
			event.target.focus();
		};
		return { todos, addTodo };
	},
};
</script>

<style lang="scss" scoped></style>
