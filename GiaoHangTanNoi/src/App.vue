<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
const activeTab = ref('nguoidung') // Tab mặc định đang chọn
import { RouterView } from 'vue-router' // Đã import RouterView
import './assets/base.css'
import './assets/icon/icon/themify-icons-font/themify-icons-font/themify-icons/themify-icons.css'
import router from './router'
</script>

<template>
  <div id="main">
    <header>
      <a href="#" @click.prevent="isMenuOpen = !isMenuOpen"><i>&#9776;</i></a>
      <img src="./assets/anh.logo/anhnen.png" alt="Logo">

        <div class="header-right">
          <a href="" class="Support">
            <p>Trung Tâm Hỗ Trợ </p>
          </a>
          <a href=""><i class="icon-search ti-search"></i></a>
          <router-link to="/login"><i class="icon-user ti-user"></i></router-link>
        </div>
    </header>

    <div v-if="isMenuOpen" class="mega-menu-container">
      <div class="mega-menu-content">
        <ul class="menu-sidebar">
          <li @mouseenter="activeTab = 'grab'" :class="{ active: activeTab === 'grab'}">Về Grab</li>
          <li @mouseenter="activeTab = 'nguoidung'" :class="{ active: activeTab === 'nguoidung' }">Người dùng</li>
          <li @mouseenter="activeTab = 'doitac'" :class="{ active: activeTab === 'doitac' }">Đối tác tài xế</li>
        </ul>

        <div class="menu-horizontal-content">
          <template v-if="activeTab === 'grab'">
            <div class="menu-column">
              <h3>Về chúng tôi</h3>
              <ul>
                <li>Câu chuyện của tài xế</li>
                <li>Chúng tôi là ai và chúng <samp><br></samp> tôi mong muốn mang đến điều gì</li>
              </ul>
            </div>
            <div class="menu-column">
              <h3>Tin tưởng & An toàn</h3>
              <ul>
                <li>Các chính sách nhằm đảm bảo sự <samp><br></samp> an toàn cho bạn</li>
              </ul>
            </div>
          </template>

          <template v-if="activeTab === 'nguoidung'">
            <div class="menu-column">
              <h3>Có gì mới?</h3>
              <ul><li>Sự kiện nổi bật</li><li>Ưu đãi hấp dẫn</li></ul>
            </div>
            <div class="menu-column">
              <h3>Di chuyển</h3>
              <ul><li>tất cả đều vì sở thích <samp><br></samp> của bạn </li></ul>
            </div>
            <div class="menu-column">
              <h3>GrabFood</h3>
              <ul><li>Món ngon tại nhà</li><li>Khuyến mãi</li></ul>
            </div>
            <div class="menu-column">
              <h3>Ví điện tử</h3>
              <ul><li>Liên kết thẻ</li><li>Nạp tiền</li></ul>
            </div>
          </template>

          <template v-if="activeTab === 'doitac'">
            <div class="menu-column">
              <h3>Thông tin mới nhất</h3>
              <ul>
                <li>Cập nhật mọi thông báo mới nhất <samp><br></samp> liên quan đến các Đối tác tài <samp><br></samp> xế Grab</li>
              </ul>
            </div>
            <div class="menu-column">
              <h3>Di chuyển</h3>
              <ul>
                <li>Làm chủ tài chính và thời gian.</li>
              </ul>
            </div>
            <div class="menu-column">
              <h3>Food</h3>
              <ul>
                <li>Kiếm thêm thu nhập với <samp><br></samp> dịch vụ giao thức ăn.</li>
              </ul>
            </div>
          </template>
        </div>

      </div>

      <div class="overlay" @click="isMenuOpen = false"></div>
    </div>

    <div class="main-content">
       <RouterView />
    </div>

  </div>
</template>

<style scoped>
  /* reset lại trang */
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
  }

  body, html {
    width: 100%;
    overflow-x: hidden; 
  }

  /* --- HEADER STYLES (GIỮ NGUYÊN) --- */
  header {
    width: 100%;           
    height: 88px;
    display: flex;
    position: fixed;       
    top: 0;                
    left: 0;               
    padding: 20px;         
    background-color: #B8FFC3;
    z-index: 1000;         
    align-items: center; /* Căn giữa dọc cho đẹp */
  }

  header i{
    font-size: 30px;
    color: #000000;
    padding-right: 10px;
  }

  header img {
    height: 164px;
  
    margin-left: 20px;
  }

  header .Support p{
    color: #000000;
  }

  header .icon-search,
  header .icon-user{
    color: #000000;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    padding-left: 10px;
  }

  .header-right {
  margin-left: auto; 
  display: flex;    
  align-items: center;
}

header a {
  text-decoration: none;
}

header .Support p {
  color: #000000; 
  margin: 0;
  padding-right: 20px;
  font-weight: bold;
}

header .header-right a i:hover {
  color: red;
  transition: 0.4s;
}

/* --- MENU STYLES (GIỮ NGUYÊN) --- */
.mega-menu-container {
  position: fixed;
  top: 88px; 
  left: 0;
  width: 100%;
  z-index: 999; /* Giảm z-index xuống 1 chút để chắc chắn nằm dưới header nếu cần */
}

.mega-menu-content {
  display: flex; 
  background: white;
  width: 100%;
  min-height: 300px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.menu-sidebar {
  width: 250px;
  border-right: 1px solid #eee;
  list-style: none;
  padding: 20px 0;
}

.menu-sidebar li {
  padding: 15px 30px;
  cursor: pointer;
  font-weight: bold;
}

.menu-sidebar li.active, .menu-sidebar li:hover {
  background: #f5f5f5;
  color: #00ff28;
}

.menu-horizontal-content {
  display: flex;    
  flex: 1;          
  padding: 30px;
  gap: 40px;        
}

.menu-column h3 {
  font-size: 16px;
  color: #333;
  margin-bottom: 15px;
  border-bottom: 2px solid #00ff28;
  display: inline-block;
}

.menu-column ul {
  list-style: none;
  padding: 0;
}

.menu-column ul li {
  padding: 8px 0;
  color: #666;
  cursor: pointer;
}

.menu-column ul li:hover {
  color: #00ff28;
}

.overlay {
  position: fixed;
  top: 88px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  z-index: -1;
}

/* --- PHẦN QUAN TRỌNG MỚI THÊM --- */
/* Đẩy nội dung xuống 88px để không bị Header che mất */
.main-content {
  padding-top: 88px;
  min-height: 100vh; /* Đảm bảo trang web luôn cao ít nhất bằng màn hình */
}

/* Phá bỏ giới hạn của thẻ cha #app và body */
:global(#app) {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

:global(body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>