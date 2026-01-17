<script setup>
  // Code Javascript logic (nếu cần)
</script>

<template>
  <div class="register-wrapper">
    <div class="image-container">
      <img src="../assets/anh.logo/anhdangkynguoidung.jpg" alt="Background" class="bg-img">

      <div class="register-box">
        <h2 class="form-title">ĐĂNG KÝ DÀNH CHO NGƯỜI DÙNG</h2>
        
        <form>
          <div class="form-group">
            <label>Tên đăng nhập:</label>
            <input type="text" placeholder="Nhập tên..." />
          </div>
          
          <div class="form-group">
            <label>Mật khẩu:</label>
            <input type="password" placeholder="Nhập mật khẩu..." />
          </div>

          <div class="form-group">
            <label>Nhập lại MK:</label>
            <input type="password" placeholder="Xác nhận..." />
          </div>

          <button type="button" class="btn-submit">Đăng Ký</button>
        </form>
        
        <div class="login-link">
          Đã có tài khoản? <br>
          <router-link to="/login">Đăng nhập ngay</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.register-wrapper {
  position: fixed;
  top: 88px; 
  left: 0;
  width: 100vw; 
  height: calc(100vh - 88px);
  overflow: hidden; 
  background-color: #e8dcb9; 
  z-index: 10;
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;   
  object-position: 80% center; 
}

.register-box {
  position: absolute;
  top: 50%;         
  right: 463px;        
  transform: translateY(-50%); 
  width: 250px;      
  height: 480px;     
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: none; 
}

.form-title {
  text-align: center;
  color: #00b14f;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 18px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  color: #333;
  font-size: 13px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 13px;
}

input:focus {
  border-color: #00b14f;
}

.btn-submit {
  width: 100%;
  padding: 10px;
  background-color: #00b14f;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  background-color: #00b14f; 
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #018c3b; 
}

.login-link {
  text-align: center;
  margin-top: 15px;
  font-size: 12px;
  color: #333;
}

.login-link a {
  color: #00b14f;          
  text-decoration: none;   
  font-weight: bold;
  background-color: transparent !important;
  outline: none !important;                 
  box-shadow: none !important;              
  border: none !important;                  
  transition: color 0.2s ease;
}

.login-link a:hover {
  color: #007a33 !important; 
  background-color: transparent !important; 
}

.login-link a:active, 
.login-link a:focus {
  color: #007a33 !important; 
  background-color: transparent !important; 
  box-shadow: none !important;
}
</style>