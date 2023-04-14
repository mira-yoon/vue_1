import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

/*
// 전역등록하기 - createApp(App)을 변수에 할당해서 component() 메서드를 사용하는 방식. 
import AppCard from '@/components/AppCard.vue';

const app = createApp(App);
app.component('AppCard', AppCard); //app.component('컴포넌트이름', 임포트해온컴포넌트)
app.mount('#app');
*/

import 'bootstrap/dist/js/bootstrap.js';
