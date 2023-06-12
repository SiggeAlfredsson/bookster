<template>
  <button class="sign-out-button" @click="signOut">Sign Out</button>
</template>

<script lang="ts">
export default {
  methods: {
    signOut() {
      // Instead of .clear i used removeItem in case i add something i want to remove in future
      localStorage.removeItem("username");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("role");
      location.reload();
    }
  }
}
</script>

<style scoped>
.sign-out-button {

}
</style>
