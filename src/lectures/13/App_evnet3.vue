<template>
	<div>
		<h1>이벤트 처리3 - self, once</h1>

		<div id="modifier">
			<div @click="clickDiv">
				DIV 영역
				<p @click.self="clickP">
					P 영역
					<!-- .self 수식어 - 클릭한 요소가 나 자신일 때 이벤트를 실행한다. 
					span을 클릭해도, div에만 버블링이 일어나고, p에는 영향이 없다. -->
					<span @click="clickSpan"> SPAN 영역 </span>
					<a href="https://naver.com" @click.prevent.stop="clickA"> a 영역 </a>
				</p>
			</div>
		</div>
		<button @click.once="clickDiv"></button>
		<!-- .once는 한 번만 실행되고, 여러번 클릭하면 실행이 안 됨 -->
	</div>
</template>
<!-- 이벤트 전파는 캡처링에서 시작되어서 버블링으로 마무리되는 이벤트 플로우다.  -->

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			//location.href = 'https://naver.com';
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = () => {
			console.log('clickSpan');
			alert('좋아요');
		};
		const clickA = () => {
			alert('어떤 기능~');
		};
		return { clickDiv, clickP, clickSpan, clickA };
	},
};
</script>

<style scoped>
#modifier div,
#modifier p,
#modifier span {
	padding: 40px;
}
#modifier div {
	background-color: #ccc;
}
#modifier p {
	background-color: #999;
}
#modifier span {
	background-color: #666;
	display: block;
}
</style>
