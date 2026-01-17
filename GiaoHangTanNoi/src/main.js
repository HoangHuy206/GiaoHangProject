import './assets/main.css'

import { createApp } from 'vue'

// QUAN TRỌNG: Phải import từ App.vue (cái khung nhà) chứ KHÔNG import Login
import App from './App.vue' 
// import App from '../src/views/SanPham/main-SP.vue' 
 

import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')