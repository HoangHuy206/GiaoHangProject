<script setup>
// Hiện tại chưa có logic gì đặc biệt
</script>

<template>
  <div class="home-page">
    <div class="background-img">
      <img src="../assets/anh.logo/anhnen.png" alt="Home Background">
    </div>
    
    <div class="content">
       <h1>Chào mừng đến với Giao Hàng Tận Nơi</h1>
    </div>
  </div>
</template>

<style scoped>
  .home-page {
    width: 100%;
    /* Đảm bảo nội dung không bị header che (nếu cần) */
    padding-top: 20px; 
  }

  .background-img {
    width: 100%;
    /* Xóa khoảng trắng thừa dưới chân ảnh */
    line-height: 0; 
  }

  .background-img img {
    height: auto;
    width: 100%;
    display: block; /* Giúp ảnh không bị khoảng hở */
  }
  
  .content h1 {
    text-align: center;
    margin-top: 20px;
    color: #333;
  }
</style>