<script setup>
import { RouterView } from 'vue-router'
import './assets/base.css'
// Import CSS icon (nếu cần)
import './assets/icon/icon/themify-icons-font/themify-icons-font/themify-icons/themify-icons.css'
</script>

<template>
  <RouterView />
</template>

<style>
/* Reset CSS cho toàn trang web */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* Chặn thanh cuộn ngang */
}

#app {
  width: 100%;
  padding: 0;
  margin: 0;
  max-width: 100% !important; /* Phá vỡ giới hạn mặc định của Vue */
  display: block;
}
</style>