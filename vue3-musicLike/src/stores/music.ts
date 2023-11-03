import { usePersonalized } from "../utils/api.ts";
import { Personalized } from "../models/Personalized.ts";
import { ref } from "vue";
import { defineStore } from "pinia";
/* 个性化数据 */
//定义全局变量用来存储数据
export const useMusciStore = defineStore("music", () => {
  const personalized = ref<Personalized[]>([]);
  const getPersonalized = async () => {
    if (personalized.value.length) return;
    personalized.value = await usePersonalized();
  };
  return {
    getPersonalized,
  };
});
