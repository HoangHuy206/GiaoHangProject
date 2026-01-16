<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const handleLogin = () => {
  console.log('Đăng nhập với:', username.value, password.value);
};

const handleRegister = () => {
  console.log('Chuyển sang trang đăng ký');
};
</script>

<template>
    <div class="home">
      <img class="anh" src="D:\Giaohangtannoi\GiaoHangProject\GiaoHangTanNoi\src\assets\anh.logo\anhbiadangnhap1.png" alt="">
      
      <div class="login-box">
      <h2>Đăng Nhập</h2>
      <input type="text" placeholder="Tên đăng nhập..." class="input-demo">
      <input type="password" placeholder="Mật khẩu..." class="input-demo" required="">
      <button type="submit" class="btn-demo">Đăng Nhập</button>
      <p> Hoặc </p>
      <button type="button" class="btn demo" @click="chuyenTrangDangKy">Đăng ký</button>
      </div>
    </div>

    
</template>

<style scoped>
    .home {
      background-color: #fdf2e4;
      height: 100vh; 
      width:  100%;
      justify-content: center;  
      align-items: center;
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      }

      .anh {
        height: auto;
        width: 1200px;
      }

      
      .login-box {
      background-color: #ffffff;
      width: 800px;              
      height: 600px;             
      border-radius: 20px;
      padding: 40px;            
      margin-right: 200px;
      display: flex;            
      flex-direction: column;    
      justify-content: center;   
      align-items: center;       
      gap: 25px;                 
    }

    h2 {
      font-size: 32px;          
      color: #333;
      margin: 0;
      font-weight: bold;
      text-transform: uppercase; 
      margin-bottom: 20px;
    }

    .input-group {
      width: 100%;               
    }

    input {
      width: 100%;               
      padding: 18px;             
      font-size: 18px;           
      border: 1px solid #ddd;
      border-radius: 10px;
      box-sizing: border-box;    
      background-color: #f9f9f9;
    }

    button {
      width: 50%;
      padding: 18px;             
      font-size: 20px;           
      font-weight: bold;
      background-color: #ff9900;
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      margin-top: 10px;
    }

    button:hover {
      background-color: #e68a00;
    }

    .p {
      font-size: 35px;
    }
</style>