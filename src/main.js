import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from './firebase.js';
import router from './router';

const app = createApp(App);
app
	.use(router)

	.use(VueFire, {
		firebaseApp,
		modules: [VueFireAuth()],
	});
app.mount('#app');
