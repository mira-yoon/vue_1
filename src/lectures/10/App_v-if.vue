<template>
	<div>
		<h1>조건부 랜더링</h1>

		<h2 v-if="visible">Hello Vue3!</h2>
		<!-- v-if의 값이 true면 랜더링이 되고, false면 랜더링이 안 된다. -->
		<h2 v-else>false입니다.</h2>
		<!-- v-else 붙이면 false일 때 랜더링된다. -->
		<button v-on:click="visible = !visible">toggle</button>

		<hr />

		<button v-on:click="type = 'A'">A</button>
		<button v-on:click="type = 'B'">B</button>
		<button v-on:click="type = 'C'">C</button>
		<button v-on:click="type = 'D'">D</button>

		<h2 v-if="type === 'A'">A입니다.</h2>
		<h2 v-else-if="type === 'B'">B입니다.</h2>
		<h2 v-else-if="type === 'C'">C입니다.</h2>
		<h2 v-else>A,B,C가 아닙니다.</h2>

		<hr />

		<template v-if="visible">
			<h1>Title</h1>
			<p>Paragraph 1</p>
			<p>Paragraph 2</p>
		</template>

		<hr />

		<h1 v-show="ok">Title 입니다.</h1>
		<!-- v-show의 값이 false면 랜더링은 되는데, display: none이 된다 -->
		<button v-on:click="ok = !ok">show toggle</button>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const visible = ref(true);
		const type = ref('A');
		const ok = ref(true);
		return { visible, type, ok };
	},
};
</script>

<style lang="scss" scoped></style>
