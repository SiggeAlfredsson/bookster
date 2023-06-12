<template>
  <div class="container">
    <!-- <h1>Login Page!</h1> what to do here?-->
    <LoginForm />
  </div>
</template>

<script lang="ts">
import LoginForm from "@/components/LoginForm.vue";

export default {
  components: {
    LoginForm
  }
};
</script>

<style scoped>

.container {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}



</style>
