<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title red">Card title</h5>
			<p class="card-text"></p>
			<p class="card-text">
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
import { ref, useCssModule } from 'vue';
console.log('모듈');
export default {
	setup() {
		// const style = useCssModule(); // <style module></style> 일 때 스타일객체를 setup함수 안에서 이렇게 가지고 올 수 있다.
		// console.log('style: ', style);
		console.log('셋업');
		const color = ref('red');
		color.value = 'blue';
		return { color };
	},
};
</script>

<style>
.red {
	color: v-bind(color);
}
</style>

<!-- ******************* 3. 속성명을 $style에서 classes로 변경*******************-->
<!-- 
<div>{{ classes }}</div>
<p class="card-text" :class="classes.red"></p>

<style module="classes">
.red {
	color: red;
}
</style> 
-->

<!-- ******************* 2. module ******************* -->
<!-- 
<div>{{ $style }}</div>
<p class="card-text" :class="$style.red"></p>

<style module>
.red {
	color: red;
}
</style> 
-->
<!--
싱글파일컴포넌트에서 <style module></style> 이렇게 module 속성을 붙이게 되면 
css의 속성이 스타일 내장객체 속성으로 포함이 된다. 
그걸 확인하기 위해서 {{ $style }} 를 해본 것이다. 

.red { color: red } 이게 아래와 같이 red 라는 속성명에  _red_15cmx_3 라는 속성값이 할당되는데,  _red_15cmx_3 라는 클래스명이 붙게 된다.

{ "red": "_red_15cmx_3" }
-->

<!-- ******************* 1. scoped ******************* -->
<!-- 
이렇게 하면 위 컴포넌트 전체에 클래스가 생성되어 붙는다. 
<style scoped>
.red {
	color: red;
}
</style> 
-->
