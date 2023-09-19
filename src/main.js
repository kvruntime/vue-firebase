import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from './firebase.js';
import router from './router';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import 'vuetify/dist/vuetify.min.css';

const app = createApp(App);

app
	.use(router)
	.use(createVuetify({ components }))
	.use(VueFire, {
		firebaseApp,
		modules: [VueFireAuth()],
	});

app.mount('#app');
