<!-- 

  Pretty much only loads the component? I guess this is not needed and the LoginForm should be LoginView instead .

 -->

<template>
  <div class="container">
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
