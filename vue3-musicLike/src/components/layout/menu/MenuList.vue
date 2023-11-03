<template>
  <ElScrollbar>
    <div
      class="mt-10 pl-6 pr-6 space-y-1.5 border-2 border-gray-800"
      v-for="menuItem in menus"
    >
      <div class="menu-title text-main">
        {{ menuItem.name }}
      </div>
      <div
        class="menu-item hover-bg-main text-main"
        v-for="menu in menuItem.menus"
        :key="menu.key"
        :class="{ active: currentKey === menu.key }"
      >
        <!-- <IconPark :icon="menu.icon" size="18" :theme="menu.theme" /> -->
        <span class="ml-1" @click="click(menu)">{{ menu.name }}</span>
      </div>
    </div></ElScrollbar
  >
</template>
<script setup lang="ts">
//  @click="click(menu)"
import { useMenu } from "./useMenu";
//import { useMenu } from "@/components/layout/menu/useMenu";
// import IconPark from "@/components/common/IconPark.vue";
//解构
const { menus, click, currentKey } = useMenu();
</script>
<style lang="scss" scoped>
.menu-title {
  @apply text-xs pl-4 pr-4 pb-2;
}
.menu-item {
  @apply text-sm pl-4 pr-1 pb-2 pt-1.5 pb-1.5  rounded cursor-pointer transition-colors flex items-center;
}
.active {
  @apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}

/*   .active{
    @apply
  } */
</style>
