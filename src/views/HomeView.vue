

<!-- -

  It checks if

  Mounted > created bcs need to decide what to load before loading it .. 



-->


<template>
  <div>
    <UserHome v-if="getLocalStorage('role') === 'USER'" />
    <AdminHome v-else-if="getLocalStorage('role') === 'ADMIN' " />
    <GuestHome v-else/>
  </div>
</template>

<script lang="ts">
import GuestHome from '@/components/GuestHome.vue';
import UserHome from '@/components/UserHome.vue';
// import AdminHome from '@/components/AdminHome.vue';





export default {
  components: {
    GuestHome,
    // UserHome,
    // AdminHome
  },
  data() {
    return {
    };
  },
  mounted() {

    
  },
  methods: {
    getLocalStorage(key: string): string | null {
      return localStorage.getItem(key);
    }
  }
};
</script>

