<template>
  <div class="w-screen h-screen flex">
    <!-- 侧边栏 -->
   <!--  <div class="w-56 h-screen flex-shrink-0">
      <Menu />
    </div> -->
    <div class="flex-1 flex flex-col">
      <!-- 头部 -->
      <div class="h-14">
        <Header />
      </div>
      <!-- 中间导航 -->
      <div class="flex-1 overflow-hidden">
        <Elscroolbar>
          <div class="container mx-auto">
            <RouterView />
          </div>
        </Elscroolbar>
      </div>
      <!-- 底部 -->
      <!-- <div class="h-20">
        <Footer></Footer>
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import Menu from "../components/layout/menu/Menu.vue";
import Header from "../components/layout/header/Header.vue";
import Footer from "../components/layout/footer/Footer.vue";
import PlayList from "../components/layout/playList/PlayList.vue";
</script>
