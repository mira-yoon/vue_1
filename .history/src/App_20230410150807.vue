<template>
	<div>
		<h1>이벤트 처리2</h1>

		<div id="modifier">
			<div @click="clickDiv">
				DIV 영역
				<p @click="clickP">
					P 영역
					<span @click="clickSpan"> SPAN 영역 </span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = () => {
			console.log('clickSpan');
		};
		return { clickDiv, clickP, clickSpan };
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
