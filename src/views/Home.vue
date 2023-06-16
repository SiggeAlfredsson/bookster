<!-- 

  View that is showed in /home
  Checks the localstorage what the role is equal too, then shows the correct view depending on the role.
  Shows guest if USER or ADMIN do not match.
  Split into 3 views for easier scaling in future.

 -->

<template>

  <TestModal/>

  <UserView v-if="roleValue === 'USER'" />
  <AdminView v-else-if="roleValue === 'ADMIN'" />
  <GuestView v-else />
</template>

<script lang="ts">
import GuestView from '@/views/GuestView.vue'
import UserView from '@/views/UserView.vue'
import AdminView from '@/views/AdminView.vue'



export default {
  components: {
    GuestView,
    UserView,
    AdminView,
  },
  data() {
    return {
      roleValue: null as string | null
    }
  },

  mounted() {
    this.roleValue = localStorage.getItem("role"); // Retrieve the role value from localStorage
  },
};
</script>
