<template>
	<div>
		<h1>Class와 Style 바인딩 - 클래스 배열 바인딩</h1>
		<!-- 
			<p class="text" :class="[activeClass, errorClass]">텍스트 입니다.</p> 

			위와 같이 배열로 클래스를 넣을 수 있다.
		-->
		<p
			class="text"
			:class="[isActive ? 'active-class' : 'class', errorClass, classObject]"
		>
			텍스트 입니다.
		</p>
		<!-- 
			위와 같이 배열 안에 삼항연산자도 넣을 수 있다. 
			그리고 computed 객체도 넣었다


			<p data-v-7a7a37b1="" class="text active-class error active text-danger text-blue"> 텍스트 입니다. </p>

			결과에 보면 위와 같이 클래스가 주루룩 다 들어갔음

		--></div>
</template>

<script>
import { computed } from 'vue';
import { ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);

		const classObject = computed(() => {
			return {
				active: true & true,
				'text-danger': true & true,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('error');

		return { isActive, classObject, activeClass, errorClass };
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
</style>
