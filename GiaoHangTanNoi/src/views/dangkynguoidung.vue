<script setup>
  // Code Javascript logic (nếu cần)
</script>

<template>
  <div class="register-wrapper">

    <div class="logo" >
      <img src="E:\GiaoHangProject\GiaoHangTanNoi\src\assets\anh.logo\anhbiadangnhap1.png" alt=""style="margin-right: 100px;">
    </div>
    <div class="register-box" style="margin-right: 20%;">
      <h2 class="form-title" style="font-size: 20px;">ĐĂNG KÝ TÀI KHOẢN NGƯỜI DÙNG</h2>
      
      <form>
        <div class="form-group">
          <label>Tên đăng nhập:</label>
          <input type="text" placeholder="Nhập tên của bạn..." />
        </div>
        
        <div class="form-group">
          <label>Mật khẩu:</label>
          <input type="password" placeholder="Nhập mật khẩu..." />
        </div>

        <div class="form-group">
          <label>Nhập lại mật khẩu:</label>
          <input type="password" placeholder="Xác nhận mật khẩu..." />
        </div>

        <button type="button" class="btn-submit">Đăng Ký Ngay</button>
      </form>
      
      <div class="login-link" style="margin-right: 115px;">
        Đã có tài khoản? 
        <router-link to="/login">Đăng nhập tại đây</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* --- PHẦN SỬA QUAN TRỌNG NHẤT --- */
.register-wrapper {
  position: fixed;         /* Cưỡng chế khung này nằm cố định */
  top: 88px;               /* Bắt đầu ngay bên dưới Header (Header cao 88px) */
  left: 0;
  width: 100%;             /* Trải rộng hết chiều ngang */
  height: calc(100vh - 88px); /* Chiều cao = Toàn màn hình trừ đi Header */
  background-color: #f4f6f8;  /* Màu nền xám sáng (che nền đen) */
  display: flex;           /* Dùng flexbox để căn giữa */
  justify-content: center; /* Căn giữa ngang */
  align-items: center;     /* Căn giữa dọc */
  z-index: 10;             /* Đảm bảo nó nổi lên trên các lớp nền cũ */
}
/* -------------------------------- */

.register-box {
  background-color: white;
  width: 450px;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.form-title {
  text-align: center;
  color: #00b14f;
  margin-bottom: 25px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

input:focus {
  border-color: #00b14f;
}

.btn-submit {
  width: 100%;
  padding: 12px;
  background-color: #00b14f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
}

.btn-submit:hover {
  background-color: #009643;
}

.login-link {
  text-align: center;
  margin-top: 20px;
}

.login-link a {
  color: #00b14f;
  text-decoration: none;
  font-weight: bold;
}
</style>