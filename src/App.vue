<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue"
</script>

<template>
  <header>
  <Header/> 
  <!-- OK? -->
  </header>

  <RouterView /> 
  <!-- Paths dont work without routerView -->
</template>
