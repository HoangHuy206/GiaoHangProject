<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
const activeTab = ref('nguoidung') // Tab mặc định đang chọn
import { RouterView } from 'vue-router' // Đã import RouterView
import './assets/base.css'
import './assets/icon/icon/themify-icons-font/themify-icons-font/themify-icons/themify-icons.css'
import router from './router'
<<<<<<< HEAD
// Tạo biến để theo dõi nội dung đang hiển thị
const activeContent = ref('nguoitieudung')
=======
>>>>>>> b6918fce905ab431c18bceae8ba437083234cda4
</script>

<template>
  <div id="main">
    <header>
      <a href="#" @click.prevent="isMenuOpen = !isMenuOpen"><i>&#9776;</i></a>
      <img src="./assets/anh.logo/anhnen.png" alt="Logo">

        <div class="header-right">
          <router-link to="" class="Support">
            <p>Trung Tâm Hỗ Trợ </p>
<<<<<<< HEAD
          </router-link>
          <router-link to=""><i class="icon-search ti-search"></i></router-link>
          <router-link to=""><i class="icon-user ti-user"></i></router-link>
=======
          </a>
          <a href=""><i class="icon-search ti-search"></i></a>
          <router-link to="/login"><i class="icon-user ti-user"></i></router-link>
>>>>>>> b6918fce905ab431c18bceae8ba437083234cda4
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

<<<<<<< HEAD
    <!-- kết thúc header -->
     <div class="background-img">
      <img src="./assets/anh.logo/z7435869738899_000_e53e72bd89e38a070e1aa4f3a917f074.jpg" alt="">
     </div>

     <!-- kết thúc phần background-img -->
     
     <!-- bắt đầu phần content -->

     <div class="content">
      <h2>Từ những dịch vụ thiết yếu đến cơ hội gia tăng thu nhập tất cả đều có trên 1 nền tảng</h2>
     </div>
      <!-- kết thúc phần content -->

     <div class="Display">
      <div class="tab-navigation">
      <button 
        :class="{ active: activeTab === 'nguoidung' }" 
        @click="activeTab = 'nguoidung'"
      >
        Người tiêu dùng
      </button>
      <button 
        :class="{ active: activeTab === 'taixe' }" 
        @click="activeTab = 'taixe'"
      >
        Đối tác tài xế
      </button>
    </div>
      
      <div class="tab-content">
      
      <div v-if="activeTab === 'nguoidung'" class="content-layout fadeIn">
        <div class="left-column">
          <h2>Giao hàng</h2>
        </div>

        <div class="right-column">
          <div class="service-item">
            <div class="icon-box">
              <img src="./assets/anh.logo/icondoan.png" alt="Food">
            </div>
            <div class="text-box">
              <h3>Đồ ăn</h3>
              <p>Giao món ngon tận tay.</p>
            </div>
          </div>

          <div class="service-item">
            <div class="icon-box">
              <img src="./assets/anh.logo/tuido.png" alt="Mart">
            </div>
            <div class="text-box">
              <h3>Đi chợ</h3>
              <p>Tìm kiếm mọi thứ bạn cần, hàng tạp hóa và hơn thế nữa.</p>
            </div>
          </div>

          <div class="service-item">
            <div class="icon-box">
              <img src="./assets/anh.logo/traohang.png" alt="Express">
            </div>
            <div class="text-box">
              <h3>Giao hàng</h3>
              <p>Giao hàng, gói kiện và hơn thế nữa.</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'taixe'" class="content-layout fadeIn">
        <div class="left-column">
          <h2>Thu nhập</h2>
        </div>
        <div class="right-column">
          <div class="service-item">
            <div class="text-box">
              <h3>Đăng ký lái xe</h3>
              <p>Trở thành đối tác để gia tăng thu nhập.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>

    <div class="info-section">
      <h1>Sự đóng góp của chúng tôi về thị trường việt nam</h1>
      <div class="card-container">
          <div class="info-card">
            <h3>Thúc đẩy chuyển đổi số trong lĩnh vực du lịch</h3>
            <p>
              Chúng tôi thúc đẩy du lịch địa phương thông qua hợp tác công – tư, điển hình là thỏa thuận hợp tác ba năm với Thành phố Huế. Nhiều sáng kiến và tính năng được triển khai nhằm thúc đẩy chuyển đổi số cho người dân, đối tác địa phương, hay bộ sưu tập Quán Trứ Danh trên .
            </p>
          </div>

          <div class="info-card">
            <h3>Tăng tốc hướng tới chuyển đổi xanh</h3>
            <p>
              chúng tôi cam kết giảm phát thải carbon thông qua các sáng kiến như khuyến khích sử dụng xe điện, hợp tác với các bên liên quan để phát triển cơ sở hạ tầng sạc xe điện, và thúc đẩy các hoạt động giao hàng thân thiện với môi trường.
            </p>
          </div>
          </div>

          <div class="button-wrapper">
            <button class="btn-more">Tìm hiểu thêm</button>
          </div>
    </div>

    <div class="footer">
      <div class="footer-container">
        <div class="footer-column branding">
          <img src="./assets/anh.logo/anhnen.png" alt="" class="footer-logo">
            <div class="address-box">
              <h4>ĐỊA CHỈ </h4>
              <P>123 xuân phương nam <samp><br></samp> từ  liêm hà nội </P>
            </div>
        </div>

        <div class="footer-colum">
          <h4>người dùng </h4>
          <ul>
            <li><router-link to="">Có gì mới ?</router-link></li>
            <li><router-link to="">món mới?</router-link></li>
            <li><router-link to="">food</router-link></li>
          </ul>
        </div>

        <div class="footer-colum">
          <h4>Đối tác tài xế</h4>
          <ul>
            <li><router-link to="">Thông tim mới </router-link></li>
            <li><router-link to="">Di chuyển </router-link></li>
            <li><router-link to="">Dịch vụ </router-link></li>
            <li><router-link to="">Tung tâm tài xế</router-link></li>
          </ul>
        </div>

        <div class="footer-colum">
          <h4>Hợp tác cùng chúng tôi</h4>
          <ul>
            <li><router-link to="">Giao Hàng Tận Nơi</router-link></li>
          </ul>
        </div>

      </div>
    </div>

    <div class="footer-bottom">
      <p>Theo dõi chúng tôi</p>
=======
    <div class="main-content">
       <RouterView />
>>>>>>> b6918fce905ab431c18bceae8ba437083234cda4
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
<<<<<<< HEAD

  /* reset lại trang */

  /* bắt đầu header */

=======

  /* --- HEADER STYLES (GIỮ NGUYÊN) --- */
>>>>>>> b6918fce905ab431c18bceae8ba437083234cda4
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
<<<<<<< HEAD

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

/* bắt đầu phần content */
.content h2 {
  text-align: center;
  color: #f5f5f5;
  margin: 40px 20px;
}

/* Tab buttons */
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
}

/* --- PHẦN NÚT TAB --- */
.tab-navigation {
  display: flex;
  gap: 15px;
  margin-bottom: 50px; /* Khoảng cách giữa nút và nội dung dưới */
}

.tab-navigation button {
  padding: 10px 24px;
  border: none;
  background-color: transparent;
  color: #555;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px; /* Bo tròn nút hình viên thuốc */
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-navigation button:hover {
  background-color: #f0f0f0;
}

/* Trạng thái Active (Đang chọn) */
.tab-navigation button.active {
  background-color: #000; /* Nền đen */
  color: #fff;            /* Chữ trắng */
}

/* --- PHẦN BỐ CỤC NỘI DUNG (CHIA 2 CỘT) --- */
.content-layout {
  display: flex; /* Kích hoạt chế độ dàn hàng ngang */
  width: 100%;
}

/* Cột trái (Tiêu đề) */
.left-column {
  width: 30%; /* Chiếm 30% chiều rộng */
  padding-right: 20px;
}

.left-column h2 {
  font-size: 32px;
  color: #1c1c1c; /* Màu đen xám */
  margin: 0;
  font-weight: 600;
  padding-left: 30px;
}

/* Cột phải (Danh sách) */
.right-column {
  width: 70%; /* Chiếm 70% chiều rộng */
}

/* --- TỪNG MỤC DỊCH VỤ --- */
.service-item {
  display: flex; /* Xếp icon và chữ nằm ngang */
  align-items: flex-start; /* Căn chỉnh lên trên cùng */
  padding: 24px 0;
  border-bottom: 1px solid #e0e0e0; /* Đường kẻ mờ ngăn cách */
  cursor: pointer;
  transition: 0.2s;
}

.service-item:hover {
  transform: translateX(10px); /* Hiệu ứng đẩy nhẹ sang phải khi di chuột */
}

/* Icon tròn */
.icon-box {
  width: 60px;
  height: 60px;
  margin-right: 20px;
  flex-shrink: 0; /* Đảm bảo icon không bị bóp méo */
}

.icon-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Phần chữ */
.text-box h3 {
  font-size: 18px;
  margin: 0 0 8px 0;
  color: #1c1c1c;
  font-weight: bold;
}

.text-box p {
  font-size: 15px;
  color: #666;
  margin: 0;
}

/* Hiệu ứng hiện dần */
.fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive: Trên mobile thì xếp dọc */
@media (max-width: 768px) {
  .content-layout {
    flex-direction: column;
  }
  .left-column, .right-column {
    width: 100%;
    margin-bottom: 20px;
  }
}

.tab-content {
  min-height: 450px; /* Bạn có thể chỉnh số này to nhỏ tùy ý */
  
  /* Các thuộc tính cũ (nếu có) giữ nguyên */
  width: 100%;
  position: relative;
}

/* bắt đầu phần info-section */

.info-section {
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 20px;
}

.info-section h1 {
  text-align: center;
  padding-bottom: 30px;
}
/* Container chứa 2 card nằm ngang */
.card-container {
  display: flex;
  justify-content: center; /* Căn giữa 2 card */
  gap: 40px;               /* Khoảng cách giữa 2 card */
  margin-bottom: 40px;
}

/* Định dạng từng bảng (Card) */
.info-card {
  flex: 1;                 /* 2 card có độ rộng bằng nhau */
  max-width: 450px;        /* Độ rộng tối đa của mỗi card */
  padding: 30px;
  border: 1px solid #e0e0e0; /* Đường viền mờ */
  border-radius: 16px;     /* Bo góc card */
  background-color: #fff;
  text-align: center;      /* Căn giữa chữ trong card */
  box-shadow: 0 4px 12px rgba(0,0,0,0.05); /* Bóng đổ nhẹ cho chuyên nghiệp */
}

.info-card h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1c1c1c;
  line-height: 1.4;
}

.info-card p {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

/* Phần nút bấm bên dưới */
.button-wrapper {
  display: flex;
  justify-content: center;
}

.btn-more {
  background-color: #0088ff; /* Màu xanh nước biển như hình */
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;      /* Nút hình viên thuốc */
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-more:hover {
  background-color: #0077ee; /* Đậm hơn khi di chuột */
}

/* Responsive cho điện thoại */
@media (max-width: 768px) {
  .card-container {
    flex-direction: column; /* Xếp chồng 2 card lên nhau khi màn hình nhỏ */
    align-items: center;
  }
}

/* bát đầu phần footer */
.footer {
  background-color: #c5e2de;
  padding: 40px 0 20px 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.footer-colum {
  flex:1;
  margin-left: 30px;
}

.footer-colum h4 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}

.footer-colum ul {
  list-style: none;
  padding: 0;
}

.footer-colum ul li {
  margin-bottom: 10px;
}

.footer-colum ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  transition: 0.3s;
}

.footer-colum ul li a:hover {
  color: #00ff28;
}

/* chỉnh logo footer */
.footer-logo{
  width: 100px;
  
}
.address-box h4{
  margin-top: 10px;
  
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1); /* Đường kẻ mờ ngăn cách */
}

.footer-bottom p {
  font-size: 14px;
  font-weight: bold;
}
</style>
=======
</style>
>>>>>>> b6918fce905ab431c18bceae8ba437083234cda4
