<template>
	<div>
		<h1>양방향 바인딩1 - v-model</h1>
		<h2>input value</h2>
		<input type="text" v-model="inputValue" />
		<div>{{ inputValue }}</div>
		<!-- 
			- 단방향 바인딩
			<input type="text" :value="inputValue" />
			이렇게 하게 되면 스크립트에서 inputValue의 값이 변경되면 html에 동기화가 되는데, 
			html에서 인풋태그의 value가 변경되었을 때는 동기화가 안 된다.

			- 양방향 바인딩
			html에서 인풋태그의 value가 변경되었을 때 동기화가 되게 하려면 아래와 같이 할 수도 있다.
			<input type="text" @input="event => (inputValue = event.target.value)" />

			그리고 위와 같은 작업은 v-model 디렉토리로 할 수 있다.
		 -->

		<h2>textarea value</h2>
		<textarea v-model="textareaValue"></textarea>
		<div>{{ textareaValue }}</div>

		<h2>checkbox value</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<input
			type="checkbox"
			v-model="checkboxValue"
			true-value="YES"
			false-value="NO"
		/>
		<!-- 
			- 단방향 바인딩
			<input type="checkbox" id="checkbox" :checked="checkboxValue" />
			v-bind:checked에 true값이 들어가면 체크박스에 체크가 되고, label에도 true라고 출력된다. 
			그런데 html에서 체크를 해체해도 동기화가 안 된다. 

			- 양방향 바인딩
			<input
				type="checkbox"
				id="checkbox"
				@change="event => (checkboxValue = event.target.checked)"
			/>
			event.target.checked은 사용자가 체크를 해체하면 false이고, 체크를 하면 true가 되는 값이다.
			v-on:change 에 event객체를 파라미터로 전달해서, checkboxValue에 event.target.checked값을 할당해서 동기화를 시킨다.

			그리고 위와 같은 작업은 v-model 디렉토리로 할 수 있다.
		 -->

		<h2>radio value</h2>
		<label for="">
			<input type="radio" name="type" value="O" v-model="radioValue" />
			O형
		</label>
		<label for="">
			<input type="radio" name="type" value="A" v-model="radioValue" />
			A형
		</label>
		<div>
			{{ radioValue }}
		</div>
		<!-- 
		- 단방향 바인딩
		<label for="">
			<input type="radio" name="type" value="O" :checked="radioValue === 'O'" />
			O형
		</label>
		<label for="">
			<input type="radio" name="type" value="A" :checked="radioValue === 'A'" />
			A형
		</label>


		- 양방향 바인딩
		<label for="">
			<input
				type="radio"
				name="type"
				value="O"
				checked="true"
				@change="event => (radioValue = event.target.value)"
			/>
			O형
		</label>
		<label for="">
			<input
				type="radio"
				name="type"
				value="A"
				@change="event => (radioValue = event.target.value)"
			/>
			A형
		</label>

		그리고 위와 같은 작업은 v-model 디렉토리로 할 수 있다.
		 -->

		<h2>select value</h2>
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>
		<div>{{ selectValue }}</div>
		<!-- 
		- 단방향 바인딩
		<select :value="selectValue">
		
		- 양방향 바인딩
		<select @change="event => (selectValue = event.target.value)">	

		그리고 위와 같은 작업은 v-model 디렉토리로 할 수 있다.
		 -->

		<h2>checkbox values</h2>
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />
			html
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" />
			css
		</label>
		<label>
			<input type="checkbox" value="JavaScript" v-model="checkboxValues" />
			JavaScript
		</label>
		<div>{{ checkboxValues }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const inputValue = ref('');
		const textareaValue = ref('');
		const checkboxValue = ref('YES');
		const radioValue = ref('O');
		const selectValue = ref('html');
		const checkboxValues = ref([]);
		return {
			inputValue,
			textareaValue,
			checkboxValue,
			radioValue,
			selectValue,
			checkboxValues,
		};
	},
};
</script>

<style lang="scss" scoped></style>
