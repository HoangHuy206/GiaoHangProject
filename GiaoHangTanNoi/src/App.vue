<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import './assets/base.css'
import './assets/icon/icon/themify-icons-font/themify-icons-font/themify-icons/themify-icons.css'
// Đã xóa dòng import router vì chưa dùng đến để tránh cảnh báo vàng

const isMenuOpen = ref(false)
const activeTab = ref('nguoidung') // Tab mặc định đang chọn

// Tạo biến để theo dõi nội dung đang hiển thị
const activeContent = ref('nguoitieudung')
</script>

<template>
  <div id="main">
    <header>
      <a href="#" @click.prevent="isMenuOpen = !isMenuOpen"><i>☰</i></a>
      <img src="./assets/anh.logo/anhnen.png" alt="Logo">

      <div class="header-right">
        <router-link to="" class="Support">
          <p>Trung Tâm Hỗ Trợ </p>
        </router-link>
        <router-link to=""><i class="icon-search ti-search"></i></router-link>
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

    <div class="background-img">
      <img src="./assets/anh.logo/z7435869738899_000_e53e72bd89e38a070e1aa4f3a917f074.jpg" alt="">
    </div>
    
    <div class="content">
      <h2 style="color: black;">Từ những dịch vụ thiết yếu đến cơ hội gia tăng thu nhập tất cả đều có trên 1 nền tảng</h2>
    </div>

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
                <router-link to="/mainsp">
                  <h3>Đồ ăn</h3>
                  <p>Giao món ngon tận tay.</p>
                </router-link>
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
              <div class="map-container">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.296073307168!2d105.7475674103227!3d21.020836187970833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134549c574476c3%3A0xd3c6af79105ea6da!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEPDtG5nIG5naOG7hyBDYW8gSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1768646189995!5m2!1svi!2s" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
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

  /* --- HEADER STYLES --- */
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
    align-items: center;
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

  /* --- MENU STYLES --- */
  .mega-menu-container {
    position: fixed;
    top: 88px; 
    left: 0;
    width: 100%;
    z-index: 999;
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

  /* --- CSS CHO PHẦN CHỨA ROUTER-VIEW --- */
  .main-content {
    /* Tùy chỉnh khoảng cách nếu cần */
    width: 100%;
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
    width: 100vw; 
    margin-left: 0;
    margin-right: 0;
    line-height: 0; 
  }

  .background-img img {
    width: 100%;
    height: auto;
    display: block; 
    margin-top: 88px; 
  }

  /* bắt đầu phần content */
  .content h2 {
    text-align: center;
    color: #f5f5f5;
    margin: 40px 20px;
  }

  /* --- PHẦN NÚT TAB --- */
  .tab-navigation {
    display: flex;
    gap: 15px;
    margin-bottom: 50px; 
    justify-content: center; /* Căn giữa nút */
  }

  .tab-navigation button {
    padding: 10px 24px;
    border: none;
    background-color: transparent;
    color: #555;
    font-size: 16px;
    font-weight: bold;
    border-radius: 50px; 
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .tab-navigation button:hover {
    background-color: #f0f0f0;
  }

  .tab-navigation button.active {
    background-color: #000; 
    color: #fff;            
  }

  /* --- PHẦN BỐ CỤC NỘI DUNG (CHIA 2 CỘT) --- */
  .Display {
     max-width: 1200px;
     margin: 0 auto;
     padding: 20px;
  }

  .content-layout {
    display: flex; 
    width: 100%;
  }

  .left-column {
    width: 30%; 
    padding-right: 20px;
  }

  .left-column h2 {
    font-size: 32px;
    color: #1c1c1c; 
    margin: 0;
    font-weight: 600;
    padding-left: 30px;
  }

  .right-column {
    width: 70%; 
  }

  .service-item {
    display: flex; 
    align-items: flex-start; 
    padding: 24px 0;
    border-bottom: 1px solid #e0e0e0; 
    cursor: pointer;
    transition: 0.2s;
  }

  .service-item:hover {
    transform: translateX(10px); 
  }

  .icon-box {
    width: 60px;
    height: 60px;
    margin-right: 20px;
    flex-shrink: 0; 
  }

  .icon-box img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

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

  .fadeIn {
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

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
    min-height: 450px; 
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
  
  .card-container {
    display: flex;
    justify-content: center; 
    gap: 40px;               
    margin-bottom: 40px;
  }

  .info-card {
    flex: 1;                 
    max-width: 450px;        
    padding: 30px;
    border: 1px solid #e0e0e0; 
    border-radius: 16px;     
    background-color: #fff;
    text-align: center;      
    box-shadow: 0 4px 12px rgba(0,0,0,0.05); 
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

  .button-wrapper {
    display: flex;
    justify-content: center;
  }

  .btn-more {
    background-color: #0088ff; 
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 25px;      
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
  }

  .btn-more:hover {
    background-color: #0077ee; 
  }

  @media (max-width: 768px) {
    .card-container {
      flex-direction: column; 
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

  .footer-colum.branding {
    flex: 1.5; 
    margin-left: 0;
  }

  .map-container {
    margin-top: 15px;
    border-radius: 8px;
    overflow: hidden; /* Bo góc cho bản đồ */
    border: 1px solid rgba(0,0,0,0.1);
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

  .footer-logo{
    width: 100px;
  }
  .address-box h4{
    margin-top: 10px;
  }

  .footer-bottom {
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1); 
  }

  .footer-bottom p {
    font-size: 14px;
    font-weight: bold;
  }
</style>