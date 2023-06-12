<template>
  <button class="sign-in-button" @click="signIn">Sign In</button>
</template>

<script lang="ts">
import router from '@/router';

export default {
  methods: {
    signIn() {
      router.push("login")
    }
  }
}
</script>

<style scoped>
.sign-in-button {
  width: 130px;
  height: 40px;
  font-size: 25px;
}
</style>
