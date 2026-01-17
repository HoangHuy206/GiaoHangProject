<script setup>
// Logic script giữ nguyên hoặc để trống
</script>

<template>
    <div class="home">
      <img class="anh" src="..\assets\anh.logo\anhbiadangnhap1.png" alt="">
      
      <div class="login-box">
        <h2 class="title">Bạn muốn đăng ký ?</h2>
        
        <div class="button-group">
             <router-link to="/dangkynguoidung" class="link-btn">
                <button class="btn-role">Người dùng</button>
            </router-link>

            <router-link to="/dangkylaixe" class="link-btn">
                <button class="btn-role">Tài xế</button>
            </router-link>
        </div>
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
        width: 1000px; 
    }

    .login-box {
        background-color: #ffffff;
        width: 500px;              
        height: 300px;             
        border-radius: 20px;
        padding: 40px;            
        margin-right: 355px; 
        display: flex;            
        flex-direction: column;    
        justify-content: center;   
        align-items: center;       
        gap: 30px; 
        box-shadow: 0 5px 20px rgba(0,0,0,0.1);             
    }

    .title {
        font-size: 26px;          
        color: #000000;
        margin: 0;
        font-weight: bold;
        text-transform: uppercase; 
    }

    .button-group {
        display: flex;
        width: 100%;
        gap: 20px; 
    }

    .link-btn {
        flex: 1; 
        text-decoration: none;
    }

    .btn-role {
        width: 100%;
        padding: 15px;            
        font-size: 18px;       
        font-weight: bold;
        background-color: #ff9900; 
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: transform 0.2s, background-color 0.2s;
    }

    .btn-role:hover {
        background-color: #e68a00;
        transform: scale(1.05);
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