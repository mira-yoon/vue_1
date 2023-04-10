<template>
	<div>
		<h1>이벤트 처리</h1>

		<button @click="printEventInfo('Hello Vue3', $event)">
			<!-- 인라인 핸들링에서 event 객체에 접근할 수 있습니다. 접근하는 방법는 $event 키워드를 사용합니다. -->
			inline event handler
		</button>
		<hr />

		<input type="text" @keyup="onKeyupHandler" />
	</div>
</template>

<script>
export default {
	setup() {
		const printEventInfo = (message, event) => {
			console.log('message: ', message); // 'Hello Vue3'
			console.log('event.target: ', event.target);
			console.log('event.target.tagName: ', event.target.tagName);
		};
		const onKeyupHandler = event => {
			console.log('event.key: ', event.key);
		};
		return { printEventInfo, onKeyupHandler };
	},
};
</script>

<style lang="scss" scoped></style>
