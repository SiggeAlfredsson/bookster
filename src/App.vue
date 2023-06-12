<!-- 
  Not so much happening here... Just removing the padding and margin from body (not scoped). Also adding the header here. Instead of all the views. Unsure if correct?
  and adding font family
-->

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

<style>
body {
  padding: 0;
  margin: 0;
}

* {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
