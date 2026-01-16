import './assets/main.css'

import { createApp } from 'vue'
import App from './views/Login.vue'
import router from './router' // Quan trọng: Gọi file router vào

const app = createApp(App)

app.use(router) // Kích hoạt router

app.mount('#app')