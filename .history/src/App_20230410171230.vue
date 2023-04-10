<template>
	<div>
		<h1>이벤트 처리2</h1>

		<div id="modifier">
			<div @click.capture="clickDiv">
				<!-- .capture는 캡처링이 일어나게 만들어서, Div 안에 있는 span을 클릭했을 때 div -> span -> p 순으로 이벤트가 일어난다
					왜냐하면 기본적으로 자바스크립트는 버블링이 일어난다. 
					먼저 캡처링이 일어나서 div 이벤트가 일어나고, 그 담에 span에서 버블링이 일어나서
					div -> span -> p 순으로 이벤트가 일어나게 되는 것이다.
				 -->
				DIV 영역
				<p @click="clickP">
					P 영역
					<span @click="clickSpan"> SPAN 영역 </span>
					<!-- 
						<span @click.stop="clickSpan"> SPAN 영역 </span>
						.stop은 이벤트 전파를 막는 수식어 
					  .stop을 붙이지 않으면 span을 클릭했을 때 버블링이 일어나는데, span -> p -> div 순으로 이벤트가 일어난다. 
					-->
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
			//location.href = 'https://naver.com';
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
