<!-- 
  Not so much happening here... Just removing the padding and margin from body (not scoped). Also adding the header here. Instead of all the views. Unsure if correct?
  and adding font family
-->

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from "./components/Header.vue"
</script>

<template>
  <header>
  <HeaderComponent/> 
  <!-- OK? -->
  </header>

  <div v-if="$route.path === '/' ">
    <nav>
      <router-link to="/home">
      <button class="guest-button">Home</button>
      </router-link>
      <router-link to="/login">
      <button class="guest-button">Login</button>
      </router-link>
      <router-link to="/register">
      <button class="guest-button">Register</button>
      </router-link>
    </nav>
  </div>

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
