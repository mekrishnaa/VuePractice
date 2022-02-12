import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app');