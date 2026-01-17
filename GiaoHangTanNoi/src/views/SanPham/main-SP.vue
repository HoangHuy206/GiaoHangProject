<script>

</script>

<template >
    <div class="header">
      <div class="header-box">
        <div class="header-img">
            <img src="@/assets/anh.logo/anhnen.png" alt="" style="width: 210px;height: 200px;">
        </div>
      </div>
    </div>
</template>

<style>
*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

.header {
  width: 100%;            
  height: 80px;           
  background-color: #333;  /* Màu nền (ví dụ màu đen xám) */
  display: flex;           /* Để căn chỉnh logo bên trong */
  align-items: center;     /* Căn giữa dọc cho logo */
  padding: 0 20px;         /* Cách lề trái phải một chút cho đẹp */
}
/* Xóa bỏ lề mặc định của trình duyệt */
:global(body) {
  margin: 0;
  padding: 0;
}

</style>