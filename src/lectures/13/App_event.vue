<template>
	<div>
		<h1>이벤트 처리</h1>
		<button @click="printEventInfo('Hello Vue3', $event)">
			<!-- 
				인라인 핸들링에서 event 객체에 접근할 수 있습니다. 접근하는 방법는 $event 키워드를 사용합니다. 
				printEventInfo('어쩌고', $event) 
				이런 식으로 함수의 파라미터로 $event를 넣어줘야지, 스크립트에서 event.target, event.target.tagName를 콘솔에 찍어볼 수 있다. 

				- 인라인 핸들러: 이벤트가 트리거될 때 실행되는 인라인 JavaScript(네이티브 onclick 속성과 유사).
				- 메서드 핸들러: 컴포넌트에 정의된 메서드 이름 또는 메서드를 가리키는 경로.
					
				인라인 핸들러넌 쉽게 말해 html 안에서 함수를 바로 실행하는 방식 
				<button @click="printEventInfo()"> 이렇게 뒤에 () 붙인게 인라인핸들러이다. 
				<button @click="count++">1 추가</button> 이것도 인라인 핸들러

				<button @click="printEventInfo">	괄호가 없으면 인라인핸들러가 아닌 것 같음.. 어쨌든 이 경우에는 파라미터 전달이 안되고,
				스크립트에서 파라미터 전달 없이 그냥 event.target, event.target.tagName를 콘솔에 찍어볼 수 있다. 
					
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
