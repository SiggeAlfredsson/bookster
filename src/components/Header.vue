<template>
  <header>
    <h1>Booksters website</h1>

    <div class="right">
      <HeaderInfo v-if="$route.path === '/home'" />
      <SignOutButton v-if="getLocalStorage('username')" />
      <SignInButton v-else-if="$route.path === '/home'" />
      <!-- Dont know if this is correct way to make it with the route.path, but it makes it so the header can be used via only 1 component -->
    </div>
  </header>
</template>

<script lang="ts">

import HeaderInfo from "@/components/HeaderInfo.vue";
import SignOutButton from "@/components/SignOutButton.vue"
import SignInButton from "@/components/SignInButton.vue"


export default {
  components: {
    HeaderInfo,
    SignOutButton,
    SignInButton

  },
  methods: {
    getLocalStorage(key: string): string | null {
      return localStorage.getItem(key);
    }
  }
}

</script>

<style scoped>

body {
  padding: 0;
  margin: 0;
}

header {
  
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

}

h1 {
  text-align: center;
  flex-grow: 1;
}

.right {
  display: flex;
  flex-direction: column;
  /* padding: 20px; */
}


</style>
