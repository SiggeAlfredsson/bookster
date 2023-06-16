<!-- 

  Pretty much only loads the component? Could make the form a view instead? or split form up into smaller components?

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
