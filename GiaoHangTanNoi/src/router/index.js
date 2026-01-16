import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import DangKy from '../views/dangkynguoidung.vue' // Import trang đăng ký

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dang-ky',      // Đường dẫn trên trình duyệt
      name: 'dang-ky',
      component: DangKy      // File sẽ hiển thị
    }
  ]
})

export default router