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
      <img class="anh" src="..\assets\anh.logo\anhbiadangnhap1.png" alt="">
      
      <div class="login-box">
      <h2>Đăng Nhập</h2>
      <input type="text" placeholder="Tên đăng nhập..." class="input-demo">
      <input type="password" placeholder="Mật khẩu..." class="input-demo" required="">
      <button type="submit" class="btn-demo">Đăng Nhập</button>
      <p style="color: black; font-size: 15px; margin: -15px 0;">Hoặc</p>
      
     <router-link to="/phanhoidangky" class="btndemo1"><button> Đăng ký </button></router-link>
      </div>
    </div>    
</template>

<style scoped>
    .home {
    background-color: #fdf2e4;
    position: fixed;
    top: 80px; 
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
  }

    .anh {
        height: auto;
        width: 1200px;
    }

    .login-box {
      background-color: #ffffff;
      width: 800px;              
      height: 550px;             
      border-radius: 20px;
      padding: 60px;            
      margin-right: 200px;
      display: flex;            
      flex-direction: column;    
      justify-content: center;   
      align-items: center;       
      gap: 25px;  
      box-shadow: 0 5px 20px rgba(0,0,0,0.1);             
    }

    h2 {
      font-size: 32px;          
      color: #000000;
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
      width: 100%;
      padding: 15px;             
      font-size: 20px;           
      font-weight: bold;
      background-color: #ff9900;
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }

    button:hover {
      background-color: #e68a00;
    }

    .btndemo{
      color:#ffffff ;
      font-weight: bold;
    }

    .btndemo1{
      width: 100%;
    }
</style>

<style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden !important; 
  }
</style>