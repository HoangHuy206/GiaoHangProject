<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import './assets/base.css'
import './assets/icon/icon/themify-icons-font/themify-icons-font/themify-icons/themify-icons.css'
</script>

<template>
  <div id="main">
    <header>
      <a href="#"><i>&#9776;</i></a>
      <img src="./assets/anh.logo/anhnen.png" alt="">

      <a href=""><i class="icon-search ti-search"></i></a>
      <a href=""><i class="icon-user ti-user"></i></a>
    </header>

  </div>
</template>

<style scoped>
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

  header .icon-search,
  header .icon-user{
    color: #FFFF;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
  }
  
  header a:last-child { 
  margin-left: auto;     /* Tuyệt chiêu: Đẩy phần tử cuối cùng sang phải */
  }

  header a:last-child {
    margin-left: auto;
  }
</style>
