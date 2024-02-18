import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import IwyIconsVue from "@ikkowy/icons-vue";

const app = createApp(App)

app.use(IwyIconsVue);

app.mount('#app')
