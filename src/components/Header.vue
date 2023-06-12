<template>
<header>
  <h1>Booksters website</h1>
  
  <HeaderInfo v-if="$route.path === '/home'"/>
  <SignOutButton v-if="getLocalStorage('username')" />
  <SignInButton v-else-if="$route.path === '/home'" />
  <!-- Dont know if this is correct way to make it with the route.path, but it makes it so the header can be used via only 1 component -->
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
