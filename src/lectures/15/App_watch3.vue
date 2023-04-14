<template>
	<div>
		<h1>Watch - 3 : watchEffect</h1>
		<form action="" @submit.prevent="save(title, contents)">
			<input v-model.lazy="title" type="text" placeholder="title" />
			<textarea v-model.lazy="contents" placeholder="contents"></textarea>
			<button>저장</button>
			<!-- 
				버튼을 클릭하면 submit 이벤트가 발생하기 때문에 @submit="" 이걸 넣어준 것이다. 
				그런데 버튼을 클릭하면 submit 이벤트가 발생하기 때문에 새로고침이 된다. 
				그래서 submit.prevent 이렇게 넣어서 기본동작을 막아준다.
			-->
		</form>
		<!-- 

		<form action="" @submit.prevent>
			<input v-model.lazy="title" type="text" placeholder="title" />
			<textarea v-model.lazy="contents" placeholder="contents"></textarea>
			<button @click="save(title, contents)">저장</button>
		</form>

		// 위와 같이 form 요소에는 @submit.prevent만 넣어주고, 버튼에 클릭이벤트로 save함수를 넣어줄 수도 있다.
		 -->
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
	setup() {
		const title = ref('');
		const contents = ref('');
		const save = (title, contents) => {
			console.log(`저장되었습니다. title:${title}, contents:${contents}`);
		};
		watchEffect(() => {
			save(title.value, contents.value);
			console.log(title.value);
			console.log(contents.value);
		});
		return { title, contents };
		// 콜백함수 안에 선언한 반응형 데이터의 변경을 감지
		// watchEffect는 watch와 달리 최초에 한 번 기본적으로 실행한다.
	},
};
</script>

<style lang="scss" scoped></style>
