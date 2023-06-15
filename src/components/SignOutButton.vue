<!-- 

  Button to sign out, removes every "user" data saved in localStorage and then reloads the page.
  Used as childcomponent in Header (component).

 -->

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
  width: 130px;
  height: 40px;
  font-size: 25px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.sign-out-button:hover {
  background-color: rgb(233, 233, 233);
}
</style>
