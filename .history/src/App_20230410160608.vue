<template>
	<div>
		<h1>이벤트 처리2</h1>

		<div id="modifier">
			<div @click.capture="clickDiv">
				DIV 영역
				<p @click="clickP">
					P 영역
					<span @click.stop="clickSpan"> SPAN 영역 </span>
					<!-- .stop은 이벤트 전파를 막는 수식어 -->
					<a href="https://naver.com" @click.prevent.stop="clickA"> a 영역 </a>
					<!-- .prevent는 기본기능을 막는 수식어. 수식어 연달아서 쓸 수 있다. -->
				</p>
			</div>
		</div>
	</div>
</template>
<!-- 이벤트 전파는 캡처링에서 시작되어서 버블링으로 마무리되는 이벤트 플로우다.  -->

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			location.href = 'https://naver.com';
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = e => {
			console.log('clickSpan');
			//e.stopPropagation(); // 이벤트전파(버블링)을 막는다.
			alert('좋아요');
		};
		const clickA = e => {
			//e.preventDefault();
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
