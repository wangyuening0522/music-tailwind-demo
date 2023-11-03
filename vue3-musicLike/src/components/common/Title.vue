<template>
  <div>
    <div>{{ title }}</div>
  </div>
</template>
<script setup lang="ts">
import {defineProps} from 'vue'
defineProps<{
  title: string;
}>();
</script>
