<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
const activeTab = ref('nguoidung') // Tab mặc định đang chọn
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import './assets/base.css'
import './assets/icon/icon/themify-icons-font/themify-icons-font/themify-icons/themify-icons.css'
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
          <a href=""><i class="icon-user ti-user"></i></a>
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

    <!-- kết thúc header -->
     <div class="background-img">
      <img src="./assets/anh.logo/z7435869738899_000_e53e72bd89e38a070e1aa4f3a917f074.jpg" alt="">
     </div>

     <!-- kết thúc phần background-img -->
     

  </div>
</template>

<style scoped>
  /* reset lại trang */
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Giúp tính toán kích thước chuẩn hơn */
  }

  body, html {
    width: 100%;
    overflow-x: hidden; /* Ngăn chặn lỗi cuộn ngang không đáng có */
  }
  /* reset lại trang */

  /* bắt đầu header */
  header {
    width: 100%;           /* Trải dài hết chiều ngang */
    height: 88px;
    display: flex;
    position: fixed;       /* Cố định ở trên cùng */
    top: 0;                /* Sát mép trên */
    left: 0;               /* Sát mép trái */
    padding: 20px;         /* Tạo khoảng cách cho icon đỡ sát lề */
    background-color: #00ff28;/* Thêm màu nền để dễ phân biệt (tùy chọn) */
    z-index: 1000;         /* Đảm bảo luôn nằm trên các thành phần khác */
  }

  header i{
    font-size: 30px;
    color: #FFFF;
    padding-right: 10px;
  }

  header img {
    height: 164px;
    margin-top: -60px;
    margin-left: 20px;
  }
  /* phần icons */

  header .Support p{
    color: #FFFF;
  }

  header .icon-search,
  header .icon-user{
    color: #FFFF;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    padding-left: 10px;
  }

  .header-right {
  margin-left: auto; 
  display: flex;     /* Để các thành phần bên trong nó nằm hàng ngang */
  align-items: center;
}

/* Xóa gạch chân cho các thẻ a */
header a {
  text-decoration: none;
}

header .Support p {
  color: #FFFFFF; /* Dùng 6 chữ F */
  margin: 0;
  padding-right: 20px;
  font-weight: bold;
}

header .header-right a i:hover {
  color: red;
  transition: 0.4s;
}

/* phần menu */

.mega-menu-container {
  position: fixed;
  top: 88px; /* Xuất hiện ngay dưới header */
  left: 0;
  width: 100%;
  z-index: 1000;
}

.mega-menu-content {
  display: flex; /* Chia menu làm 2 cột: dọc và ngang */
  background: white;
  width: 100%;
  min-height: 300px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* Cột dọc bên trái */
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

/* VÙNG QUAN TRỌNG: Dàn hàng ngang các menu con */
.menu-horizontal-content {
  display: flex;    /* Kích hoạt dàn hàng ngang */
  flex: 1;          /* Chiếm hết phần còn lại bên phải */
  padding: 30px;
  gap: 40px;        /* Khoảng cách giữa các cột con */
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

/* Lớp nền mờ */
.overlay {
  position: fixed;
  top: 88px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  z-index: -1;
}

/* kết thúc header */

/* bắt đầu background-img */
.background-img img {
  width: 100%;
  margin-top: 88px;
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

/* Chỉnh lại phần chứa ảnh */
.background-img {
  width: 100vw; /* Sử dụng viewport width để đảm bảo 100% màn hình */
  margin-left: 0;
  margin-right: 0;
  line-height: 0; /* Xóa khoảng hở nhỏ dưới ảnh */
}

.background-img img {
  width: 100%;
  height: auto;
  display: block; /* Loại bỏ khoảng hở inline */
  margin-top: 88px; /* Khớp với chiều cao header của bạn */
}

/* kết thúc background-img */

</style>
