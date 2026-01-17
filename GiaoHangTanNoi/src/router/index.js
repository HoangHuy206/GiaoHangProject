import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import DangKy from '../views/dangkynguoidung.vue' 
import mainSp from '../views/SanPham/main-SP.vue' // Biến nhập vào là "mainSp"
import phanhoidangky from '@/views/phanhoidangky.vue'
import dangkynguoidung from '../views/dangkynguoidung.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Trang chủ - Giao Hàng' } 
    },
    
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: 'Đăng nhập tài khoản' }
    },

    {
      path: '/mainSP', 
      name: 'mainSP',
      component: mainSp, // Đã sửa: dùng đúng biến "mainSp" khớp với import ở trên
      meta: { title: 'Danh sách sản phẩm' }
    },
    
    {
      path: '/dang-ky',      
      name: 'dang-ky',
      component: DangKy,      
      meta: { title: 'Đăng ký thành viên' }
    },

    {
      path: '/phanhoidangky',      
      name: 'phanhoidangky',
      component: phanhoidangky,      
      meta: { title: 'Đăng ký thành viên ?' }
    },

    {
      path: '/dangkynguoidung',      
      name: 'dangkynguoidung',
      component: dangkynguoidung,      
      meta: { title: 'Đăng ký dành cho người dùng' }
    }
  ]
})

// --- ĐOẠN CODE TỰ ĐỘNG ĐỔI TÊN TAB ---
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Giao Hàng Tận Nơi';
  next();
});

export default router