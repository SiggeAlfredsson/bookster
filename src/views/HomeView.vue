

<!-- -

  It checks if

  Mounted > created bcs need to decide what to load before loading it .. 



-->


<template>
  <div>
    <UserHome v-if="decodedToken.role === 'USER' " />
    <AdminHome v-else-if="decodedToken.role === 'ADMIN' " />
    <GuestHome v-else/>
  </div>
</template>

<script lang="ts">
import GuestHome from '@/components/GuestHome.vue';
// import UserHome from '@/components/UserHome.vue';
// import AdminHome from '@/components/AdminHome.vue';
import jwt_decode from 'jwt-decode';

interface DecodedToken {
  role: string;
}

export default {
  components: {
    GuestHome,
    // UserHome,
    // AdminHome
  },
  data() {
    return {
      decodedToken: {} as DecodedToken // empty DecodedToken object
    };
  },
  mounted() {
    const accessToken = localStorage.getItem('accessToken');
    console.log("token: " + accessToken);
    if (accessToken) {
      this.decodedToken = jwt_decode<DecodedToken>(accessToken);
      console.log(this.decodedToken.role);
    }
    
  },
  methods: {
  
  }
};
</script>

