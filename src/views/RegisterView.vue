<!-- 

  Pretty much only loads the component? Could make the form a view instead? or split form up into smaller components?

-->


<template>
  <div class="container">
    <RegisterForm />
  </div>
</template>

<script lang="ts">
import RegisterForm from '@/components/RegisterForm.vue';

export default {
  components: {
    RegisterForm
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