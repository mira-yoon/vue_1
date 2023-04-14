<template>
	<div>
		<TheNav></TheNav>
		<TheView></TheView>
		<AppCard></AppCard>
	</div>
</template>

<script>
import TheNav from './components/TheNav.vue';
import TheView from './components/TheView.vue';
export default {
	components: {
		TheNav,
		TheView,
		// TheView: TheView, 원래는 key와 컴포넌트를 등록하는것인데, 같으면 es6에서 생략가능
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
