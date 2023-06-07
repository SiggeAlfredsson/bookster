<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <h2>My app</h2>
      <nav>
        <RouterLink to="/login">Login</RouterLink>
        <br>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
