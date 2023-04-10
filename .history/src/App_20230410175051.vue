<template>
	<div>
		<h1>이벤트 처리</h1>
		<button @click="printEventInfo($event)">
			<!-- <button @click="printEventInfo('Hello Vue3', $event)"> -->
			<!-- 
				인라인 핸들링에서 event 객체에 접근할 수 있습니다. 접근하는 방법는 $event 키워드를 사용합니다. 
				printEventInfo('어쩌고', $event) 
				이런 식으로 함수의 파라미터로 $event를 넣어줘야지, 스크립트에서 event.target, event.target.tagName를 콘솔에 찍어볼 수 있다. 
			-->
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
			console.log('message: ', message); // Hello Vue3
			console.log('event.target: ', event.target); // <button></button>
			console.log('event.target.tagName: ', event.target.tagName); // BUTTON
		};
		const onKeyupHandler = event => {
			console.log('event.key: ', event.key);
		};
		return { printEventInfo, onKeyupHandler };
	},
};
</script>

<style lang="scss" scoped></style>
