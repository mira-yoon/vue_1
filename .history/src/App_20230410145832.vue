<template>
	<div>
		<h1>이벤트 처리2</h1>

		<div id="modifier">
			<div>
				DIV 영역
				<p>
					P 영역
					<span> SPAN 영역 </span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style scoped>
#modifier div,
#modifier p,
#modifier span {
	padding: 40px;
}
</style>
