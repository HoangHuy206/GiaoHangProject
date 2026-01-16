<script setup>
  // Code Javascript (logic) sẽ viết ở đây
</script>

<template>
  <div class="register-container">
    <h1>Trang Đăng Ký Người Dùng</h1>
    <form>
      <div class="form-group">
        <label>Tên đăng nhập:</label>
        <input type="text" placeholder="Nhập tên..." />
      </div>
      
      <div class="form-group">
        <label>Mật khẩu:</label>
        <input type="password" placeholder="Nhập mật khẩu..." />
      </div>

      <button type="button">Đăng Ký Ngay</button>
    </form>
    
    <p>
      Đã có tài khoản? 
      <router-link to="/login">Đăng nhập</router-link>
    </p>
  </div>
</template>

<style scoped>
  /* Code CSS làm đẹp cho trang này */
  .register-container {
    padding: 20px;
    text-align: center;
  }
</style>