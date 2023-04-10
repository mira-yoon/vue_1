<template>
	<div>
		<h1>이벤트 처리2</h1>

		<div id="modifier">
			<div @click="clickDiv">
				DIV 영역
				<p @click="clickP">
					P 영역
					<span @click.stop="clickSpan"> SPAN 영역 </span>
					<!-- .stop은 이벤트 전파를 막는 수식어 -->
				</p>
			</div>
		</div>
		<a href="https://naver.com" @click.prevent="clickA"> a 영역 </a>
		<!-- .prevent는 기본기능을 막는 수식서 -->
	</div>
</template>

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
